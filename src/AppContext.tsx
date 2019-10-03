import React from "react";

type AppProps = {
  isLightTheme: boolean;
  isAuthenticated: boolean;
};

const initialProps = (): AppProps => ({
  isLightTheme: true,
  isAuthenticated: false
});

const copyProps = (newVal: Partial<AppProps>) => (current: AppProps) => {
  return { ...current, ...newVal };
};

export const AppContext = React.createContext({
  props: initialProps(),
  setLightTheme: (val: boolean) => {},
  setAuthenticated: (val: boolean) => {}
});

export const useAppContext = () => {
  const [props, setProps] = React.useState(initialProps());

  const setLightTheme = (val: boolean) =>
    setProps(copyProps({ isLightTheme: val }));

  const setAuthenticated = (val: boolean) =>
    setProps(copyProps({ isAuthenticated: val }));

  return {
    props,
    setLightTheme,
    setAuthenticated
  };
};

export const AppContextProvider: React.FC = props => (
  <AppContext.Provider value={useAppContext()}>
    {props.children}
  </AppContext.Provider>
);
