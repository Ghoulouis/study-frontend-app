import { alpha, Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { menu } from "../../configs/menu";
import LinkCustom from "../../components/linkCustom/LinkCustom";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { sidebarWidth } from "../Layout";

export default function Sidebar() {
    const { pathname } = useLocation();

    return (
        <Box
            sx={{
                height: "100vh",
                width: sidebarWidth,
                py: 2,
                px: 1.5,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",

                bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
            }}
        >
            <Box sx={{ pt: 3 }}>
                {menu.map((item, index) => {
                    return <MainMenuItem index={index} pathname={pathname} key={"menu" + index} />;
                })}
            </Box>
        </Box>
    );
}

function MainMenuItem({ pathname, index }: { pathname: string; index: number }) {
    const item = menu[index];
    const active = item.url === pathname;
    return (
        <LinkCustom href={item.url} type={item.type} target={item.target}>
            <Box
                sx={{
                    px: 2.5,
                    ...(active && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                        color: "primary.main",
                        "& svg": {
                            color: "primary.main",
                        },
                        ":hover": {
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
                        },
                    }),
                    // ":hover": {
                    //     borderRadius: 1.5,
                    //     bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    // },
                }}
            >
                {item.title}
            </Box>
        </LinkCustom>
    );
}
