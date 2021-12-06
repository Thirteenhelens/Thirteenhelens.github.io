import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

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
        height: 500,
        backgroundColor: "primary.dark",
      }}
    >
      <Typography variant="h2" className="centerTxt" sx={{ pt: 8 }}>
        More me
      </Typography>

      <br />
      <br />
      <br />
      <br />

      <Stack direction="row" spacing={14} justifyContent="center">
        <Card
          sx={{
            width: 400,
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

        <Card
          sx={{
            width: 400,
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
      </Stack>
      <Typography variant="body1" className="centerTxt" sx={{ mt: 10 }}>
        &copy; Jack Barrett 2021
      </Typography>
    </Box>
  );
}

export default Contact;
