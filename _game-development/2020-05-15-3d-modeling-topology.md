---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "3D Modeling Topology"
description: "3D Modeling Topology"

### HUMAN
header: "3D Modeling Topology"
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400
text2speech: false # có bật chức năng Text-To-Speech hay không?

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true # để thêm màu mè cho <pre> CODE </pre>
amp: false
audioSetting: false # có menu để setting audio or not
collection: Bổ trợ kiến thức # this for AMP related post
### category: dùng để group collection
category: Bổ trợ kiến thức

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
# ROADMAP: https://github.com/utilForever/game-developer-roadmap
---
## Khởi động

### Sub-D (Subdivision) là gì?
- Hãy tưởng tượng bạn đang xây dựng một khối Lego. Ban đầu, bạn có một khối Lego lớn và gồ ghề. Đó là mô hình gốc. Bây giờ, bạn muốn biến nó thành một mô hình đẹp hơn, có nhiều chi tiết hơn. Để làm điều này, bạn chia mỗi mặt của khối Lego thành nhiều phần nhỏ hơn. Sau đó, bạn thêm nhiều khối Lego nhỏ hơn vào từng phần. Khi bạn làm như vậy, khối Lego ban đầu sẽ trở nên mịn màng và có nhiều chi tiết hơn. Đó là Sub-D!

### NURBS (Non-uniform rational B-spline) là gì?
- NURBS là viết tắt của cụm từ tiếng Anh: “Non-uniform rational B-spline”. Đây là một công cụ toán học được sử dụng trong đồ họa máy tính để tạo ra các đường cong và bề mặt. Cũng giống như trên, thay vì dùng Lego, chúng ta sử dụng các điểm điều khiển (Control Point) và công thức toán học để tạo ra các hình dạng phức tạp. Kết quả là chúng ta có thể tạo ra các mô hình 3D đẹp và tỉ lệ.
- Vấn đề thường hay gặp khi dùng NURBS là những vết cắt hoặc gãy trên vật thể, những khó khăn này có thể là lý do NURBS ít được sử dụng trong giới đồ họa, tuy nhiên nó lại khá phổ biến trong thiết kế kỹ thuật và sản phẩm vì bản chất chính xác về mặt toán học.

### Bump Map, Normal Map, Displacement Map là gì?
- Tất cả phần mềm đồ họa 3D đều xử lý theo nguyên tắc giống nhau: Màu TRẮNG thì NỔI LÊN, màu ĐEN thì CHÌM XUỐNG.
- Tốc độ render và khối lượng dữ liệu sẽ tăng dần theo thứ tự: *Bump Map > Normal Map (RGB) > Displacement Map*{:.w3-yellow}
- **Bump map (bản đồ Gập/Vết sưng)**:
    - Không làm thay đổi tính chất vật lý của mô hình, chỉ tạo ảo giác về độ sâu bề mặt.
    - Có hình dạng là ảnh **màu xám** và được giới hạn trong 8 bit màu (256 mức màu đen, trắng và xám khác nhau).
    - Khi sử dụng bump map, bạn có thể tạo ra các chi tiết như lỗ chân lông, nếp nhăn trên da của con người hoặc các chi tiết nhỏ khác trên hình ảnh.
- **Normal Map (bản đồ pháp tuyến)**:
    - Là một bức hình có đặc trưng **màu xanh ánh đỏ**, được sử dụng để làm giả ánh sáng của các vết lồi và vết lõm, nghĩa là nó thêm chi tiết mà không cần sử dụng thêm đa giác.
    - Normal mapping thường được lưu trữ dưới dạng ảnh RGB thông thường trong đó các thành phần RGB tương ứng với tọa độ X, Y và Z tương ứng của vector Pháp tuyến của bề mặt. X tương ứng với màu đỏ (Red), Y tương ứng với màu xanh (Green), Z tương ứng với màu xanh dương (Blue). Màu xanh ánh đỏ thường biểu thị hướng của vector pháp tuyến theo trục X và Y (lúc này Blue / Z = 255 ?)
- **Displacement map (Ánh xạ dịch chuyển)**:
    - Displacement map là một công cụ mạnh để làm cho mô hình 3D trở nên thực tế và đẹp hơn!
    - Displacement map không chỉ tạo ảo giác về độ sâu bề mặt, mà thực sự thay đổi hình dạng của đối tượng.
    - Khi sử dụng displacement map, các điểm (lưới) trên bề mặt kết cấu sẽ di chuyển dựa trên bản đồ độ cao hoặc bản đồ độ sâu, dẫn đến bóng của vật thể cũng sẽ thay đổi (do lưới thay đổi).
- [Xem thêm Youtube](https://www.youtube.com/watch?v=Bo3eONbMBKw){:.external.hvr-forward rel="nofollow" target="_blank"}

## Topology (cấu trúc liên kết)
- Trong mô hình 3D, Topology (còn gọi là cấu trúc mạng) đề cập đến sự sắp xếp của các Đỉnh, Cạnh và Mặt tạo nên cấu trúc của một đối tượng.
- Nó ảnh hưởng đến khả năng biến dạng của mô hình, hiệu suất khi render, và khả năng tương tác với các công cụ chỉnh sửa.
- Một Topology tốt giúp đảm bảo mô hình không bị lỗi, không có các đỉnh gần nhau quá mức cần thiết, và dễ dàng chỉnh sửa khi cần thiết. Nó cũng đóng vai trò quan trọng trong việc tạo ra các hiệu ứng như bẻ cong, phát sáng, và phản xạ ánh sáng trên bề mặt mô hình.

### Làm sao để cải thiện Topology của một mô hình 3D?
- Tham khảo và lập kế hoạch:
    - Trước khi bắt đầu, thu thập nhiều hình ảnh tham khảo cho mô hình của bạn.
    - Hiểu rõ cấu trúc, luồng và chi tiết chính của đối tượng.
    - Lập kế hoạch Topology trước, quyết định vị trí của các vòng cạnh.
- Bắt đầu đơn giản:
    - Tạo ra các hình dạng và cấu trúc chính của mô hình bằng số lượng đỉnh ít nhất có thể.
    - Điều này giúp đơn giản hóa quá trình và xác định nền tảng của Topology.
- Edge Loops và Flow:
    - Sự phép màu của Topology thường nằm trong việc sắp xếp các vòng cạnh.
    - Các vòng cạnh này tuân theo đường cong tự nhiên của mô hình và là yếu tố quan trọng cho việc biến dạng mượt mà.
    - Hãy tưởng tượng chúng như cấu trúc xương của tạo vật 3D của bạn.
- Hạn chế Poles và Xóa N-gons:
    - Poles có thể gây biến dạng và độ cứng. Hãy lập kế hoạch cẩn thận và giảm thiểu sử dụng chúng.
    - Xóa n-gons (đa giác có nhiều hơn 4 cạnh) để tránh các vấn đề không cần thiết (bị xô gập bề mặt).
- Giữ tính nhất quán:
    - Đảm bảo rằng khoảng cách giữa các cạnh và luồng Topology phù hợp trong toàn bộ mô hình.
    - Tính nhất quán này đóng góp vào việc biến dạng đều và sản phẩm cuối cùng được hoàn thiện.
- Một số lời khuyên khác:
    - Tối ưu hóa số lượng đỉnh và cạnh:
        - Tránh sử dụng quá nhiều đỉnh và cạnh không cần thiết. Điều này giúp giảm tải cho máy tính khi render và tạo ra mô hình dễ dàng quản lý.
        - Tìm hiểu về các công cụ tối ưu hóa Topology trong phần mềm 3D mà bạn đang sử dụng.
    - Sử dụng Subdivision Surface (Subdiv):
        - Subdiv là một công cụ mạnh để tạo ra Topology mượt mà và chi tiết.
        - Sử dụng Subdiv để tạo ra các đường cong mềm mại và tạo ra các chi tiết nhỏ hơn.
    - Kiểm tra và sửa lỗi:
        - Thường xuyên kiểm tra Topology để phát hiện lỗi như đỉnh gần nhau, cạnh gấp khúc, hay ngons.
        - Sử dụng các công cụ kiểm tra Topology có sẵn trong phần mềm 3D.
    - Học từ các mô hình chất lượng cao:
        - Nghiên cứu các mô hình 3D chất lượng cao từ các nghệ sĩ chuyên nghiệp.
        - Xem cách họ bố trí Topology và học hỏi từ kinh nghiệm của họ.
    - Thử nghiệm và điều chỉnh:
        - Không sợ thử nghiệm và điều chỉnh Topology.
        - Tạo ra nhiều phiên bản khác nhau và so sánh chúng để tìm ra Topology tốt nhất cho mô hình của bạn.
        - Nhớ rằng việc cải thiện Topology là một quá trình liên tục và đòi hỏi sự kiên nhẫn và thực hành. 
    - Sử dụng Symmetry:
        - Sử dụng tính đối xứng để tạo ra một nửa của mô hình và sau đó sao chép đối xứng sang phía còn lại.
        - Điều này giúp giảm công sức và đảm bảo tính đối xứng của Topology.
    - Chú ý đến các khu vực quan trọng:
        - Tập trung vào việc tạo Topology chính xác cho các khu vực quan trọng như khuôn mặt, bàn tay, hay các chi tiết đặc biệt.
        - Điều này giúp đảm bảo mô hình có chi tiết tốt và hiệu suất render cao.
    - Tìm hiểu về Retopology:
        - Retopology là quá trình tạo lại Topology cho mô hình đã hoàn thành.
        - Khi bạn làm việc với mô hình đã có, hãy tìm hiểu về Retopology để cải thiện Topology mà không làm thay đổi hình dạng tổng thể.
    - Thử nghiệm với các công cụ Sculpting:
        - Các công cụ Sculpting cho phép bạn tạo ra các chi tiết tự nhiên trên mô hình.
        - Sử dụng Sculpting để thêm các nếp gấp, vết thương, hay các chi tiết nhỏ khác vào mô hình.
    - Học từ cộng đồng và tài liệu:
        - Tham gia các cộng đồng nghệ sĩ 3D trực tuyến để học hỏi và chia sẻ kinh nghiệm.
        - Đọc tài liệu và hướng dẫn về Topology từ các nguồn đáng tin cậy.

### Hard Surface Cheat Sheets
- **Holding Edges (Giữ cạnh)**: Nếu bạn định chuyển sang mô hình 3D bằng cách sử dụng bản xem trước Sub-D hoặc cuối cùng áp dụng Smooth cho mô hình của bạn, bạn sẽ cần thêm các cạnh giữ để bảo vệ mô hình các cạnh cứng.<br>![TEXT](/assets/img/collections/topology-holding-edges.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - **Fencing**: Kỹ thuật này bao gồm việc chạy các vòng cạnh (**edge-loops**) dọc theo cả hai mặt của một cạnh cứng (hard edge). Các góc (**Corners**) sẽ tạo thành một khối lập phương nhỏ nếu được thực hiện đúng cách.
    - **Beveling**: Kỹ thuật này bao gồm việc chọn tất cả các cạnh cứng (**hard edges**) của bạn và áp dụng một góc xiên (bevel). Càng có nhiều đường chia trên góc xiên thì cạnh càng cứng.
    - **Creasing**: Phương pháp này chỉ đơn giản là thêm một giá trị nếp gấp (**crease value**) mà không cần thêm hình học bổ sung.
- **Topology Patterns (Các mẫu cấu trúc liên kết)**: Có nhiều mẫu cấu trúc liên kết (**topology patterns**) có mục đích khác nhau. Chúng ta hãy xem xét kỹ hơn hai mẫu rất hữu ích:
    - **Redirect**: Giống như tên ngụ ý, hãy sử dụng mẫu này để biểu thị sự thay đổi hướng. Điều này có thể được sử dụng để tạo các góc trong khi vẫn giữ cho mô hình của bạn có tất cả các hình tứ giác (quads).<br>![TEXT](/assets/img/collections/topology-pattern-01-01.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}![TEXT](/assets/img/collections/topology-pattern-01-02.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - **Diamond**: Sử dụng mẫu này để giảm hình học. Điều này rất hữu ích khi đi từ vùng đa giác Cao đến Thấp trong khi vẫn giữ cho mô hình của bạn tất cả các hình tứ giác (quads).<br>![TEXT](/assets/img/collections/topology-pattern-02-01.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Curved Surfaces (Bề mặt cong)**: Việc tạo các chi tiết bề mặt cứng trên các bề mặt cong có thể mang lại những thách thức riêng. Một vấn đề phổ biến là chèn ép (**pinching**). Khi chúng ta cố gắng định hình một số cạnh, chúng ta cũng làm sắc nét các cạnh không mong muốn. Hãy xem cách chúng ta có thể tạo các chi tiết trên bề mặt cong mà vẫn tránh bị chèn ép.
    - **Pinching on Curved Surfaces**: Trong ví dụ này, mục tiêu của chúng ta là giữ cho các cạnh của hình chữ nhật lõm vào được sắc nét. Cạnh ngang (đường màu đỏ) trong ví dụ này sẽ giữ các cạnh đó nhưng cũng gây ra hiện tượng kẹp (**pinching**) không mong muốn (đường màu xanh lá cây) do nó nằm gần các cạnh dọc khác. Cạnh ngang (đường màu xanh) sẽ không gây cấn (**pinching**) khi chạy dọc theo bề mặt cong. Để khắc phục hiện tượng chèn ép (pinching), chúng ta phải định tuyến lại (re-route) luồng cạnh (**edgeflow**) để nó chạy theo chiều ngang và giữ khoảng cách đồng đều dọc theo các cạnh thẳng đứng.<br>![TEXT](/assets/img/collections/topology-pinching-01.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - **Re-routing edgeflow to Fix Pinching**: Chúng ta sẽ định tuyến lại các cạnh (đường màu xanh lá cây) về phía các góc của hình chữ nhật bằng mẫu chuyển hướng (**redirect pattern**) và chạy chúng theo chiều ngang dọc theo bề mặt cong. bằng cách sử dụng kỹ thuật này, chúng tôi vẫn giữ được các cạnh cứng ở góc. trong khi thoát khỏi sự chèn ép mà chúng ta đã có trước đó.<br>![TEXT](/assets/img/collections/topology-pinching-02.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
- **Radial Symmetry (Đối xứng xuyên tâm)**:
    - Điều gì sẽ xảy ra nếu chúng ta muốn lấy cửa sổ hình chữ nhật trước đó và tạo 6 cửa sổ xung quanh hình trụ của mình. Đó là lúc việc biết cách tạo ra sự đối xứng xuyên tâm trở nên cực kỳ hữu ích. Hãy chia nhỏ quá trình.
    - Vì vậy hình trụ ban đầu có 60 vạch chia và chúng tôi giữ lại 10 vạch chia để tạo ra "lát cắt" của mình. 60/10=6. Vậy 6 lát cắt sẽ có tác dụng khi xây dựng lại hình trụ. Tôi luôn khuyên bạn nên bắt đầu với một hình trụ đầy đủ, chọn lát cắt mà bạn muốn làm việc, xóa phần còn lại và tạo mô hình cho một phần của mẫu.
    - Đảm bảo rằng trục xoay của bạn nằm ở đầu lát cắt (điểm đỏ).
    - Chúng ta cần xoay lát cắt dọc theo trục Y. Để tính ra độ, chúng ta chỉ cần chia (tổng độ trong một vòng tròn) cho (số lát). 360/6=60. Vì vậy, chúng ta nhập 60 vào trường Xoay Y. Chúng ta cần thêm 5 bản sao vì đã có sẵn 1 bản, vì vậy chúng ta nhập 5 vào số lượng bản sao. Chúng ta nhấn áp dụng và chúng tôi nhận được hình trụ hoàn chỉnh với mẫu của chúng tôi được nhân đôi 6 lần. Từ đó, chúng ta chỉ cần kết hợp 6 phần của mình và hợp nhất lại.<br>![TEXT](/assets/img/collections/topology-radical-symmetry-01.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Khi bạn hiểu rõ về tính đối xứng xuyên tâm, bạn sẽ có thể tạo hình dạng bề mặt cứng phức tạp hơn như vành xe một cách dễ dàng!
- **Pattern Creation + Deformers (Mẫu Tạo + Bộ biến dạng)**:
    - Hãy mô hình clip súng máy với quy trình làm việc sau:
        1. Chia mô hình thành một mẫu có thể lặp lại, phần lớn công việc được thực hiện bằng tính đối xứng.
        2. Tạo mô hình thẳng và sử dụng sự trợ giúp của bộ biến dạng (**deformer**) để tạo cho nó hình dạng cuối cùng.<br>![TEXT](/assets/img/collections/topology-creation-deformers-01.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>![TEXT](/assets/img/collections/topology-creation-deformers-02.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
    - Sử dụng tính đối xứng (**symmetry**) sẽ tăng tốc quá trình và đảm bảo mô hình của chúng tôi đồng đều. Việc sử dụng bộ biến dạng (**deformer**) sẽ cho phép chúng ta tạo ra phần lớn mô hình của mình một cách dễ dàng khi làm việc trong không gian thế giới và chỉ cần uốn cong nó vào vị trí khi kết thúc quá trình tạo mô hình. Quy trình công việc này (**workflow**) có thể được triển khai để phân tích và tạo ra nhiều mô hình bề mặt cứng phức tạp một cách tương đối dễ dàng.

### Topology Cheat Sheets

![TEXT](/assets/img/collections/topology-guide-01.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
![TEXT](/assets/img/collections/topology-guide-02.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>
![TEXT](/assets/img/collections/topology-guide-03.png){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}<br>

## Reference
- [Hard Surface Cheat Sheets by JS Mussi](https://s3.amazonaws.com/kajabi-storefronts-production/file-uploads/sites/106766/themes/2153408233/downloads/530013a-07a-0e84-176e-0a41fbbafe6_Hard_Surface_Cheat_Sheets.pdf){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Turbosquid Training](https://resources.turbosquid.com/training/){:.external.hvr-forward rel="nofollow" target="_blank"}
- [Pinterest - Polygon modeling](https://www.pinterest.com/search/pins/?q=Polygon%20modeling){:.external.hvr-forward rel="nofollow" target="_blank"}
- [CG 101: 28 Bài học vỡ lòng về Thiết Kế Đồ Họa 3D cho người mới bắt đầu](https://lamphimquangcao.tv/cg-101-28-bai-hoc-vo-long-ve-thiet-ke-hoa-3d-cho-nguoi-moi-bat-dau/){:.external.hvr-forward rel="nofollow" target="_blank"}