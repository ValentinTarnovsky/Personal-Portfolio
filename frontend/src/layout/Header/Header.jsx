import { Box } from "@mui/material";
import "./header.scss";

import Navbar from "../Navbar/Navbar";
import ScrollLine from "../../components/ScrollLine";

const Header = () => {
    return (
        <Box
            component="header"
            className="header">
            <Navbar/>
            <ScrollLine/>
        </Box>
    );
};

export default Header;