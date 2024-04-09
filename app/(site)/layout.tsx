import React from 'react';
import Header from "@/components/elements/header";

type Props = {
    children: React.ReactNode;
};

const layout = (props: Props) => {
    const { children } = props;

    return (
        <div className="w-full h-full">
            <Header>
                {children}
            </Header>
        </div>
    );
}

export default layout;