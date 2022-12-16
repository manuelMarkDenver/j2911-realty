"use client";

import { Container, Box, Typography } from "@mui/material";

import Image from "next/image";
import bannerImg from "../../../public/assets/images/banner.png";
import imageLogo from "../../../public/assets/images/image-logo.png";

const Banner = () => {
  return (
    <Box sx={{ position: "relative",  }}>
      <Image src={bannerImg} style={{ objectFit: "cover", width: "100%", height: "100vh", zIndex: 5}} />
      <Image src={imageLogo} style={{ position: "absolute", right: "0", bottom: "0", height: "60%", width: "auto", zIndex: 10}} />
      <Box sx={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "pink", opacity: "45%", zIndex: 0 }}></Box>
    </Box>
  );
};

export default Banner;
