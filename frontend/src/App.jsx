import "./app.scss";

import LinkRouter from "./LinkRouter/LinkRouter";
import MyProvaider from "./contexts/MyProvaider";

const App = () => {
    return (
        <MyProvaider>
            <LinkRouter/>
        </MyProvaider>
    );
};

export default App;