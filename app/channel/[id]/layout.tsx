import React from 'react';
import Header from "@/components/elements/header";

type Props = {
    children: React.ReactNode;
};

const layout = (props: Props) => {
    const { children } = props;
    
    return (
        <div>
            <Header>
                {children}
            </Header>
        </div>
    );
}

export default layout;