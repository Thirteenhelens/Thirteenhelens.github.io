import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Contact from "../Contact/Contact";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import Profile from "../Profile/Profile";

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

      <Profile/>

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

      <Contact/>
      
    </div>
  );
}

export default App;
