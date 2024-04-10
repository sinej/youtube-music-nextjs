import React from 'react';
import {TopSong} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../../ui/carousel';

interface SongListCarouselProps {
    title: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    songListTop10?: TopSong[];
};

const SongColumn = ({ prevRank, rank }: TopSong) => {
    return (
        <div></div>
    )
}

const SongListCarousel: React.FC<SongListCarouselProps> = (props: SongListCarouselProps) => {
    const { title, subTitle, songListTop10, Thumbnail } = props;
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
                    {songListTop10?.map((songList: TopSong, index: number) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <SongColumn {...songList} />
                                    </div>
                                </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default SongListCarousel;