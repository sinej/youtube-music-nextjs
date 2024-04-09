'use client'

import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import UserIcon from "@/components/userIcon";
import PagePadding from "@/components/elements/container/pagePadding";
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";
import {Drawer, DrawerContent, DrawerFooter, DrawerDescription, DrawerHeader, DrawerClose, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import Logo from "@/components/elements/logo";
import Navigator from "@/components/elements/navigator";
import {cn} from "@/lib/utils";

type Props = {
    children: React.ReactNode;
};

const HeaderDrawer = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent className="w-[240px] h-full">
                {/*  로고  */}
                {/*  네비게이션, 재생목록  */}
                <div className="py-3">
                    <div className="px-3">
                        <Logo isInDrawer={true}
                              onClickClose={() => setIsOpen(false)}
                        />
                    </div>
                    <Navigator />
                </div>
              </DrawerContent>
        </Drawer>
    )
}

const Header = (props: Props) => {
    const { children } = props;
    const [isScrolled, setIsScrolled] = useState(false);
    const headRef=  useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = headRef?.current?.scrollTop;
            setIsScrolled(scrollValue > 0);
        }

        headRef?.current?.addEventListener("scroll", handleScroll)
        return () => {
            headRef?.current?.removeEventListener("scroll", handleScroll)
        }
    }, []);


    return (
        <header className="relative overflow-y-auto w-full h-full" ref={headRef}>
            {/*bgSection*/}
            <section className="absolute top-0 w-full">
                <div className="relative h-[400px] w-full">
                    <Image src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                           fill
                           alt="mediaItem"
                           className="object-cover"
                    />
                    <div className="absolute h-[400px] bg-black top-0 opacity-40 w-full"></div>
                    <div className="absolute h-[400px] bg-gradient-to-t from-black top-0 w-full"></div>
                </div>
            </section>

            {/*SearchSection*/}
            <section className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}>
                <PagePadding>
                    <div className="flex flex-row justify-between items-center h-[64px]">
                        {/*SearchSection*/}
                        <article className={cn("h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]", isScrolled && "border border-neutral-500")}>
                            <div>
                                <FiSearch size={24}/>
                            </div>
                            <input type="text"
                                   placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                                   className="h-full w-full bg-transparent"
                            />
                        </article>

                        <HeaderDrawer>
                            <article className="lg:hidden">
                                <Logo />
                            </article>
                        </HeaderDrawer>

                        <article className="flex flex-row gap-6 items-center">
                            <FaChromecast size={26} />
                            <UserIcon />
                        </article>
                    </div>
                </PagePadding>
            </section>

            <section>{children}</section>
        </header>
    );
}

export default Header;