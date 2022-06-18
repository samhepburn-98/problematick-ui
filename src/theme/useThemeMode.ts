import { useContext } from "react";
import { ThemeModeContext } from "./ThemeModeProvider";

const useThemeMode = () => useContext(ThemeModeContext);

export default useThemeMode;

// Usage:
// const { themeMode, onChangeThemeMode } = useThemeMode();
