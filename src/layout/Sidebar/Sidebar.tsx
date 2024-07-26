import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { menu } from "../../configs/menu";

export default function Sidebar() {
    return (
        <Box sx={{ position: "relative", color: red[500] }}>
            <Typography>Sidebar</Typography>
        </Box>
    );
}
