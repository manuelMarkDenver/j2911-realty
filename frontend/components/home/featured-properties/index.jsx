import { useState } from "react";
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
import Image from "next/image";

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

  const carouselImagesNumber = 41;
  let imagesArr = [];

  const renderCarouselImages = () => {
    for (let index = 1; index <= carouselImagesNumber; index++) {
      imagesArr.push({
        id: `img-${index}`,
        src: `/assets/images/featured-properties/img-${index}.jpg`,
        dsecription: "",
      });
    }
    return imagesArr;
  };

  carouselImagesNumber !== 0 ? renderCarouselImages() : (imagesArr = []);

  console.log({ imagesArr });

  return (
    <Container
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        padding: "100px 0",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { md: "5em" }, fontFamily: "Rockness, Arial, Roboto" }}
        textAlign="center"
      >
        Featured Properties
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0",
        }}
      >
        <Stack direction="row" spacing={10} mb={10}>
          <Box sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Avatar
              alt="Carousel Image 1"
              src="/assets/images/featured-properties/img-4.jpg"
              variant="circular"
              sx={{  width: "300px", height: "300px", marginBottom: "30px" }}
              onClick={handleOpen}
            />
            <Typography variant="h5" textAlign="center">Property 1</Typography>
          </Box>
          <Box sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Avatar
              alt="Carousel Image 1"
              src="/assets/images/featured-properties/img-4.jpg"
              variant="circular"
              sx={{  width: "300px", height: "300px", marginBottom: "30px" }}
            />
            <Typography variant="h5" textAlign="center">Property 1</Typography>
          </Box>
          <Box sx={{  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Avatar
              alt="Carousel Image 1"
              src="/assets/images/featured-properties/img-4.jpg"
              variant="circular"
              sx={{  width: "300px", height: "300px", marginBottom: "30px" }}
            />
            <Typography variant="h5" textAlign="center">Property 1</Typography>
          </Box>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
          >
            {/* <Box>
              <Image src="/assets/images/featured-properties/img-2.jpg" width={500} height={300}/>
            </Box> */}
            {imagesArr.length !== 0 ? (
              imagesArr.map((img) => (
                <Box key={img.id}>
                  <img src={img.src} />
                </Box>
              ))
            ) : (
              <Typography>No images</Typography>
            )}
          </Carousel>
        </Box>
      </Modal>
    </Container>
  );
};

export default FeaturedProperties;
