import { Grid, Typography, Box, Container } from "@mui/material";
import React from "react";

const Category = () => {
  return (
    <Container>
      <Box sx={{ color: "rgba(0, 0, 0, 0.54)", pb: "3.75rem", mt: "3.75rem" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "0.875rem", fontWeight: "700" }}
        >
          分類
        </Typography>
        <Grid container>
          <Grid xs={2} sx={{ p: "0.125rem" }}>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                女生衣著
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                T恤 | 長褲 | 內睡衣 | 外套 | 其他 | 針織/毛衣 | 多件式套裝 |
                大尺碼 | 小可愛/背心 | 帽T/大學T | 泳裝/比基尼 | 休閒運動服飾 |
                短褲 | 洋裝 | 裙子 | 上衣類 | 襯衫
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                美食、伴手禮
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                米、麵食 | 蛋糕、甜點 | 飲料、沖泡品 | 美食外送 | 休閒零食 |
                烘焙食材、南北雜貨 | 進口零食 | 熟食、小吃 | 其他 | 生鮮食品
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                美妝保養
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                專櫃彩妝 | 專櫃清潔保養 | 身體清潔、保養 | 手足保養、美甲 |
                男士保養 | 美容工具 | 美髮護理 | 醫美清潔保養 | 開架流行彩妝 |
                開架流行清潔保養 | 香水、香氛 | 其他 | 私密清潔保養
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                女生包包/精品
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                名牌精品包 | 後背包 | 手提/托特包 | 皮夾 | 側背包/肩背包 |
                電腦包 | 腰包/胸包 | 其他
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2} sx={{ p: "0.125rem" }}>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                家電影音
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                大型家電 | 廚房家電 | 影音設備 | 生活家電 | 美容/健康家電 |
                電視機 | 音響、喇叭 | 電風扇 | 電毯/電暖器 | 清淨除溼 | 其他
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                書籍及雜誌期刊
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                其他書籍 | 商業理財書籍 | 求職、自我成長書籍 | 宗教命理書籍 |
                星座運勢書籍 | 心理勵志書籍 | 教科參考書 | 文學小說 |
                旅遊相關書籍 | 漫畫 | 生活風格書籍 | 政治、法律、社會人文書籍 |
                歷史人文書籍 | 自然科普書籍 | 農業、漁業書籍 | 藝術設計書籍 |
                貼紙、著色書籍 | 親子教養書籍 | 語言學習書籍 | 輕小說 | BL/GL |
                醫療保健書籍 | 健身節食書籍 | 食譜 | 限制級書刊 | 雜誌期刊 |
                電腦資訊書籍 | 電子書及周邊 | 其他
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                男女鞋
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                女休閒鞋/平底鞋 | 女涼拖鞋 | 跟鞋/楔型鞋 | 女靴 | 鞋材用品 |
                其他 | 男休閒鞋款 | 男涼拖鞋 | 紳士鞋/皮鞋 | 男靴
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                保健、護理
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                其他保健食品、營養品 | 綜合機能保健 | 男性保健食品 |
                養顏美容食品 | 其他 | 順暢保養食品 | 女性保健食品 | 樂齡居家 |
                日常護理
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2} sx={{ p: "0.125rem" }}>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                手機平板與周邊
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                Android保護殼 | Android保護貼 | 充電傳輸與轉接相關設備 |
                Android空機 | Apple空機 | iPhone保護殼 | 平板周邊 | 平板電腦 |
                拍照周邊 | 穿戴裝置 | 行動電源 | 電話、儲值卡 | 耳機喇叭 |
                手機周邊配件 | iPhone保護貼 | 其他廠牌手機 | 其他
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                文創商品
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                配件 | 包包 | 設計師玩具 | 衣服 | 數位文創商品 | 設計雜物 | 文具
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                男生衣著
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                T恤 | 背心 | 短褲 | 外套 | 長褲 | Polo衫 | 丹寧牛仔 | 其他 |
                帽T、大學T | 毛衣、針織衫 | 男性內著 | 襯衫
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                汽機車零件百貨
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                導航、行車紀錄器 | 汽機車美容用品 | 機車百貨 | 汽車 |
                車身標誌、貼紙 | 汽車影音設備 | 輪胎&輪框 | 汽車百貨 |
                汽車與零組件 | 油品 | 維修工具 | 機車 | 機車與零組件 |
                機車騎士用品
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2} sx={{ p: "0.125rem" }}>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                娛樂、收藏
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                卡、票 | CD&DVD | 收藏、紀念品 | 明星偶像商品 | 玉、水晶、石 |
                LEGO與積木 | 樂器 | 其他 | 玩偶、娃娃 | 玩具 | 電影動漫周邊 |
                公仔、模型
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                男生包包與配件
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                手錶 | 男仕精品包包配件 | 飾品 | 圍巾、手套 | 帽子 | 眼鏡 |
                皮帶、領帶 | 側背/斜背包 | 公事包 | 胸包 / 腰包 | 托特包 |
                後背包 | 電腦包 | 手提包 | 錢包、皮件 | 襪子
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                服務、票券
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                旅遊票券 | 其他 | 服務、課程 | 活動門票 | 餐券 | 禮券
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                居家生活
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                居家香氛 | 水壺、杯子 | 收納 | 餐廚 | 浴室 | 燈具 |
                節慶、派對用品 | 文具 | 五金修繕 | 電動工具 | 沙發、沙發床 |
                傢俱 | 其他 | 園藝植作 | 寢具 | 居安防護 | 日用品 | 居家裝飾
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2} sx={{ p: "0.125rem" }}>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                女生配件/黃金
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                耳環 | 黃金/K金/鉑金 | 珠寶/玉石 | 國際精品配件 | 眼鏡 | 手錶 |
                項鍊 | 襪子 | 圍巾 | 帽子 | 戒指 | 其他 | 吊飾/鑰匙圈 | 手套 |
                手環 | 腳鍊 | 皮帶/腰帶 | 髮飾 | 鑽石
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                嬰幼童與母親
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                清潔與護膚用品 | 濕紙巾 | 哺育用品 | 嬰幼童食品與保健 | 兒童玩具
                | 嬰幼童教具與童書 | 其他 | 嬰幼童家具、寢具 | 嬰幼兒居家防護 |
                童裝、童鞋與配件 | 嬰幼童紙尿褲 | 外出用品 | 孕婦裝及用品 |
                嬰幼兒裝與配件 | 成人紙尿褲
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                3C與筆電
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                筆記型電腦 | 耳機/喇叭/麥克風 | 螢幕顯示器 | 鍵盤滑鼠 | 鏡頭 |
                電腦周邊配件 | 電腦零組件 | 桌上型電腦 | 穿戴/智能裝置 |
                儲存裝置 | 其他 | 單眼/專業相機 | 相機 | 相機周邊配件
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                其他類別
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                點數貼紙 | 成人專區
              </Typography>
            </Box>
          </Grid>
          <Grid xs={2} sx={{ p: "0.125rem" }}>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                運動/健身
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                健身運動器材 | 球類運動 | 運動服飾/配件 | 運動用品 |
                運動健身能量補給 | 運動鞋款 | 運動休閒鞋款 | 游泳及水類運動 |
                其他
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                電玩遊戲
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                其他遊戲主機 | 其他遊戲軟體 | Nintendo | PlayStation | XBOX |
                電腦遊戲 | 遊戲機周邊配件 | 其他 | 桌遊 | 虛擬點數
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                寵物
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                其他 | 其他寵物食品 | 外出用品 | 寵物服飾 | 寵物營養保健品 |
                寵物玩具 | 寵物用品 | 寵物零食 | 水族相關 | 狗飼料 | 貓飼料 |
                鳥類相關 | 鼠兔相關
              </Typography>
            </Box>
            <Box mb={1.25}>
              <Typography
                variant="body1"
                sx={{ fontSize: "0.75rem", fontWeight: "700" }}
              >
                戶外/旅行
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                行李箱及周邊 | 旅行包款、旅行配件 | 戶外服飾/鞋/配件 |
                戶外休閒運動 | 腳踏車、自行車 | 登山、露營 | 滑板與其他板類運動
                | 雨衣、雨具
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Category;
