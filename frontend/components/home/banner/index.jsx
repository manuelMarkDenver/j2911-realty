"use client";

import { Container, Box, Typography } from "@mui/material";

import Image from "next/image";
import bannerImg from "../../../public/assets/images/banner.png";

const Banner = () => {
  return (
    <Box sx={{ position: "relative",  }}>
      <Image src={bannerImg} style={{ objectFit: "cover", width: "100%", height: "30%", zIndex: 5}} />
    </Box>
  );
};

export default Banner;
