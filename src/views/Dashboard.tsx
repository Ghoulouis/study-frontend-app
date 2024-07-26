import { Box, Button, Typography } from "@mui/material";

export default function Dashboard() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                overflowX: "hidden",
                bgcolor: "#0E0001",
            }}
        >
            <Typography variant="h1" mb={1}>
                Dashboard
            </Typography>

            <Button variant="outlined" color="primary" size="medium" href="/dashboard">
                Back to Home
            </Button>
        </Box>
    );
}
