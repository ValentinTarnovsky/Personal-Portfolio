import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";

import Portfolio from "../pages/Portfolio/Portfolio";
import NoPage from "../pages/NoPage/NoPage";
import MyContext from "../contexts/MyContext";

const LinkRouter = () => {
    const { themeData } = useContext(MyContext);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--scrollbar-width", "0.375rem");
        root.style.setProperty("--scrollbar-track-background", themeData === "light" ? "#c8c8c9" : "#0c0f1b");
        root.style.setProperty("--scrollbar-thumb-background", themeData === "light" ? "#1ca4ff" : "#f4b944");
        root.style.setProperty("--scrollbar-thumb-border-radius", ".25rem");
    }, [themeData]);

    return (
        <Box
            className={themeData === "light" && "light-theme"}
            id="config-manager">
            <Routes>
                <Route
                    path="/"
                    element={<Portfolio/>}/>
                <Route
                    path="*"
                    element={<NoPage/>}/>
            </Routes>
        </Box>
    );
};

export default LinkRouter;