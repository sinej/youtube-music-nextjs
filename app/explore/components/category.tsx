import React from 'react';
import {FiBarChart, FiMusic, FiSmile} from "react-icons/fi";

type Props = {
    icon: React.ReactElement;
    label: string
};

const CategoryMenu = ({ icon, label }: Props) => {
    return (
        <div className="flex w-full h-[56px] py-4 px-6 flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800">
            {icon}
            {label}
        </div>
    )
}

const Category = () => {

    return (
        <div className="flex flex-col gap-4 w-full lg:flex-row">
            <CategoryMenu icon={<FiMusic color={"#AAAAAA"} />} label={'최신음악'}/>
            <CategoryMenu icon={<FiBarChart color={"#AAAAAA"} />} label={'차트'}/>
            <CategoryMenu icon={<FiSmile color={"#AAAAAA"} />} label={'분위기 및 장르'}/>
        </div>
    );
}

export default Category;