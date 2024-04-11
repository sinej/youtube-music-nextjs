'use client'

import React, {useEffect} from 'react';
import useUIState from "@/hooks/useUIState";

interface Props {
    imageSrc: string;
};

const HeaderBgChanger = (props: Props) => {
    const { imageSrc} = props;

    const { setHeaderImageSrc } = useUIState();

    useEffect(() => {
        if(imageSrc) setHeaderImageSrc(imageSrc);
    }, []);


    return (
        <>
        </>
    );
}

export default HeaderBgChanger;