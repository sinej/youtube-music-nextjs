'use client'

import React, {useMemo} from 'react';
import Link from "next/link";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { usePathname, useSearchParams } from "next/navigation";
import {cn} from "@/lib/utils";
import {dummyPlaylistArray} from "@/lib/dummyData";
import PlayListNav from "@/components/elements/playlist/playListNav";

type RouteProps = {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    href: string;
};

const Navigator = () => {
    const pathname = usePathname();

    const routes = useMemo(() => {
        return [
            {
                icon: <GoHome size={24} />,
                label: "홈",
                isActive: pathname === "/",
                href: "/"
            },
            {
                icon: <FiCompass size={24} />,
                label: "둘러보기",
                isActive: pathname === "/explore",
                href: "/explore"
            },
            {
                icon: <FiMusic size={24} />,
                label: "보관함",
                isActive: pathname === "/library",
                href: "/library"
            },
        ]
    }, [pathname])
    return (
        <div>
            <section className="flex flex-col gap-2 p-4">
                {routes.map(({
                                 icon, href, isActive, label
                             }: RouteProps) => {
                    return (
                        <Link href={href} key={label}>
                            <div
                                className={cn("flex flex-row items-center gap-4 text-[16px] hover:bg-neutral-700 rounded-lg p-2",
                                    isActive && "bg-neutral-800"
                                )}>
                                {icon}
                                <p>{label}</p>
                            </div>
                        </Link>
                    )
                })}
            </section>

            <section className="px-6">
                <div className="w-full h-[1px] bg-neutral-700"></div>
            </section>

            <section className="px-6">
                <div
                    className="hover:bg-neutral-700 cursor-pointer flex flex-row items-center bg-neutral-800 my-6 rounded-3xl p-2 font-[200] justify-center gap-2">
                    <FiPlus size={24}/>
                    <span>재생목록</span>
                </div>
            </section>


            <section>
                <ul className="flex flex-col">
                {dummyPlaylistArray.map((playlist) =>
                    <PlayListNav key={`play-${playlist.id}`} {...playlist} />
                )}
                </ul>
            </section>
        </div>
    );
}

export default Navigator;