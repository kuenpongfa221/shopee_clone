import React from "react";
import girlClothes from "../../../../Img/mainPart/sectionBelow/CategoryImage/女生衣著.png";
import bookMagazine from "../../../../Img/mainPart/sectionBelow/CategoryImage/書籍及雜誌期刊.png";
import boyClothes from "../../../../Img/mainPart/sectionBelow/CategoryImage/男生衣著.png";
import livingHome from "../../../../Img/mainPart/sectionBelow/CategoryImage/居家生活.png";
import sports from "../../../../Img/mainPart/sectionBelow/CategoryImage/運動健身.png";
import foodGood from "../../../../Img/mainPart/sectionBelow/CategoryImage/美食伴手禮.png";
import girlBoyShoes from "../../../../Img/mainPart/sectionBelow/CategoryImage/男女鞋.png";
import carScooter from "../../../../Img/mainPart/sectionBelow/CategoryImage/汽機車零件百貨.png";
import accessoriesGirl from "../../../../Img/mainPart/sectionBelow/CategoryImage/女生配件黃金.png";
import videoGame from "../../../../Img/mainPart/sectionBelow/CategoryImage/電玩遊戲.png";
import markUp from "../../../../Img/mainPart/sectionBelow/CategoryImage/美妝保養.png";
import healthCare from "../../../../Img/mainPart/sectionBelow/CategoryImage/保健護理.png";
import collection from "../../../../Img/mainPart/sectionBelow/CategoryImage/娛樂收藏.png";
import childMom from "../../../../Img/mainPart/sectionBelow/CategoryImage/嬰幼童與母親.jpg";
import pet from "../../../../Img/mainPart/sectionBelow/CategoryImage/寵物.png";
import bagGirl from "../../../../Img/mainPart/sectionBelow/CategoryImage/女生包包精品.png";
import padMerch from "../../../../Img/mainPart/sectionBelow/CategoryImage/手機平板與周邊.png";
import bagBoy from "../../../../Img/mainPart/sectionBelow/CategoryImage/男生包包與配件.png";
import notebook3C from "../../../../Img/mainPart/sectionBelow/CategoryImage/3C與筆電.png";
import travel from "../../../../Img/mainPart/sectionBelow/CategoryImage/戶外旅行.png";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
const CategoryImage = () => {
  const categoryImages = [
    { image: girlClothes, text: "女生衣著" },
    { image: bookMagazine, text: "書籍及雜誌期刊" },
    { image: boyClothes, text: "男生衣著" },
    { image: livingHome, text: "居家生活" },
    { image: sports, text: "運動健身" },
    { image: foodGood, text: "美食伴手禮" },
    { image: girlBoyShoes, text: "男生衣著" },
    { image: carScooter, text: "汽機車零件百貨" },
    { image: accessoriesGirl, text: "女生配件黃金" },
    { image: videoGame, text: "電玩遊戲" },
    { image: markUp, text: "美妝保養" },
    { image: healthCare, text: "保健護理" },
    { image: collection, text: "娛樂收藏" },
    { image: childMom, text: "嬰幼童與母親" },
    { image: pet, text: "寵物" },
    { image: bagGirl, text: "女生包包精品" },
    { image: padMerch, text: "手機平板與周邊" },
    { image: bagBoy, text: "男生包包與配件" },
    { image: notebook3C, text: "3C與筆電" },
    { image: travel, text: "戶外旅行" },
  ];

  return (
    <>
      {categoryImages.map((categoryImage, index) => (
        <ListItem
          sx={{ height: "151px", width: "115.2px!important" }}
          key={index}
          disablePadding
        >
          <ListItemButton
            component="a"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              borderRight: "1px solid rgba(0,0,0,.05)",
              borderBottom: "1px solid rgba(0,0,0,.05)",
            }}
          >
            <Box
              sx={{
                width: "70%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={categoryImage.image}
                alt="女生衣著"
                style={{ height: "100%" }}
              />
            </Box>
            <ListItemText
              component="h6"
              sx={{
                "& .css-10hburv-MuiTypography-root": {
                  fontSize: ".875rem",
                },
                display: "flex",
                justifyContent: "center",
                width: "102px",
              }}
            >
              {categoryImage.text}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default CategoryImage;
