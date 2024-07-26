import { Box, colors } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { headerHeight, sidebarWidth } from "../Layout";

export default function HomeLayout() {
    return (
        <Box sx={{ position: "relative", color: "red" }}>
            <Sidebar headerHeight={headerHeight} sidebarWidth={sidebarWidth} />
        </Box>
    );
}
