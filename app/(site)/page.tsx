'use client'

import React from 'react';
import Category from "@/app/(site)/components/category";
import PagePadding from "@/components/elements/container/pagePadding";
import PlayListCarousel from "@/components/elements/playListCarousel";
import {dummyPlaylistArray} from "@/lib/dummyData";
import UserIcon from "@/components/userIcon";


const Page = async () => {

    const dummyPlaylistArray1 = [...dummyPlaylistArray];

    return (
        <PagePadding>
            <div className="min-h-[600px] z-20 relative">
                <div className="mt-9"></div>
                <Category />
                <div className="mt-12">
                {/* carousel */}
                <PlayListCarousel playlistArray={[...dummyPlaylistArray1]}
                                  Thumbnail={
                                    <div className="w-14 h-14">
                                      <UserIcon size="lg" />
                                    </div>
                                  }
                                  title="다시 듣기"
                                  subTitle="도도"
                />
                </div>
            </div>
        </PagePadding>
    );
}

export default Page;