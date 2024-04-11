import React from 'react';
import {getChannelById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";
import HeaderBgChanger from "@/components/elements/container/headerBgChanger";
import PagePadding from "@/components/elements/container/pagePadding";
import {getRandomElementFromArray} from "@/lib/utils";
import SongListCardRowExpand from "@/components/elements/playlist/songListCardRowExpand";
import PlayListCarousel from "@/components/elements/playlist/playListCarousel";
import ChannelHead from "@/app/channel/components/channelHead";

interface Props {
    params: {
        id: string;
    };
};

const Page = async (props: Props) => {
    const { params: { id } } = props;
    const channel = await getChannelById(Number(id));

    if(!channel) permanentRedirect('/');

    const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

    return (
        <PagePadding>
            <HeaderBgChanger imageSrc={imageSrc}/>
            <div className="mt-[150px]"></div>
            <ChannelHead channel={channel}/>
            <section className="mt-[80px]">
                <div className=" text-[28px] font-bold">노래</div>
                <div className="mt-[20px]">
                    <ul className="flex flex-col gap-2">
                        {channel.songList.map((song, key) => {
                            return <SongListCardRowExpand {...song} key={key}/>;
                        })}
                    </ul>
                </div>
            </section>
            <section className="mt-[80px]">
                <div className=" text-[28px] font-bold">앨범</div>
                <PlayListCarousel playlistArray={channel.playlistArray} />
            </section>
            <section className="mt-[80px]"></section>
        </PagePadding>
    );
}

export default Page;