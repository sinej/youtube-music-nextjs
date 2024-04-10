import React from 'react';
import {TopSong} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../../ui/carousel';
import {chunkArray} from "@/lib/utils";
import SongListCard from "@/components/elements/playlist/songListCard";

interface SongListCarouselProps {
    title: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    songListTop10: TopSong[];
};

interface SongListCardProps {
    name: string;
    imageSrc: string;
    prevRank: string;
    rank: string;
}

const SongColumn = ({ songList = [] }: {songList: TopSong[]}) => {
    return (
        <div className="flex flex-col gap-4">
            {songList.map((song: any, index: number) => (
                <SongListCard {...song} key={index} />
            ))}
        </div>
    )
}

const SongListCarousel: React.FC<SongListCarouselProps> = (props: SongListCarouselProps) => {
    const { title, subTitle, songListTop10, Thumbnail } = props;

    const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

    return (
        <div className="w-full">
            <Carousel className="w-full">
                <div className="flex flex-row justify-between items-end my-2">
                    <article className="flex flex-row gap-3">
                        {Thumbnail}
                        <div className="flex flex-col justify-center">
                        <div className="">{subTitle && <div className="text-neutral-500">{subTitle}</div>}</div>
                        <div className="text-[34px] font-bold leading-[34px]">{title}</div>
                        </div>
                    </article>
                    <div className="relative left-[-45px]">
                        <div className="absolute bottom-5">
                            <CarouselPrevious className="right-2" />
                            <CarouselNext className="left-2" />
                        </div>
                    </div>
                </div>
                <CarouselContent>
                    {chunkedTop10SongList?.map((songList, index: number) =>
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                    <div className="p-1">
                                        <SongColumn songList={songList} />
                                    </div>
                                </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default SongListCarousel;