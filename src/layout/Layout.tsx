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
                display: "flex",
            }}
        >

            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    marginLeft: sidebarWidth,
                    padding: 2, // Add padding for main content
                    transition: "margin-left 0.3s ease", // Smooth transition
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
