import { Avatar ,AvatarImage} from "@radix-ui/react-avatar";


export default function BotAvatar () {
    return(
        <Avatar className="h-14 w-14 mt-2">
            <AvatarImage className="p-0" src={"/logo.png"}/>
        </Avatar>
    )
}