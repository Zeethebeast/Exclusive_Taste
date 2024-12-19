import { Dispatch, SetStateAction, createContext } from "react";

type themeContext = {
    darkTheme: boolean;
    setdarkTheme: Dispatch<SetStateAction<boolean>>;
};

const themeContext = createContext<themeContext> ({
    darkTheme: false,
    setdarkTheme: () => null,
});

export default themeContext;

