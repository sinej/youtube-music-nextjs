import { sleep } from '@/lib/utils';
import React from 'react';
import Header from "@/components/elements/header";

type Props = {
    children: React.ReactNode;
};

const Page = async (props: Props) => {
    const { children } = props;

    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}

export default Page;