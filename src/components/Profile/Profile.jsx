import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Profile() {
  return (
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
