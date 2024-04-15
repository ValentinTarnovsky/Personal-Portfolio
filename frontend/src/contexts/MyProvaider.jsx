import PropTypes from "prop-types";
import { useMemo } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import MyContext from "./MyContext";

const MyProvaider = (props) => {
    const { children } = props;
    const { items, setItem } = useLocalStorage({ portfolioConfig: [{ theme: "dark" }, { lang: "en" }] });

    const setTheme = (theme) => {
        if (theme === items.portfolioConfig[0].theme) {
            return;
        }
        const currentPortfolioConfig = items.portfolioConfig;

        const updatedPortfolioConfig = [
            { ...currentPortfolioConfig[0], theme: theme },
            ...currentPortfolioConfig.slice(1),
        ];

        setItem("portfolioConfig", updatedPortfolioConfig);
    };

    const setLang = (lang) => {
        if (lang === items.portfolioConfig[1].lang) {
            return;
        }
        const currentPortfolioConfig = items.portfolioConfig;

        const updatedPortfolioConfig = [
            ...currentPortfolioConfig.slice(0, 1),
            { ...currentPortfolioConfig[1], lang: lang },
            ...currentPortfolioConfig.slice(2),
        ];

        setItem("portfolioConfig", updatedPortfolioConfig);
    };

    const contextValue = useMemo(() => {
        return {
            portfolioConfig: items.portfolioConfig,
            setTheme,
            setLang,
        };
    }, [items]);

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

MyProvaider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MyProvaider;