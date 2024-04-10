'use client'

import React from 'react';
import Image from "next/image";
import {FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import IconButton from "@/components/elements/button/iconButton";
import {Song} from "@/types";
import {useRouter} from "next/navigation";

const SongListCardRowExpand: React.FC<Song> = (props: Song) => {
    const { name, src, imageSrc, channelId, channel  } = props;
    const {push} = useRouter();
    const onClickChannel = () => {
        push(`/channel/${channelId}`)
    }

    return (
        <article className="w-full h-12 flex flex-row gap-4 items-center relative group">
            <div className="w-12 h-12 relative">
                <Image src={imageSrc} alt={name} fill className="object-cover flex items-center"/>
                <section className="hidden absolute top-0 w-12 h-12 items-center justify-center group-hover:flex bg-[rgba(0,0,0,.65)] cursor-pointer">
                    <FiPlayCircle size={20} />
                </section>
            </div>
            <div className="flex flex-row gap-4 justify-between basis-1/3">
                <div className="w-[100px] truncate">{name}</div>
                <div onClick={onClickChannel}
                    className="text-neutral-500 hover:underline cursor-pointer">{channel}</div>
            </div>
            <section className="hidden group-hover:flex absolute top-0 right-0 flex-row h-12 w-[120px] justify-end items-center">
                <IconButton icon={<FiThumbsDown size={20} />}/>
                <IconButton icon={<FiThumbsUp size={20} />}/>
                <IconButton icon={<FiMoreVertical size={20} />}/>
            </section>
        </article>
    );
}

export default SongListCardRowExpand;