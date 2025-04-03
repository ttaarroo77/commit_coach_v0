import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GitHubIcon } from "@/components/icons"
import { Twitter, Calendar, MessageSquare } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 overflow-auto p-6">
          <div className="w-full max-w-4xl">
            <h1 className="mb-6 text-2xl font-bold">プロフィール編集</h1>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>基本情報</CardTitle>
                  <CardDescription>あなたのプロフィール情報を編集します</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                    <div className="relative">
                      <div className="h-24 w-24 rounded-full bg-gray-200"></div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0"
                      >
                        +
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">名前</Label>
                          <Input id="name" defaultValue="山田 太郎" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">メールアドレス</Label>
                          <Input id="email" type="email" defaultValue="yamada@example.com" />
                          <p className="text-xs text-gray-500">メールアドレスの変更には確認が必要です</p>
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="birthdate">生年月日</Label>
                          <Input id="birthdate" type="date" defaultValue="1990-05-15" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">出生地</Label>
                          <Input id="location" defaultValue="東京都" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">自己紹介</Label>
                    <Textarea
                      id="bio"
                      className="min-h-[100px]"
                      defaultValue="フルスタックエンジニア。Webアプリケーション開発とAIに興味があります。自分の成長と学びを大切にしています。"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goals">今の悩みと希望</Label>
                    <Textarea
                      id="goals"
                      className="min-h-[100px]"
                      defaultValue="タスク管理が苦手で締め切り間際に慌てることが多いです。効率的な時間管理方法を身につけたいと思っています。"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>連携サービス</CardTitle>
                  <CardDescription>SNSアカウントとの連携を管理します</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <GitHubIcon className="h-6 w-6" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-sm text-gray-500">連携すると、リポジトリとコミット情報を取得できます</p>
                      </div>
                    </div>
                    <Button variant="outline">連携する</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <Twitter className="h-6 w-6 text-blue-400" />
                      <div>
                        <p className="font-medium">Twitter/X</p>
                        <p className="text-sm text-gray-500">連携すると、進捗状況を自動的にツイートできます</p>
                      </div>
                    </div>
                    <Button variant="outline">連携する</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-6 w-6 text-green-500" />
                      <div>
                        <p className="font-medium">Google Calendar</p>
                        <p className="text-sm text-gray-500">連携すると、タスクをカレンダーに同期できます</p>
                      </div>
                    </div>
                    <Button variant="outline">連携する</Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-medium">LINE</p>
                        <p className="text-sm text-gray-500">連携すると、リマインダーをLINEで受け取れます</p>
                      </div>
                    </div>
                    <Button variant="outline">連携する</Button>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-end space-x-4">
                <Button variant="outline">キャンセル</Button>
                <Button className="bg-[#31A9B8] hover:bg-[#2a8f9c]">変更を保存</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

