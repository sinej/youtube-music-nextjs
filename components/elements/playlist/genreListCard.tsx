'use client'

import React from 'react';
import {genreateRandomHex} from "@/lib/utils";

interface GenreListCardProps {
    genre: string;
}
const GenreListCard: React.FC<GenreListCardProps> = (props: GenreListCardProps) => {
    const { genre  } = props;
    const hex = genreateRandomHex();
    return (
        <article className="flex flex-row h-12 w-full cursor-pointer bg-neutral-800 rounded-lg overflow-hidden">
            <div className="w-2 h-full" style={{background: hex}}></div>
            <div className="flex justify-center items-center px-4">{genre}</div>
        </article>
    );
}

export default GenreListCard;