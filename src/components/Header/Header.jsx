import Box from "@mui/material/Box";

function Header() {
  return (
    <header>
      <Box
        sx={{
          width: 2 / 2,
          height: 75,
          backgroundColor: "primary.dark",
        }}
      >
        <p>Head</p>
      </Box>
    </header>
  );
}

export default Header;
