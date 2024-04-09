import React from 'react';
import {Playlist} from "@/types";
import Image from "next/image";
import {getRandomElementFromArray} from "@/lib/utils";

const PlayListCard = (props: Playlist) => {
    const { id, owner, playlistName, songList} = props;
    const songListLen = songList?.length;
    console.log("songList", songList)
    const imgSrc = getRandomElementFromArray(songList).imageSrc;
    console.log("imgSrc", imgSrc)
    return (
        <article>
            <section className="relative h-[136px]">
                <Image src={imgSrc}
                       alt="thumbnail"
                       fill={true}
                       className="object-cover"
                />
            </section>
            <section className="mt-2">
                <div>{playlistName}</div>
                <div className="text-neutral-500">{owner} - 트랙 {songListLen}개</div>
            </section>
        </article>
    );
}

export default PlayListCard;