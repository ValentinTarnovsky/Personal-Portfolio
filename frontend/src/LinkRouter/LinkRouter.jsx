import { Route, Routes } from "react-router-dom";

import Portfolio from "../pages/Portfolio/Portfolio";
import NoPage from "../pages/NoPage/NoPage";

const LinkRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Portfolio/>}/>
            <Route
                path="*"
                element={<NoPage/>}/>
        </Routes>
    );
};

export default LinkRouter;