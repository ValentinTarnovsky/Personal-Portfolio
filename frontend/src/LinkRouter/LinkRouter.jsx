import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useContext } from "react";

import Portfolio from "../pages/Portfolio/Portfolio";
import NoPage from "../pages/NoPage/NoPage";
import MyContext from "../contexts/MyContext";

const LinkRouter = () => {
    const { themeData } = useContext(MyContext);

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