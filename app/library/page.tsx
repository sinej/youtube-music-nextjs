 import React from 'react';
 import PagePadding from "@/components/elements/container/pagePadding";
 import Category from "@/app/library/components/category";
 import PlayListCarousel from "@/components/elements/playlist/playListCarousel";
 import PlayListCard from "@/components/elements/playlist/playListCard";
 import {getRandomElementFromArray} from "@/lib/utils";
 import {dummyPlaylistArray} from "@/lib/dummyData";

type Props = {

};

const Page = (props: Props) => {
    const {} = props;
    const libraryList = getRandomElementFromArray(dummyPlaylistArray);
    return (
        <PagePadding>
            <div className="mt-9"></div>
            <Category/>
            <div className="mt-12"/>
            <section className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 ">
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
                <PlayListCard {...libraryList} />
            </section>
        </PagePadding>
    );
}

 export default Page;