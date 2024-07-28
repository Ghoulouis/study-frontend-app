import { Box, Breakpoint } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";

export const headerHeight = "68px";
export const sidebarWidth = "235px";
export const footerHeight = "50px";
export const breakPointLayout: Breakpoint = "lg";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Box
            sx={{
                minHeight: 1,
                display: "flex",
                flexDirection: { xs: "row", lg: "row" },
            }}
        >
            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    minHeight: 1,
                    display: "flex",
                    flexDirection: "column",
                    px: 2,
                    width: `calc(100% )`,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
