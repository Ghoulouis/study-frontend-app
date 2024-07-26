import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { menu } from "../../configs/menu";

export default function Sidebar() {
    return (
        <Box sx={{ position: "relative", color: red[500] }}>
            {menu.map((item) => (
                <Box key={item.id}>{item.title}</Box>
            ))}
        </Box>
    );
}
