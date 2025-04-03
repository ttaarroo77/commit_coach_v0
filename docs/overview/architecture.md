以下に、`project_structure.md` に「提供機能」セクションを追加し、画面構成と参照画像に関する情報を盛り込んだ更新版を示します。これにより、技術的なディレクトリ構造とUI設計の関連性が明確になります。

---

```markdown
# プロジェクト構造概要 (Project Structure)

## 1. ディレクトリ構成

以下は、**Bookmarkly**アプリケーションの基本的なディレクトリ構成です。シンプルな構成にして、初心者でも理解しやすいようにしています。

```
app/
├── controllers/         # コントローラー（Railsアプリのロジック）
│   ├── bookmarks_controller.rb
│   ├── sessions_controller.rb
│   └── users_controller.rb
├── models/              # モデル（データベースとのやりとり）
│   ├── bookmark.rb
│   ├── user.rb
│   └── tag.rb
├── views/               # ビュー（ユーザーに表示される画面）
│   ├── bookmarks/       # ブックマーク関連のビュー
│   ├── sessions/        # ログイン・登録関連のビュー
│   └── users/           # ユーザー関連のビュー
├── helpers/             # ビューで使うヘルパーメソッド
│   └── application_helper.rb
├── assets/              # スタイルシート、JavaScript、画像など
│   ├── stylesheets/
│   ├── javascripts/
│   └── images/
├── config/              # 設定ファイル
│   ├── routes.rb        # アプリケーションのルーティング設定
│   └── database.yml     # データベース接続設定
├── db/                  # データベース関連
│   ├── migrate/         # マイグレーションファイル
│   └── schema.rb        # データベースのスキーマ
├── lib/                 # ユーティリティ関数や外部APIとの連携
├── public/              # 公開される静的ファイル
├── test/                # テストファイル（RSpecなど）
│   ├── controllers/
│   ├── models/
│   └── integration/
├── config.ru            # Rack設定ファイル
├── Gemfile              # 使用するgemのリスト
└── README.md            # プロジェクトの説明ファイル
```

---

## 2. 主要ファイルの役割

### 2.1. `app/controllers/`
- **bookmarks_controller.rb**  
  - ブックマークのCRUD（作成、読み取り、更新、削除）処理を担当。
  - ユーザーがブックマークを登録したり、検索したり、削除したりするロジックを実装します。

- **sessions_controller.rb**  
  - ログイン機能を実装します。ユーザーがログイン、ログアウトするための処理を記述。

- **users_controller.rb**  
  - ユーザーの登録・更新・削除・プロフィール管理などを担当します。

### 2.2. `app/models/`
- **bookmark.rb**  
  - ブックマークのデータモデル。`title`（タイトル）、`url`（URL）、`description`（概要）、`tags`（タグ）などを格納します。

- **user.rb**  
  - ユーザーのデータモデル。`email`（メールアドレス）、`password_digest`（パスワードのハッシュ）、`name`（名前）などを格納します。Deviseで認証を管理。

- **tag.rb**  
  - タグモデル。各ブックマークにタグを付け、検索機能で使用します。

### 2.3. `app/views/`
- **bookmarks/**  
  - ブックマーク関連のビュー（フォーム、一覧表示など）を管理。

- **sessions/**  
  - ログイン、登録、パスワードリセットなどの画面ビュー。

- **users/**  
  - ユーザーのプロフィールページや設定画面など。

### 2.4. `config/routes.rb`
- アプリケーションのルーティング設定。どのURLにアクセスした際に、どのコントローラー・アクションを呼び出すかを定義。

```ruby
Rails.application.routes.draw do
  root 'bookmarks#index'
  resources :bookmarks
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show, :edit, :update]
end
```

### 2.5. `db/migrate/`
- **マイグレーションファイル**は、データベースのスキーマを管理します。例えば、`create_bookmarks.rb` というファイルでブックマークテーブルを作成します。

### 2.6. `test/`
- **RSpecテスト**  
  - コントローラー、モデル、統合テストなどを行います。正常系テストと異常系テストをカバーし、アプリケーションの動作が正しいかを確認します。

### 2.7. `Gemfile`
- このファイルでは、プロジェクトで使用するgem（ライブラリ）を管理します。Devise（認証）、RSpec（テスト）、その他の便利なライブラリを追加します。

```ruby
gem 'rails', '6.1.4'
gem 'devise'
gem 'rspec-rails'
gem 'pg'  # PostgreSQLのデータベースを使用
```

### 2.8. `README.md`
- プロジェクトの概要、セットアップ方法、使い方などを記載するファイルです。ポートフォリオにおいて、外部の人がプロジェクトを理解しやすいように説明します。

---

## 3. 提供機能

### 3.1 画面構成と参照画像

#### 3.1.1 ログイン関連画面

- **ログイン画面**
    - **概要**: 登録済みユーザーがメールアドレスとパスワードでログイン
    - **ページの定義**: `ui_definition/pages/login.yml`
    - **参考画像**: `ui_definition/images/login.png`
    - **詳細**:
        - 入力フィールド（メールアドレス、パスワード）
        - 「ログイン」ボタン
        - 新規登録やパスワードリセットリンク

- **登録画面**
    - **概要**: 新規ユーザーがアカウント作成
    - **ページの定義**: `ui_definition/pages/signup.yml`
    - **参考画像**: `ui_definition/images/signup.png`
    - **詳細**:
        - 名前、メールアドレス、パスワード、確認用パスワードの入力欄
        - 「登録」ボタン
        - ログイン画面へのリンク

- **パスワードリセット画面**
    - **概要**: パスワードを忘れたユーザーがリセット手続きを進める
    - **ページの定義**: `ui_definition/pages/reset_password.yml`
    - **参考画像**: `ui_definition/images/reset_password.png`
    - **詳細**:
        - 登録済みメールアドレスの入力欄
        - 「パスワードリセットメールを送信」ボタン
        - ログイン画面へのリンク

#### 3.1.2 ブックマーク管理画面

- **概要**: ブックマークの追加、編集、削除、および検索
- **ページの定義**: `ui_definition/pages/manage_bookmarks.yml`
- **参考画像**: `ui_definition/images/manage_bookmarks.png`
- **詳細**:
    - 左側に登録済みのブックマーク一覧（タイトル、URL、タグ、編集・削除ボタン）
    - 右上に新規ブックマークの入力フォーム（URL、タイトル、タグ、追加ボタン）
    - 右下にタグやキーワードで検索するためのフォーム

#### 3.1.3 マイページ画面

- **概要**: ユーザーが自分のプロフィールを編集する画面
- **ページの定義**: `ui_definition/pages/my_page.yml`
- **参考画像**: `ui_definition/images/my_page.png`
- **詳細**:
    - 名前、メールアドレス、パスワード変更用の入力欄
    - （パスワード変更時のみ）確認用パスワード入力欄
    - 「プロフィールを更新」ボタン

---

## 4. ルーティング

- **ログイン関連**
  - `/login`: ログイン画面
  - `/register`: ユーザー登録画面

- **ブックマーク関連**
  - `/bookmarks`: ブックマークの一覧ページ
  - `/bookmarks/new`: 新しいブックマークを追加するフォーム
  - `/bookmarks/:id`: 特定のブックマークの詳細ページ

- **マイページ関連**
  - `/mypage`: ユーザーのプロフィール管理画面

---

## 5. データベース設計

### `bookmarks` テーブル
| カラム       | 型         | 備考                     |
|--------------|------------|--------------------------|
| id           | bigint     | 自動採番                  |
| title        | text       | ブックマークのタイトル    |
| url          | text       | ブックマークのURL         |
| description  | text       | ブックマークの概要       |
| user_id      | uuid       | `users`テーブルの外部キー |
| tags         | text[]     | タグ（配列として保存）     |
| created_at   | timestamptz| 作成日時                 |
| updated_at   | timestamptz| 更新日時                 |

### `users` テーブル
| カラム        | 型       | 備考                         |
|---------------|----------|------------------------------|
| id            | uuid     | 自動生成                     |
| email         | text     | メールアドレス               |
| password_digest | text   | パスワードのハッシュ         |
| name          | text     | ユーザー名                   |
| created_at    | timestamptz | 作成日時                    |
| updated_at    | timestamptz | 更新日時                    |
