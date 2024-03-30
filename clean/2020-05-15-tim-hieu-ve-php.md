---
layout: post
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not
exclude: true # exclude on search
### SEO
title: Tìm hiểu về PHP
description: Cùng tìm hiểu về PHP

### HUMAN
header: Tìm hiểu về PHP
# coverImg: /assets/img/articles/demo/girl_hat.jpg # size: 1068x703 | 900x500 | 600x400
# effect: true # use img-sepia?
# thumbnailImg: /assets/img/articles/demo/940-900x500-grayscale.jpg # size: 900x500 | 600x400

### categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
### Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
mermaid: false
highlight: true
amp: true
### category: dùng để group collection
category: PHP

### Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2020-05-15 14:26:14 +0700
### permalink: /url-ghi-de-mac-dinh # cân nhắc nếu muốn dùng!
---

## Introduction

PHP: một kiểu viết tắt hồi quy của "PHP: Hypertext Preprocessor". PHP là một **ngôn ngữ lập trình kịch bản** hay một loại **mã lệnh** chủ yếu được dùng để phát triển các ứng dụng *viết cho máy chủ, mã nguồn mở*, dùng cho mục đích tổng quát. Nó rất thích hợp với web và có thể **dễ dàng nhúng vào trang HTML**. Do được tối ưu hóa cho các ứng dụng web, tốc độ nhanh, nhỏ gọn, cú pháp giống C và Java, dễ học và thời gian xây dựng sản phẩm tương đối ngắn hơn so với các ngôn ngữ khác nên PHP đã nhanh chóng trở thành một ngôn ngữ lập trình web phổ biến nhất thế giới.

Ngôn ngữ, các thư viện, tài liệu gốc của PHP được xây dựng bởi cộng đồng và có sự đóng góp rất lớn của Zend Inc., công ty do các nhà phát triển cốt lõi của PHP lập nên nhằm tạo ra một môi trường chuyên nghiệp để đưa PHP phát triển ở quy mô doanh nghiệp.

P/s: [Nguồn wiki](https://vi.wikipedia.org/wiki/PHP){:.hvr-forward.external rel="nofollow" target="_blank"}

### CGI là gì?

**CGI** có thể hiểu nôm na là "**chuẩn gateway**". Như tên gọi của chuẩn này (**Common Gateway Interface**) nó mô tả cách làm việc của **chuẩn CGI** như sau :
- Chỉ ra phương thức chung để truy xuất những Script, CGI cho phép bất cứ ai, không phân biệt hệ điều hành, không phân biệt trình duyệt để đều có thể gởi thông tin tới một CGI Script.
- Ðịnh nghĩa liên kết hoặc gateway giữa Script, Server, và những chương trình khác.
- Mô tả **interface** hoặc **method** để user có thể truy xuất Script. cho phép người tạo Web che dấu người đọc những phức tạp trong việc xử lý các dữ liệu trong trang Web.

Khi Webserver nhận yêu cầu xử lý của Client, nó sẽ đẩy cho CGI để truy xuất dữ liệu (từ form, sessions, cookies, database, file ...) và xử lý, Webserver sẽ lấy output (thường là HTML) và trả về cho Client.

Xem thêm
- [Common Gateway Interface](https://en.wikipedia.org/wiki/Common_Gateway_Interface){:.hvr-forward.external rel="nofollow" target="_blank"}
- [How CGI Scripting Works](https://computer.howstuffworks.com/cgi.htm){:.hvr-forward.external rel="nofollow" target="_blank"}
- [FastCGI](https://en.wikipedia.org/wiki/FastCGI){:.hvr-forward.external rel="nofollow" target="_blank"}

### PHP có thể làm gì?

PHP có thể làm bất cứ điều gì mà bất kỳ chương trình CGI nào khác có thể làm, chẳng hạn như thu thập dữ liệu biểu mẫu, tạo nội dung trang động hoặc gửi và nhận cookie. Nhưng PHP có thể làm nhiều hơn thế. Có ba lĩnh vực chính mà các tập lệnh PHP được sử dụng.
- **Server-side scripting**: Bạn sẽ cần Web Server, trình phân tích cú pháp PHP (CGI hoặc mô đun máy chủ). [Hướng dẫn cài đặt.](https://www.php.net/manual/en/install.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- **Command line scripting**: Kiểu sử dụng này là lý tưởng cho các tập lệnh được thực thi thường xuyên bằng cron, task scheduler ... [Cách sử dụng dòng lênh với PHP](https://www.php.net/manual/en/features.commandline.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- Viết ứng dụng máy tính để bàn (**desktop applications**): Không phải là lựa chọn tốt nhất để viết những ứng dụng có giao diện đồ họa, tuy nhiên bạn cũng có thể sử dụng **PHP-GTK** để viết desktop applications nếu bạn yêu thích PHP. Vì PHP đa nền tảng nên các ứng dụng viết ra cũng đa nền tảng theo cách này. PHP-GTK là một phần mở rộng cho PHP, không có sẵn trong bản phân phối chính. Nếu bạn quan tâm thì có thể tham khảo [Building Desktop Applications in PHP with PHP-GTK](http://gtk.php.net/){:.hvr-forward.external rel="nofollow" target="_blank"}

PHP đã hỗ trợ cho hầu hết các máy chủ web hiện nay, bao gồm **Apache, IIS** và nhiều thứ khác (bất kỳ máy chủ web nào có thể sử dụng nhị phân **PHP FastCGI**, như **lighttpd** và **nginx**). PHP hoạt động như một mô-đun hoặc bộ xử lý CGI. Vì vậy, với PHP, bạn có quyền tự do lựa chọn một hệ điều hành và một máy chủ web. Hơn nữa, bạn cũng có thể lựa chọn sử dụng **lập trình thủ tục** hoặc **lập trình hướng đối tượng** (**OOP**) hoặc *kết hợp cả hai*.

PHP hỗ trợ làm việc với một loạt các database thông qua các cách khác nhau:
- [Database Extensions](https://www.php.net/manual/en/refs.database.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [MySQL Improved Extension](https://www.php.net/manual/en/book.mysqli.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [PHP Data Objects](https://www.php.net/manual/en/book.pdo.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [ODBC Extension](https://www.php.net/manual/en/book.uodbc.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Client URL Library](https://www.php.net/manual/en/book.curl.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Sockets](https://www.php.net/manual/en/book.sockets.php){:.hvr-forward.external rel="nofollow" target="_blank"}

PHP hỗ trợ để giao tiếp với các service khác bằng các giao thức như **LDAP, IMAP, SNMP, NNTP, POP3, HTTP, COM** (trên Windows) và vô số các dịch vụ khác. Bạn cũng có thể mở "**network sockets**" thô để sử dụng với bất kỳ kiểu protocol nào khác.

PHP hỗ trợ xử lý văn bản và XML
- [Text Processing](https://www.php.net/manual/en/refs.basic.text.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Regular Expressions (Perl-Compatible)](https://www.php.net/manual/en/book.pcre.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [XML Manipulation](https://www.php.net/manual/en/refs.xml.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [libxml](https://www.php.net/manual/en/book.libxml.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [SimpleXML](https://www.php.net/manual/en/book.simplexml.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [XMLReader](https://www.php.net/manual/en/book.xmlreader.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [XMLWriter](https://www.php.net/manual/en/book.xmlwriter.php){:.hvr-forward.external rel="nofollow" target="_blank"}

Cùng với vô vàn những thứ mà PHP có thể làm được khác, xem thêm ở trang tài liệu của PHP.
- [Function Reference](https://www.php.net/manual/en/funcref.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Extension List/Categorization](https://www.php.net/manual/en/extensions.php){:.hvr-forward.external rel="nofollow" target="_blank"}

## PHP Core

### Zend Engine
- [Zend Engine](https://en.wikipedia.org/wiki/Zend_Engine){:.hvr-forward.external rel="nofollow" target="_blank"}

### PHP Manual
- [PHP Manual](https://www.php.net/manual/en/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [PHP Tutorial](https://www.w3schools.com/php/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Cơ bản về PHP](/collections/php/tim-hieu-ve-php){:.hvr-forward target="_blank"}

## Composer

Composer không quản lý package giống như NPM, YUM, APT... mà nó quản lý "packages" trên mỗi project, tải chúng về thư mục "vendor" của project. Nếu tôi muốn quản lý "global" thì sao? [Xem ở đây](https://getcomposer.org/doc/03-cli.md#global){:.hvr-forward.external rel="nofollow" target="_blank"}

Để sử dụng Composer bạn sẽ cần phải có file `composer.json` để quản lý dependency và version dùng cho project, sau khi chạy Composer để install, bạn sẽ thấy file `composer.lock`, file này quan trọng và bạn cần commit nó lên project repo để các thành viên khác (và cả CI server, production server...) họ sẽ biết chính xác version nào sẽ được dùng, tránh trường hợp sau khi Comporser install xong thì thấy lỗi tùm lum.

Composer có tạo một file `vendor/autoload.php`. Bạn đơn giản chỉ cần include file này và bắt đầu sử dụng các class trong library mà không cần phải làm gì khác:

```php
require __DIR__ . '/vendor/autoload.php';

$log = new Monolog\Logger('name');
$log->pushHandler(new Monolog\Handler\StreamHandler('app.log', Monolog\Logger::WARNING));
$log->addWarning('Foo');
```

Bạn cũng có thể thêm `autoload` cho mã của mình ở file `composer.json`

```json
{
    "autoload": {
        "psr-4": {"Acme\\": "src/"}
    }
}
```

Sau khi thêm `autoload` ở trên bạn phải chạy lại câu lệnh sau để Composer cập nhật `vendor/autoload.php`

```cmd
php composer.phar dump-autoload
```

Hoặc bạn cũng có thể `autoload` trong code của mình giống như thế này:

```php
$loader = require __DIR__ . '/vendor/autoload.php';
$loader->addPsr4('Acme\\Test\\', __DIR__);
```

Nâng cao về `autoload` trên môi trường "production" (không nên làm điều này ở môi trường "develop"), xem thêm [Autoloader Optimization](https://getcomposer.org/doc/articles/autoloader-optimization.md#how-to-run-it-){:.hvr-forward.external rel="nofollow" target="_blank"}

Xem hướng dẫn sử dụng Composer trong command line hoặc trên [Composer Website](https://getcomposer.org/doc/03-cli.md#install){:.hvr-forward.external rel="nofollow" target="_blank"}

## PHP frameworks
- [Laravel](https://laravel.com/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Symfony](https://symfony.com/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Yii framework](https://www.yiiframework.com/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Zend Framework](https://framework.zend.com/){:.hvr-forward.external rel="nofollow" target="_blank"}

## Tools
- [PsySH: A runtime developer console](https://psysh.org/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Xdebug](https://xdebug.org/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [PHP Error Monitoring with Raygun](https://raygun.com/languages/php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Laravel Monitoring Using Inspector](https://www.inspector.dev/){:.hvr-forward.external rel="nofollow" target="_blank"}

## Reference
- [PHP Documentation](https://www.php.net/docs.php){:.hvr-forward.external rel="nofollow" target="_blank"}
- [A Dependency Manager for PHP](https://getcomposer.org/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [The PHP Package Repository](https://packagist.org/explore/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [PHP Standards Recommendations](https://www.php-fig.org/psr/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [PHP Quality Assurance](https://qa.php.net/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [PHP Tutorial](https://www.w3schools.com/php/){:.hvr-forward.external rel="nofollow" target="_blank"}

## Một số thư viện & repo
- [AsgardCms](https://asgardcms.com/){:.hvr-forward.external rel="nofollow" target="_blank"}
- [Module Management In Laravel](https://github.com/nWidart/laravel-modules){:.hvr-forward.external rel="nofollow" target="_blank"}

{% comment %}{% raw %}
<!-- CHEAT SHEET -------------------------------------------------------------------
### Kramdown: https://kramdown.gettalong.org/quickref.html
### ---------
### Typography: # H1 ## H2 ### H3 **bold text** *italicized text* > blockquote ~~Strikethrough~~
### Nhúng mã `code` hoặc ```code```
### Sử dụng class và style (style đặt sau cùng): **Kramdown**{: .w3-section .w3-margin-right #myId style="color: red"}
### Chèn ảnh: ![TEXT](https://picsum.photos/1500/750){:.w3-image.cursor-zoom onclick="onZoomImg(this)"}
### Chèn Link: [link](url){:.hvr-forward.external rel="nofollow" target="_blank"}
### Hoặc chèn ảnh và link bằng tag:
##### {% img "url" "TEXT" %}
##### {% a in/out "url" "TEXT" %}
### Table
| Head-1 | Head-2
|:-|:-:|-:
| Row **1** | Column *2*
| Column 1  | Row *2*
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-blue/green/orange/indigo}
##############################################################
### Comments: {% comment %} .... {% endcomment %}
# Layout: "w3-container" căn lề trái phải (16px padding), "w3-section" căn trên dưới (16px margin), w3-margin-left, w3-margin-right
# Grid (placed inside w3-row/w3-content): w3-half/third/twothird/quarter/threequarter, w3-rest, w3-mobile, w3-image
# Responsive hide (@small 601px; @large 992px): w3-hide-small, w3-hide-medium, w3-hide-large
# Floating: w3-left, w3-right
# Sử dụng alert: info/success/warning/danger + "QUOTE": <span class="material-icons w3-xxxlarge">format_quote</span>
# SUCCESS: <div class="w3-card w3-leftbar w3-border-green w3-pale-green w3-panel w3-padding-16">MESSAGE</div>
# WARNING: <div class="w3-card w3-leftbar w3-border-yellow w3-pale-yellow w3-panel w3-padding-16">MESSAGE</div>
# INFO: <div class="w3-card w3-leftbar w3-border-blue w3-pale-blue w3-panel w3-padding-16">MESSAGE</div>
# DANGER: <div class="w3-card w3-leftbar w3-border-red w3-pale-red w3-panel w3-padding-16">MESSAGE</div>
##### Hoặc dùng tag (only support HTML on line): {% msg success/warning/info/danger TEXT %}
# Hover.css (v2): hvr-forward, hvr-float-shadow, hvr-pulse-shrink
# https://mermaid-js.github.io/mermaid/#/flowchart
# <pre class="mermaid">graph LR/TB</pre>
# classDef yellow fill:#ffeb3b; classDef orange fill:#f96;  classDef green fill:#1ded1d;
# rect rgba(255, 0, 0, .1) ~ red / rect rgba(29, 171, 237, .1) ~ blue / rect rgba(0, 255, 0, .1) ~ green ... end
# https://mermaid-js.github.io/mermaid-live-editor
------------------------------------------------------------------------------------>
{% endraw %}{% endcomment %}