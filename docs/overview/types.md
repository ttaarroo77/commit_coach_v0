---
name: "docs/overview_0/types.md"
title: "主要な型定義概要 (Types)"
description: "コミットコーチ - プロジェクト/コミット/ユーザーなどの型定義"
---

# 主要な型定義 (Types)

ここでは、**コミットコーチ** のフロントエンド/バックエンドで共通して利用可能な主要型定義を示します。  
プロジェクトデータやコミットデータ、ユーザーデータなどが対象です。

---

## 1. `Project` 型

```typescript
export interface Project {
  id: string
  name: string
  description?: string        // プロジェクトの説明 (任意)
  status: "active" | "archived"
  commits?: Commit[]          // プロジェクトに関連するコミットの配列 (任意)
  createdAt?: string          // 作成日時 (ISO8601形式など)
  updatedAt?: string          // 更新日時 (ISO8601形式など)
}
```

- `id`: プロジェクトを一意に識別するID (string形式)
- `name`: プロジェクト名
- `description`: 任意の説明文
- `status`: プロジェクトの状態を表す列挙型  
  - `"active"`: 運用中  
  - `"archived"`: アーカイブ済み
- `commits`: コミット情報 (`Commit` 型) を格納する配列 (任意)
- `createdAt` / `updatedAt`: それぞれ作成・更新日時。サーバーで付与される場合はオプション

---

## 2. `Commit` 型

```typescript
export interface Commit {
  id: string
  message: string
  author: UserBasicInfo
  timestamp: string            // コミット日時(ISO8601形式を想定)
  projectId?: string           // 関連するProjectのID
  status?: CommitStatus        // コミットのステータス (Draft, Publishedなど)
}
```

- `id`: コミットを一意に識別するID (GitのSHA等)
- `message`: コミットメッセージ
- `author`: コミット作者に関する情報 (`UserBasicInfo` 型)
- `timestamp`: コミットが行われた日時
- `projectId`: 関連プロジェクトのID (任意)
- `status`: コミットのステータス。`CommitStatus` 型を参照 (後述)

---

## 3. `UserBasicInfo` 型

```typescript
export interface UserBasicInfo {
  id: string
  name: string
  avatarUrl?: string // 任意でユーザーのアバター画像URL
}
```

- `id`: ユーザーを一意に識別するID
- `name`: ユーザー名
- `avatarUrl`: アイコン画像など (任意)

> 認証関連の型 (例: `AuthUser`, `Session`) は、別の認証ドキュメントや`auth.ts`などで定義する想定。

---

## 4. `CommitStatus` 型

```typescript
export type CommitStatus =
  | "draft"        // 下書き状態
  | "published"    // 公開済み
  | "reverted"     // リバートされた
  | "archived"     // アーカイブされた
```

- コミットの状態を表す列挙型  
  - `"draft"`: まだ公開されていない下書きコミット  
  - `"published"`: 本番やメインブランチにマージ済みの公開コミット  
  - `"reverted"`: リバート(取り消し)されたコミット  
  - `"archived"`: コミット履歴には残すが検索対象外等にする場合

---

## 5. 補足

- 認証・認可に関する詳細な型定義 (`AuthUser`, `SessionContext` など) は、セキュリティ関連ドキュメントで別途管理しています。
- データベーススキーマと厳密に連携させる必要がある場合は、[database.md](./database.md) やバックエンドのORM/Prisma定義などと整合性を確認してください。
- ここで挙げた型はあくまで最小限の例です。必要に応じて追加フィールドや新しい型を作成し、`src/types/` 以下に配置してください。