'use client'

import React from 'react';
import {Playlist} from "@/types";
import Image from "next/image";
import {getRandomElementFromArray} from "@/lib/utils";
import {useRouter} from "next/navigation";
import { MdMoreVert } from "react-icons/md";
import { FiPlay } from "react-icons/fi";
import IconButton from "@/components/elements/button/iconButton";

const PlayListCard = (props: Playlist) => {
    const { id, owner, playlistName, songList} = props;
    const { push } = useRouter();
    const songListLen = songList?.length;
    const imgSrc = getRandomElementFromArray(songList).imageSrc;

    const onClickCard = () => {
        push(`/playlist?list=${id}`)
    }

    const onClickPlay = () => {
        // TODO: Playing
    }

    return (
        <article className="h-[240px] cursor-pointer group">
            <section className="relative h-[136px]"
                     onClick={onClickCard}
            >
                <Image src={imgSrc}
                       alt="thumbnail"
                       fill={true}
                       className="object-cover rounded-sm"
                />

                <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,.7)] top-0 w-full h-[136px]">
                    <div className="right-4 absolute top-2">
                        <IconButton icon={<MdMoreVert size={20}/>} />
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110
                    bg-[rgba(0,0,0,.7)] rounded-full w-[45px] h-[45px] hover:bg-rgba(0,0,0,.9) pl-[3px]"
                         onClick={onClickPlay}
                    >
                        <FiPlay size={22}/>
                    </div>
                </div>
            </section>
            <section className="mt-2">
            <div>{playlistName}</div>
                <div className="text-neutral-500">{owner} - 트랙 {songListLen}개</div>
            </section>
        </article>
    );
}

export default PlayListCard;