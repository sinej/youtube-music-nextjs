'use client'

import React from 'react';
import { BarLoader } from "react-spinners";

type Props = {

};

const LoadingBar = (props: Props) => {
    const {} = props;
    return (
        <div className="flex flex-col items-center justify-center">
            <BarLoader color={"red"}
                       cssOverride={{ width: "100%" }}
            />
        </div>
    );
}

export default LoadingBar;