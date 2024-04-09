import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";

type Props = {
    size?: string;
};

const UserIcon = (props: Props) => {
    const { size = "sm" } = props;
    return (
        <Avatar className={cn("w-[26px] h-[26px]", size === "lg" && "w-14 h-14")}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>cn</AvatarFallback>
        </Avatar>
    );
}

export default UserIcon;