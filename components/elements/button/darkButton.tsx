import React from 'react';
import {cn} from "@/lib/utils";

interface DarkButtonProps {
    icon: React.ReactElement;
    label: string;
    className?: string;
    prop?: any;
};

const DarkButton = (props: DarkButtonProps) => {
    const { icon = null, className,  label, ...prop} = props;
    return (
        <button className={cn("bg-black text-white rounded-2xl flex items-center justify-center flex-row h-[36px] min-w-[80px] gap-2 cursor-pointer hover:bg-neutral-800 border border-neutral-700", className)}
                type="button"
                {...prop}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    );
}

export default DarkButton;