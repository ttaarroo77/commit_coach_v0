import { Sidebar } from "@/components/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 overflow-auto p-6">
          <div className="w-full max-w-4xl">
            <h1 className="mb-6 text-2xl font-bold">設定</h1>
            <Tabs defaultValue="ai-coach">
              <TabsList className="mb-4">
                <TabsTrigger value="ai-coach">AIコーチ設定</TabsTrigger>
                <TabsTrigger value="theme">背景テーマ</TabsTrigger>
                <TabsTrigger value="character">キャラクター設定</TabsTrigger>
              </TabsList>
              <TabsContent value="ai-coach">
                <Card>
                  <CardHeader>
                    <CardTitle>AIコーチ設定</CardTitle>
                    <CardDescription>AIコーチの人格や知識をカスタマイズします</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="mb-2 font-medium">プロンプト設定</h3>
                        <Textarea
                          className="min-h-[300px]"
                          placeholder="AIコーチのプロンプトをカスタマイズ"
                          defaultValue={`# AIコーチの人格設定

## 基本性格
- プロフェッショナルで信頼感のあるコーチ
- ユーザーの目標達成を最優先に考える
- 適度な厳しさと励ましのバランスを持つ

## 話し方の特徴
- 簡潔で明確な指示
- 具体的な例を用いた説明
- 時には穏やかに、時には厳しく

## 知識ベース
- タスク管理の専門知識
- 生産性向上テクニック
- モチベーション維持の心理学

## 対応スタイル
- タスクの遅れには適度な厳しさで指摘`}
                        />
                      </div>
                      <div>
                        <h3 className="mb-2 font-medium">プレビュー</h3>
                        <div className="rounded-lg border p-4">
                          <div className="mb-4 flex items-start gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#31A9B8] text-white">
                              AI
                            </div>
                            <div className="rounded-lg bg-gray-100 p-3">
                              <p className="text-sm">何かお手伝いできることはありますか？</p>
                              <p className="mt-1 text-xs text-gray-500">10:30</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center space-x-2">
                            <Switch id="notifications" />
                            <Label htmlFor="notifications">リマインダー通知</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="strict-mode" />
                            <Label htmlFor="strict-mode">厳格モード（より厳しい指摘）</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch id="auto-suggestions" />
                            <Label htmlFor="auto-suggestions">自動タスク提案</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button className="bg-[#31A9B8] hover:bg-[#2a8f9c]">保存</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="theme">
                <Card>
                  <CardHeader>
                    <CardTitle>背景テーマ設定</CardTitle>
                    <CardDescription>アプリの見た目をカスタマイズします</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      <div className="overflow-hidden rounded-lg border-2 border-[#31A9B8] p-1">
                        <div className="h-24 rounded bg-white"></div>
                        <p className="mt-2 text-center text-sm font-medium">ライト</p>
                      </div>
                      <div className="overflow-hidden rounded-lg border p-1">
                        <div className="h-24 rounded bg-gray-900"></div>
                        <p className="mt-2 text-center text-sm font-medium">ダーク</p>
                      </div>
                      <div className="overflow-hidden rounded-lg border p-1">
                        <div className="h-24 rounded bg-gradient-to-r from-blue-100 to-teal-100"></div>
                        <p className="mt-2 text-center text-sm font-medium">ブルー</p>
                      </div>
                      <div className="overflow-hidden rounded-lg border p-1">
                        <div className="h-24 rounded bg-gradient-to-r from-purple-100 to-pink-100"></div>
                        <p className="mt-2 text-center text-sm font-medium">パープル</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="dark-mode" />
                        <Label htmlFor="dark-mode">ダークモード</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="reduce-motion" />
                        <Label htmlFor="reduce-motion">モーション軽減</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="high-contrast" />
                        <Label htmlFor="high-contrast">ハイコントラスト</Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="character">
                <Card>
                  <CardHeader>
                    <CardTitle>キャラクター設定</CardTitle>
                    <CardDescription>AIコーチのキャラクターをカスタマイズします</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      <div className="overflow-hidden rounded-lg border-2 border-[#31A9B8] p-1">
                        <div className="flex h-24 items-center justify-center rounded bg-blue-100">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#31A9B8] text-white">
                            <span className="text-xl">AI</span>
                          </div>
                        </div>
                        <p className="mt-2 text-center text-sm font-medium">スタンダード</p>
                      </div>
                      <div className="overflow-hidden rounded-lg border p-1">
                        <div className="flex h-24 items-center justify-center rounded bg-red-100">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-white">
                            <span className="text-xl">👨‍💼</span>
                          </div>
                        </div>
                        <p className="mt-2 text-center text-sm font-medium">厳格コーチ</p>
                      </div>
                      <div className="overflow-hidden rounded-lg border p-1">
                        <div className="flex h-24 items-center justify-center rounded bg-green-100">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                            <span className="text-xl">🧘</span>
                          </div>
                        </div>
                        <p className="mt-2 text-center text-sm font-medium">優しいメンター</p>
                      </div>
                      <div className="overflow-hidden rounded-lg border p-1">
                        <div className="flex h-24 items-center justify-center rounded bg-yellow-100">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
                            <span className="text-xl">🤖</span>
                          </div>
                        </div>
                        <p className="mt-2 text-center text-sm font-medium">ロボット</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">
                        カスタムキャラクターを作成
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

