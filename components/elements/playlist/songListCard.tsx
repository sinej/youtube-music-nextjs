'use client'

import React from 'react';
import Image from "next/image";
import {FaCircle} from "react-icons/fa";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import {FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import IconButton from "@/components/elements/button/iconButton";

interface SongListCardProps {
    name: string;
    imageSrc: string;
    prevRank: string;
    rank: string;
}
const SongListCard: React.FC<SongListCardProps> = (props: SongListCardProps) => {
    const { name, imageSrc, rank, prevRank  } = props;
    return (
        <article className="w-full h-12 flex flex-row gap-4 items-center relative group">
            <div className="w-12 h-12 relative">
                <Image src={imageSrc} alt={name} fill className="object-cover flex items-center"/>
                <section className="hidden absolute top-0 w-12 h-12 items-center justify-center group-hover:flex bg-[rgba(0,0,0,.65)] cursor-pointer">
                    <FiPlayCircle size={20} />
                </section>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div>
                    {rank === prevRank ? <FaCircle size={10} /> :
                        rank > prevRank ? <AiOutlineCaretUp size={10} color="#3CA63F" /> :
                            <AiOutlineCaretDown size={10} color="#FF0000" />
                    }
                </div>
                <div>
                    {rank + 1}
                </div>
            </div>
            <div>
                <div>{name}</div>
            </div>
            <section className="hidden group-hover:flex absolute top-0 right-0 flex-row h-12 justify-end items-center">
                <IconButton icon={<FiThumbsDown size={20} />}/>
                <IconButton icon={<FiThumbsUp size={20} />}/>
                <IconButton icon={<FiMoreVertical size={20} />}/>
            </section>

        </article>
    );
}

export default SongListCard;