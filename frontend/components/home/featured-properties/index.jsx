import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Box, Container, Typography } from "@mui/material";

import bg from "../../../public/assets/images/featured-properties/featured-properties-bg.png";

const FeaturedProperties = () => {
  return (
    <Container sx={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}>
      <Box>
        <Typography variant="h2">Featured Properties</Typography>
        <Carousel showArrows={true} infiniteLoop={true}>
          <div>
            <img src="assets/images/featured-properties/carousel-2.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/images/featured-properties/carousel-3.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/images/featured-properties/carousel-4.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="assets/images/featured-properties/carousel-5.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Box>
    </Container>
  );
};

export default FeaturedProperties;
