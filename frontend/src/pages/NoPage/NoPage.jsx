import { Box } from "@mui/material";
import "./nopage.scss";

const getURL = () => {
    const index = window.location.href.indexOf("/", 7);
    const url = window.location.href.slice(0, index);
    return url;
};

const NoPage = () => {
    return (
        <Box className="nopage">
            <Box className="nopage__container">
                <h1 className="nopage__subtitle">Error 404</h1>
                <h1 className="nopage__title">Oops!</h1>
                <p className="nopage__disclaimer">Sorry, the page you are looking for could not be found.</p>
                <p className="nopage__linkback"><a href={getURL()}>Go back to the home page</a></p>
            </Box>
        </Box>
    );
};

export default NoPage;