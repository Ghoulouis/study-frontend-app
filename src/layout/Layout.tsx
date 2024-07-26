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
            <Box
                sx={{
                    width: sidebarWidth,
                    backgroundColor: "#f4f4f4", // Example background color
                    height: "100vh",
                    position: "fixed", // Fixed position for sidebar
                    left: 0,
                    boxShadow: "0px 0 px rgba(0,0,0,0.1)", // Add shadow for aesthetics
                    zIndex: 1200, // Ensure it's on top of content
                }}
            >
                <Sidebar />
            </Box>

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
