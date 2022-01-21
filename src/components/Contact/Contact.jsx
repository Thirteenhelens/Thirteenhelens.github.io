// MUI Imports:
import {
  Box,
  Grid,
  Card,
  Stack,
  Divider,
  Typography,
  CardContent,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

// Other Imports:
import { isMobile } from "react-device-detect";

function Contact() {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: "#9799CA",
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
        backgroundColor: "primary.dark",
      }}
    >
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={12}>
          <Typography variant="h2" className="centerTxt" sx={{ pt: 8, pb: 10 }}>
            More me
          </Typography>
        </Grid>

        {/* TOP GRID SPACER */}
        <Grid item xs={0.5} md={2} lg={2} />

        <Grid item xs={11.5} md={3} lg={3}>
          <Card
            sx={{
              width: 369,
              backgroundColor: "secondary",
            }}
          >
            <CardContent>
              <Stack
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
              >
                <div className="centerTxt">
                  <ThemeProvider theme={buttonTheme}>
                    <LocationOnTwoToneIcon color="primary" />
                  </ThemeProvider>
                  <Typography variant="h5">Locale</Typography>
                </div>

                <Typography className="centerTxt" variant="subtitle2">
                  Saint Paul, MN
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* If on a mobile device, there is now spacing between the cards */}
        {isMobile && <Grid item xs={12} sx={{ p: 2 }} />}

        {/* MIDDLE GRID SPACER */}
        <Grid item xs={0.5} md={1.5} lg={2} />

        <Grid item xs={11.5} md={3} lg={3}>
          <Card
            sx={{
              width: 369,
              backgroundColor: "secondary",
            }}
          >
            <CardContent>
              <Stack
                spacing={2}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                <div className="centerTxt">
                  <ThemeProvider theme={buttonTheme}>
                    <MailTwoToneIcon color="primary" />
                  </ThemeProvider>
                  <Typography variant="h5">Email</Typography>
                </div>

                <Typography className="centerTxt" variant="subtitle2">
                  Jbarrett1347@gmail.com
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* BOTTOM GRID SPACER */}
        <Grid item xs={0.5} md={2} lg={2} />

        <Grid item xs={12} md={12}>
          <Typography variant="body1" className="centerTxt" sx={{ mt: 10 }}>
            &copy; Jack Barrett 2021
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
