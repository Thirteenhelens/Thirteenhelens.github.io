import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";

import Avatar from "@mui/material/Avatar";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
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
      </div>

      <br />

      <Box
        sx={{
          width: 2 / 2,
          height: 700,
          backgroundColor: "primary.dark",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h2">Who am I?</Typography>

            <Typography variant="body1">
              As a lifelong gamer, I have a vested interest in technology. Not
              just overall, but all of the intricacies behind how things work.
              As I grew up, my intrigue increased and I started looking into how
              all of my favorite technologies seemed to magically work. Learning
              that real human people were behind all of this was a life-changing
              revelation because to me, it meant that if I talked to the
              computer in its own language it could perform this magic for me!
              From there, I started tinkering and building whatever I could get
              my hands on from my personal PC, to my mechanical keyboard. Beyond
              my technical fascination, the logical nature of computers
              motivated me to try and add personality and life to whatever I
              made.
            </Typography>
          </Grid>

          <br />

          <Grid item xs={6}>
            <Avatar
              alt="Jack Barrett"
              src="../senior-crouching-photo.jpeg"
              sx={{ width: 350, height: 350 }}
            />

            <Typography variant="h4">Jack Barrett</Typography>
            <Typography variant="overline">Software Engineer</Typography>
            <br />

            <IconButton
              aria-label="GitHub"
              onClick={() => {
                window.open("https://github.com/Thirteenhelens", "_blank");
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
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
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: 2 / 2,
          height: 700,
          backgroundColor: "primary.dark",
        }}
      >
        <Typography>Portfolio</Typography>
      </Box>

      <Box
        sx={{
          width: 2 / 2,
          height: 500,
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h2" className="centerTxt">
          Contact me
        </Typography>

        <br />
        <br />
        <br />
        <br />

        <Grid container>
          <Grid item xs={6}>
            <Card sx={{ width: 400, backgroundColor: "primary.dark" }}>
              <CardContent>
                <Stack
                  divider={<Divider orientation="horizontal" flexItem />}
                  spacing={2}
                >
                  <div>
                    <LocationOnIcon />
                    <Typography variant="h5" className="centerTxt">
                      Locale
                    </Typography>
                  </div>

                  <Typography className="centerTxt" variant="subtitle2">
                    Saint Paul, MN
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ width: 400, backgroundColor: "primary.dark" }}>
              <CardContent>
                <Stack
                  divider={<Divider orientation="horizontal" flexItem />}
                  spacing={2}
                >
                  <div>
                    <MailTwoToneIcon />
                    <Typography variant="h5" className="centerTxt">
                      Email
                    </Typography>
                  </div>

                  <Typography className="centerTxt" variant="subtitle2">
                    jbarrett1347@gmail.com
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body1"> &copy; Jack Barrett 2021</Typography>
      </Box>
    </div>
  );
}

export default App;
