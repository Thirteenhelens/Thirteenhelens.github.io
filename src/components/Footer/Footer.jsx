import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: 2 / 2,
        backgroundColor: "secondary.dark",
      }}
    >
      <Typography
        variant="h5"
        className="centerTxt"
        color="primary.dark"
        sx={{ p: 2 }}
      >
        Made by: Jack Barrett 2021
      </Typography>
    </Box>
  );
}

export default Footer;
