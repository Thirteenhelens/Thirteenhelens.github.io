import { Box, Grid, Button, Typography } from "@mui/material";

function Portfolio() {
  return (
    <Box
      sx={{
        pb: 15,
        width: 2 / 2,
        backgroundColor: "primary.light",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" className="centerTxt" sx={{ pt: 8, pb: 10 }}>
            Portfolio
          </Typography>
        </Grid>
        <Grid item xs={0.5} md={0.5} />
        <Grid item xs={12} md={5} sx={{ pb: 4 }}>
          <Typography variant="h4" className="centerTxt" sx={{ pb: 2 }}>
            From The Apple Tree
          </Typography>
          <Typography variant="subtitle1" className="centerTxt">
            Is an application aimed at the non-tech-savvy Apple user on the hunt
            for a new computer. With an account, a user can peruse Apple's
            product lineup through a simple table view, or recommend devices
            through a questionnaire. Users also have the ability to compare two
            devices, and 'favorite' ones that they are interested in to view or
            compare later on. This app helps the user navigate the confusing
            world of buying a computer and can help save them big in the long
            run.
          </Typography>
          <br />
          <Button
            size="medium"
            color="secondary"
            variant="contained"
            onClick={() => {
              window.open(
                "https://github.com/Thirteenhelens/From_the_Apple_Tree",
                "_blank"
              );
            }}
            style={{ margin: "0 auto", display: "flex" }}
          >
            Check it out
          </Button>
        </Grid>

        <Grid item xs={1} md={1} />

        <Grid item xs={12} md={5}>
          <iframe
            title="Presentation of the product"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprimedigitalacademy%2Fvideos%2F299468172061362%2F&show_text=false&width=560&t=6286"
            width="560"
            height="314"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
