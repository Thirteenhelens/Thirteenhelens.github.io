import {
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        pb: 8,
        pt: 10,
        width: 2 / 2,
        backgroundColor: "primary.main",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={5}>
          <Stack variant="column" className="centerTxt">
            <div className='profileContainer'>
              <img
                alt="Me Crouching. I am looking cool."
                src="../senior-crouching-photo.jpeg"
                className="profileImage"
              />
            </div>
            <Box className="belowAvatar">
              <Typography variant="h4" sx={{ mt: 2 }}>
                Jack Barrett
              </Typography>
              <Typography variant="overline">Software Developer</Typography>

              <Grid item md={12}>
                <ThemeProvider theme={buttonTheme}>
                  <IconButton
                    color="primary"
                    aria-label="GitHub"
                    onClick={() => {
                      window.open(
                        "https://github.com/Thirteenhelens",
                        "_blank"
                      );
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
              </Grid>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ pt: 10 }}>
            <Typography variant="h2" className="centerTxt">
              Who am I?
            </Typography>

            <br />

            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Good question! As a lifelong gamer, I have a vested interest in
              technology. Not just overall, but all of the intricacies behind
              how things work. As I grew up, my intrigue increased and I started
              looking into how all of my favorite technologies seemed to
              magically work. Learning that real human people were behind all of
              this was a life-changing revelation because to me, it meant that
              if I talked to the computer in its own language it could perform
              this magic for me! From there, I started tinkering and building
              whatever I could get my hands on from my personal PC, to my
              mechanical keyboard. Beyond my technical fascination, the logical
              nature of computers motivated me to try and add personality and
              life to whatever I made.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
