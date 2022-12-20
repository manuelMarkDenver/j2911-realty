import localFont from "@next/font/local";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Container, Typography, Stack, Avatar } from "@mui/material";
import bg from "../../../public/assets/images/featured-properties/featured-properties-bg.png";
const Rockness = localFont({
  src: "../../../public/assets/fonts/Rockness.ttf",
});

const Testimonials = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        padding: "30px 0",
        height: { md: "100vh" },
        padding: "100px 0",
      }}
    >
      <Container>
        <Typography variant="h3">What Our Clients</Typography>
        <Typography variant="h2" sx={{ marginLeft: "10%", fontSize: { md: "5em" } }} className={Rockness.className}>
          Are Saying About Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "100px 0",
          }}
        >
          <Container>
            <Carousel showArrows={true} infiniteLoop={true}>
              <Stack direction="row" spacing={10} mb={10}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Avatar
                    alt="Carousel Image 3"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/cd/cd58aed36d5017e66feb73b3e74af4a98f38870a_full.jpg"
                    sx={{ width: 300, height: 300, marginBottom: "15px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nec ultricies neque. Aenean vitae consectetur
                    tortor.
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Avatar
                    alt="Carousel Image 3"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d48bfef7a0cc3525c8f7dee1ca1fba33683bd3d6_full.jpg"
                    sx={{ width: 300, height: 300, marginBottom: "15px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nec ultricies neque. Aenean vitae consectetur
                    tortor.
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Avatar
                    alt="Carousel Image 3"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/87/876cccef959871ed4b8c449c11be8ce4d6188fa6_full.jpg"
                    sx={{ width: 300, height: 300, marginBottom: "15px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nec ultricies neque. Aenean vitae consectetur
                    tortor.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={10} mb={10}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Avatar
                    alt="Carousel Image 3"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/cd/cd58aed36d5017e66feb73b3e74af4a98f38870a_full.jpg"
                    sx={{ width: 300, height: 300, marginBottom: "15px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nec ultricies neque. Aenean vitae consectetur
                    tortor.
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Avatar
                    alt="Carousel Image 3"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d48bfef7a0cc3525c8f7dee1ca1fba33683bd3d6_full.jpg"
                    sx={{ width: 300, height: 300, marginBottom: "15px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nec ultricies neque. Aenean vitae consectetur
                    tortor.
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Avatar
                    alt="Carousel Image 3"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/87/876cccef959871ed4b8c449c11be8ce4d6188fa6_full.jpg"
                    sx={{ width: 300, height: 300, marginBottom: "15px" }}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nec ultricies neque. Aenean vitae consectetur
                    tortor.
                  </Typography>
                </Box>
              </Stack>
              
            </Carousel>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
