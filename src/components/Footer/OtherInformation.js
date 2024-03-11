import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import shopeeQrcode from "../../Img/download/ShopeeQrcode.png";
import appStoreDownload from "../../Img/download/AppStoreDownload.png";
import googlePlayDownload from "../../Img/download/GooglePlayDownload.png";
import appGalleryDownload from "../../Img/download/AppGalleryDownload.png";
import masterCard from "../../Img/creditCard/MasterCard.png";
import jcb from "../../Img/creditCard/JCB.png";
import visa from "../../Img/creditCard/VISA.png";
import sevenEleven from "../../Img/logistics/SevenEleven.png";
import familyMart from "../../Img/logistics/FamilyMart.png";
import hiLife from "../../Img/logistics/HiLife.png";
import blackCat from "../../Img/logistics/BlackCat.png";
import ok from "../../Img/logistics/OK.png";
import pelican from "../../Img/logistics/Pelican.png";
import kerry from "../../Img/logistics/Kerry.png";
import packageMinimize from "../../Img/PackageMinimize.png";
const OtherInformation = () => {
  return (
    <Box bgcolor="#fbfbfb">
      <Container>
        <Grid container>
          <Grid xs={2.4} p="5px">
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
                mt: "2.5rem",
              }}
            >
              客服中心
            </Box>
            <List sx={{ pt: 0 }}>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="幫助中心"
                    sx={{
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="蝦皮商城"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="付款方式"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="蝦皮錢包"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="蝦幣"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="運費補助"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="退貨退款"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="延長訂單撥款"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="聯絡客服"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="防詐騙宣傳"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={2.4} p="5px">
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
                mt: "2.5rem",
              }}
            >
              關於蝦皮
            </Box>
            <List sx={{ pt: 0 }}>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="關於蝦皮"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="加入我們"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="蝦皮條款"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="隱私權政策"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="蝦皮商城"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="賣家中心"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="限時特賣"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemText
                    primary="聯絡媒體"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={2.4} p="5px">
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
                mt: "2.5rem",
              }}
            >
              付款
            </Box>
            <ImageList
              sx={{
                width: 240,
                m: "0 0 1rem",
                p: 0,
                display: "flex",
              }}
              cols={3}
              rowHeight={30}
            >
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={masterCard}
                    alt="masterCard"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={jcb}
                    alt="JCB"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={visa}
                    alt="VISA"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
            </ImageList>
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
              }}
            >
              物流合作
            </Box>
            <ImageList
              sx={{
                width: 240,
                m: "0 0 1rem",
                p: 0,
                display: "flex",
                flexWrap: "wrap",
              }}
              cols={3}
              rowHeight={30}
            >
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <img
                    src={sevenEleven}
                    alt="sevenEleven"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={familyMart}
                    alt="familyMart"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={hiLife}
                    alt="HiLife"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={blackCat}
                    alt="BlackCat"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={ok}
                    alt="OK"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={pelican}
                    alt="Pelican"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={kerry}
                    alt="Kerry"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
            </ImageList>
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
              }}
            >
              皮皮直送包裝減量標章
            </Box>
            <ImageList
              sx={{
                width: 240,
                m: "0 0 1rem",
                p: 0,
                display: "flex",
                flexWrap: "wrap",
              }}
              cols={3}
              rowHeight={30}
            >
              <ImageListItem
                sx={{
                  width: "3.75rem",
                  height: "1.875rem",
                  mb: ".5rem",
                  mr: ".5rem",
                  p: ".25rem",
                  bgcolor: "#fff",
                  boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  borderRadius: ".125rem",
                }}
              >
                <Link
                  to="/"
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <img
                    src={packageMinimize}
                    alt="PackageMinimize"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid xs={2.4} p="5px">
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
                mt: "2.5rem",
              }}
            >
              關注我們
            </Box>
            <List sx={{ pt: 0 }}>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemIcon sx={{ minWidth: 0, w: 1, h: 1 }}>
                    <FacebookIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="facebook"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemIcon sx={{ minWidth: 0, w: 1, h: 1 }}>
                    <InstagramIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Instagram"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemIcon sx={{ minWidth: 0, w: 1, h: 1 }}>
                    <LinkedInIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="LinkedIn"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" sx={{ p: 0 }} disableGutters>
                  <ListItemIcon sx={{ minWidth: 0, w: 1, h: 1 }}>
                    <LightbulbCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="皮品輯部落格"
                    sx={{
                      fontSize: ".75rem",
                      color: "rgba(0, 0, 0, .65)",
                      "& .css-10hburv-MuiTypography-root": {
                        fontSize: ".75rem",
                      },
                    }}
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={2.4} p="5px">
            <Box
              sx={{
                fontSize: ".75rem",
                fontWeight: 700,
                color: "rgba(0, 0, 0, .87)",
                mb: "1.25rem",
                mt: "2.5rem",
              }}
            >
              下載皮皮
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <img
                src={shopeeQrcode}
                alt="shopeeQrcode"
                style={{
                  marginRight: "12px",
                  padding: "4px",
                  width: "5rem",
                  height: "5rem",
                }}
              />
              <Box>
                <img
                  src={appStoreDownload}
                  alt="App store download"
                  style={{
                    boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                    padding: "0.25rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <br />
                <img
                  src={googlePlayDownload}
                  alt="App store download"
                  style={{
                    boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                    padding: "0.25rem",
                    marginBottom: "0.5rem",
                  }}
                />
                <br />
                <img
                  src={appGalleryDownload}
                  alt="App store download"
                  style={{
                    boxShadow: "0 1px 1px rgba(0,0,0,.2)",
                    padding: "0.25rem",
                    marginBottom: "0.5rem",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          borderTop="1px solid rgba(0, 0, 0, .1)"
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap",
            padding: "2.5rem 0",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flexBasis: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "rgba(0,0,0,.54)",
                mb: "0.75rem",
              }}
            >
              新加坡商蝦皮娛樂電商有限公司台灣分公司　　統一編號：56801904
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "rgba(0,0,0,.54)",
                mr: "25px",
              }}
            >
              © 2024 Shopee. 版權所有。
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.875rem",
                color: "rgba(0,0,0,.54)",
                mr: "25px",
              }}
            >
              新加坡 | 印尼 | 泰國 | 馬來西亞 | 越南 | 菲律賓 | 巴西 | 墨西哥 |
              哥倫比亞 | 智利 | 台灣
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OtherInformation;
