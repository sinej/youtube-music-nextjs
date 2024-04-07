'use client'

import { createBrowserRouter } from "react-router-dom"
import Home from "@/src/pages/home/page";
import Playlist from "@/src/pages/playlist";
import Library from "@/src/pages/library";
import Explore from "@/src/pages/explore";
import Channel from "@/src/pages/channel/[id]";

export const appRouter = () =>
    createBrowserRouter([
        {
            element: null,
            errorElement: <div>error</div>,
            // loader: async () => {
            //     return await featureToggleLoader(appStore.dispatch)
            // },
            children: [
                {
                    path: '/playlist',
                    element: (
                        <Playlist />
                    ),
                },
                {
                    path: '/library',
                    element: (
                        <Library />
                    ),
                },
                {
                    path: '/explore',
                    element: (
                        <Explore />
                    ),
                },
                {
                    path: '/channel/:channelId',
                    element: <Channel />,
                },
            ],
        },
        {
            // element: layoutWithSidebar,
            errorElement: <div>error</div>,
            // loader: async () => {
            //     return await featureToggleLoader(appStore.dispatch)
            // },
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
            ],
        },
    ])