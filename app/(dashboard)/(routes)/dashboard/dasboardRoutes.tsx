import { Code2Icon, ImageIcon, MessageSquare, VideoIcon } from "lucide-react";

export const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/conversation",
    },
    {
        label: "Image Generator",
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: "/image",
    },
    {
        label: "Video Generator",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/video",
    },
    {
        label: "Code Generator",
        icon: Code2Icon,
        color: "text-green-500",
        bgColor: "bg-gree-500/10",
        href: "/code",
    },
]