'use client'
import React from 'react';
import {sleep} from "@/lib/utils";


const Page = async () => {
    await sleep(2000)

    throw new Error("my error")


    return (
        <div>
            Page
        </div>
    );
}

export default Page;