"use client"
import { Card } from "@/components/ui/card"
import {tools} from "./dasboardRoutes"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"


export default function DashboardPage() {
  const router = useRouter()
  
 return(
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        All the AI tools in one place
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Build, Create, and Manage your AI needs with Aitil.
      </p>
      <div
      className="px-2 md:px-20 lg:px-40 space-y-4 lg:flex lg:gap-x-8 lg:w-full lg:justify-center lg:items-center">
        {
          tools.map((tool) => (
            <Card
            onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-3 border-black/5 flex lg:flex-col items-center justify-around hover:shadow-md transition cursor-pointer lg:h-40 lg:w-40 mt-4"
            >
              <div className="flex items-center lg:flex-col gap-x-4 gap-y-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)}/>
                </div>
                <div className="font-semibold text-center">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5"/>
            </Card>
        ))}
      </div>
    </div>
 )
}
