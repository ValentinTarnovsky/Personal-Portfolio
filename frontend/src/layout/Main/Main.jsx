import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./main.scss";

import Portfolio from "../../pages/Portfolio/Portfolio";
import NoPage from "../../pages/NoPage/NoPage";

const Main = () => {
    return (
        <Box
            component="main"
            className="main">
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

export default Main;