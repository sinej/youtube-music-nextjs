import React from 'react';
import { IoMdPlayCircle } from "react-icons/io";
import IconButton from "@/components/elements/button/iconButton";

type Props = {
    owner: string;
    songList: string;
    id: number;
    playlistName: string;
};

const PlaylistNav = (props: Props) => {
    const { owner, songList, id, playlistName } = props;

    const onClickPlay = () => {
        // TODO: play music
    }

    return (
        <li className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg">
            <div className="flex flex-col">
                <div className="text-[14px]">{playlistName}</div>
                <div className="text-[12px] text-neutral-500">{owner}</div>
            </div>
            <div>
                <div className="hidden group-hover:block cursor-pointer"
                     onClick={onClickPlay}
                >
                    <IoMdPlayCircle size={30}/>
                </div>
            </div>
        </li>
    );
}

export default PlaylistNav;