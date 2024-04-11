'use client'

import React from 'react';
import Logo from "@/components/elements/logo";
import Navigator from "@/components/elements/navigator";
import usePlayerState from "@/hooks/usePlayerState";
import {cn} from "@/lib/utils";

type Props = {
    children: React.ReactNode;
};

const Sidebar = (props: Props) => {
    const { children } = props;
    const { isVisiblePlayer } = usePlayerState();

    return (
        <aside className={cn(`flex flex-row h-full`, isVisiblePlayer && `h-[calc(100vh_-_72px)]`)}>
            <nav className="w-[240px] border-r-[1px] border-neutral-600 hidden lg:block">
                <div className="p-[24px]">
                    <Logo isInDrawer={true} />
                </div>
                <div>
                    <Navigator />
                </div>
            </nav>
            <div className="w-full lg:w-[calc(100%_-_240px)]">
                {children}
            </div>
        </aside>
    );
}

export default Sidebar;