'use client'

import React from 'react';
import {HashLoader} from "react-spinners";

type Props = {

};

const Error = (props: Props) => {
    const {} = props;
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <HashLoader color="red"/>
            <p>404</p>
            <div>잠시 후 다시 확인해주세요.</div>
        </div>
    );
}

export default Error;