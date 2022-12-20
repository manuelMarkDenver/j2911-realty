import Link from "next/link"
import localFont from "@next/font/local";
import { Box, Container, Typography, Stack } from "@mui/material";
import contactBg from "../../../public/assets/images/flower-pink-bg.png";
const Rockness = localFont({
  src: "../../../public/assets/fonts/Rockness.ttf",
});

const Contact = (props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${contactBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: { md: "100vh" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
          padding: "100px",
        }}
      >
        <Typography variant="h2" mb={5} sx={{ fontSize: {md: "5em"} }}className={Rockness.className}>Connect With Us</Typography>
        <Box
          sx={{
            borderRadius: "50%",
            border: "10px pink solid",
            width: "400px",
            height: "400px",
            overflow: "hidden",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignitems: "center",
            display: "flex",
          }}
        >
          <Stack
            direction="column"
            sx={{
              justifyContent: "center",
              alignitems: "center",
              display: "flex",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>36 Jennnings Way.<br/>Westport,MA <br/>02790</Typography>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}><Link href="mailto:blhernandez0923@gmail.com">blhernandez0923@gmail.com</Link></Typography>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>774.888.8571</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
