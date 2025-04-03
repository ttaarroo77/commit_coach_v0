"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TaskItem } from "@/components/task-item"
import { AIChat } from "@/components/ai-chat"
// import { TaskBreakdown } from "@/components/task-breakdown"
import { Plus, Clock, MoreHorizontal } from "lucide-react"

export default function DesignProjectPage() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "ダッシュボード画面のデザイン",
      status: "completed",
      time: "",
      tags: ["完了"],
    },
    {
      id: "2",
      title: "設定画面のデザイン",
      status: "in-progress",
      time: "16:30",
      tags: ["レビュー中"],
    },
    {
      id: "3",
      title: "プロフィール画面のデザイン",
      status: "in-progress",
      time: "18:00",
      tags: ["進行中"],
    },
  ])

  const [upcomingTasks, setUpcomingTasks] = useState([
    {
      id: "4",
      title: "デザインシステムの作成",
      date: "2025/04/01",
      time: "10:00",
      project: "デザインプロジェクト",
    },
    {
      id: "5",
      title: "アイコンセットの作成",
      date: "2025/04/03",
      time: "",
      project: "デザインプロジェクト",
    },
  ])

  const addTask = () => {
    // タスク追加ロジック
  }

  const moveToToday = (taskId: string) => {
    // タスクを今日に移動するロジック
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">デザインプロジェクト</h1>
                <p className="text-sm text-gray-500">開始: 2023/11/01 | 期限: 2023/11/30 | 進捗: 90%</p>
              </div>
              <Button className="bg-[#31A9B8] hover:bg-[#2a8f9c]">
                <Plus className="mr-2 h-4 w-4" />
                タスクを追加
              </Button>
            </div>
            <div className="mb-8">
              <h1 className="mb-6 text-2xl font-bold">今日やること</h1>
              <div className="mb-4 rounded-lg border border-dashed p-4">
                <button
                  onClick={addTask}
                  className="flex w-full items-center justify-center gap-2 rounded-lg p-2 text-gray-500 hover:bg-gray-50"
                >
                  <Plus className="h-5 w-5" />
                  <span>タスクを追加</span>
                </button>
              </div>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold">今後の予定</h2>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <Card key={task.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <h3 className="font-medium">{task.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>📅 {task.date}</span>
                            {task.time && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {task.time}
                              </span>
                            )}
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
                              {task.project}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#31A9B8]"
                            onClick={() => moveToToday(task.id)}
                          >
                            今日やる
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="w-96 border-l bg-gray-50 p-4">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">AIコーチング</h2>
            </div>
            <AIChat />
            {/* タスク分解機能はコメントアウト
            <Tabs defaultValue="ai-coach" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="ai-coach">AIコーチング</TabsTrigger>
                <TabsTrigger value="task-breakdown">タスク分解</TabsTrigger>
              </TabsList>
              <TabsContent value="ai-coach" className="mt-4 h-[calc(100vh-8rem)]">
                <AIChat />
              </TabsContent>
              <TabsContent value="task-breakdown" className="mt-4 h-[calc(100vh-8rem)]">
                <TaskBreakdown />
              </TabsContent>
            </Tabs>
            */}
          </div>
        </main>
      </div>
    </div>
  )
}

