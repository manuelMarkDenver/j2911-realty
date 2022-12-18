import { useState } from "react";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  Box,
  Card,
  Container,
  Typography,
  Stack,
  Avatar,
  Modal,
} from "@mui/material";
import bg from "../../../public/assets/images/featured-properties/featured-properties-bg.png";

const FeaturedProperties = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "55%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        padding: "30px 0",
      }}
    >
      <Typography variant="h2" textAlign="center">Featured Properties</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0",
        }}
      >
        <Stack direction="row" spacing={10} mb={10}>
          <Avatar
            alt="Carousel Image 1"
            src="/assets/images/featured-properties/carousel-2.jpg"
            sx={{ width: 300, height: 300 }}
            onClick={handleOpen}
          />
          <Avatar
            alt="Carousel Image 2"
            src="/assets/images/featured-properties/carousel-5.jpg"
            sx={{ width: 300, height: 300 }}
            onClick={handleOpen}
          />
          <Avatar
            alt="Carousel Image 3"
            src="/assets/images/featured-properties/carousel-4.jpg"
            sx={{ width: 300, height: 300 }}
            onClick={handleOpen}
          />
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Carousel showArrows={true} infiniteLoop={true}>
            <div>
              <img src="assets/images/featured-properties/carousel-2.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="assets/images/featured-properties/carousel-5.jpg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="assets/images/featured-properties/carousel-4.jpg" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </Box>
      </Modal>
    </Container>
  );
};

export default FeaturedProperties;
