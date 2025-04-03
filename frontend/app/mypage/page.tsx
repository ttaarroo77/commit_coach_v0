import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Mail, Github, MapPin } from "lucide-react"

export default function MyPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 overflow-auto p-6">
          <div className="grid flex-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-gray-200"></div>
                    <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-green-500 ring-2 ring-white"></div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold">山田 太郎</h2>
                    <p className="text-gray-500">フルスタックエンジニア</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="h-4 w-4" />
                      <span>yamada@example.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Github className="h-4 w-4" />
                      <span>@yamada-taro</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>東京, 日本</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    プロフィールを編集
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>プロジェクト進捗状況</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#31A9B8]"></div>
                        <span>ウェブアプリ開発</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>開始: 2023/10/01</span>
                      <span>期限: 2023/12/15</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                        <span>モバイルアプリ開発</span>
                      </div>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>開始: 2023/09/15</span>
                      <span>期限: 2024/01/31</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span>デザインプロジェクト</span>
                      </div>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>開始: 2023/11/01</span>
                      <span>期限: 2023/11/30</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full">
                    すべて表示
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AIコーチからのアドバイス</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border-l-4 border-[#31A9B8] bg-blue-50 p-4 text-sm">
                    <p>
                      デザインプロジェクトが90%完了しています。残りのタスクに集中して、期限内に完了させましょう。次に優先すべきは、ウェブアプリ開発の「ログイン機能の実装」タスクです。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

