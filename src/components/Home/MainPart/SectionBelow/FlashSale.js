import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import flashSale from "../../../../Img/mainPart/sectionBelow/flashSale/限時特賣.png";
import BoltIcon from "@mui/icons-material/Bolt";
import shopMall from "../../../../Img/mainPart/sectionBelow/flashSale/商城.png";
import freeShip from "../../../../Img/mainPart/sectionBelow/flashSale/店到店免運免領券99起.png";
import hotFire from "../../../../Img/mainPart/sectionBelow/flashSale/熱銷fire.png";
import hotBar from "../../../../Img/mainPart/sectionBelow/flashSale/熱銷bar.png";
import tissue from "../../../../Img/mainPart/sectionBelow/flashSale/衛生紙_倍潔雅.jpg";
import dehumidifier from "../../../../Img/mainPart/sectionBelow/flashSale/除濕機.png";
import faceMask from "../../../../Img/mainPart/sectionBelow/flashSale/口罩.png";
import vaccumCleaner from "../../../../Img/mainPart/sectionBelow/flashSale/吸塵器.png";
import storageBox from "../../../../Img/mainPart/sectionBelow/flashSale/收納箱.png";

const FlashSale = () => {
  const flashSaleList = [
    {
      disscount: "5.6折",
      image: tissue,
      price: "$599",
      saleHowMany: "熱銷中",
      hotBarLength: "5%",
      hotIcon: false,
      freeShipBoolean: false,
    },
    {
      disscount: "7.1折",
      image: dehumidifier,
      price: "$9,111",
      saleHowMany: "剩下3",
      hotBarLength: "85%",
      hotIcon: true,
      freeShipBoolean: false,
    },
    {
      disscount: "1.2折",
      image: faceMask,
      price: "$49",
      saleHowMany: "熱銷中",
      hotBarLength: "5%",
      hotIcon: false,
      freeShipBoolean: true,
    },
    {
      disscount: "5.9折",
      image: vaccumCleaner,
      price: "$12,900",
      saleHowMany: "熱銷中",
      hotBarLength: "5%",
      hotIcon: false,
      freeShipBoolean: false,
    },
    {
      disscount: "1.6折",
      image: storageBox,
      price: "$249",
      saleHowMany: "熱銷中",
      hotBarLength: "5%",
      hotIcon: false,
      freeShipBoolean: true,
    },
  ];

  return (
    <Box bgcolor="#fff">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        p={".9375rem 1.25rem"}
        alignItems={"center"}
      >
        <Box
          sx={{
            backgroundImage: `url(${flashSale})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "6rem",
            height: "30px",
          }}
        ></Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#ee4d2d", fontSize: "14px" }}>
            查看全部 &gt;
          </Typography>
        </Link>
      </Box>
      <Box bgcolor="#fff">
        <List
          disablePadding
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {flashSaleList.map((flashSale, index) => (
            <ListItem
              sx={{
                width: "12.5rem",
                height: "15.5rem",
                padding: "0 .9375rem",
                alignItems: "flex-start",
              }}
              key={index}
              disablePadding
            >
              <ListItemButton
                component="a"
                sx={{
                  padding: 0,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                  },
                }}
                disableRipple
              >
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                      height: "10.625rem",
                      width: "10.625rem",
                    }}
                  >
                    <Box sx={{ position: "absolute", right: "0", zIndex: "3" }}>
                      <Box
                        sx={{
                          bgcolor: "#ffe97a",
                          color: "#ec3814",
                          borderRadius: ".125rem 0 0 0",
                          height: "1rem",
                          padding: "0 .15625rem 0 .53125rem",
                          marginLeft: ".46875rem",
                          fontSize: ".875rem",
                          lineHeight: "1rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <BoltIcon
                          sx={{
                            position: "absolute",
                            left: "-.23438rem",
                            fontSize: "1.4rem",
                          }}
                        ></BoltIcon>
                        <Typography variant="h6" sx={{ fontSize: ".875rem" }}>
                          {flashSale.disscount}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      {/* 商城 */}
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{
                            color: "rgb(208, 1, 27)",
                            height: "1rem",
                            width: "27px",
                            background: "currentcolor",
                            position: "absolute",
                            zIndex: "3",
                            left: "0",
                          }}
                        >
                          <img
                            src={shopMall}
                            alt="商城"
                            style={{ width: "1.1875rem", heigth: ".5625rem" }}
                          />
                        </Box>
                      </Box>
                      {/* 99免運券 */}
                      {flashSale.freeShipBoolean && (
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundImage: `url(${freeShip})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              height: "10.625rem",
                            }}
                          ></Box>
                        </Box>
                      )}
                      {/* 限時特賣物品照片 */}
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "1",
                          left: "0",
                          top: "0",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundImage: `url(${flashSale.image})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            height: "10.625rem",
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "relative",
                      padding: ".9375rem 0",
                      width: "10.625rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: ".3125rem",
                        color: "#ee4d2d",
                      }}
                    >
                      <Typography fontSize={"1.125rem"}>
                        {flashSale.price}
                      </Typography>
                    </Box>
                    <Box p={"0 .625rem"}>
                      <Box
                        sx={{
                          height: "16px",
                          width: "150px",
                          position: "relative",
                        }}
                      >
                        {/* 火焰Icon */}
                        {flashSale.hotIcon && (
                          <Box
                            sx={{
                              position: "absolute",
                              zIndex: "4",
                              left: ".1875rem",
                              top: "-.375rem",
                              backgroundImage: `url(${hotFire})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat",
                              height: "1.3125rem",
                              width: "1.125rem",
                            }}
                          ></Box>
                        )}
                        <Box
                          sx={{
                            position: "absolute",
                            zIndex: "3",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "inherit",
                            height: "inherit",
                          }}
                        >
                          <Typography fontSize=".75rem" color="#fff">
                            {flashSale.saleHowMany}
                          </Typography>
                        </Box>
                        {/* 熱銷Bar 前半 */}
                        <Box
                          sx={{
                            position: "absolute",
                            zIndex: "2",
                            height: "16px",
                            width: `${flashSale.hotBarLength}`,
                            backgroundImage: `url(${hotBar})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "8px 0px 0px 8px",
                          }}
                        ></Box>
                        {/* 熱銷Bar 後半 */}
                        <Box
                          sx={{
                            position: "absolute",
                            zIndex: "1",
                            borderRadius: "8px",
                            width: "inherit",
                            height: "inherit",
                            bgcolor: "#ffbda6",
                          }}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default FlashSale;
