## 1. 概要

コミットコーチは、GitHubリポジトリをTrello風カンバンで可視化し、AIコーチング機能でタスクコミットを支援する生産性向上ツールです。ユーザーの先延ばし傾向を克服し、タスク完了率を向上させることを目的としています。

## 2. 目的

- ユーザーの先延ばし傾向を克服し、タスク完了率を向上させる
- GitHubリポジトリとタスク管理を統合し、開発プロセスを効率化する
- AIコーチングによる個別化されたサポートを提供する
- プロジェクトの進捗状況を視覚的に把握しやすくする
- タスクの細分化と優先順位付けを支援する


## 3. スコープ

### 含まれるもの

- ウェブアプリケーション（レスポンシブデザイン）
- GitHub連携機能
- Trello風カンバンボード
- AIコーチング機能
- プロジェクト管理機能
- ユーザー管理システム
- 通知システム


### 含まれないもの

- ネイティブモバイルアプリ（初期フェーズでは）
- オフライン編集機能
- 複雑なチーム協業機能（初期フェーズでは）


## 4. 機能要件

### ユーザー管理

- ユーザー登録・ログイン機能
- プロフィール編集機能
- GitHub、Twitter、Google Calendar、LINEとの連携機能


### プロジェクト管理

- プロジェクト作成・編集・削除機能
- プロジェクト進捗状況の可視化
- 期限設定と進捗率の自動計算


### タスク管理

- タスクの作成・編集・削除機能
- タスクのステータス管理（未着手、進行中、完了など）
- タスクの期限設定と優先順位付け
- タスクのドラッグ＆ドロップによる状態変更
- タグ付け機能


### AIコーチング

- タスク進捗に基づいた自動アドバイス生成
- 先延ばし傾向の分析と対策提案
- タスク分解支援機能
- 複数のコーチングスタイル（厳格、優しいなど）の切り替え
- カスタマイズ可能なAIプロンプト設定


### 通知・リマインダー

- 期限が近いタスクのリマインダー
- 進捗状況の定期レポート
- 連携サービス（LINE、メールなど）を通じた通知


### ダッシュボード

- プロジェクト全体の進捗状況表示
- 今日のタスク一覧
- 今後の予定タスク一覧
- AIコーチからのアドバイス表示


## 5. 非機能要件

### パフォーマンス

- ページロード時間：2秒以内
- APIレスポンス時間：1秒以内
- 同時ユーザー数：初期段階で100ユーザー、将来的に1000ユーザー


### セキュリティ

- HTTPS通信の強制
- JWTを用いた認証
- パスワードの安全な保存（ハッシュ化）
- CSRF対策
- XSS対策


### 可用性

- 稼働率99.9%（月間ダウンタイム43分以内）
- 定期バックアップ（日次）


### スケーラビリティ

- クラウドベースのスケーラブルなアーキテクチャ
- マイクロサービスアーキテクチャの採用


### ユーザビリティ

- 直感的なUI/UX
- レスポンシブデザイン（モバイル、タブレット、デスクトップ対応）
- アクセシビリティ対応（WCAG 2.1 AAレベル）


## 6. 技術要件

### フロントエンド

- React
- TypeScript
- Next.js
- Tailwind CSS
- shadcn UI
- Lucide React（アイコン）


### バックエンド

- Next.js API Routes
- TypeScript
- Prisma（ORM）


### データベース

- PostgreSQL（Neon、Supabase等のクラウドサービス）


### AI/ML

- OpenAI API（GPT-4o）
- AI SDK


### 認証

- NextAuth.js
- OAuth（GitHub、Google等）


### デプロイ

- Vercel


### その他

- GitHub API
- Google Calendar API
- Twitter API
- LINE Messaging API


## 7. UI/UX要件

### デザインシステム

- カラーパレット：メインカラー `#31A9B8`（ティール）
- フォント：システムフォント
- アイコン：Lucide React
- コンポーネント：shadcn UI


### 主要画面

- ランディングページ
- ダッシュボード
- プロジェクト詳細ページ
- タスク管理ページ
- プロフィールページ
- 設定ページ
- AIコーチングインターフェース


### レスポンシブデザイン

- モバイル（320px〜）
- タブレット（768px〜）
- デスクトップ（1024px〜）


### アクセシビリティ

- キーボードナビゲーション
- スクリーンリーダー対応
- 十分なコントラスト比


## 8. コンテンツ要件

### テキスト

- AIコーチングメッセージ
- ヘルプテキスト
- エラーメッセージ
- 通知メッセージ


### 画像・アイコン

- ロゴ
- UIアイコン
- プロフィール画像
- プロジェクトアイコン


### 多言語対応

- 日本語（初期フェーズ）
- 英語（将来的に）


## 9. テストと品質保証

### テスト種類

- 単体テスト
- 統合テスト
- E2Eテスト
- ユーザビリティテスト
- パフォーマンステスト
- セキュリティテスト


### テストツール

- Jest
- React Testing Library
- Cypress
- Lighthouse


### 品質基準

- コードカバレッジ：80%以上
- Lighthouse スコア：90以上
- エラー率：1%未満


## 10. 展開と保守

### デプロイメント

- CI/CD：GitHub Actions
- ホスティング：Vercel
- 環境：開発、ステージング、本番


### モニタリング

- エラーログ：Sentry
- パフォーマンスモニタリング：Vercel Analytics


### バックアップ

- データベース：日次自動バックアップ
- コード：GitHub


### アップデート

- 機能追加：月1回
- バグ修正：必要に応じて随時
- メジャーバージョンアップ：四半期に1回


# コミットコーチの詳細設計

## 目次

1. [システムアーキテクチャ](#システムアーキテクチャ)
2. [データベース設計](#データベース設計)
3. [UI/UX設計](#uiux設計)
4. [機能詳細設計](#機能詳細設計)
5. [技術詳細](#技術詳細)
6. [セキュリティ設計](#セキュリティ設計)
7. [テスト計画](#テスト計画)
8. [デプロイと運用](#デプロイと運用)


## システムアーキテクチャ

- **アーキテクチャパターン**: Next.js App Routerを使用したフルスタックアプリケーション
- **フロントエンド**: React, TypeScript, Tailwind CSS, shadcn UI
- **バックエンド**: Next.js API Routes, Server Components, Server Actions
- **データベース**: PostgreSQL（Neon/Supabase）
- **認証**: NextAuth.js
- **AI**: OpenAI API, AI SDK
- **外部API連携**: GitHub API, Google Calendar API, Twitter API, LINE Messaging API


### アーキテクチャ図

```plaintext
+------------------+     +------------------+     +------------------+
|                  |     |                  |     |                  |
|  クライアント     |<--->|  Next.js サーバー |<--->|  データベース    |
|  (ブラウザ)       |     |  (Vercel)        |     |  (PostgreSQL)    |
|                  |     |                  |     |                  |
+------------------+     +------------------+     +------------------+
                               ^      ^
                               |      |
                               v      v
                         +------------+  +------------+
                         |            |  |            |
                         | OpenAI API |  | GitHub API |
                         |            |  |            |
                         +------------+  +------------+
                               ^               ^
                               |               |
                               v               v
                         +------------+  +------------+
                         |            |  |            |
                         | Google     |  | Twitter    |
                         | Calendar   |  | API        |
                         +------------+  +------------+
```

## データベース設計

### 主要エンティティ

1. **User**

1. id (PK)
2. email
3. name
4. image
5. createdAt
6. updatedAt



2. **Project**

1. id (PK)
2. name
3. description
4. color
5. startDate
6. endDate
7. progress
8. userId (FK)
9. createdAt
10. updatedAt



3. **Task**

1. id (PK)
2. title
3. description
4. status (todo, in-progress, completed)
5. priority
6. dueDate
7. projectId (FK)
8. userId (FK)
9. createdAt
10. updatedAt



4. **Tag**

1. id (PK)
2. name
3. color
4. projectId (FK)
5. createdAt
6. updatedAt



5. **TaskTag**

1. id (PK)
2. taskId (FK)
3. tagId (FK)



6. **AICoachSetting**

1. id (PK)
2. userId (FK)
3. prompt
4. character
5. strictMode
6. autoSuggestions
7. createdAt
8. updatedAt



7. **Integration**

1. id (PK)
2. userId (FK)
3. type (github, twitter, google, line)
4. accessToken
5. refreshToken
6. expiresAt
7. createdAt
8. updatedAt



8. **Notification**

1. id (PK)
2. userId (FK)
3. title
4. content
5. type
6. read
7. createdAt
8. updatedAt





### ER図

```plaintext
User 1--* Project
User 1--* Task
Project 1--* Task
Project 1--* Tag
Task *--* Tag (through TaskTag)
User 1--1 AICoachSetting
User 1--* Integration
User 1--* Notification
```

## UI/UX設計

### 主要画面一覧

1. **ランディングページ**

1. サービス概要
2. 主要機能紹介
3. 登録/ログインボタン



2. **ダッシュボード**

1. 今日のタスク一覧
2. 今後の予定タスク
3. AIコーチングセクション



3. **プロジェクト詳細ページ**

1. プロジェクト情報
2. タスク一覧
3. 進捗状況



4. **マイページ**

1. ユーザープロフィール
2. プロジェクト進捗状況
3. AIコーチからのアドバイス



5. **プロフィール編集ページ**

1. 基本情報編集
2. 連携サービス管理



6. **設定ページ**

1. AIコーチ設定
2. 背景テーマ設定
3. キャラクター設定





### 画面遷移図

```plaintext
ランディングページ --> 登録/ログイン --> ダッシュボード
                                      |
                                      +--> プロジェクト詳細
                                      |
                                      +--> マイページ
                                      |
                                      +--> プロフィール編集
                                      |
                                      +--> 設定
```

### UI要素

- **カラーパレット**:

- メインカラー: `#31A9B8`（ティール）
- アクセントカラー: `#2a8f9c`（ダークティール）
- 背景色: `#ffffff`（白）、`#f9fafb`（薄いグレー）
- テキスト: `#111827`（黒）、`#6b7280`（グレー）



- **タイポグラフィ**:

- システムフォント
- 見出し: 太字、大きめのサイズ
- 本文: 標準ウェイト、読みやすいサイズ



- **コンポーネント**:

- shadcn UIコンポーネント
- カスタムカードコンポーネント
- タスクアイテムコンポーネント
- AIチャットコンポーネント





## 機能詳細設計

### ユーザー管理システム

1. **登録フロー**:

1. メールアドレスとパスワードによる登録
2. OAuthプロバイダー（GitHub, Google）による登録
3. 登録後のプロフィール設定



2. **ログインフロー**:

1. メールアドレスとパスワードによるログイン
2. OAuthプロバイダーによるログイン
3. JWTによるセッション管理



3. **プロフィール管理**:

1. 基本情報の編集
2. プロフィール画像のアップロード
3. 外部サービスとの連携管理





### タスク管理システム

1. **タスク作成フロー**:

1. タイトル、説明、期限、優先度の設定
2. プロジェクトへの割り当て
3. タグ付け



2. **タスクステータス管理**:

1. ドラッグ＆ドロップによるステータス変更
2. チェックボックスによる完了マーク
3. 期限に基づく自動リマインダー



3. **タスク分解機能**:

1. 大きなタスクの小タスクへの分解
2. AIによる分解支援
3. 依存関係の設定





### AIコーチングシステム

1. **コーチングフロー**:

1. タスク進捗の分析
2. ユーザーの行動パターン学習
3. パーソナライズされたアドバイス生成
4. 対話型コーチング



2. **AIプロンプト設定**:

1. コーチングスタイルのカスタマイズ
2. 厳格度の調整
3. 自動提案機能の設定



3. **通知システム**:

1. タスク期限のリマインダー
2. 進捗状況の定期レポート
3. AIコーチからの励まし





## 技術詳細

### フロントエンド

- **フレームワーク**: React 18, Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **コンポーネントライブラリ**: shadcn UI
- **状態管理**: React Context API, React Query
- **フォーム管理**: React Hook Form, Zod


### バックエンド

- **フレームワーク**: Next.js API Routes, Server Components
- **言語**: TypeScript
- **ORM**: Prisma
- **認証**: NextAuth.js
- **API**: RESTful API


### AI統合

- **AI SDK**: Vercel AI SDK
- **LLM**: OpenAI GPT-4o
- **プロンプトエンジニアリング**: 構造化プロンプト、Few-shot learning


### API設計

#### 主要エンドポイント

1. **認証API**:

1. POST /api/auth/register
2. POST /api/auth/login
3. GET /api/auth/me



2. **プロジェクトAPI**:

1. GET /api/projects
2. POST /api/projects
3. GET /api/projects/:id
4. PUT /api/projects/:id
5. DELETE /api/projects/:id



3. **タスクAPI**:

1. GET /api/tasks
2. POST /api/tasks
3. GET /api/tasks/:id
4. PUT /api/tasks/:id
5. DELETE /api/tasks/:id
6. PUT /api/tasks/:id/status



4. **AIコーチングAPI**:

1. POST /api/ai/coach
2. POST /api/ai/breakdown
3. GET /api/ai/settings
4. PUT /api/ai/settings



5. **統合API**:

1. POST /api/integrations/github
2. POST /api/integrations/google
3. POST /api/integrations/twitter
4. POST /api/integrations/line





## セキュリティ設計

### 認証と認可

- **認証方式**: JWT（JSON Web Token）
- **OAuth統合**: GitHub, Google
- **セッション管理**: サーバーサイドセッション


### データ保護

- **暗号化**: HTTPS通信、データベース暗号化
- **トークン管理**: 安全なトークン保存、有効期限設定
- **パスワード**: bcryptによるハッシュ化


### セキュリティ対策

- **XSS対策**: React DOMのエスケープ機能、CSP
- **CSRF対策**: SameSite Cookie、CSRF Token
- **入力検証**: Zodによるバリデーション
- **レート制限**: API呼び出し制限


## テスト計画

### テスト種類

1. **単体テスト**:

1. コンポーネントテスト
2. ユーティリティ関数テスト
3. APIエンドポイントテスト



2. **統合テスト**:

1. フォームの送信と処理
2. APIとのデータ交換
3. 状態管理の検証



3. **E2Eテスト**:

1. ユーザー登録からタスク作成までの一連のフロー
2. プロジェクト管理の一連のフロー
3. AIコーチングの対話フロー





### テストツール

- **Jest**: 単体テスト
- **React Testing Library**: コンポーネントテスト
- **Cypress**: E2Eテスト
- **MSW**: APIモック


## デプロイと運用

### デプロイ環境

- **ホスティング**: Vercel
- **データベース**: Neon/Supabase
- **CI/CD**: GitHub Actions, Vercel自動デプロイ


### モニタリング

- **エラー追跡**: Sentry
- **パフォーマンス**: Vercel Analytics
- **ログ管理**: Vercel Logs


### バックアップと復旧

- **データベースバックアップ**: 日次自動バックアップ
- **障害復旧計画**: 複数リージョンでの冗長化


### スケーリング戦略

- **水平スケーリング**: Vercelの自動スケーリング
- **データベーススケーリング**: 読み取りレプリカ、シャーディング



## シーケンス図


## ユースケース図


## クラス図


## アクティビティ図


## 状態遷移図


## ER図


## データフロー図


## コンポーネント図


## デプロイメント図


## パッケージ図


## タイミング図

