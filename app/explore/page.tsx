import React from 'react';
import PagePadding from "@/components/elements/container/pagePadding";
import Category from "@/app/explore/components/category";
import {getAllPlaylist, getSongListTop10} from "@/lib/dummyData";
import PlayListCarousel from "@/components/elements/playlist/playListCarousel";
import SongListCarousel from "@/components/elements/playlist/songListCarousel";

type Props = {

};

const Page = async (props: Props) => {
    const {} = props;

    // const playlistArray = await getAllPlaylist();
    // const songListTop10 = await getSongListTop10();

    const [playlistArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()]);

    return (
        <PagePadding>
            <div className="mt-4"></div>
            <Category />
            <div className="mt-20" />
            <PlayListCarousel title="새 앨범 및 싱글"
                              playlistArray={playlistArray}
            />
            <div className="mt-20" />
            <SongListCarousel title="인기곡"
                              songListTop10={songListTop10}
            />

        </PagePadding>
    );
}

export default Page;