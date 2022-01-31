import { isMobile } from "react-device-detect";
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
        {/* End of Grid item #1 */}

        <Grid item xs={0.5} md={1} />
        {/* End of Grid item #2 */}

        <Grid item xs={12} md={4} sx={{ pb: 4 }}>
          <Typography variant="h3" className="centerTxt" sx={{ pb: 2 }}>
            From The Apple Tree
          </Typography>
          <br />
          <br />
          <Typography variant="h6" className="centerTxt">
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
            Check it out on GitHub
          </Button>
        </Grid>
        {/* End of Grid item #3 */}

        <Grid item xs={1} md={2} />
        {/* End of Grid item #4 */}

        <Grid item xs={12} md={4}>
          {isMobile ? (
            <iframe
              title="Presentation of the product"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprimedigitalacademy%2Fvideos%2F299468172061362%2F&show_text=false&t=6286"
              width="350"
              height="190"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
            />
          ) : (
            <iframe
              title="Presentation of the product"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprimedigitalacademy%2Fvideos%2F299468172061362%2F&show_text=false&width=560&t=6286"
              // width="850"
              // height="500"
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
            />
          )}
        </Grid>
        {/* End of Grid item #5 */}

        <Grid item xs={0.5} md={1} />
        {/* End of Grid item #6 */}

        {/* HALFWAY POINT */}
        <Grid item xs={12}>
          <br /> <br />
          
        </Grid>

        <Grid item md={1} />

        <Grid item xs={12} md={4}>
          {isMobile ? (
            <img
              width="350"
              height="190"
              src="../SC_LANG_MAP_SC.png"
              alt="South Carolina Language Map homepage screenshot"
            />
          ) : (
            <img
              // width="850"
              // height="500"
              width="100%"
              height="100%"
              src="../SC_LANG_MAP_SC.png"
              alt="South Carolina Language Map homepage screenshot"
            />
          )}
        </Grid>
        {/* End of Grid item #7 */}

        <Grid item md={2} />
        {/* End of Grid item #8 */}

        <Grid item xs={12} md={4}>
          <Typography variant="h3" className="centerTxt">
            South Carolina Language Map
          </Typography>
          <br />
          <br />
          <Typography variant="h6" className="centerTxt">
            Is a Full Stack web application for collecting and displaying sites
            in South Carolina where specific languages are spoken, and providing
            access to that data by both researchers and casual users. Sites are
            displayed on a map, are searchable, and display the details of the
            language spoken there.
          </Typography>
          <br />
          <Button
            size="large"
            color="secondary"
            variant="contained"
            onClick={() => {
              window.open(
                "https://github.com/Thirteenhelens/South_Carolina_Language_Map",
                "_blank"
              );
            }}
            style={{ margin: "0 auto", display: "flex" }}
          >
            Check it out on GitHub
          </Button>
          <br />
          <Button
            size="large"
            color="secondary"
            variant="contained"
            onClick={() => {
              window.open("https://languagemapsc.herokuapp.com", "_blank");
            }}
            style={{ margin: "0 auto", display: "flex" }}
          >
            Visit the site
          </Button>
        </Grid>
        {/* End of Grid item #9 */}

        <Grid item md={1} />
        {/* End of Grid item #10 */}
      </Grid>
    </Box>
  );
}

export default Portfolio;
