import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import flagship from "../../../Img/mainPart/flagship/品牌旗艦_今日爆殺.jpg";
import flagshipBackgroundRed from "../../../Img/mainPart/flagship/redBgImage.png";
import switchGame from "../../../Img/mainPart/flagship/switch.jpg";
import godBrain from "../../../Img/mainPart/flagship/神腦生活.jpg";
import guiGe from "../../../Img/mainPart/flagship/桂格養氣人蔘.jpg";
import watson from "../../../Img/mainPart/flagship/屈臣氏.jpg";
import mouseHand from "../../../Img/mainPart/flagship/滑鼠.jpg";
import logitech from "../../../Img/mainPart/flagship/logitech.png";
import laundryCapsules from "../../../Img/mainPart/flagship/洗衣膠囊.jpg";
import persil from "../../../Img/mainPart/flagship/Persil寶瀅.jpg";
import bed from "../../../Img/mainPart/flagship/床.jpg";
import desmond from "../../../Img/mainPart/flagship/DESMOND.jpg";
import cellphone from "../../../Img/mainPart/flagship/Google手機.jpg";
import google from "../../../Img/mainPart/flagship/Google.jpg";

import redBackgroundBelow from "../../../Img/mainPart/flagship/redBgImageBelow.png";
import { Link } from "react-router-dom";

const Flagship = () => {
  return (
    <Stack>
      <Box sx={{ mt: "1.25rem", mb: 0, fontSize: 0 }}>
        <img
          src={flagship}
          alt="flagship"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${flagshipBackgroundRed})`,
          backgroundRepeat: "no-repeat",
          height: "297px",
          padding: "0 .9375rem",
        }}
      >
        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              color: "#fff",
              padding: "0 0.84375rem 0 0.9375rem",
              height: "3.75rem",
              fontSize: "1rem",
            }}
          >
            <Typography>天天搶9折優惠券!</Typography>
            <Typography>查看更多&gt;</Typography>
          </Box>
          <Box sx={{ height: "14.8125rem", display: "flex" }}>
            <Link
              to="/"
              style={{
                backgroundColor: "#fff",
                margin: ".0625rem",
                width: "12.125rem",
                minHeight: "14.8125rem",
                position: "relative",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <img
                  src={switchGame}
                  alt="switch"
                  style={{
                    width: "10.125rem",
                    height: "10.125rem",
                    margin: "0 1px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "8.75rem",
                  height: "3.5rem!important",
                  bgcolor: "#fff",
                  borderRadius: "1.90625rem",
                  position: "absolute",
                  left: "1.625rem",
                  top: "8.25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 0 3px rgba(0,0,0,.14)",
                }}
              >
                <img
                  src={godBrain}
                  alt="神腦生活"
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9375rem",
                  marginBottom: ".3125rem",
                }}
              >
                <Typography
                  variant="h6"
                  color="#D0021B"
                  sx={{ fontSize: "1.125rem" }}
                >
                  過年撒66折紅包
                </Typography>
              </Box>
            </Link>
            <Link
              to="/"
              style={{
                backgroundColor: "#fff",
                margin: ".0625rem",
                width: "12.125rem",
                minHeight: "14.8125rem",
                position: "relative",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <img
                  src={guiGe}
                  alt="桂格養氣人蔘"
                  style={{
                    width: "10.125rem",
                    height: "10.125rem",
                    margin: "0 1px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "8.75rem",
                  height: "3.5rem!important",
                  bgcolor: "#fff",
                  borderRadius: "1.90625rem",
                  position: "absolute",
                  left: "1.625rem",
                  top: "8.25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 0 3px rgba(0,0,0,.14)",
                }}
              >
                <img
                  src={watson}
                  alt="屈臣氏"
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9375rem",
                  marginBottom: ".3125rem",
                }}
              >
                <Typography
                  variant="h6"
                  color="#D0021B"
                  sx={{ fontSize: "1.125rem" }}
                >
                  特價再88折起
                </Typography>
              </Box>
            </Link>
            <Link
              to="/"
              style={{
                backgroundColor: "#fff",
                margin: ".0625rem",
                width: "12.125rem",
                minHeight: "14.8125rem",
                position: "relative",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <img
                  src={mouseHand}
                  alt="滑鼠"
                  style={{
                    width: "10.125rem",
                    height: "10.125rem",
                    margin: "0 1px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "8.75rem",
                  height: "3.5rem!important",
                  bgcolor: "#fff",
                  borderRadius: "1.90625rem",
                  position: "absolute",
                  left: "1.625rem",
                  top: "8.25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 0 3px rgba(0,0,0,.14)",
                }}
              >
                <img
                  src={logitech}
                  alt="logitech"
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9375rem",
                  marginBottom: ".3125rem",
                }}
              >
                <Typography
                  variant="h6"
                  color="#D0021B"
                  sx={{ fontSize: "1.125rem" }}
                >
                  領券現折$300
                </Typography>
              </Box>
            </Link>
            <Link
              to="/"
              style={{
                backgroundColor: "#fff",
                margin: ".0625rem",
                width: "12.125rem",
                minHeight: "14.8125rem",
                position: "relative",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <img
                  src={laundryCapsules}
                  alt="洗衣膠囊"
                  style={{
                    width: "10.125rem",
                    height: "10.125rem",
                    margin: "0 1px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "8.75rem",
                  height: "3.5rem!important",
                  bgcolor: "#fff",
                  borderRadius: "1.90625rem",
                  position: "absolute",
                  left: "1.625rem",
                  top: "8.25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 0 3px rgba(0,0,0,.14)",
                }}
              >
                <img
                  src={persil}
                  alt="Persil寶瀅"
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9375rem",
                  marginBottom: ".3125rem",
                }}
              >
                <Typography
                  variant="h6"
                  color="#D0021B"
                  sx={{ fontSize: "1.125rem" }}
                >
                  雙券享22%蝦幣
                </Typography>
              </Box>
            </Link>
            <Link
              to="/"
              style={{
                backgroundColor: "#fff",
                margin: ".0625rem",
                width: "12.125rem",
                minHeight: "14.8125rem",
                position: "relative",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <img
                  src={bed}
                  alt="床"
                  style={{
                    width: "10.125rem",
                    height: "10.125rem",
                    margin: "0 1px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "8.75rem",
                  height: "3.5rem!important",
                  bgcolor: "#fff",
                  borderRadius: "1.90625rem",
                  position: "absolute",
                  left: "1.625rem",
                  top: "8.25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 0 3px rgba(0,0,0,.14)",
                }}
              >
                <img
                  src={desmond}
                  alt="DESMOND"
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9375rem",
                  marginBottom: ".3125rem",
                }}
              >
                <Typography
                  variant="h6"
                  color="#D0021B"
                  sx={{ fontSize: "1.125rem" }}
                >
                  換寢爆殺5折券
                </Typography>
              </Box>
            </Link>
            <Link
              to="/"
              style={{
                backgroundColor: "#fff",
                margin: ".0625rem",
                width: "12.125rem",
                minHeight: "14.8125rem",
                position: "relative",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <img
                  src={cellphone}
                  alt="Google手機"
                  style={{
                    width: "10.125rem",
                    height: "10.125rem",
                    margin: "0 1px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "8.75rem",
                  height: "3.5rem!important",
                  bgcolor: "#fff",
                  borderRadius: "1.90625rem",
                  position: "absolute",
                  left: "1.625rem",
                  top: "8.25rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  boxShadow: "0 0 3px rgba(0,0,0,.14)",
                }}
              >
                <img
                  src={google}
                  alt="Google"
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9375rem",
                  marginBottom: ".3125rem",
                }}
              >
                <Typography
                  variant="h6"
                  color="#D0021B"
                  sx={{ fontSize: "1.125rem" }}
                >
                  贈$4,888購物金
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ height: 30 }}>
        <img
          src={redBackgroundBelow}
          alt="redBackgroundBelow"
          style={{ width: "100%" }}
        />
      </Box>
    </Stack>
  );
};

export default Flagship;
