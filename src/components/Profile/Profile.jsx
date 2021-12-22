import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Profile() {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: "#235789",
      },
      secondary: {
        main: "#D6E5E3",
      },
    },
  });
  return (
    <Box
      sx={{
        width: 2 / 2,
        height: 700,
        backgroundColor: "primary.main",
      }}
    >
      <Stack direction="row" spacing={14}>
        <Box sx={{ pt: 15, pl: 10 }}>
          <Avatar
            alt="Jack Barrett"
            src="../senior-crouching-photo.jpeg"
            sx={{ width: 350, height: 350 }}
          />

          <div className="centerTxt">
            <Typography variant="h4" sx={{ mt: 2 }}>
              Jack Barrett
            </Typography>
            <Typography variant="overline">Software Developer</Typography>
            <br />

            <ThemeProvider theme={buttonTheme}>
              <IconButton
                color="primary"
                aria-label="GitHub"
                onClick={() => {
                  window.open("https://github.com/Thirteenhelens", "_blank");
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="LinkedIn"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/jack-barrett-0b7bba1b0/",
                    "_blank"
                  );
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </ThemeProvider>
          </div>
        </Box>

        <Box sx={{ pt: 25, pr: 10 }}>
          <Typography variant="h2" className="centerTxt">
            Who am I?
          </Typography>

          <br />

          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Good question! As a lifelong gamer, I have a vested interest in
            technology. Not just overall, but all of the intricacies behind how
            things work. As I grew up, my intrigue increased and I started
            looking into how all of my favorite technologies seemed to magically
            work. Learning that real human people were behind all of this was a
            life-changing revelation because to me, it meant that if I talked to
            the computer in its own language it could perform this magic for me!
            From there, I started tinkering and building whatever I could get my
            hands on from my personal PC, to my mechanical keyboard. Beyond my
            technical fascination, the logical nature of computers motivated me
            to try and add personality and life to whatever I made.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Profile;
