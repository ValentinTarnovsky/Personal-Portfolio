import PropTypes from "prop-types";
import { useMemo } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import MyContext from "./MyContext";

import { es } from "../lang/es";
import { en } from "../lang/en";

const MyProvider = (props) => {
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

    const themeData = useMemo(() => {
        const theme = items.portfolioConfig && items.portfolioConfig.length > 0 ? items.portfolioConfig[0].theme : "";
        return theme === "dark" ? "dark" : "light";
    }, [items]);

    const langData = useMemo(() => {
        const lang = items.portfolioConfig && items.portfolioConfig.length > 0 ? items.portfolioConfig[1].lang : "";
        return lang === "en" ? en : es;
    }, [items]);

    const contextValue = useMemo(() => {
        return {
            portfolioConfig: items.portfolioConfig,
            setTheme,
            themeData,
            setLang,
            langData,
        };
    }, [items]);

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

MyProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MyProvider;