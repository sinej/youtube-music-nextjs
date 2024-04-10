import React from 'react';
import {TopSong} from "@/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../../ui/carousel';
import {chunkArray} from "@/lib/utils";
import SongListCard from "@/components/elements/playlist/songListCard";
import GenreListCard from "@/components/elements/playlist/genreListCard";

interface GenreListCarouselProps {
    title: string;
    subTitle?: string;
    Thumbnail?: React.ReactNode;
    genreList: any[];
};

const GenreColumn = ({ genreList = [] }: {genreList: string[]}) => {
    return (
        <div className="flex flex-col gap-4">
            {genreList.map((genre: string, index) =>
                <GenreListCard genre={genre} key={index} />
            )}
        </div>
    )
}

const GenreListCarousel: React.FC<GenreListCarouselProps> = (props: GenreListCarouselProps) => {
    const { title, subTitle, genreList, Thumbnail } = props;

    const chunkedGenreList = chunkArray(genreList, 4) as string[][];

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
                    {chunkedGenreList?.map((genreList, index: number) =>
                                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                                    <div className="p-1">
                                        <GenreColumn genreList={genreList} />
                                    </div>
                                </CarouselItem>
                    )}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default GenreListCarousel;