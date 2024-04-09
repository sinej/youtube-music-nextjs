import { sleep } from '@/lib/utils';
import React from 'react';
import Header from "@/components/elements/header";
import Category from "@/app/(site)/components/category";
import PagePadding from "@/components/elements/container/pagePadding";


const Page = async () => {

    return (
        <PagePadding>
            <div className="min-h-[600px] z-20 relative">
              <div className="mt-9"></div>
                <Category />
                <div className="mt-12">

                </div>
            </div>
        </PagePadding>
    );
}

export default Page;