---
layout: collections
author_name: Dong Ho
### is_new: true # <span class="w3-tag w3-blue">New!</span>
### is_hot: true # <span class="w3-tag w3-red">HOT!</span>
### is_update: true # <span class="w3-tag w3-green">Update!</span>
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: Kanji 01
description: Kanji 01

### HUMAN
header: Kanji 01
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: false # để thêm màu mè cho <pre> CODE </pre>
amp: true
audioSetting: true # có menu để setting audio or not
# this for AMP related post
collection: "Từ Vựng"
### category: dùng để group collection
category: "Từ Vựng"

secondMenu: true
secondMenuIcon: gamepad
secondMenuHandler: toggleColumnTables('1 2 5')

### highlight_text
highlight_text: true
highlight_yellow: " は ,  を ,  と ,  へ ,  で ,  に ,  が ,  も ,  の ,  か。,  ね。, か。"
highlight_green: "じゃありません, ますか。, ますか, ます, ません, ました, でした, もう, まだ, いっしょ, ませんか, ましょう, から, までに, まで, ぐらい, ごろ, そして"
highlight_red: "どうして, いくら, いつ , だれ, どう, どこ, どれ, なん, なに, です。, です, HỎI, CÔNG THỨC"
highlight_gray: "月曜日, 火曜日, 水曜日, 木曜日, 金曜日, 土曜日, 日曜日, げつようび, かようび, すいようび, もくようび, きんようび, どようび, にちようび, 一日, 二日, 三日, 四日, 五日, 六日, 七日, 八日, 九日, 十日, ついたち, ふつか, みっか, よっか, いつか, むいか, なのか, ようか, ここのか, とおか, 一月, 二月, 三月, 四月, 五月, 六月, 七月, 八月, 九月, 十月, 十一月, 十二月, いちがつ, にがつ, さんがつ, しがつ, ごがつ, ろくがつ, しちがつ, はちがつ, くがつ, じゅうがつ, じゅういちがつ, じゅうにがつ, おととい, きのう, きょう, あした, あさって, 一昨日, 昨日, 今日, 明日, 明後日, せんしゅう, こんしゅう, らいしゅう, 先週, 今週, 来週, せんげつ, こんげつ, らいげつ, 先月, 今月, 来月, きょねん, ことし, らいねん, 去年, 今年, 来年"

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2021-04-13 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
### Edit file word-list, ko cần edit file story => upload
### aws s3 sync . s3://donghd.com/assets/4k-words/volume-1 --acl public-read
---

## Đặt vấn đề

### Lục thư là gì?

- Lục thư là từ dùng chỉ **6 phép cấu thành chữ Hán** do người đời sau căn cứ vào sự hình thành của chữ Hán, chỉnh lý mà ra: ***Tượng Hình, Chỉ sự, Hình thanh, Hội ý, Giả tá, Chuyển chú.***
- Trong đó:
    + **Tượng hình, Chỉ sự, Hội ý, Hình thanh**{:.w3-green} *chủ yếu là **cách tạo**{:.w3-green} thành chữ Hán*{:.w3-yellow}.
    + **Giả tá, Chuyển chú**{:.w3-purple} *là **cách dùng**{:.w3-purple} chữ*{:.w3-yellow}.

### Cấu tạo chữ Hán theo "Lục Thư"

- **Tượng hình 象形**{:.w3-text-green}:
    + Là loại chữ *vẽ theo hình thể*{:.w3-green} của vật thực tế, nét chữ quanh co, uốn lượn theo hình thể của vật thực tế.
    + Quy tắc cấu tạo loại chữ này đơn giản, hơn nữa hầu hết những chữ này là những từ ngữ chúng ta thường sử dụng hàng ngày.
    + Ví dụ:
        - 口 Khẩu = mồm: nguyên thủy là hình tròn.
        - 木 Mộc = cây: là hình một cái cây có gốc, rễ, thân, cành.
- **Chỉ sự 指事**{:.w3-text-green} (còn gọi là Tượng sự 象事):
    + Là phép chỉ vào sự vật mà viết ra chữ, nhìn mà xét ra ý (“*quy ước*{:.w3-green}” vì có rất nhiều động tác, hiện tượng không sao vẽ ra được).
    + Ví dụ:
        - 上 Thượng = **ở trên**: lấy nét ngang dài làm mốc, nét ngang ngắn ở trên ***chỉ***{:.w3-green} một vị trí ở trên...
        - 下 Hạ = **ở dưới** : nét ngang dài làm mốc, nét ngang nhỏ ở dưới ***chỉ***{:.w3-green} một vị trí ở dưới...
- **Hội ý 會意**{:.w3-text-green} (hay còn gọi là Tượng ý 象意):
    + Là hợp ý của từng phần lại để hình thành nghĩa mới.
    + Chữ Hội ý thường là một chữ có kết cấu phức hợp, gồm hai bộ phận trở lên.
    + Ví dụ:
        - 林 Lâm = rừng. Hai chữ 木 mộc => *ngụ ý:*{:.w3-green} nhiều cây hợp lại tạo thành rừng.
        - 信 Tín = tin tức: gồm chữ 人nhân = người + 言 ngôn = lời nói => *ngụ ý:*{:.w3-green} lời người đến báo cho biết (tin tức).
- **Hình thanh 形聲**{:.w3-text-green} (hay còn gọi là 象聲 Tượng thanh, 諧聲 Hài thanh):
    + Là lấy sự làm tên, mượn thanh để hợp thành. Đây là phép thông dụng nhất để hình thành Hán tự.
    + Chữ hình thanh gồm một phần chỉ nghĩa, một phần chỉ thanh (Trái-Phải, Trên-Dưới, Ngoài-Trong...).
    + Ví dụ:
        - 江 Giang = s**ông**{:.w3-green}. Gồm chữ 水 *Thủy* + 工 C**ông**{:.w3-green}
        - 河 H**à**{:.w3-green} = sông. Gồm chữ 水 *Thủy* + 可 Kh**ả**{:.w3-green}
        - 芳 Ph**ương**{:.w3-green} = cỏ thơm. Gồm 草 *Thảo* (thủa xưa viết là 艸) + 方 Ph**ương**{:.w3-green}
- **Giả tá 假借 (mượn sai)**{:.w3-text-purple}:
    + Có nghĩa là “*vay mượn*{:.w3-purple}” để ghi lại một từ trong khẩu ngữ chưa có từ tương ứng (*“tạo ra chữ mà không thêm chữ”*{:.w3-yellow}).
    + Ví dụ:
        - 令 **Lệnh** = như trong chữ “mệnh lệnh”, “hiệu lệnh” ==> *được mượn làm chữ “**lệnh**{:.w3-lime}” trong “**huyện lệnh**{:.w3-lime}”.*{:.w3-yellow}
        - 道 **Đạo** = con đường. *Giả tá thành "**đạo**{:.w3-lime}" trong “**đạo lý**{:.w3-lime}”, “**đạo đức**{:.w3-lime}”*{:.w3-yellow}
- **Chuyển chú 轉注**{:.w3-text-purple}:
    + Giải quyết về mặt văn tự hiện tượng đồng nghĩa khác âm...
    + Hiện tượng này được phản ánh trên văn tự bằng những cặp chữ có liên quan với nhau về mặt ý nghĩa nhưng khác nhau về mặt âm đọc và hình thể.
    + Ví dụ:
        - 長 Trường (dài) / Trưởng (lớn, trưởng thành). Do chữ "Trường" đọc thành "Trưởng". Hai âm *“Trường”/“Trưởng”*{:.w3-yellow} và hai nghĩa *“Dài”/“Lớn”*{:.w3-yellow} tuy đã *chuyển biến*{:.w3-purple} nhưng cùng một ý.
        - 少 Thiểu (ít) / Thiếu (nhỏ tuổi). Do chữ “Thiểu” chuyển chú đọc thành “Thiếu”. Hai âm *“Thiểu”/“Thiếu”*{:.w3-yellow} và hai nghĩa *“ít”/“nhỏ”*{:.w3-yellow} tuy đã chuyển biến nhưng cùng một ý.
        - 中 Trúng (bắn trúng) / Trung (ở giữa). Vốn do chữ “Trúng” chuyển chú thành “Trung”. Hai âm *“trúng”+“trung”*{:.w3-yellow} và hai nghĩa *“bắn trúng”+“ở giữa”*{:.w3-yellow} tuy đã *chuyển biến*{:.w3-purple} nhưng vẫn cùng một ý = khi bắn trúng, mũi tên ghim vào giữa cái bia.

### Phương pháp học (cá nhân)

- Thời lượng: 50/ngày > 2.5 tháng/Pilot > 1 năm (26/03)!!!???
- Pilot 1:
    - Đọc (**group theo Bộ thủ chính**)
        + Kanji > Các bộ Thủ cấu thành (đường mắt)
        + Các đường giao nhau hay bị Chặn? (**phân tích Kanji**)
        + Font chữ máy tính (ở **Ghi nhớ**)
        + Nghĩa và Ghi nhớ ***+ Ví dụ***
        + Đoán loại "Lục Thư"
    - Nghe nhìn (**group theo Bộ thủ chính**)
        + Kanji > Hán việt
        + Hán việt > Kanji
- Pilot 2:
    - Chuẩn bị:
        + hiểu quy tắc âm Latin -> JA
        + bổ sung Ví dụ
    - Đọc kèm Ví dụ
    - Nghe nhìn kèm Ví dụ
- Pilot 3:
    - Chuẩn bị:
        + Tìm hiểu quy tắc chuyển âm Hán-việt sang On (Hán-Nhật)
    - Type kèm Ví dụ + Kun/On
- Pilot 4:
    - Flashcards
    - Nghe nhìn
    - Type kèm Ví dụ + Kun/On

## 69 chữ kanji cơ bản

{% mp3 /assets/audio/jp/69kanji-coban.mp3 %}

| Kanji | Kun/On | Type     | Hán Việt | Nghĩa           | Ghi nhớ                                                                        |
|-------|--------|----------|----------|-----------------|--------------------------------------------------------------------------------|
| 一    | ひと   | いち     | NHẤT     | một             | 1 gạch                                                                         |
| ニ    | ふた   | に       | NHỊ      | hai             | 2 gạch                                                                         |
| 仁    | じん   | じんあい | NHÂN     | nhân nghĩa      | người đứng (亻) số hai (二) là người NHÂN NGHĨA (仁)                           |
| 八    | やつ   | はち     | BÁT      | tám             | cười haha (八) khi nhìn thấy số TÁM (八)                                       |
| 六    | むつ   | ろく     | LỤC      | sáu             | đầu (亠) tám (八) đuôi SÁU (六)                                                |
| 穴    | あな   | あな     | HUYỆT    | cái lỗ          | mái nhà (亠) có 8 (八) CÁI LỖ (穴)                                             |
| 曰    | いわ   | いわく   | VIẾT     | nói rằng        | "phân biệt với chữ NHẬT 曰"                                                    |
| 日    | ひ     | にち     | NHẬT     | ngày, mặt trời  | "hình mặt trời"                                                                |
| 目    | もく   | め       | MỤC      | mắt             | "hình con mắt"                                                                 |
| 三    | みつ   | さん     | TAM      | ba              | 3 gạch                                                                         |
| 手    | て     | て       | THỦ      | tay             | 3 (三) thể hiện quyết (亅) tâm bằng TAY (手)                                   |
| 毛    | は     | もうふ   | MAO      | lông            | "LÔNG (毛) ngược với TAY (手)"                                                 |
| 十    | とお   | とお     | THẬP     | mười            | gạch ngang (一) gạch dọc (丨) ra số MƯỜI (十)                                  |
| チ    | せん   | ち       | THIÊN    | một nghìn       | thêm 1 phẩy (丿) vào số 10 (十) là ra MỘT NGHÌN (チ)                           |
| 土    | つち   | つち     | THỔ      | đất             | có mười (十) + 1 (一) mảnh ĐẤT (土)                                            |
| 上    | うえ   | うえ     | THƯỢNG   | bên trên        | to (ト) nhất (一) thiên hạ là hoàng THƯỢNG (上)                                |
| 下    | した   | した     | HẠ       | bên dưới        | có một (一) thứ rất to (ト) ở BÊN DƯỚI (下)                                    |
| 峠    | とうげ | とうげ   | ĐÈO      | con đèo         | ngọn núi (山) bên trên (上) bên dưới (下) uốn éo thành CON ĐÈO   (峠)          |
| 力    | ちかち | りき     | LỰC      | sức lực         | đại ka (katakana) phải có SỨC LỰC (力)                                         |
| 刀    | かたな | かたな   | ĐAO      | kiếm            | lực (力) thừa, ĐAO (刀)                                                        |
| 万    | まん   | まん     | VẠN      | mười nghìn      | 1 (一) con dao (力) giá MƯỜI NGHÌN (万)                                        |
| 九    | ここの | ここのつ | CỬU      | chín            | "giống chữ 'r' (viết tay)"                                                     |
| 丸    | まる   | まる     | HOÀN     | tròn            | số 9 (九) cắt (丶) đuôi thì HOÀN toàn là hình TRÒN (丸)                        |
| 究    | きわ   | きゅう   | CỨU      | nghiên cứu      | đào lỗ (穴) xuống cửu (九) tuyền để NGHIÊN CỨU (究)                            |
| 口    | くち   | くち     | KHẨU     | miệng           | "giống hình cái miệng"                                                         |
| 回    | まわ   | まわ     | HỒI      | lần             | 2 cái miệng (口) nói liên hồi (回)                                             |
| 向    | む     | こう     | HƯỚNG    | phương hướng    | tài phiệt (丿) ở biên giới (冂) miệng (口) kêu cứu vì mất PHƯƠNG   HƯỚNG (向)  |
| 匹    | ひき   | ひき     | THẤT     | đếm con vật     | ĐẾM CON VẬT (匹) trong tủ đựng (匚) xem có mấy chân (儿)                       |
| 四    | よん   | よん     | TỨ       | bốn             | người vây quanh (囗) chân chạy (儿) BỐN (四) phía                              |
| 西    | にし   | にし     | TÂY      | phía tây        | 1 (一) trong 4 (囗) phía là PHÍA TÂY (西)                                      |
| 洒    | しゃ   | しゃ     | SÁI      | vẩy nước        | các nước (氵) phương tây (西) có tập tục VẨY NƯỚC (洒)                         |
| 酉    | とり   | とり     | DẬU      | giờ Dậu         | cảnh phía tây (西) đẹp nhất (一) vào GIỜ DẬU (酉)                              |
| 酒    | きけ   | しゅ     | TỬU      | rượu            | ủ men với nước (氵) tới giờ Dậu (酉) sẽ thành RƯỢU (酒)                        |
| 七    | なな   | なな     | THẤT     | bảy             | "giống số 7 ngược"                                                             |
| 𠮟    | しつ   | しつ     | SẤT      | la mắng         | miệng (口) sếp cả tuần 7 (七) ngày đều LA MẮNG (𠮟) nhân   viên                |
| 北    | きた   | きた     | BẮC      | phía BẮC        | dựa tường (丬) cười hihi (ヒヒ) nhìn về phía BẮC (北)                          |
| 円    | えん   | えん     | VIÊN     | tiền Yên (Nhật) | ở biên giới (冂) chỉ tiêu (T ngược) tiền YÊN (円)                              |
| 五    | いつ   | いつ     | NGŨ      | năm             | leo từ tầng (T) 1 (ユ) đến tầng 5 (五)                                         |
| 竹    | たけ   | たけ     | TRÚC     | tre, trúc       | tiếng cười keke (ケケ) phát ra từ bụi TRÚC (竹)                                |
| 光    | ひか   | ひか     | QUANG    | sáng            | tiểu (小) cô nương có 1 (一) cặp chân (儿) trắng SÁNG (光)                     |
| 幌    | ほろ   | ほろ     | HOẢNG    | màn che         | lấy khăn (巾) che mặt trời (日) không cho ánh sáng (光) lọt vào   MÀN CHE (幌) |
| 当    | とう   | とう     | ĐƯƠNG    | đương nhiên     | tiểu (小) cô nương! Em (彐) ĐƯƠNG NHIÊN (当) rất xinh đẹp!                     |
| 社    | やしろ | やしろ   | XÃ       | xã hội          | chỉ thị (礻) cúng thổ (土) địa cho XÃ HỘI (社) phát triển                      |
| 気    | き     | き       | KHÍ      | không khí       | khí (气) mà mọi người đều mê (メ) là KHÔNG KHÍ (気)                            |
| 汽    | き     | き       | KHÍ      | hơi nước        | nước (氵) chuyển sang thể KHÍ (气) gọi là HƠI NƯỚC (汽)                        |
| 左    | ひだり | ひだり   | TẢ       | bên trái        | bé NA (ナ) vận công (工) bằng tay TRÁI (左)                                    |
| 佐    | さ     | さ       | TÁ       | phụ tá          | người đứng (亻) bên trái (左) là người PHỤ TÁ (佐)                             |
| 右    | みぎ   | みぎ     | HỮU      | bên phải        | bé Na (ナ) miệng (口) nói toàn điều PHẢI (右)                                  |
| 石    | いし   | いし     | THẠCH    | đá              | ĐÁ (石) thì phải (右) nhẵn nhụi (không có dấu)                                 |
| 岩    | いわ   | いわ     | NHAM     | nham thạch      | núi (山) đá (石) hình thành từ NHAM THẠCH (岩)                                 |
| 拓    | たく   | たく     | THÁC     | khai thác       | tay (扌) đạp đá (石) để KHAI THÁC (拓)                                         |
| 妬    | ねた   | ねたむ   | ĐỐ       | đó kỵ           | phụ nữ (女) ném đá (石) nhau do ĐỐ KỴ (妬)                                     |
| 年    | とし   | とし     | NIÊN     | năm             | nằm (Nhân nằm) suốt 14 năm (年)                                                |
| 降    | お     | おりる   | GIÁNG    | xuống           | Bồ (阝) sau (夂) 14 năm (年) bị GIÁNG (降) chức                                |
| 麦    | むぎ   | むぎ     | MẠCH     | lúa mạch        | ông vua lòi đầu (主) truy (夂) tìm LÚA MẠCH (麦)                               |
| 面    | めん   | めん     | DIỆN     | mặt             | trên MẶT (面) thích nhất (一) là miệng (口) của mình (自)                      |
| 麵    | めん   | めん     | MIẾN     | mì sợi          | lúa mạch (麥 (麦)) được ép 2 mặt (面) thành MÌ SỢI (麵)                        |
| 人    | ひと   | ひと     | NHÂN     | người           | "người (人) đang đội nón"                                                      |
| 入    | はい   | はいる   | NHẬP     | vào             | "nhập (入) ngược với nhân (人)"???                                             |
| 込    | こ     | こむ     | VU       | đông đúc        | nhập (入) hàng phải đi xa (廴) nơi ĐÔNG ĐÚC (込)                               |
| 大    | おお   | おお     | ĐẠI      | to lớn          | 1 (一) người (人) TO LỚN (大)                                                  |
| 犬    | いぬ   | いぬ     | KHUYỂN   | con chó         | CHÓ (犬) to (大) thường có đốm lưỡi (丶)                                       |
| 太    | ふと   | ふと     | THÁI     | béo             | To (大) + lủng lẳng (丶) = BÉO (太)                                            |
| 天    | てん   | てん     | THIÊN    | trời            | 1 (一) thứ to (大) nhất là TRỜI (天)                                           |
| 矢    | や     | や       | THỈ      | mũi tên         | MŨI TÊN (矢) bắn (丿) lên trời (天)                                            |
| 夫    | おつと | ふう     | PHU      | chồng           | CHỒNG (夫) cao hơn trời (天) (vì có thêm dấu)                                  |
| 失    | うしな | うしな   | THẤT     | thất bại        | bị cắm sừng (丿) là người chồng (夫) THẤT BẠI (失). "có đầu   khác THỈ (矢)"   |
| 和    | なご   | なごむ   | HÒA      | hòa bình        | lúa (禾) cứ đầy mồm (口) tự khắc sẽ HÒA BÌNH (和)                              |
| 片    | かた   | かた     | PHIẾN    | tấm, mảnh       | tớ (T ngược) có 4 (4 ngược) TẤM (片) gỗ                                        |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

## 70 - 119

{% mp3 /assets/audio/jp/kanji70-119.mp3 %}

| Kanji | Kun/On | Type     | Hán Việt  | Nghĩa             | Ghi nhớ |
|-------|--------|----------|-----------|-------------------|---------|
| 子    | こ     | こ       | TỬ        | con               | N/A     |
| 字    | じ     | じ       | TỰ        | chữ               | N/A     |
| 学    | まな   | まな     | HỌC       | học tập           | N/A     |
| 厚    | あつ   | あつ     | HẬU       | bề dày            | N/A     |
| 存    | そん   | そん     | TỒN       | tồn tại           | N/A     |
| 在    | ざい   | ざい     | TẠI       | tồn tại           | N/A     |
| 月    | つき   | つき     | NGUYỆT    | mặt trăng, tháng  | N/A     |
| 有    | あ     | ゆう     | HỮU       | có                | N/A     |
| 散    | ち     | さん     | TẢN, TÁN  | tản bộ, giải tán  | N/A     |
| 撒    | ま     | さん     | TẢN, TÁT  | vẩy, rắc          | N/A     |
| 絹    | きぬ   | けん     | QUYÊN     | lụa               | N/A     |
| 背    | せ     | せ       | BỐI       | lưng              | N/A     |
| 胃    | い     | い       | VỊ        | dạ dày            | N/A     |
| 謂    | い     | い       | VỊ        | gọi là            | N/A     |
| 肯    | こう   | こうてい | KHẲNG     | khẳng định        | N/A     |
| 言    | い     | い       | NGÔN      | nói               | N/A     |
| 信    | しん   | しん     | TÍN       | tin tưởng         | N/A     |
| 這    | は     | はう     | GIÁ       | bò                | N/A     |
| 午    | うま   | うま     | NGỌ       | buổi trưa         | N/A     |
| 許    | ゆる   | ゆる     | HỨA       | cho phép          | N/A     |
| 杵    | きね   | きね     | XỬ        | cái chày          | N/A     |
| 牛    | うし   | うし     | NGƯU      | con bò            | N/A     |
| 件    | けん   | けん     | KIỆN      | sự kiện           | N/A     |
| 牢    | ろう   | ろう     | LAO       | nhà tù            | N/A     |
| 犀    | さい   | さい     | TÊ        | tê giác           | N/A     |
| 牡    | おす   | おす     | MẪU       | con đực           | N/A     |
| 化    | ば     | ばける   | HÓA       | biến hóa          | N/A     |
| 花    | はな   | はな     | HOA       | bông hoa          | N/A     |
| 貨    | か     | か       | HÓA       | hàng hóa          | N/A     |
| 靴    | くつ   | くつ     | NGOA      | giày              | N/A     |
| 今    | いま   | いま     | KIM       | bây giờ           | N/A     |
| 吟    | ぎん   | ぎん     | NGÂM      | ngâm thơ          | N/A     |
| 含    | ふく   | ふく     | HÀM       | ngậm              | N/A     |
| 頷    | うなず | うなず   | HẠM       | gật đầu           | N/A     |
| 貪    | むさぼ | むさぼ   | THAM      | tham lam          | N/A     |
| 念    | ねん   | ねん     | NIỆM      | kỉ niệm           | N/A     |
| 捻    | ひね   | ひね     | NIỆM      | văn, xoắn         | N/A     |
| 鯰    | なまず | なまず   | NIÊM      | cá trê            | N/A     |
| 令    | れい   | れい     | LỆNH      | mệnh lệnh         | N/A     |
| 冷    | ひ     | ひえる   | LÃNH      | lạnh              | N/A     |
| 領    | りょう | りょう   | LĨNH/LÃNH | thủ lĩnh/lãnh đạo | N/A     |
| 嶺    | れい   | れい     | LĨNH      | đỉnh núi          | N/A     |
| 零    | れい   | れい     | LINH      | số 0              | N/A     |
| 齢    | よわい | よわい   | LINH      | tuổi              | N/A     |
| 鈴    | すず   | すず     | LINH      | cái chuông        | N/A     |
| 介    | かい   | かい     | GIỚI      | giới thiệu        | N/A     |
| 芥子  | け     | からし   | GIỚI      | hoa anh túc       | N/A     |
| 界    | かい   | かい     | GIỚI      | thế giới          | N/A     |
| 米    | こめ   | こめ     | MỄ        | gạo               | N/A     |
| 迷    | まよ   | まよう   | MÊ        | lạc đường         | N/A     |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}