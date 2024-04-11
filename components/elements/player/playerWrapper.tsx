'use client'

import React from 'react';
import usePlayerState from "@/hooks/usePlayerState";
import PlayerContent from "@/components/elements/player/playerContent";

type Props = {

};

const PlayerWrapper = (props: Props) => {
    const {} = props;

    const { isVisiblePlayer } = usePlayerState();

    if (isVisiblePlayer) return null;
    return (
        <div className="fixed bottom-0 h-[72px] w-full bg-neutral-900">
            <PlayerContent />
        </div>
    );
}

export default PlayerWrapper;