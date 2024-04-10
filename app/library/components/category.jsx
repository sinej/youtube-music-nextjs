'use client'

import React, {useState} from 'react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu, DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {AiFillCaretDown} from "react-icons/ai";
import {FiCheck} from "react-icons/fi";



const Category = (props) => {
    const libraryCategory = [
      "재생목록",
      "팟캐스트",
      "노래",
      "앨범",
      "아티스트",
    ];

    return (
        <div className="flex flex-row justify-between gap-4 flex-wrap">
            <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
                {libraryCategory.map(item => (
                    <li key={item}
                        className={"h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,.2)] hover:bg-[rgba(144,144,144,.45)] cursor-pointer"}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex flex-row items-center justify-between w-[162px] h-[42px] p-4 bg-neutral-700 border-neutral-400 rounded-3xl text-[14px] border">
                            <div>최근활동</div>
                            <span><AiFillCaretDown/></span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[300px] bg-neutral-800 border border-neutral-500">
                        <DropdownMenuLabel className="p-4">정렬 기준</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-neutral-700" />
                        <DropdownMenuCheckboxItem className="p-4">
                            <span className="min-w-10">
                              <FiCheck size={20} />
                            </span>
                            최근 활동
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem className="p-4">
                            <span className="min-w-10"></span>
                          최근에 저장됨
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem className="p-4">
                            <span className="min-w-10"></span>
                          최근 재생한 음악
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default Category;