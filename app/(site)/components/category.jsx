'use client'

import React from 'react';
import useUIState from "@/hooks/useUIState";
import {homeCategoryList} from "@/lib/dummyData";
import {cn} from "@/lib/utils";

const Category = (props) => {

    const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } = useUIState()
    const onClickCategory = (item) => {
        if(homeCategory === item.label) {
            setHeaderImageSrc("");
            setHomeCategory("");
        } else {
            setHeaderImageSrc(item.src);
            setHomeCategory(item.label);
        }
    }

    return (
        <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
          {homeCategoryList.map(item => (
            <li key={item.label}
                       className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,.2)] hover:bg-[rgba(144,144,144,.45)] cursor-pointer", item.label === homeCategory && "bg-white text-black hover:bg-white")}
                       onClick={() => onClickCategory(item)}
            >
                {item.label}
            </li>
          ))}
        </ul>
    );
}

export default Category;