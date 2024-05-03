import { useEffect } from "react";
import "./app.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

import LinkRouter from "./LinkRouter/LinkRouter";
import MyProvaider from "./contexts/MyProvaider";

const App = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <MyProvaider>
            <LinkRouter/>
        </MyProvaider>
    );
};

export default App;