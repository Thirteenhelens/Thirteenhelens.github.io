import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";

function Contact() {
  return (
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
        
      <Stack direction="row" spacing={14} justifyContent="center">
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
  );
}

export default Contact;
