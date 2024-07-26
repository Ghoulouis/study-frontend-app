import { Box, Button, Typography } from "@mui/material";

export default function NotFound() {
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
                404
            </Typography>
            <Typography mb={3}>Oops, page not found.</Typography>
            <Button variant="outlined" color="primary" size="medium" href="/swap">
                Back to Home
            </Button>
        </Box>
    );
}
