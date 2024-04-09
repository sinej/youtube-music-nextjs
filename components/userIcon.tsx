import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

type Props = {

};

const UserIcon = (props: Props) => {
    const {} = props;
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>cn</AvatarFallback>
        </Avatar>
    );
}

export default UserIcon; 