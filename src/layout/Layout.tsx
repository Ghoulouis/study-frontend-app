import { Box, Breakpoint } from "@mui/material";
import { ReactNode } from "react";

export const headerHeight = "68px";
export const sidebarWidth = "235px";
export const footerHeight = "50px";
export const breakPointLayout: Breakpoint = "lg";

export default function Layout({ children }: { children: ReactNode }) {
    return <Box>hello</Box>;
}
