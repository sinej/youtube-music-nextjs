'use client'

import React from 'react';
import PagePadding from "@/components/elements/container/pagePadding";
import {getPlaylistById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";
import {getRandomElementFromArray} from "@/lib/utils";
import HeaderBgChanger from "@/components/elements/container/headerBgChanger";
import PlayListHead from "@/components/elements/playlist/playListHead";
import SongListCardRowExpand from "@/components/elements/playlist/songListCardRowExpand";
import {Song} from "@/types";

interface Props {
    searchParams: {
        list: string;
    }
};

const Page = async (props: Props) => {
    const { searchParams: { list } } = props;

    const playList = await getPlaylistById(Number(list));
    if(!playList) permanentRedirect("/");

    const imageSrc = getRandomElementFromArray(playList.songList)?.imageSrc;

    return (
        <PagePadding>
            <HeaderBgChanger imageSrc={imageSrc} />
            <div className="mt-12"></div>
            <PlayListHead {...playList} />
            <div className="mt-12"></div>
            <section className="flex flex-col gap-2">
            {playList.songList.map((song: Song, index: number) =>
                <SongListCardRowExpand {...song} key={index} />
            )}
            </section>
        </PagePadding>
    );
}

export default Page;