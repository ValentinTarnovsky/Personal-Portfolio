import { Box } from "@mui/material";
import { useState } from "react";

const ScrollLine = () => {

    const [ percentScrolled, setPercentScrolled ] = useState(0);

    const fillscrollline = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        setPercentScrolled((scrolled / (fullHeight - windowHeight)) * 100);
    };

    window.addEventListener("scroll", fillscrollline);
    return (
        <Box
            className="scroll-line"
            sx={{ width: `${percentScrolled}%` }}></Box>
    );
};

export default ScrollLine;