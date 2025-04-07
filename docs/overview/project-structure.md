---
name: "docs/overview_0/project-structure.md"
title: "プロジェクト構造概要 (Project Structure)"
description: "[コミットコーチ] - ディレクトリ構成など"
---

# docs/overview_0/project-structure.md

## 1. ディレクトリ構成

以下は、コミットコーチ アプリケーションの基本的なディレクトリ構成です。

[プロジェクトルート]/
├── backup_log/  
│   ├── commit-coach (1).zip  
│   ├── design_decisions.md  
│   ├── design_decisionsのコピー.md  
│   ├── metrics.md  
│   ├── progress_reports_byAI/  
│   │   ├── 2024-07-21_cache_strategy.md  
│   │   ├── 2024-07-22_error_handling.md  
│   │   └── test_api.sh  
│   ├── thinking_logs/  
│   │   └── 2025-02-21_frontend_coding_iimprovement.md  
│   ├── tone_mannner_bootstrap.md  
│   └── tone_mannner_typescript.md  
├── cursorrules/  
│   ├── README.md  
│   ├── ai-workflow-rules.cursorrules  
│   ├── lint-rules.cursorrules  
│   ├── main-rules.cursorrules  
│   └── refactoring.cursorrules  
├── docs/  
│   ├── ai_dev_flow/  
│   │   ├── _pdca_prompt.md  
│   │   └── prompt_library/  
│   │       ├── _meeting_report.md  
│   │       ├── _template report.md  
│   │       ├── _template_report_ver2.md  
│   │       ├── api_validation.md  
│   │       └── cache_strategy_prompt.md  
│   └── overview/  
│       ├── api-routes.md  
│       ├── architecture.md  
│       ├── components.md  
│       ├── database.md  
│       ├── development_flow.md  
│       ├── product-brief.md  
│       └── types.md  
├── frontend/  
│   ├── app/  
│   │   ├── dashboard/  
│   │   │   └── page.tsx  
│   │   ├── globals.css  
│   │   ├── layout.tsx  
│   │   ├── mypage/  
│   │   │   └── page.tsx  
│   │   ├── page.tsx  
│   │   ├── profile/  
│   │   │   └── page.tsx  
│   │   ├── projects/  
│   │   │   ├── design/  
│   │   │   │   └── page.tsx  
│   │   │   ├── mobile-app/  
│   │   │   │   └── page.tsx  
│   │   │   └── web-app/  
│   │   │       └── page.tsx  
│   │   └── settings/  
│   │       └── page.tsx  
│   ├── components/  
│   │   ├── ai-chat.tsx  
│   │   ├── icons.tsx  
│   │   ├── sidebar.tsx  
│   │   ├── task-breakdown.tsx  
│   │   ├── task-item.tsx  
│   │   ├── theme-provider.tsx  
│   │   └── ui/  
│   │       ├── accordion.tsx  
│   │       ├── alert-dialog.tsx  
│   │       ├── alert.tsx  
│   │       ├── aspect-ratio.tsx  
│   │       ├── avatar.tsx  
│   │       ├── badge.tsx  
│   │       ├── breadcrumb.tsx  
│   │       ├── button.tsx  
│   │       ├── calendar.tsx  
│   │       ├── card.tsx  
│   │       ├── carousel.tsx  
│   │       ├── chart.tsx  
│   │       ├── checkbox.tsx  
│   │       ├── collapsible.tsx  
│   │       ├── command.tsx  
│   │       ├── context-menu.tsx  
│   │       ├── dialog.tsx  
│   │       ├── drawer.tsx  
│   │       ├── dropdown-menu.tsx  
│   │       ├── form.tsx  
│   │       ├── hover-card.tsx  
│   │       ├── input-otp.tsx  
│   │       ├── input.tsx  
│   │       ├── label.tsx  
│   │       ├── menubar.tsx  
│   │       ├── navigation-menu.tsx  
│   │       ├── pagination.tsx  
│   │       ├── popover.tsx  
│   │       ├── progress.tsx  
│   │       ├── radio-group.tsx  
│   │       ├── resizable.tsx  
│   │       ├── scroll-area.tsx  
│   │       ├── select.tsx  
│   │       ├── separator.tsx  
│   │       ├── sheet.tsx  
│   │       ├── sidebar.tsx  
│   │       ├── skeleton.tsx  
│   │       ├── slider.tsx  
│   │       ├── sonner.tsx  
│   │       ├── switch.tsx  
│   │       ├── table.tsx  
│   │       ├── tabs.tsx  
│   │       ├── textarea.tsx  
│   │       ├── toast.tsx  
│   │       ├── toaster.tsx  
│   │       ├── toggle-group.tsx  
│   │       ├── toggle.tsx  
│   │       └── tooltip.tsx  
│   ├── hooks/  
│   │   ├── use-mobile.tsx  
│   │   └── use-toast.ts  
│   ├── lib/  
│   │   └── utils.ts  
│   ├── next.config.mjs  
│   ├── package.json  
│   ├── pnpm-lock.yaml  
│   ├── postcss.config.mjs  
│   ├── public/  
│   │   ├── placeholder-logo.png  
│   │   ├── placeholder-logo.svg  
│   │   ├── placeholder-user.jpg  
│   │   ├── placeholder.jpg  
│   │   └── placeholder.svg  
│   ├── styles/  
│   │   └── globals.css  
│   ├── tailwind.config.ts  
│   └── tsconfig.json  
├── .gitignore  
├── README.md  
├── package.json  
├── pnpm-lock.yaml  
├── postcss.config.mjs  
└── [その他設定ファイル]

**補足:**

* 上記は Next.js をベースにした例です。Create React App など、他のフレームワーク/構成の場合は適宜変更してください。  
* `frontend/` 以下はプロジェクトのソースコードを格納しており、規模に応じてさらに細分化することが可能です。  
* 状態管理ライブラリ (Redux, Zustand など) を使用する場合は、`frontend/store/` などのディレクトリを追加してください。  
* テストファイルは、コンポーネントと同じディレクトリに置くか、`frontend/__tests__/` などにまとめることができます。

---

## 2. 主要ファイル/ディレクトリの役割

### 2.1. `frontend/app/` (Next.jsの場合)

* **`(page)/page.tsx`**: 各ページのコンポーネント（例: `dashboard/page.tsx`, `profile/page.tsx` など）。  
* **`api/`**: API Routes。サーバーレス関数として動作する API エンドポイントを定義。  
* **`layout.tsx`**: アプリケーション全体の共通レイアウト。

### 2.2. `frontend/components/`

* **`(Component)/index.tsx`**: 再利用可能な UI コンポーネント（例: `ai-chat.tsx`, `task-item.tsx` など）。  
* **`(Component)/styles.module.css`**: コンポーネントのスタイル（CSS Modules を使用する場合）。  
* **`(Component)/[Component].test.tsx`**: コンポーネントのテスト（必要に応じて）。

### 2.3. `frontend/lib/`

* **`utils.ts`**: ユーティリティ関数、API クライアント、定数など、複数の場所で使われる可能性のあるコード。

### 2.4. `frontend/styles/`

* **`globals.css`**: アプリケーション全体のグローバルスタイル。  
* **`tailwind.config.ts`**: Tailwind CSS の設定ファイル。

### 2.5. `frontend/hooks/`

* **`use-mobile.tsx`** や **`use-toast.ts`**: カスタムフック群。

### 2.6. `public/`

* 静的ファイル（画像、favicon、robots.txt など）。  
  ※ 例: `placeholder-logo.png`, `placeholder-user.jpg` など。

### 2.7. 設定ファイル

* **`.env`**: 環境変数ファイル。  
* **`.eslintrc.js`**: ESLint の設定ファイル。  
* **`.prettierrc.js`**: Prettier の設定ファイル（必要に応じて）。  
* **`next.config.mjs`**: Next.js の設定ファイル。  
* **`tsconfig.json`**: TypeScript のコンパイラ設定ファイル。

### 2.8. `package.json`

* プロジェクトの依存関係（dependencies, devDependencies）や開発用スクリプト (`dev`, `build`, `start`, `lint` など) を管理。

### 2.9. `README.md`

* プロジェクトの概要、セットアップ方法、使い方などを記載するファイル。

---

## 3. ルーティング (Next.jsの場合)

- **`/`**: ホームページ (`frontend/app/page.tsx`)  
- **`/dashboard`**: ダッシュボードページ (`frontend/app/dashboard/page.tsx`)  
- **`/profile`**: プロフィール編集ページ (`frontend/app/profile/page.tsx`)  
- **`/projects/design`**: デザインプロジェクトページ (`frontend/app/projects/design/page.tsx`)  
- **`/projects/mobile-app`**: モバイルアプリ開発ページ (`frontend/app/projects/mobile-app/page.tsx`)  
- **`/projects/web-app`**: ウェブアプリ開発ページ (`frontend/app/projects/web-app/page.tsx`)  
- **`/settings`**: 設定ページ (`frontend/app/settings/page.tsx`)  
- **`/mypage`**: マイページ (`frontend/app/mypage/page.tsx`)  
- **`/api/…`**: API Routes（`frontend/app/api/` 以下に配置）

---

## 4. データベース設計 (例)

[使用するデータベース名: PostgreSQL / Supabase など]

### `[User]` テーブル

| カラム      | 型           | 備考                         |
|-------------|--------------|------------------------------|
| id          | UUID/serial  | プライマリキー               |
| email       | VARCHAR      | ユーザーのメールアドレス     |
| name        | VARCHAR      | ユーザー名                   |
| image       | VARCHAR      | プロフィール画像の URL      |
| created_at  | TIMESTAMP    | 作成日時                     |
| updated_at  | TIMESTAMP    | 更新日時                     |

### `[Project]` テーブル

| カラム       | 型           | 備考                         |
|--------------|--------------|------------------------------|
| id           | UUID/serial  | プライマリキー               |
| name         | VARCHAR      | プロジェクト名               |
| description  | TEXT         | プロジェクトの説明           |
| user_id      | UUID         | 外部キー: User テーブル      |
| created_at   | TIMESTAMP    | 作成日時                     |
| updated_at   | TIMESTAMP    | 更新日時                     |

*（他のテーブルも同様に設計可能）*

---

## 5. 進捗管理とフィードバック

- **毎週進捗確認**: 定期的に進捗を確認し、遅れが生じた場合は計画を調整  
- **コードレビュー**: メンターやオンラインコミュニティでフィードバックを受け、改善点を見つける

---

**主な変更点:**

- **Next.jsベース**: Next.js を前提としたディレクトリ構成にしており、他のフレームワークでも参考になるよう調整可能です。  
- **コンポーネント指向**: `frontend/components/` ディレクトリを中心に、再利用可能な UI コンポーネントの管理を重視。  
- **型定義**: TypeScript の使用を前提とし、`frontend/types/`（必要に応じて）を追加。  
- **設定ファイル**: ESLint、Prettier、TypeScript の設定ファイルなど、プロジェクト管理に必要なファイルを整備。  
- **API Routes**: Next.js の API Routes 概念を活かして、`frontend/app/api/` 以下に API エンドポイントを配置。  
- **データベース設計**: テーブル定義の例を汎用的な形に整備。

---

このテンプレートは、Next.js、React、その他の JavaScript ベースのフレームワークを使った Web アプリケーション開発のプロジェクト構造のドキュメント作成に活用できます。
