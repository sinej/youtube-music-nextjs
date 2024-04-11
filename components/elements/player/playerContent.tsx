'use client'

import React from 'react';
import { Slider as PlayerSlider } from "@/components/ui/playerSlider";
import {useAudio} from "react-use";
import {IoPlaySkipBackSharp, IoPlaySkipForwardSharp} from "react-icons/io5";
import {AiOutlinePause, AiOutlinePlayCircle} from "react-icons/ai";
import usePlayerState from "@/hooks/usePlayerState";
import {ClipLoader} from "react-spinners";
import {RiPlayFill} from "react-icons/ri";

type Props = {

};

const PlayerContent = (props: Props) => {
    const {} = props;

    const { activeSong} = usePlayerState();

    const [audio, state, controls, ref] = useAudio({
        src: activeSong?.src,
        autoPlay: true,
    });

    console.log("activeSong?.src", activeSong?.src)
    console.log("state?.buffered?.length", state?.buffered)
    const isLoading = activeSong?.src &&  state?.buffered?.length === 0;
    
    console.log("isLoading", isLoading)

    const onClickPreBtn= () => {}
    const onClickStartBtn= () => {
        controls.play();
    }
    const onClickPauseBtn= () => {
        controls.pause();
    }
    const onClickNextBtn= () => {}


    return (
        <div className="w-full h-full relative">
            <div className="absolute -top-4 w-full">
                <PlayerSlider/>
            </div>
            {audio}
            <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
                <div className="flex flex-row h-full items-center">
                    <IoPlaySkipBackSharp size={24} className="cursor-pointer" onClick={onClickPreBtn}/>
                    {isLoading ?
                        <ClipLoader color="#FFF" /> :
                        state.playing ?
                            <AiOutlinePause size={40} className="cursor-pointer" onClick={onClickPauseBtn}  /> :
                            <RiPlayFill size={40} className="cursor-pointer" onClick={onClickStartBtn}  />
                    }
                    <IoPlaySkipForwardSharp size={24} className="cursor-pointer" onClick={onClickNextBtn} />
                </div>
                <article>

                </article>
                <div>

                </div>
            </section>

            {/*{audio}*/}
            {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
            {/*<button onClick={controls.pause}>Pause</button>*/}
            {/*<button onClick={controls.play}>Play</button>*/}
            {/*<br/>*/}
            {/*<button onClick={controls.mute}>Mute</button>*/}
            {/*<button onClick={controls.unmute}>Un-mute</button>*/}
            {/*<br/>*/}
            {/*<button onClick={() => controls.volume(.1)}>Volume: 10%</button>*/}
            {/*<button onClick={() => controls.volume(.5)}>Volume: 50%</button>*/}
            {/*<button onClick={() => controls.volume(1)}>Volume: 100%</button>*/}
            {/*<br/>*/}
            {/*<button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>*/}
            {/*<button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>*/}
        </div>
    );
}

export default PlayerContent;