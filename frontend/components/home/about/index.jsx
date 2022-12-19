import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import bg from "../../../public/assets/images/featured-properties/featured-properties-bg.png";

import circleImg from "../../../public/assets/brenda-circle.png";

const About = () => {
  return (
    <Box
      sx={{
        background: `url(${bg.src})`,
        height: { md: "100vh"},
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Container
        sx={{
          height: { xs: "100%", md: "100vh" },
          padding: "100px 0",
          zIndex: 2000,
        }}
      >
        <Box sx={{ zIndex: 2000, position: "relative" }}>
          <Typography variant="h2" sx={{ marginBottom: "50px" }}>
            My Story
          </Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Image src={circleImg} height={300} width={300} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">
                Brenda Hernandez is a real estate investor which excels in
                customer service, sales, event planning, and hard work. This
                coupled with focus and determination has allowed her to
              </Typography>
              <br />
              <br />

              <Typography variant="h5">
                After 23 years in corporate she retired early from her
                management position and now dedicates 100% of her focus building
                and hosting her short-term rental business.
              </Typography>
              <br />
              <br />
            </Grid>
          </Grid>
          <br />
          <br />

          <Typography variant="h5">
            Her positive attitude and exceptional customer support serves to
            help her thrive in this industry with a successful 85% occupancy
            rate and over $113,000 in revenue year to date, on track to gross
            well over $125,000 figures by end of year.
          </Typography>
          <br />
          <br />

          <Typography variant="h5">
            Brenda’s goals; continue to expand her short-term rental portfolio
            and grow her STVR consulting business.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            opacity: "60%",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        />
      </Container>
    </Box>
  );
};

export default About;
