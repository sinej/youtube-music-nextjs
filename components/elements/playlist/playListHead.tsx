'use client'

import React from 'react';
import IconButton from "@/components/elements/button/iconButton";
import {FiFolderPlus, FiMoreVertical, FiPlay} from "react-icons/fi";
import Image from "next/image";
import {getRandomElementFromArray} from "@/lib/utils";
import WhiteButton from "@/components/elements/button/whiteButton";
import DarkButton from "@/components/elements/button/darkButton";
import usePlayerState from "@/hooks/usePlayerState";

type Props = {
    playlistName: string;
    owner: string;
    songList: any[];
};


const PlayListHead = (props: Props) => {
    const { playlistName = "", owner = "" , songList = []} = props;
    const { addSongList } = usePlayerState();

    const randomSOng = getRandomElementFromArray(songList);
    const onClickPlay = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addSongList(songList)
    }

    return (
        <section className="flex gap-[50px] flex-col">
            <div className="flex gap-[50px] flex-row">
                <div className="relative w-[160px] h-[160px] lg:w-[240px] lg:h-[240px]">
                    <Image src={randomSOng.imageSrc} fill alt={playlistName}/>
                </div>
                <article className="flex flex-col justify-center">
                    <div className="font-bold text-[28px]">{playlistName}</div>
                    <div className="text-neutral-400 mt-4 text-[14px]">
                        <div>앨범 {owner} 2019</div>
                        <div>{songList.length}곡 15분</div>
                    </div>
                    <ul className="hidden lg:flex flex-row items-center gap-4 mt-4">
                        <WhiteButton icon={<FiPlay size={24}/>} label="재생" className="w-[85px] text-[14px]"
                                     onClick={onClickPlay}
                        />
                        <DarkButton icon={<FiFolderPlus size={24}/>} label="보관함에 저장" className="w-[135px] text-[14px]"/>
                        <IconButton icon={<FiMoreVertical size={24}/>}/>
                    </ul>
                </article>
            </div>
            <ul className="flex flex-row items-center gap-4 mt-4 lg:hidden">
                <WhiteButton icon={<FiPlay size={24}/>} label="재생" className="w-[85px] text-[14px]"
                             onClick={onClickPlay}
                />
                <DarkButton icon={<FiFolderPlus size={24}/>} label="보관함에 저장" className="w-[135px] text-[14px]"/>
                <IconButton icon={<FiMoreVertical size={24}/>}/>
            </ul>
        </section>
    );
}

export default PlayListHead;