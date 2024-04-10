'use client'

import React, {useEffect} from 'react';
import useUIState from "@/hooks/useUIState";
import Image from "next/image";

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
            <Image src={imageSrc} alt="image"/>
        </>
    );
}

export default HeaderBgChanger;