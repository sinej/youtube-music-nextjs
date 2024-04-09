import React from 'react';

type Props = {
    onCLickIcon?: () => void;
    icon: React.ReactNode;
};

const IconButton = (props: Props) => {
    const { icon, onCLickIcon = () => {} } = props;
    return (

        <div
            className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
            onClick={onCLickIcon}
        >
            {icon}
        </div>
    );
}

export default IconButton;