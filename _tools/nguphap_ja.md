---
layout: tool
robots: NOINDEX, NOFOLLOW
# info
priority: 0
tool_name: Ngữ pháp JA
icon: "/assets/img/tools/nguphap_ja.png"
description: Từ vựng JA
konami: true
toc: true
---
<link rel="stylesheet" href="/tools/tuvung_ja/style.css" />
<script src="/tools/tuvung_ja/scripts.js"></script>

<button onclick="showHideBtnClick()" title="Show/Hide" id="showHideBtn" class="w3-btn w3-border w3-border-blue w3-white" style="display: block;">Toggle</button>

# Ngữ pháp cơ bản

## Động từ và Thể

### Nhóm 1
- Nhận dạng:
    - Âm cuối thuộc {% hide cột い %} (ます) hoặc {% hide cột う %} (Từ điển)
    - Dễ nhầm:
        - Âm cuối hàng R (る / り): nhìn る nhưng là nhóm 1 ({% hide VD: 切る - きります, 知る - しります %})
        - Âm cuối hàng S (す / し): nhìn します nhưng là nhóm 1 ({% hide VD: 消す - けします, 出す - だします %})
    - Đuôi động từ thể ます:{% hide 1.います [Imasu] %} {% hide 2.きます [Kimasu] %} {% hide 3.ぎます [Gimasu] %} {% hide 4.します [Shimasu] %} {% hide 5.ちます [Chimasu] %} {% hide 6.にます [Nimasu] %} {% hide 7.びます (thiếu HI?) [Bimasu] %} {% hide 8.みます [Mimasu] %} {% hide 9.ります [Rimasu] %}
    - Đuôi động từ thể Từ điển: {% hide 1.う %} {% hide 2.く %} {% hide 3.ぐ %} {% hide 4.す %} {% hide 5.つ %} {% hide 6.ぬ %} {% hide 7.ぶ (thiếu HI?) %} {% hide 8.む %} {% hide 9.る %}
- Chuyển đổi:
    - [{% hide -う %}] → thành đuôi [{% hide -い %}] + ます
    - Bỏ「{% hide ます %}」+ chuyển âm cuối từ hàng {% hide 「い」 %} sang hàng {% hide 「う」 %}
- Các thì của thể ます (áp dụng cho bất kỳ động từ nào chia ở thể ます)
    - Hiện tại + Tương lai:
        - Khẳng định: {% hide ～ます %}
        - Phủ định: {% hide ～ません %}
    - Quá khứ:
        - Khẳng định: {% hide ～ました %}
        - Phủ định: {% hide ～ませんでした %}
- Thể ない ({% hide NAI - phủ định: là dạng ngắn của động từ ở thể phủ định %})
    - Âm cuôi là chữ {% hide い (masu) hoặc う (từ điển) %} → chuyển い / う thành {% hide わ %} rồi {% hide + ない %}.
    - Trường hợp đặc biệt: {% hide あります（có）→ ない %}
    - Nguyên tắc chung: {% hide Bỏ「ます 」 %}, chuyển âm cuối từ hàng {% hide 「い / う」 %} → hàng {% hide 「あ」 %} rồi {% hide + ない %}
- Thể た ({% hide TA - Quá khứ %})
    - した(shita): áp dụng cho động từ có âm cuối là {% hide す｜し %}
    - いた(ita): áp dụng cho động từ có âm cuối là {% hide く｜き %}
    - いだ(ida): áp dụng cho động từ có âm cuối là {% hide ぐ｜ぎ %}
    - んだ(nda): áp dụng cho động từ có âm cuối là ({% hide M B N %}) {% hide む、ぶ、ぬ HOẶC み、び、に %}
    - った(tta): áp dụng cho động từ có âm cuối là ({% hide 'A' R T %}) {% hide う、る、つ HOẶC い、り、ち %}
    - Thể た (quá khứ) có thể PHỦ ĐỊNH QUÁ KHỨ là {% hide なかった (nakatta : đã không) %}
        - Cách chia なかった giống như cách chia thể {% hide ない %}: chỉ cần thay {% hide ない %} bằng {% hide なかった %}, các phần còn lại đều giống như {% hide ない (い/う → わ, còn lại sang あ rồi + なかった) %}
- Thể て (TÊ) (chia giống hệt thể た, thay た = て)
    - して(shite): áp dụng cho động từ có âm cuối là {% hide す｜し %}
    - いて(ite): áp dụng cho động từ có âm cuối là {% hide く｜き %}
    - いで(ide): áp dụng cho động từ có âm cuối là {% hide ぐ｜ぎ %}
    - んで(nde): áp dụng cho động từ có âm cuối là ({% hide M B N %}) {% hide む、ぶ、ぬ HOẶC み、び、に %}
    - って(tte): áp dụng cho động từ có âm cuối là ({% hide 'A' R T %}) {% hide う、る、つ HOẶC い、り、ち %}

### Nhóm 2
- Nhận dạng:
    - Âm cuối thuộc {% hide cột え %} VÀ {% hide 9+ trường hợp đặc biệt kết thúc bằng đuôi い (đặc điểm nhóm I) nhưng thuộc nhóm II %}
        1. {% tooltip KHỞI [sáng THỨC DẬY CHẠY 2 vòng] %} 起きます({% hide おき.ます %}): thức dậy
        2. {% tooltip KIẾN [kiến NHÌN bằng MẮT CHÂN CHẠY rất nhanh] %} 見ます({% hide み.ます %}): nhìn, xem
        3. {% tooltip GIÁNG [Bồ sau 14 năm bị GIÁNG chức] %} 降ります({% hide おり.ます %}): xuống (tàu xe)
        4. {% tooltip CƯ [XÁC CHẾT tìm mộ CỔ để CƯ TRÚ] %} 居ます({% hide い.ます %}): có, ở (người, con vật, không phải đồ vật)
        5. {% tooltip TÚC [CHÂN đá tung MỒM HẠ NHÂN] %} 足ります({% hide たり.ます %}): đầy đủ
        6. {% tooltip DỤC [NƯỚC trong CỐC dùng để TẮM] %} 浴びます({% hide あび.ます %}): tắm
        7. {% tooltip TÁ [NGƯỜI NGÀY XƯA VAY MƯỢN mình] %} 借ります({% hide かり.ます %}): mượn, vay
        8. {% tooltip XUẤT [bị 2 ngọn NÚI đè nên không thể XUẤT ra được] %} {% tooltip LAI [1 loại GẠO mới sẽ ra đời trong TƯƠNG LAI] %} 出来ます({% hide で.き.ます %}): có thể, được xây, hoàn thành
        9. {% tooltip TRƯỚC [CON DÊ MẮT nhìn MẶC đồ] %} 着ます({% hide き.ます %}): mặc (áo, mũ, kính, phần bên trên thắt lưng)
    - Đặc biệt: {% hide かえる (kaeru) %}: về, về nhà ({% hide kết thúc bằng “eru” nhưng là động từ nhóm 1 %})
- Chuyển đổi:
    - Bỏ đuôi {% hide -る %} + ます
    - Bỏ đuôi {% hide -ます %} + る
- Thể ない (phủ định dạng ngắn):
    - Bỏ đuôi {% hide -る / -ます %} + ない
- Thể た (quá khứ):
    - Bỏ đuôi {% hide -る / -ます %} + た
- Thể た:
    - Bỏ đuôi {% hide -る / -ます %} + て

### Nhóm 3
- Nhận dạng:
    - きます hoặc {% hide くる %}: đến
    - します hoặc {% hide する %}: làm
    - N + します/する : làm N ({% hide danh động từ, thường gồm 2+ kanji %})
- Thể ない (phủ định dạng ngắn):
    - きます hoặc くる: đến →　{% hide こない(konai) %}: Không đến
    - します hoặc する: làm →　{% hide しない(shinai) %}: Không làm
    - N + します/する : làm N ({% hide danh động từ, thường gồm 2+ kanji %}) →　{% hide N + しない(shinai): Không làm N %}
- Thể た (quá khứ):
    - きます hoặc くる: đến →　{% hide きた(kita) %}: Đã đến
    - します hoặc する: làm →　{% hide した(shita) %}: Đã làm
    - N + します/する : làm N ({% hide danh động từ, thường gồm 2+ kanji %}) →　{% hide N + した(shita): Đã làm N %}
- Thể て:
    - きます hoặc くる: đến　→　{% hide きて (đến) %}
    - します hoặc する: làm　→　{% hide して (làm) %}
    - N + します/する : làm N ({% hide danh động từ, thường gồm 2+ kanji %})　→　{% hide N + して (làm N) %}

### Hệ thống các thể của Động từ
- {% mark Thể khả năng %}
    - Được dùng để {% hide diễn tả khả năng, đủ năng lực hoặc điều kiện để làm một việc gì đó %}
    - Được dùng khi:
        - {% hide Diễn tả khả năng %}: {% hide Tôi đã có thể nói được tiếng Nhật %}
        - {% hide Diễn tả sự thay đổi %}: {% hide Khi muốn nói về một sự thay đổi, một điều gì đó **TRỞ NÊN CÓ THỂ** %}
        - {% hide Thể bị động %}: {% hide Dạng bị động của thể sai khiến, bị bắt phải làm gì %} ({% hide thể hiện sự không vừa lòng, khó chịu của người nói khi bị ép buộc %}, {% hide Lưu ý: Thể bị động trong tiếng Nhật thường được sử dụng để thể hiện *tình trạng không thoải mái, hoặc cảm thấy phiền toái* %})
    - Cách chia thể khả năng:
        - **Nhóm 1**: cột {% hide -う/-い %} sang cột {% hide -え(**e**) %}, sau đó {% hide thêm đuôi **る** %}. [{% hide **-'え'る('e'ru)** %}]. VD: {% tooltip (1) [書く (kaku - viết) → 書ける (kakeru - có thể viết)] %} {% tooltip (2) [話す (hanasu) → 話せる (hanaseru)] %} {% tooltip (3) [読む (yomu) → 読める (yomeru)] %}
        - **Nhóm 2**: Bỏ {% hide đuôi る/ます %} rồi {% hide thêm られる(**rareru**) %}. [{% hide **-られる(rareru**) %}]. VD: {% tooltip (1) [食べる (tabe*ru* - ăn) → 食べ**られる** (tabe**rareru** - có thể ăn)] %} {% tooltip (2) [見る (mi*ru*) → 見**られる** (mi**rareru**)] %} {% tooltip (3) [起きる (oki*ru*) → 起き**られる** (oki**rareru**)] %}
        - **Nhóm 3**:
            - くる (kuru - đến) → {% hide こられる %} ({% hide **korareru** %} - có thể đến)
            - する (suru - làm) → {% hide できる %} ({% hide **dekiru** %} - có thể làm)
- {% mark Thể bị động %} (受身形(-う.け(-u.ke)み(mi)ケイ(KEI)) - ukemikei)
    - Được dùng để diễn tả hành động mà {% hide chủ ngữ là NGƯỜI hoặc VẬT **chịu tác động** *của một hành động khác* %}.
    - Được dùng khi:
        - {% hide Diễn tả hành động bị tác động %}: Khi muốn nói {% hide ai đó hoặc cái gì đó chịu tác động của một hành động nào đó. Ví dụ: "Tôi bị mẹ mắng" %}
        - {% hide Diễn tả sự khó chịu hoặc phiền toái %}: Khi muốn nói về {% hide một hành động **gây ra** *sự khó chịu, phiền toái* %} cho {% hide chủ ngữ. Ví dụ: "Điện thoại của tôi bị bạn làm hỏng" %}
        - {% hide Bị động với chủ thể không quan trọng %}: Khi {% hide chủ thể của hành động %} không được biết đến hoặc {% hide không quan trọng. Ví dụ: "Ngôi nhà này được xây cách đây 200 năm" (ai xây ko quan trọng) %}
    - Các loại bị động:
        - {% hide Bị động trực tiếp %}: Chủ ngữ là đối tượng {% hide trực tiếp chịu tác động của hành động %}. VD: {% hide Tôi bị mẹ mắng. %}
        - {% hide Bị động gián tiếp %}: Có hai {% hide tân ngữ %} trong {% hide câu chủ động %}, và {% hide một trong số đó %} trở thành {% hide chủ ngữ trong câu bị động %}
            - Có 2 dạng bị động gián tiếp:
                1. A が **B に** C を + động từ chủ động → B は **A に** C を + động từ bị động. VD: {% tooltip (1) [Người lạ (A) hỏi tôi (B) đường đi (C) → Tôi(は) bị một người lạ(**に**) hỏi đường(を)] %}.
                2. A は B **の** [Danh từ] を + động từ chủ động → B は A に [Danh từ] を + động từ bị động. VD: {% tooltip (2) [Cô giáo (A) khen tiếng Nhật (Noun) của tôi (B) → Tôi(は) Cô giáo(に) Tiếng nhật(を) ... = Tiếng Nhật của tôi được cô giáo khen] %}
            - Lưu ý: {% mark Cần phân biệt rõ tân ngữ nào trở thành chủ ngữ trong câu bị động để tránh nhầm lẫn. %}
    - Sắc thái nghĩa của thể bị động:
        - Thể bị động thường được dùng để diễn tả một sự việc {% hide khách quan (không có ý chủ quan) %}
        - Trong nhiều trường hợp, thể bị động mang sắc thái {% hide bị ép buộc, không mong muốn %} hoặc {% hide cảm thấy phiền toái %}
    - Cách chia thể bị động:
        - **Nhóm 1**: cột {% hide -う/-い %} sang cột {% hide -あ(**a**) %}, sau đó {% hide thêm đuôi **れる** %}. [{% hide **-'あ'れる('a'reru)** %}]. VD: {% tooltip (1) [書く (kaku - viết) → 書かれる (kakareru - bị viết)] %} {% tooltip (2) [話す (hanasu - nói) → 話される (hanasareru - bị nói)] %} {% tooltip (3) [待つ (matsu - đợi) → 待たれる (matareru - bị đợi)] %}
        - **Nhóm 2**: ({% hide **Giống với** *Thể khả năng* %}) Bỏ {% hide đuôi る/ます %} rồi {% hide thêm られる(**rareru**) %}. [{% hide **-られる(rareru**) %}]. VD: {% tooltip (1) [食べる (tabe*ru* - ăn) → 食べ**られる** (tabe**rareru** - có thể ăn)] %} {% tooltip (2) [見る (mi*ru*) → 見**られる** (mi**rareru**)] %} {% tooltip (3) [起きる (oki*ru*) → 起き**られる** (oki**rareru**)] %}
        - **Nhóm 3**:
            - くる (kuru - đến) → {% hide こられる %} ({% hide **korareru** %} - bị đến) [{% hide *cũng **giống** như くる của Thể Khả Năng* %}]
            - する (suru - làm) → {% hide される %} ({% hide **sareru** %} - bị làm)

## Tính từ

### Các thì của các tính từ
- Tính từ **đuôi い**
    - Hiện tại
        - Khẳng định:
            - MẪU: Chủ ngữ + は + {% hide Adj(**CÓ い**) %} + {% hide です %}。
            - RÚT GỌN: Khi nói với bạn bè, người thân có thể {% hide bỏ 「です」 %} ({% hide hay dùng trong hội thoại hàng ngày %}, {% hide có よ ở cuôi. VD:...たかい**よ** %}).
        - Phủ định
            - MẪU: Chủ ngữ + は + {% hide Adj(bỏ い) %} + {% hide くない(**Kunai**) %} + {% hide です %}。
            - RÚT GỌN: none, có thể {% hide bỏ 「です」giống thể khẳng định ở trên %}
    - Quá khứ
        - Khẳng định:
            - MẪU: Chủ ngữ + は + {% hide Adj(bỏ い) %} + {% hide かった(**Katta**) %} + {% hide です %}。
            - RÚT GỌN: none, có thể {% hide bỏ 「です」giống thể khẳng định ở trên %}
        - Phủ định:
            - MẪU: Chủ ngữ + は + {% hide Adj(bỏ い) %} + {% hide くなかった(**Ku Na Katta**) %} + {% hide です %}。
            - RÚT GỌN: none, có thể {% hide bỏ 「です」giống thể khẳng định ở trên %}
- Tính từ **đuôi な**
    - Hiện tại
        - Khẳng định:
            - MẪU: Chủ ngữ + は + {% hide Adj(**bỏ な**) %} + {% hide です %}。
            - RÚT GỌN: Cách nói thân mật ({% hide hay dùng trong hội thoại %}) của {% hide 「です」là 「だ」 %}, {% hide có ね ở cuối. VD:...だ**ね** %}
        - Phủ định:
            - MẪU: Chủ ngữ + は + {% hide Adj(bỏ な) %} + {% hide じゃ ありません %} {% hide HOẶC %} {% hide では ありません %}。[{% hide **Ja Arimasen** / **DeWa Arimasen** %}]
            - RÚT GỌN ({% hide hay dùng trong hội thoại %}): {% hide 「じゃ ありません」 %} là {% hide 「じゃない(**Ja Nai**)」 %}; {% hide 「では ありません」 %} là {% hide 「では ない(**DeWa Nai**)」 %}. ({% hide **DeWa Nai** lịch sự hơn **Ja Nai** %})
    - Quá khứ
        - Khẳng định:
            - MẪU: Chủ ngữ + は + {% hide Adj(bỏ な) %} + {% hide でした(**Deshita**) %}。
            - RÚT GỌN: {% hide Cách nói thân mật %} (hay dùng trong hội thoại) của {% hide 「でした」 %} là {% hide 「だった(**Datta**)」 %}
        - Phủ định
            - MẪU: Chủ ngữ + は + {% hide Adj(bỏ な) %} + {% hide じゃ ありませんでした %} HOẶC {% hide では ありませんでした %}。[{% hide Ja Arimasen Deshita / De Wa Arimasen Deshita %}]
            - RÚT GỌN: Cách nói ngắn ({% hide hay dùng trong hội thoại %}) của {% hide 「じゃ ありませんでした」 %} là {% hide 「じゃ なかった(**Ja NaKatta**)」 %}; {% hide 「では ありませんでした」 %} là {% hide 「では なかった(**DeWa NaKatta**)」 %}. ({% hide **DeWa NaKatta** lịch sự hơn **Ja NaKatta** %})

### Tính từ khi kết hợp với Noun và Verb
- Tính từ đứng trước Noun:
    - Cấu trúc: Tính từ い/な ({% hide giữ nguyên い/な %}) + {% hide Noun %}
- Tính từ đứng trước Verb ({% hide đóng vai trò Trạng từ %}) {% hide để bổ nghĩa cho Verb %}:
    - Tính từ い ({% hide **bỏ い** %}) + {% hide **く** %} + {% hide Verb %}. ({% hide Verb vẫn chia thì, chia thể như bình thường %})
    - Tính từ な ({% hide **bỏ な** %}) + {% hide **に** %} + {% hide Verb %}. ({% hide Verb vẫn chia thì, chia thể như bình thường %})