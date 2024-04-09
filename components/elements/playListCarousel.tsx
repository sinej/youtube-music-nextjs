import React from 'react';
import {Playlist} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../ui/carousel';

interface PlayListCarouselProps {
    title: string;
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
                    {Array.from({length: 5}).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                Card
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default PlayListCarousel;