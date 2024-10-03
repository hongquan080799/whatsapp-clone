import { Avatar } from "@mui/material";

export function SidebarChat () {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
                <div className="mr-4">
                    <Avatar />
                </div>
                <div>
                    <p className="font-bold text-sm text-gray-800">Maya Kasuma</p>
                    <p className="text-gray-500">Yes! OK</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-gray-500">05/11</p>
            </div>
        </div>
    )
}