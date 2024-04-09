import React from 'react';
import Image from 'next/image';
import UserIcon from "@/components/userIcon";
import PagePadding from "@/components/elements/container/pagePadding";
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";

type Props = {
    children: React.ReactNode;
};

const Header = (props: Props) => {
    const { children } = props;
    return (
        <header className="relative overflow-y-auto w-full h-full">
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
            <section className="sticky">
                <PagePadding>
                    <div className="flex flex-row justify-between items-center h-[64px]">
                        {/*SearchSection*/}
                        <article className="h-[42px] min-w-[480px] flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]">
                            <div>
                                <FiSearch size={24}/>
                            </div>
                            <input type="text"
                                   placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                                   className="h-full w-full bg-transparent"
                            />
                        </article>
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