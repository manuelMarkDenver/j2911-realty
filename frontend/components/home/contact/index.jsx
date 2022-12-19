import { Box, Container, Typography, Stack } from "@mui/material";
import contactBg from "../../../public/assets/images/flower-pink-bg.png";

const Contact = () => {
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
        <Typography variant="h2" mb={5}>Connect With Us</Typography>
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
            <Typography variant="h5">36 Jennnings Way. Westport,MA 02790</Typography>
            <Typography variant="h5">blhernandez0923@gmail.com</Typography>
            <Typography variant="h5">774.888.8571</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
