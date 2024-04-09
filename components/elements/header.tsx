import React from 'react';
import Image from 'next/image';
import UserIcon from "@/components/userIcon";

type Props = {
    children: React.ReactNode;
};

const Header = (props: Props) => {
    const { children } = props;
    return (
        <header className="relative overflow-y-auto w-full h-full">
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

            <section>
                <UserIcon/>
            </section>

            <section>{children}</section>
        </header>
    );
}

export default Header;