
---
name: "docs/overview_0/project-structure.md"
title: "プロジェクト構造概要 (Project Structure)"
description: "[プロジェクト名] - ディレクトリ構成など"
---

# docs/overview_0/project-structure.md

## 1. ディレクトリ構成

以下は、[プロジェクト名] アプリケーションの基本的なディレクトリ構成です。

[プロジェクトルート]/
├── public/ # 静的ファイル (画像, faviconなど)
├── src/ # ソースコード
│ ├── app/ # (Next.jsの場合) メインのアプリケーションロジック, API Routes
│ │ ├── (page1)/ # 各ページのディレクトリ
│ │ │ ├── page.tsx # ページコンポーネント
│ │ │ └── ...
│ │ ├── (page2)/
│ │ │ ├── page.tsx
│ │ │ └── ...
│ │ ├── api/ # API Routes
│ │ │ ├── (route1)/
│ │ │ │ └── route.ts
│ │ │ └── (route2)/
│ │ │ └── route.ts
│ │ ├── layout.tsx # 共通レイアウト
│ │ └── ...
│ ├── components/ # 再利用可能なコンポーネント
│ │ ├── (Component1)/
│ │ │ ├── index.tsx # コンポーネント
│ │ │ ├── styles.module.css # スタイル (CSS Modulesの場合)
│ │ │ └── [Component1].test.tsx # テスト (必要に応じて)
│ │ ├── (Component2)/
│ │ │ └── ...
│ │ └── ...
│ ├── lib/ # ユーティリティ関数、APIクライアントなど
│ │ ├── (module1).ts
│ │ ├── (module2).ts
│ │ └── ...
│ ├── styles/ # グローバルスタイル、テーマなど
│ │ ├── globals.css
│ │ ├── variables.css # CSS変数 (必要に応じて)
│ │ └── ...
│ ├── types/ # TypeScriptの型定義 (必要に応じて)
│ │ ├── (type1).ts
│ │ └── ...
│ └── ...
├── .env # 環境変数ファイル
├── .eslintrc.js # ESLintの設定ファイル
├── .gitignore # Gitの除外ファイル
├── .prettierrc.js # Prettierの設定ファイル (必要に応じて)
├── next.config.js # Next.jsの設定ファイル (Next.jsの場合)
├── package.json # プロジェクトの依存関係、スクリプトなど
├── README.md # プロジェクトの説明
├── tsconfig.json # TypeScriptの設定ファイル
└── [その他設定ファイル]

**補足:**

*   上記はNext.jsをベースにした例です。Create React Appなど、他のフレームワーク/構成の場合は適宜変更してください。
*   `src/` 以下は、プロジェクトの規模や好みに応じてさらに細分化しても構いません。
*   状態管理ライブラリ (Redux, Zustandなど) を使用する場合は、`src/store` などのディレクトリを追加することがあります。
*   テストファイルは、コンポーネントと同じディレクトリに置くか、`src/__tests__/` などのディレクトリにまとめて置くことができます。

---

## 2. 主要ファイル/ディレクトリの役割

### 2.1. `src/app/` (Next.jsの場合)

*   **`(page)/page.tsx`**: 各ページのコンポーネント。
*   **`api/`**: API Routes。サーバーレス関数として動作するAPIエンドポイントを定義します。
*   **`layout.tsx`**: アプリケーション全体の共通レイアウト。

### 2.2. `src/components/`

*   **`(Component)/index.tsx`**: 再利用可能なUIコンポーネント。
*   **`(Component)/styles.module.css`**: コンポーネントのスタイル (CSS Modulesを使用する場合)。
*   **`(Component)/[Component].test.tsx`**: コンポーネントのテスト (任意)。

### 2.3. `src/lib/`

*   **`(module).ts`**: ユーティリティ関数、APIクライアント、定数など、複数の場所で使われる可能性のあるコード。

### 2.4. `src/styles/`

*   **`globals.css`**: アプリケーション全体のグローバルスタイル。
*   **`variables.css`**: CSS変数 (カスタムプロパティ) を定義 (任意)。

### 2.5. `src/types/` (任意)

*   **`(type).ts`**: プロジェクト全体で共有するTypeScriptの型定義。

### 2.6. `public/`

*   静的ファイル (画像, favicon, robots.txtなど)。

### 2.7. 設定ファイル

*   **`.env`**: 環境変数。
*   **`.eslintrc.js`**: ESLintの設定。コードの品質とスタイルをチェックします。
*   **`.prettierrc.js`**: Prettierの設定 (任意)。コードの自動フォーマットを行います。
*   **`next.config.js`**: Next.jsのカスタム設定 (Next.jsの場合)。
*   **`tsconfig.json`**: TypeScriptのコンパイラ設定。

### 2.8. `package.json`

*   プロジェクトの依存関係 (dependencies, devDependencies) を管理します。
*   開発用スクリプト (scripts) を定義します (例: `dev`, `build`, `start`, `test`)。

### 2.9. `README.md`
* プロジェクトの概要、セットアップ方法、使い方などを記載するファイルです。

---

## 3. ルーティング (Next.jsの場合)

-   **`/`**: ホーム
-   **`/about`**: アプリについて
-   **`/(page1)`**: [機能1]
-   **`/(page2)`**: [機能2]
-   **`/api/(route1)`**: [APIエンドポイント1]
- **`/api/(route2)`**: [APIエンドポイント2]
- **`/login`**: ログイン
---

## 4. データベース設計 (例)

[データベース名]

### `[テーブル名1]` テーブル

| カラム       | 型         | 備考                     |
|--------------|------------|--------------------------|
| id           | [型]     | [説明]                  |
| [カラム名]        | [型]     | [説明]               |
| [カラム名] | [型]   | [説明]     |
| created_at   | [型]| 作成日時                 |
| updated_at   | [型]| 更新日時                 |

### `[テーブル名2]` テーブル

| カラム        | 型       | 備考                         |
|---------------|----------|------------------------------|
| id            | [型]     | [説明]                    |
| [カラム名]         | [型]     | [説明]               |
| [カラム名]          | [型]   | [説明]         |
| created_at    | [型] | 作成日時                    |
| updated_at    | [型] | 更新日時                    |

---

## 5. 進捗管理とフィードバック

-   **毎週進捗確認**: 定期的に進捗を確認し、遅れが生じた場合は計画を調整
-   **コードレビュー**: メンターやオンラインコミュニティでフィードバックを受け、改善点を見つける

---

主な変更点:

Next.jsベース: Next.jsを前提としたディレクトリ構成にしました (ただし、他のフレームワークでも参考になるように調整可能です)。

コンポーネント指向: components/ ディレクトリを強調し、コンポーネントベースの開発を推奨する形にしました。

型定義: TypeScriptの使用を前提とし、types/ ディレクトリを追加しました。

設定ファイル: JavaScript/TypeScriptプロジェクトでよく使われる設定ファイル (.eslintrc.js, .prettierrc.js, tsconfig.json) を追加しました。

API Routes: Next.jsのAPI Routesの概念を反映させました。

データベース設計: テーブル定義の例を、より汎用的な形に修正しました。

このテンプレートは、Next.js, React, その他のJavaScriptベースのフレームワークを使ったWebアプリケーション開発のプロジェクト構造のドキュメント作成に活用できます。