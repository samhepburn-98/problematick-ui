import { ReactNode, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
    createTheme,
    StyledEngineProvider,
    ThemeOptions,
    ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

import palette from "./palette";
import useThemeMode from "./useThemeMode";


// ----------------------------------------------------------------------

type Props = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
    const { themeMode } = useThemeMode();

    const isLight = themeMode === "light";

    const themeOptions: ThemeOptions = useMemo(
        () => ({
            palette: isLight ? palette.light : palette.dark,
            shape: { borderRadius: 8 },
        }),
        [isLight]
    );

    const theme = createTheme(themeOptions);

    // theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeProvider;
