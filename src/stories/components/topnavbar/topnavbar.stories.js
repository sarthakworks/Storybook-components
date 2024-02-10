import "../../styles/main.scss";
import React, { useState, useEffect } from 'react';
import TopnavMobile from "./sub/TopnavMobile";
import TopnavDesktop from "./sub/TopnavDesktop";

export default {
    title: "Components/Core/topnavbar",
    parameters: { layout: "fullscreen" },
    tags: [],
};

export const Primary = (args) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (<header>
        {isMobile ? <TopnavMobile /> : <TopnavDesktop />}
    </header>);
};
