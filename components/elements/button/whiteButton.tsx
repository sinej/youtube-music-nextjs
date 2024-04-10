import React from 'react';
import {cn} from "@/lib/utils";

interface WhiteButtonProps {
    icon: React.ReactElement;
    label: string;
    className?: string;
    prop?: {};
};

const WhiteButton = (props: WhiteButtonProps) => {
    const { icon = null, className,  label, ...prop} = props;
    return (
        <button className={cn("bg-white text-black rounded-2xl flex items-center justify-center flex-row h-[36px] min-w-[80px] gap-2 cursor-pointer hover:bg-neutral-200", className)}
                type="button"
                {...prop}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    );
}

export default WhiteButton;