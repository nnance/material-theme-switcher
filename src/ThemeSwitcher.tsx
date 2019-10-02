import React from "react";

type ThemeSwitcherProps = {
  isLightTheme: boolean;
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = React.createContext<Partial<ThemeSwitcherProps>>({
  isLightTheme: true
});

const useSwitcher = () => {
  const [isLightTheme, setLightTheme] = React.useState(true);
  return {
    isLightTheme,
    setLightTheme
  };
};

export const ThemeSwitcherProvider: React.FC = props => {
  const value = useSwitcher();
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};
