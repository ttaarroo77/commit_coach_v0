import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Home, User, Settings, LogOut, Plus, FolderOpen } from "lucide-react"

export function Sidebar() {
  return (
    <div className="flex h-screen w-56 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#31A9B8] text-white">C</div>
          <span className="font-semibold">コミットコーチ</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-auto py-2">
        <div className="px-3">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase text-gray-500">プロジェクト</h2>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <ChevronDown className="mr-2 h-4 w-4" />
              <span>マイプロジェクト</span>
            </Button>
            <div className="ml-4 space-y-1">
              <Link href="/projects/web-app" className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-[#31A9B8]">
                  <div className="h-2 w-2 rounded-full bg-[#31A9B8]"></div>
                  <span>ウェブアプリ開発</span>
                </Button>
              </Link>
              <Link href="/projects/mobile-app" className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-blue-500">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>モバイルアプリ開発</span>
                </Button>
              </Link>
              <Link href="/projects/design" className="block">
                <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-green-500">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>デザインプロジェクト</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm" className="w-full justify-start text-gray-500">
                <Plus className="mr-2 h-4 w-4" />
                <span>新しいプロジェクト</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-auto px-3">
          <div className="space-y-1">
            <Link href="/dashboard" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                <span>ダッシュボード</span>
              </Button>
            </Link>
            <Link href="/mypage" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                <span>マイページ</span>
              </Button>
            </Link>
            <Link href="/profile" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <FolderOpen className="mr-2 h-4 w-4" />
                <span>プロフィール</span>
              </Button>
            </Link>
            <Link href="/settings" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                <span>設定</span>
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                <span>ログアウト</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

