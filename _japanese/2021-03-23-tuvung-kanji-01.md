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
secondMenuHandler: toggleColumnTables('1 2')

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
    + Thường sẽ là *1 bộ phận*{:.w3-light-green}
    + Ví dụ:
        - 口 Khẩu = mồm: nguyên thủy là hình tròn.
        - 木 Mộc = cây: là hình một cái cây có gốc, rễ, thân, cành.
- **Chỉ sự 指事**{:.w3-text-green} (còn gọi là Tượng sự 象事):
    + Là phép chỉ vào sự vật mà viết ra chữ, nhìn mà xét ra ý (“*quy ước*{:.w3-green}” vì có rất nhiều động tác, hiện tượng không sao vẽ ra được).
    + Thường sẽ là *1\* bộ phận (nhiều bộ thủ kết hợp chỉ sự...)*{:.w3-light-green}
    + Ví dụ:
        - 上 Thượng = **ở trên**: lấy nét ngang dài làm mốc, nét ngang ngắn ở trên ***chỉ***{:.w3-green} một vị trí ở trên...
        - 下 Hạ = **ở dưới** : nét ngang dài làm mốc, nét ngang nhỏ ở dưới ***chỉ***{:.w3-green} một vị trí ở dưới...
- **Hội ý 會意**{:.w3-text-green} (hay còn gọi là Tượng ý 象意):
    + Là hợp ý của từng phần lại để hình thành nghĩa mới.
    + Chữ Hội ý thường là một chữ có kết cấu phức hợp, *gồm hai bộ phận trở lên*{:.w3-light-green}.
    + Ví dụ:
        - 林 Lâm = rừng. Hai chữ 木 mộc => *ngụ ý:*{:.w3-green} nhiều cây hợp lại tạo thành rừng.
        - 信 Tín = tin tức: gồm chữ 人nhân = người + 言 ngôn = lời nói => *ngụ ý:*{:.w3-green} lời người đến báo cho biết (tin tức).
- **Hình thanh 形聲**{:.w3-text-green} (hay còn gọi là 象聲 Tượng thanh, 諧聲 Hài thanh):
    + Là lấy sự làm tên, mượn thanh để hợp thành. Đây là phép thông dụng nhất để hình thành Hán tự.
    + Chữ hình thanh gồm một *phần chỉ nghĩa*{:.w3-light-green}, một *phần chỉ thanh*{:.w3-light-green} (Trái-Phải, Trên-Dưới, Ngoài-Trong...).
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
        + Dự đoán mức độ phổ biến (sử dụng) của kanji
        + Đoán loại "Lục Thư"
        + Xong mỗi group thì ôn tập nhanh group đó (trong mỗi group còn có sub-group cũng áp dụng tương tự)
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
- pilot 5:
    - Ôn tập lại với Lục Thư

## 69 chữ kanji cơ bản

{% mp3 /assets/audio/jp/kanji01/kanji1-69-coban.mp3 %}
{% comment %}
NHẤT, là một.
NHỊ, là hai.
NHÂN, là nhân nghĩa.
BÁT, là tám.
LỤC, là sáu.
HUYỆT, là cái lỗ.
VIẾT, là nói rằng.
NHẬT, là ngày, mặt trời.
MỤC, là mắt.
TAM, là ba.
THỦ, là tay.
MAO, là lông.
THẬP, là mười.
THIÊN, là một nghìn.
THỔ, là đất.
THƯỢNG, là bên trên.
HẠ, là bên dưới.
ĐÈO, là con đèo.
LỰC, là sức lực.
ĐAO, là kiếm.
VẠN, là mười nghìn.
CỬU, là chín.
HOÀN, là tròn.
CỨU, là nghiên cứu.
KHẨU, là miệng.
HỒI, là lần.
HƯỚNG, là phương hướng.
THẤT, là đếm con vật.
TỨ, là bốn.
TÂY, là phía tây.
SÁI, là vẩy nước.
DẬU, là giờ Dậu.
TỬU, là rượu.
THẤT, là bảy.
SẤT, là la mắng.
BẮC, là phía BẮC.
VIÊN, là tiền Yên (Nhật).
NGŨ, là năm.
TRÚC, là tre, trúc.
QUANG, là sáng.
HOẢNG, là màn che.
ĐƯƠNG, là đương nhiên.
XÃ, là xã hội.
KHÍ, là không khí.
KHÍ, là hơi nước.
TẢ, là bên trái.
TÁ, là phụ tá.
HỮU, là bên phải.
THẠCH, là đá.
NHAM, là nham thạch.
THÁC, là khai thác.
ĐỐ, là đó kỵ.
NIÊN, là năm.
GIÁNG, là xuống.
MẠCH, là lúa mạch.
DIỆN, là mặt.
MIẾN, là mì sợi.
NHÂN, là người.
NHẬP, là vào.
VU, là đông đúc.
ĐẠI, là to lớn.
KHUYỂN, là con chó.
THÁI, là béo.
THIÊN, là trời.
THỈ, là mũi tên.
PHU, là chồng.
THẤT, là thất bại.
HÒA, là hòa bình.
PHIẾN, là tấm, mảnh.
{% endcomment %}

| Kanji | Kun/On | Type     | Hán Việt | Nghĩa           |
|-------|--------|----------|----------|-----------------|
| 一    | ひと   | いち     | NHẤT     | một             |
| ニ    | ふた   | に       | NHỊ      | hai             |
| 仁    | じん   | じんあい | NHÂN     | nhân nghĩa      |
| 八    | やつ   | はち     | BÁT      | tám             |
| 六    | むつ   | ろく     | LỤC      | sáu             |
| 穴    | あな   | あな     | HUYỆT    | cái lỗ          |
| 曰    | いわ   | いわく   | VIẾT     | nói rằng        |
| 日    | ひ     | にち     | NHẬT     | ngày, mặt trời  |
| 目    | もく   | め       | MỤC      | mắt             |
| 三    | みつ   | さん     | TAM      | ba              |                   |
| 手    | て     | て       | THỦ      | tay             |
| 毛    | は     | もうふ   | MAO      | lông            |
| 十    | とお   | とお     | THẬP     | mười            |
| チ    | せん   | ち       | THIÊN    | một nghìn       |
| 土    | つち   | つち     | THỔ      | đất             |
| 上    | うえ   | うえ     | THƯỢNG   | bên trên        |
| 下    | した   | した     | HẠ       | bên dưới        |
| 峠    | とうげ | とうげ   | ĐÈO      | con đèo         |
| 力    | ちかち | りき     | LỰC      | sức lực         |
| 刀    | かたな | かたな   | ĐAO      | kiếm            |
| 万    | まん   | まん     | VẠN      | mười nghìn      |
| 九    | ここの | ここのつ | CỬU      | chín            |
| 丸    | まる   | まる     | HOÀN     | tròn            |
| 究    | きわ   | きゅう   | CỨU      | nghiên cứu      |
| 口    | くち   | くち     | KHẨU     | miệng           |
| 回    | まわ   | まわ     | HỒI      | lần             |
| 向    | む     | こう     | HƯỚNG    | phương hướng    |
| 匹    | ひき   | ひき     | THẤT     | đếm con vật     |
| 四    | よん   | よん     | TỨ       | bốn             |
| 西    | にし   | にし     | TÂY      | phía tây        |
| 洒    | しゃ   | しゃ     | SÁI      | vẩy nước        |
| 酉    | とり   | とり     | DẬU      | giờ Dậu         |
| 酒    | きけ   | しゅ     | TỬU      | rượu            |
| 七    | なな   | なな     | THẤT     | bảy             |
| 𠮟    | しつ   | しつ     | SẤT      | la mắng         | 
| 北    | きた   | きた     | BẮC      | phía BẮC        |
| 円    | えん   | えん     | VIÊN     | tiền Yên (Nhật) |
| 五    | いつ   | いつ     | NGŨ      | năm             |
| 竹    | たけ   | たけ     | TRÚC     | tre, trúc       |
| 光    | ひか   | ひか     | QUANG    | sáng            |
| 幌    | ほろ   | ほろ     | HOẢNG    | màn che         |
| 当    | とう   | とう     | ĐƯƠNG    | đương nhiên     |
| 社    | やしろ | やしろ   | XÃ       | xã hội          |
| 気    | き     | き       | KHÍ      | không khí       |
| 汽    | き     | き       | KHÍ      | hơi nước        |
| 左    | ひだり | ひだり   | TẢ       | bên trái        |
| 佐    | さ     | さ       | TÁ       | phụ tá          |
| 右    | みぎ   | みぎ     | HỮU      | bên phải        |
| 石    | いし   | いし     | THẠCH    | đá              |
| 岩    | いわ   | いわ     | NHAM     | nham thạch      |
| 拓    | たく   | たく     | THÁC     | khai thác       |
| 妬    | ねた   | ねたむ   | ĐỐ       | đó kỵ           |
| 年    | とし   | とし     | NIÊN     | năm             |
| 降    | お     | おりる   | GIÁNG    | xuống           |
| 麦    | むぎ   | むぎ     | MẠCH     | lúa mạch        |
| 面    | めん   | めん     | DIỆN     | mặt             |
| 麵    | めん   | めん     | MIẾN     | mì sợi          |
| 人    | ひと   | ひと     | NHÂN     | người           |
| 入    | はい   | はいる   | NHẬP     | vào             |
| 込    | こ     | こむ     | VU       | đông đúc        |
| 大    | おお   | おお     | ĐẠI      | to lớn          |
| 犬    | いぬ   | いぬ     | KHUYỂN   | con chó         |
| 太    | ふと   | ふと     | THÁI     | béo             |
| 天    | てん   | てん     | THIÊN    | trời            |
| 矢    | や     | や       | THỈ      | mũi tên         |
| 夫    | おつと | ふう     | PHU      | chồng           |
| 失    | うしな | うしな   | THẤT     | thất bại        |
| 和    | なご   | なごむ   | HÒA      | hòa bình        |
| 片    | かた   | かた     | PHIẾN    | tấm, mảnh       |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

## 70 - 119

{% mp3 /assets/audio/jp/kanji01/kanji70-119.mp3 %}
{% comment %}
TỬ, là con.
TỰ, là chữ.
HỌC, là học tập.
HẬU, là bề dày.
TỒN, là tồn tại.
TẠI, là tồn tại.
NGUYỆT, là mặt trăng, tháng.
HỮU, là có.
TẢN, TÁN, là tản bộ, giải tán.
TẢN, TÁT, là vẩy, rắc.
QUYÊN, là lụa.
BỐI, là lưng.
VỊ, là dạ dày.
VỊ, là gọi là.
KHẲNG, là khẳng định.
NGÔN, là nói.
TÍN, là tin tưởng.
GIÁ, là bò.
NGỌ, là buổi trưa.
HỨA, là cho phép.
XỬ, là cái chày.
NGƯU, là con bò.
KIỆN, là sự kiện.
LAO, là nhà tù.
TÊ, là tê giác.
MẪU, là con đực.
HÓA, là biến hóa.
HOA, là bông hoa.
HÓA, là hàng hóa.
NGOA, là giày.
KIM, là bây giờ.
NGÂM, là ngâm thơ.
HÀM, là ngậm.
HẠM, là gật đầu.
THAM, là tham lam.
NIỆM, là kỉ niệm.
NIỆM, là văn, xoắn.
NIÊM, là cá trê.
LỆNH, là mệnh lệnh.
LÃNH, là lạnh.
LĨNH hoặc LÃNH, là thủ lĩnh hoặc lãnh đạo.
LĨNH, là đỉnh núi.
LINH, là số 0.
LINH, là tuổi.
LINH, là cái chuông.
GIỚI, là giới thiệu.
GIỚI, là hoa anh túc.
GIỚI, là thế giới.
MỄ, là gạo.
MÊ, là lạc đường.
{% endcomment %}

| Kanji | Kun/On | Type     | Hán Việt  | Nghĩa             |
|-------|--------|----------|-----------|-------------------|
| 子    | こ     | こ       | TỬ        | con               |
| 字    | じ     | じ       | TỰ        | chữ               |
| 学    | まな   | まな     | HỌC       | học tập           |
| 厚    | あつ   | あつ     | HẬU       | bề dày            |
| 存    | そん   | そん     | TỒN       | tồn tại           |
| 在    | ざい   | ざい     | TẠI       | tồn tại           |
| 月    | つき   | つき     | NGUYỆT    | mặt trăng, tháng  |
| 有    | あ     | ゆう     | HỮU       | có                |
| 散    | ち     | さん     | TẢN, TÁN  | tản bộ, giải tán  |
| 撒    | ま     | さん     | TẢN, TÁT  | vẩy, rắc          |
| 絹    | きぬ   | けん     | QUYÊN     | lụa               |
| 背    | せ     | せ       | BỐI       | lưng              |
| 胃    | い     | い       | VỊ        | dạ dày            |
| 謂    | い     | い       | VỊ        | gọi là            |
| 肯    | こう   | こうてい | KHẲNG     | khẳng định        |
| 言    | い     | い       | NGÔN      | nói               |
| 信    | しん   | しん     | TÍN       | tin tưởng         |
| 這    | は     | はう     | GIÁ       | bò                |
| 午    | うま   | うま     | NGỌ       | buổi trưa         |
| 許    | ゆる   | ゆる     | HỨA       | cho phép          |
| 杵    | きね   | きね     | XỬ        | cái chày          |
| 牛    | うし   | うし     | NGƯU      | con bò            |
| 件    | けん   | けん     | KIỆN      | sự kiện           |
| 牢    | ろう   | ろう     | LAO       | nhà tù            |
| 犀    | さい   | さい     | TÊ        | tê giác           |
| 牡    | おす   | おす     | MẪU       | con đực           |
| 化    | ば     | ばける   | HÓA       | biến hóa          |
| 花    | はな   | はな     | HOA       | bông hoa          |
| 貨    | か     | か       | HÓA       | hàng hóa          |
| 靴    | くつ   | くつ     | NGOA      | giày              |
| 今    | いま   | いま     | KIM       | bây giờ           |
| 吟    | ぎん   | ぎん     | NGÂM      | ngâm thơ          |
| 含    | ふく   | ふく     | HÀM       | ngậm              |
| 頷    | うなず | うなず   | HẠM       | gật đầu           |
| 貪    | むさぼ | むさぼ   | THAM      | tham lam          |
| 念    | ねん   | ねん     | NIỆM      | kỉ niệm           |
| 捻    | ひね   | ひね     | NIỆM      | văn, xoắn         |
| 鯰    | なまず | なまず   | NIÊM      | cá trê            |
| 令    | れい   | れい     | LỆNH      | mệnh lệnh         |
| 冷    | ひ     | ひえる   | LÃNH      | lạnh              |
| 領    | りょう | りょう   | LĨNH/LÃNH | thủ lĩnh/lãnh đạo |
| 嶺    | れい   | れい     | LĨNH      | đỉnh núi          |
| 零    | れい   | れい     | LINH      | số 0              |
| 齢    | よわい | よわい   | LINH      | tuổi              |
| 鈴    | すず   | すず     | LINH      | cái chuông        |
| 介    | かい   | かい     | GIỚI      | giới thiệu        |
| 芥    | け     | からし   | GIỚI      | hoa anh túc       |
| 界    | かい   | かい     | GIỚI      | thế giới          |
| 米    | こめ   | こめ     | MỄ        | gạo               |
| 迷    | まよ   | まよう   | MÊ        | lạc đường         |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}

## 120 - 171

{% mp3 /assets/audio/jp/kanji01/kanji120-171.mp3 %}
{% comment %}
MÊ, là điều bí ẩn.
LAI, là tương lai.
ÁO, là trong cùng.
ÁO, là tấm cửa kéo.
KẾ, là thừa kế.
ĐOẠN, là đoạn tuyệt.
XỈ, là răng.
GIẢO, là cắn, nhai.
GẠO, là thóc.
CÚC, là hoa cúc.
CHÚC, là cháo.
THÂN, là gọi tên.
THẦN, là thần thánh.
THẦN, là cây Sakaki.
THÂN, là duỗi thẳng.
THÂN, là đàn ông.
MỘC, là cây, gỗ.
LÂM, là rừng thưa.
SÂM, là rừng rậm.
HƯU, là nghỉ ngơi.
BẢN/BỔN, là gốc.
THỂ, là cơ thể.
BÁT, là cái bát.
VINH, là vinh quang.
SAM, là cây liễu sam.
HẠNH, là quả mơ.
NGỐC, là kẻ ngốc.
BẢO, là bảo vệ.
BAO, là khen ngợi.
NHIỄM, là nhiễm độc.
ĐIỀU, là điều kiện.
ĐẤU/ĐẨU, là cái đấu/Bắc Đẩu.
KHOA, là khoa học.
LIỆU, là dự liệu.
ÂM, là âm thanh.
ÁM, là tối.
ÁM, là u ám.
Ý, là ý kiến.
ỨC, là 100 triệu.
ỨC, là ký ức.
ỨC, là rụt rè.
CHƯƠNG, là chương hồi.
CHƯỚNG, là chướng ngại.
CHƯƠNG, là rực rỡ.
THỦY, là nước.
BĂNG, là đá.
VĨNH, là vĩnh cửu.
VỊNH, là bơi.
VỊNH, là ngâm thơ.
HỎA, là lửa.
HÔI, là tro.
THAN, là than.
{% endcomment %}

| Kanji | Kun/On | Type     | Hán Việt | Nghĩa           |
|-------|--------|----------|----------|-----------------|
| 謎    | なぞ   | なぞ     | MÊ       | điều bí ẩn      |
| 来    | く     | くる     | LAI      | tương lai       |
| 奥    | おく   | おく     | ÁO       | trong cùng      |
| 襖    | ふすま | ふすま   | ÁO       | tấm cửa kéo     |
| 継    | つ     | つぐ     | KẾ       | thừa kế         |
| 断    | ことわ | ことわる | ĐOẠN     | đoạn tuyệt      |
| 歯    | は     | は       | XỈ       | răng            |
| 嚙    | か     | かむ     | GIẢO     | cắn, nhai       |
| 籾    | もみ   | もみ     | GẠO      | thóc            |
| 菊    | きく   | きく     | CÚC      | hoa cúc         |
| 粥    | かゆ   | かゆ     | CHÚC     | cháo            |
| 申    | もう   | もう     | THÂN     | gọi tên         |
| 神    | かみ   | かみ     | THẦN     | thần thánh      |
| 榊    | さかき | さかき   | THẦN     | cây Sakaki      |
| 伸    | め     | しん     | THÂN     | duỗi thẳng      |
| 紳    | しん   | しんし   | THÂN     | đàn ông         |
| 木    | き     | き       | MỘC      | cây, gỗ         |
| 林    | はやし | はやし   | LÂM      | rừng thưa       |
| 森    | もり   | もり     | SÂM      | rừng rậm        |
| 休    | やす   | やす     | HƯU      | nghỉ ngơi       |
| 本    | もと   | もと     | BẢN/BỔN  | gốc             |
| 体    | からだ | からだ   | THỂ      | cơ thể          |
| 鉢    | はち   | はち     | BÁT      | cái bát         |
| 栄    | さか   | さか     | VINH     | vinh quang      |
| 杉    | すぎ   | すぎ     | SAM      | cây liễu sam    |
| 杏    | あんず | あんず   | HẠNH     | quả mơ          |
| 呆    | ほう   | ほう     | NGỐC     | kẻ ngốc         |
| 保    | たも   | たも     | BẢO      | bảo vệ          |
| 褒    | ほめる | ほめる   | BAO      | khen ngợi       |
| 染    | そめる | そめる   | NHIỄM    | nhiễm độc       |
| 条    | じょう | じょう   | ĐIỀU     | điều kiện       |
| 斗    | と     | ほくと   | ĐẤU/ĐẨU  | cái đấu/Bắc Đẩu |
| 科    | か     | かがく   | KHOA     | khoa học        |
| 料    | りょう | りょう   | LIỆU     | dự liệu         |
| 音    | おと   | おと     | ÂM       | âm thanh        |
| 暗    | くら   | くらい   | ÁM       | tối             |
| 闇    | やみ   | やみ     | ÁM       | u ám            |
| 意    | い     | いけん   | Ý        | ý kiến          |
| 億    | おく   | おく     | ỨC       | 100 triệu       |
| 憶    | おく   | きおく   | ỨC       | ký ức           |
| 臆    | おく   | おくする | ỨC       | rụt rè          |
| 章    | しょう | しょう   | CHƯƠNG   | chương hồi      |
| 障    | さわ   | さわる   | CHƯỚNG   | chướng ngại     |
| 彰    | しょう | しょう   | CHƯƠNG   | rực rỡ          |
| 水    | みず   | みず     | THỦY     | nước            |
| 氷    | こおり | こおり   | BĂNG     | đá              |
| 永    | なが   | ながい   | VĨNH     | vĩnh cửu        |
| 泳    | およ   | およぐ   | VỊNH     | bơi             |
| 詠    | よむ   | えいたん | VỊNH     | ngâm thơ        |
| 火    | ひ     | ひ       | HỎA      | lửa             |
| 灰    | はい   | はい     | HÔI      | tro             |
| 炭    | すみ   | すみ     | THAN     | than            |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

## 172 - 231

{% mp3 /assets/audio/jp/kanji01/kanji172-231.mp3 %}
{% comment %}
LẬP, là đứng.
VỊ, là vị trí.
KHẤP, là khóc.
LẠP, là hạt.
LẠP, là lôi kéo.
LẠP, là cái nón.
THIỆT, là cái lưỡi.
THOẠI, là hội thoại.
HOẠT, là hoạt động.
KHOÁT, là bất cẩn.
QUÁT, là bao quát.
LOẠN, là hỗn loạn.
QUÁT, là chắc chắn.
TÁC, là sáng tác.
TẠC, là hôm qua.
TẠC, là giấm.
TRÁ, là ép.
TRÁ, là dối trá.
MÔN, là cổng.
NHÀN, là nhàn rỗi.
VĂN, là nghe.
VẤN, là hỏi.
KHAI, là mở.
BẾ, là đóng.
THIỂM, là tia sáng.
GIAN, là thời gian.
GIẢN, là đơn giản.
NHUẬN, là lợi nhuận.
LAN, là lan can.
LAN, là hoa lan.
LẠN, là rực rỡ.
CẬP, là phổ cập.
CẤP, là cấp độ.
HẤP, là hô hấp.
TRÁP, là đối xử.
CẤP, là múc nước.
VƯƠNG, là vua.
TOÀN, là toàn bộ.
KIM, là tiền,vàng.
NGỌC, là viên ngọc.
BẢO, là bảo vật.
QUỐC, là quốc gia.
CỐC, là thung lũng.
DỤC, là dục vọng.
DỤC, là tắm.
DUNG, là nội dung.
DUNG, là dung dịch.
TỤC, là phong tục.
DỤ, là giàu có.
TRƯỢNG, là trượng phu.
TRƯỢNG, là cây gậy.
SỬ, là lịch sử.
LẠI, là quan lại.
SỬ hoặc SỨ, là Sử dụng hoặc Thiên sứ.
ĐÀI, là vũ đài.
THỦY, là bắt đầu.
DÃ, là thợ rèn.
TRỊ, là trị liệu.
ĐÃI, là lười biếng.
THAI, là bào thai.
{% endcomment %}

| Kanji | Kun/On | Type       | Hán Việt | Nghĩa            |
|-------|--------|------------|----------|------------------|
| 立    | た     | たつ       | LẬP      | đứng             |
| 位    | くらい | くらい     | VỊ       | vị trí           |
| 泣    | な     | なく       | KHẤP     | khóc             |
| 粒    | つぶ   | つぶ       | LẠP      | hạt              |
| 拉    | ら     | らち       | LẠP      | lôi kéo          |
| 笠    | かさ   | かさ       | LẠP      | cái nón          |
| 舌    | した   | した       | THIỆT    | cái lưỡi         |
| 話    | はなし | はなし     | THOẠI    | hội thoại        |
| 活    | いきる | いきる     | HOẠT     | hoạt động        |
| 闊    | かつ   | うかつ     | KHOÁT    | bất cẩn          |
| 括    | くく   | くくり     | QUÁT     | bao quát         |
| 乱    | みだ   | みだれる   | LOẠN     | hỗn loạn         |
| 筈    | はず   | はず       | QUÁT     | chắc chắn        |
| 作    | つく   | つくる     | TÁC      | sáng tác         |
| 昨    | さく   | さくねん   | TẠC      | hôm qua          |
| 酢    | す     | すめし     | TẠC      | giấm             |
| 搾    | しぼ   | しぼる     | TRÁ      | ép               |
| 詐    | さ     | さぎ       | TRÁ      | dối trá          |
| 問    | もん   | もん       | MÔN      | cổng             |
| 閑    | かん   | あんかん   | NHÀN     | nhàn rỗi         |
| 聞    | き     | きこえる   | VĂN      | nghe             |
| 問    | とい   | とい       | VẤN      | hỏi              |
| 開    | ひら   | ひらく     | KHAI     | mở               |
| 閉    | し     | しめる     | BẾ       | đóng             |
| 閃    | ひらめ | ひらめく   | THIỂM    | tia sáng         |
| 間    | あいだ | あいだ     | GIAN     | thời gian        |
| 簡    | かん   | かんたん   | GIẢN     | đơn giản         |
| 潤    | うるお | うるおう   | NHUẬN    | lợi nhuận        |
| 欄    | らん   | らん       | LAN      | lan can          |
| 蘭    | らん   | らん       | LAN      | hoa lan          |
| 爛    | ただ   | ただれ     | LẠN      | rực rỡ           |
| 及    | およ   | およぶ     | CẬP      | phổ cập          |
| 級    | きゅう | しょきゅう | CẤP      | cấp độ           |
| 吸    | す     | すう       | HẤP      | hô hấp           |
| 扱    | あつか | あつかい   | TRÁP     | đối xử           |
| 汲    | く     | きゅう     | CẤP      | múc nước         |
| 王    | おう   | おう       | VƯƠNG    | vua              |
| 全    | ぜん   | ぜんぶ     | TOÀN     | toàn bộ          |
| 金    | きん   | きん       | KIM      | tiền,vàng        |
| 玉    | たま   | たま       | NGỌC     | viên ngọc        |
| 宝    | たから | たから     | BẢO      | bảo vật          |
| 国    | くに   | くに       | QUỐC     | quốc gia         |
| 谷    | たに   | たに       | CỐC      | thung lũng       |
| 欲    | ほ     | ほしい     | DỤC      | dục vọng         |
| 浴    | あびる | あびる     | DỤC      | tắm              |
| 容    | よう   | ないよう   | DUNG     | nội dung         |
| 溶    | と     | とける     | DUNG     | dung dịch        |
| 俗    | ぞく   | ぞくに     | TỤC      | phong tục        |
| 裕    | ゆう   | ゆうふく   | DỤ       | giàu có          |
| 丈    | たけ   | たけ       | TRƯỢNG   | trượng phu       |
| 杖    | つえ   | つえ       | TRƯỢNG   | cây gậy          |
| 史    | し     | しがく     | SỬ       | lịch sử          |
| 吏    | り     | かんり     | LẠI      | quan lại         |
| 使    | つか   | つかう     | SỬ/SỨ    | sử dụng/thiên sứ |
| 台    | だい   | だい       | ĐÀI      | vũ đài           |
| 始    | はじ   | はじめる   | THỦY     | bắt đầu          |
| 冶    | じ     | かじ       | DÃ       | thợ rèn          |
| 治    | なお   | なおる     | TRỊ      | trị liệu         |
| 怠    | なま   | なまける   | ĐÃI      | lười biếng       |
| 胎    | たい   | たいじ     | THAI     | bào thai         |
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}