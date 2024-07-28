import { ReactNode, useMemo } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import { palette } from "./palette";

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    "*": {
                        boxSizing: "border-box",
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
