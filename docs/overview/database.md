---
name: "docs/overview_0/database.md"
title: "データベース概要 (Database)"
description: "[コミットコーチ] - DB設計概要"
---

# データベース概要 (Supabase/PostgreSQLを念頭に)

- 本アプリケーション「コミットコーチ」のDBは、**Supabase上のPostgreSQL** を利用する想定です。
- 開発・本番環境では、Supabase が提供する Postgres データベースが標準となりますが、他の RDBMS (例: MySQL, Oracle など) に切り替えても動作するよう、ORM レベルで対応可能な設計を想定しています。

---

## 1. テーブル構成

### 1-1. `User` テーブル (認証/ユーザー管理用)
| カラム      | 型                 | 備考                                                                              |
|-------------|--------------------|-----------------------------------------------------------------------------------|
| id          | UUID              | プライマリキー (Supabase では UUID 自動生成可能)                                   |
| email       | VARCHAR            | ユーザーのメールアドレス, ユニーク制約                                            |
| name        | VARCHAR            | ユーザーの表示名                                                                   |
| image       | VARCHAR            | ユーザーのプロフィール画像のURL (外部ストレージ連携)                               |
| updated_at  | TIMESTAMP WITH TIME ZONE | レコード更新日時 (自動更新, トリガーまたはアプリ側で管理)                         |

> Supabase Auth (あるいは NextAuth.js など) との連携を想定し、ユーザーID (id) をキーに各種アプリデータと紐付けします。  
> 追加でロール管理 (role) やソーシャルログイン用のメタデータを格納することも可能です。

---

### 1-2. `Project` テーブル
| カラム       | 型                       | 備考                                                      |
|--------------|--------------------------|-----------------------------------------------------------|
| id           | UUID                    | プライマリキー                                            |
| user_id      | UUID                    | `User` テーブルへの外部キー (ユーザーが作成したプロジェクト)|
| name         | VARCHAR                  | プロジェクト名                                            |
| description  | TEXT                     | プロジェクトの概要説明                                     |
| status       | VARCHAR                  | プロジェクトのステータス (例: `active`, `archived` 等)     |
| created_at   | TIMESTAMP WITH TIME ZONE | レコード作成日時 (自動生成)                                |
| updated_at   | TIMESTAMP WITH TIME ZONE | レコード更新日時 (自動更新)                                |

> ユーザー (user_id) に紐づく各プロジェクトを管理します。  
> 大規模化した場合でも検索・集計が円滑になるよう、`name` などにインデックスを検討する余地があります。

---

### 1-3. `Commit` テーブル (GitHub/GitLab連携用)
| カラム        | 型                       | 備考                                                                    |
|---------------|--------------------------|-------------------------------------------------------------------------|
| id            | UUID                    | プライマリキー                                                          |
| project_id    | UUID                    | `Project` テーブルへの外部キー                                          |
| commit_hash   | VARCHAR                  | Git のコミットハッシュ (SHA)                                            |
| message       | TEXT                     | コミットメッセージ                                                      |
| created_at    | TIMESTAMP WITH TIME ZONE | コミット登録日時 (アプリ側での登録タイミング, 実際のコミット日時とは別)   |

> GitHub あるいは GitLab API から取得したコミットデータを保持します。  
> `commit_hash` にはユニーク制約をかけることで、重複管理を防止することも可能です。  
> 別途、実際のコミット日時 (commit_author_date 等) を取得・保存する拡張も検討可能です。

---

## 2. セキュリティ設計
- **Row Level Security (RLS)** を導入し、各ユーザーが自分のレコード (`user_id`) のみ参照・更新できるようにする  
  - 例: `project.user_id = auth.uid()` のみ操作可能  
  - 同様に `commit.project_id` が自分の Project に紐づくものだけ閲覧・編集を許可  
- **Supabase の Policy** を使い、細やかなアクセス制御を実施  
- 管理者ロールを設けたい場合は、`User` テーブルに `role` カラムを追加し、Policy 内で条件分岐を行う想定

## 3. パフォーマンス最適化
- **主要検索カラムへのインデックス**  
  - `Project.name`  
  - `Commit.commit_hash`  
- **タイムスタンプ型の統一**  
  - `TIMESTAMP WITH TIME ZONE` を標準とし、時差による不整合を防止  
- **適切な外部キー制約**  
  - `Project.user_id -> User.id`  
  - `Commit.project_id -> Project.id`  
- 今後大規模化に備え、**パーティショニング** や **マテリアライズドビュー** なども検討余地あり

## 4. 拡張性
- **Task / Milestone** テーブルの追加 (タスク管理、スプリント管理を行う場合)  
- **Activity** テーブル (ユーザーアクションログやコミットコメントなど)  
- **Notification** テーブル (通知システム拡張)  
- リアルタイム分析を行う場合は、**イベントストリーム (Supabase Realtime)** などの連携を検討

> 詳細な設計情報や ER 図、API 連携の仕様については、別途「[docs/overview/architecture.md](./architecture.md)」や「[docs/overview/api-routes.md](./api-routes.md)」を参照してください。
