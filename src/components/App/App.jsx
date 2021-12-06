import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";

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

      {/* <img src="../wow_crazy.jpg" alt="Practically a concrete wall" style={{width:1440}} /> */}

      <br />

      <Box
        sx={{
          width: 2 / 2,
          height: 700,
          backgroundColor: "primary.dark",
        }}
      >
        <Stack direction="row" spacing={14}>
          <Box sx={{ pt: 15, pl: 10 }}>
            <Avatar
              alt="Jack Barrett"
              src="../senior-crouching-photo.jpeg"
              sx={{ width: 350, height: 350 }}
            />

            <div className="meTXT">
              <Typography variant="h4" sx={{ mt: 2 }}>
                Jack Barrett
              </Typography>
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
            </div>
          </Box>

          <Box sx={{ pt: 25, pr: 10 }}>
            <Typography variant="h2" className="whoTXT">
              Who am I?
            </Typography>

            <br />

            <Typography variant="body1" className="whoTXT">
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
        </Stack>
      </Box>

      <br />

      <Box
        sx={{
          width: 2 / 2,
          height: 700,
          backgroundColor: "primary.dark",
        }}
      >
        <Typography>Portfolio</Typography>
      </Box>

      <br />

      <Box
        sx={{
          width: 2 / 2,
          height: 500,
          backgroundColor: "primary.dark",
        }}
      >
        <Typography variant="h2" className="centerTxt" sx={{ pt: 8 }}>
          Contact me
        </Typography>

        <br />
        <br />
        <br />
        <br />

        <Stack
          direction="row"
          spacing={14}
          justifyContent="center"
        >
          <Card
            sx={{
              width: 400,
              //  backgroundColor: "primary.dark",
            }}
          >
            <CardContent>
              <Stack
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
              >
                <div className="centerTxt">
                  <LocationOnIcon />
                  <Typography variant="h5">Locale</Typography>
                </div>

                <Typography className="centerTxt" variant="subtitle2">
                  Saint Paul, MN
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: 400,
              //  backgroundColor: "primary.dark",
            }}
          >
            <CardContent>
              <Stack
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
              >
                <div className="centerTxt">
                  <MailTwoToneIcon />
                  <Typography variant="h5">Email</Typography>
                </div>

                <Typography className="centerTxt" variant="subtitle2">
                  jbarrett1347@gmail.com
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Typography variant="body1" className="centerTxt" sx={{ mt: 10 }}>
          &copy; Jack Barrett 2021
        </Typography>
      </Box>
    </div>
  );
}

export default App;
