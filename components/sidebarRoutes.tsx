// sidebarRoutes.js or sidebarRoutes.tsx
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Code2Icon, Settings2 } from "lucide-react";

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500"
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500"
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500"
  },
  {
    label: "Code Generator",
    icon: Code2Icon,
    href: "/code",
    color: "text-green-700"
  },
  {
    label: "Settings",
    icon: Settings2,
    href: "/settings",
  },
];
