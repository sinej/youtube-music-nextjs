import React from 'react';
import {Playlist} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../../ui/carousel';
import PlayListCard from "@/components/elements/playlist/playListCard";

interface PlayListCarouselProps {
    title?: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    playlistArray?: Playlist[];
};

const PlayListCarousel: React.FC<PlayListCarouselProps> = (props: PlayListCarouselProps) => {
    const { title, subTitle, playlistArray, Thumbnail } = props;
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
                    {playlistArray?.map((playlist, index) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <PlayListCard {...playlist} />
                                    </div>
                                </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default PlayListCarousel;