import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import bg from "../../../public/assets/images/featured-properties/featured-properties-bg.png";

import circleImg from "../../../public/assets/brenda-circle.png";

const About = () => {
  return (
    <Box style={{ backgroundImage: `url(${bg})`, height: "100vh", width: "100vw" }}>
      <Container sx={{ height: "100vh", padding: "100px 30px" }}>
        <Typography variant="h2" sx={{ marginBottom: "50px" }}>
          My Story
        </Typography>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Image src={circleImg} height={350} width={350} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5">
              Brenda Hernandez is a real estate investor which excels in
              customer service, sales, event planning, and hard work. This
              coupled with focus and determination has allowed her to
            </Typography>
            <br/><br/>

            <Typography variant="h5">
              After 23 years in corporate she retired early from her management
              position and now dedicates 100% of her focus building and hosting
              her short-term rental business. Her positive attitude and
              exceptional customer support serves to help her thrive in this
              industry with a successful 85% occupancy rate and over $113,000 in
              revenue year to date, on track to gross well over $125,000 figures
              by end of year.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5">
          Brenda’s goals; continue to expand her short-term rental portfolio and
          grow her STVR consulting business.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
