'use client'

import React from 'react';
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import {useRouter} from "next/navigation";
import IconButton from "@/components/elements/button/iconButton";
import {IoCloseOutline} from "react-icons/io5";

type Props = {
    isInDrawer: boolean;
    onClickClose?: () => void;
};

const Logo = (props: Props) => {
    const { isInDrawer = false, onClickClose = () => {} } = props;
    const { push } = useRouter()

    const onClickLogo = () => {
        // home으로 이동하는 로직
        push('/')
    }
    const onCLickMenu = () => {
        // home으로 이동하는 로직
        push('/')
    }

    return (
        <section className="flex flex-row items-center gap-3">
            {isInDrawer ?
                <IconButton onCLickIcon={onClickClose} icon={<IoCloseOutline size={30} />}/> :
                <IconButton onCLickIcon={onCLickMenu} icon={<RxHamburgerMenu size={20} />}/>
            }
            <div className="cursor-pointer" onClick={onClickLogo}>
                <Image src="/main-logo.svg" alt="logo" width={100} height={30} />
            </div>
        </section>
    );
}

export default Logo;