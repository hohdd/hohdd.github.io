---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not
exclude: true # exclude on search
### SEO
title: PHP Understanding
description: PHP Understanding

### HUMAN
header: PHP Understanding
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
category: Bổ trợ kiến thức

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

## Đặc điểm
- Trong PHP, **các từ khóa** (ví dụ: if, other, while, echo, v.v.), các **classes, functions** cũng như các functions do người dùng định nghĩa sẽ **không phân biệt chữ hoa chữ thường**. Tuy nhiên, **các tên biến** thì lại **có phân biệt hoa-thường**.
- Sử dụng dấu chấm phẩy (`;`) để kết thúc câu lệnh. String là tất cả ký tự nằm trong dấu nháy đơn hoặc nháy kép (kể cả ký tự kết thúc dòng, PHP sẽ coi kết thúc dòng là space)
- Sử dụng dấu chấm (`.`) để nối chuỗi, dấu "`->`" để call function hoặc reference biến trong class.
- Biến phải bắt đầu với ký tự `$`, tiếp đó là ký tự hoặc "underscore" (ko đc là số), ko đc chứa ký tự đặc biệt khác.
- Có 3 phạm vi (**scope**) của biến:
    - **GLOBAL**: khai báo và sử dụng ngoài function, ko sử dụng đc bên trong function. Muốn sử dụng bên trong phải sử dụng keyword "`global`" (trong function), hoặc dùng trực tiếp mảng `$GLOBALS['tên_biến']` (SupperGlobals)
    - **LOCAL**: khai báo và sử dụng bên trong function, ko sử dụng được bên ngoài function, giải phóng biến local sau khi function đã thực thi xong.
    - **STATIC**: là biến local được khai báo với từ khóa `static` để giữ biến đó không bị xóa (giải phóng) sau khi function thực thi xong.
- `echo` và `print` được sử dụng để in ra output, `print` nhận 1 argument và return 1 còn `echo` return void nhưng nhận nhiều argurments. Để in kiểm tra kiểu dữ liệu của biến ta sử dụng `var_dump($x)`
- **Data Types**: int(2147483647); float(2.147483647E+19); bool(true); array(3) { [0]=> string(1) "a" [1]=> int(1) [2]=> bool(true) }; object(Animal)#1 (0) { }; NULL; Resource (a database call)
- **PHP Core** có sẵn rất nhiều functions để **xử lý chuỗi, biến (check type), Array, Date, Directory, Filesystem, Network, Stream...** [PHP Reference](https://www.w3schools.com/php/php_ref_overview.asp){:.hvr-forward.external rel="nofollow" target="_blank"}
- **Constants** (automatically global): `define(name, value, boolean-case-insensitive-default-is-false)`
- **Operators**: **===** (bằng và giống type); **<=>** (giống compare của java, trả về -1/0/1, PHP7); $x = expr1 **??** expr2 (nếu expr1 null thì lấy expr2)
    - **Logical Operators**: hỗ trợ cả (and, or, &&, ||)
    - **String Operators**: $txt1 **.** $txt2 (nối chuỗi); $txt1 **.=** $txt2 (append $txt1)
    - **Array Operators**: 	$x + $y; $x == $y (same key/value pairs); $x === $y (same key/value pairs + order + types); !=; <>; !==
- **Global Variables** (available in all scopes): **$GLOBALS; $_SERVER; $_REQUEST; $_POST; $_GET; $_FILES; $_ENV; $_COOKIE; $_SESSION**
- **Form Handling**: sử dụng **$_GET** và **$_POST** để lấy dữ liệu từ Client. Hãy nghĩ đến **SECURITY** khi người dùng tương tác
- **PHP Include Files**: `include 'filename';` hoặc `require 'filename';` **include** vs. **require** khác nhau như thế nào? nếu file include không được tìm thấy thì **include** chỉ *WARNING* và vẫn thực thi tiếp script còn **require thì sẽ stop script** (ko thực thi những câu lệnh tiếp theo)
- **File Handling**: Hãy cẩn thận khi xử lý file! Các lỗi thường gặp là: chỉnh sửa sai tệp, làm full ổ cứng với dữ liệu rác và xóa nội dung của tệp một cách tình cờ.
- **PHP Cookies**: `setcookie(name*, value, expire, path, domain, secure, httponly);` Ví dụ: `setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");`
- **PHP Sessions**: `session_start();` sau đó sử dụng `$_SESSION["favcolor"]` và phải `session_unset()` + `session_destroy()`
- PHP and JSON: `json_encode()` để convert object to string json và `json_decode()` để convert string json to object

## OOP

### Namespaces

- **Namespaces** để scope/đóng gói/bao đóng các **classes** (bao gồm **abstracts** và **traits**), **interfaces**, **functions** và **constants**. Nó giống như tên đường dẫn thư mục chứa file.
- Namespaces không phân biệt chữ hoa chữ thường. Không được bắt đầu bằng PHP (ví dụ `PHP\Classes...`). Không được có dấu "`\`" ở đầu hoặc ở cuối.

```php
<?php
namespace MyProject\Network;

const CONNECT_OK = 1;

class Connection { /* ... */ }
function connect() { /* ... */ }
?>
```

Sử dụng Namespaces giống như ta **đang ở file này và refer đến một file khác**, tùy vào vị trí file hiện tại và file refer mà có các cách khác nhau (đường dẫn tương đối, đường dẫn tuyệt đối).

```php
<?php
declare(encoding='UTF-8');
namespace MyProject {

    const CONNECT_OK = 1;

    class Connection { /* ... */ }
    function connect() { /* ... */  }
    static function staticmethod() {}
}

namespace { // global code
    session_start();

    $conFunc = MyProject\connect();
    MyProject::staticmethod();
}
?>
```

### Từ khóa "namespace" và hằng số "`__NAMESPACE__`"

Giá trị của **__NAMESPACE__** là một chuỗi chứa tên Namespace hiện tại. Là chuỗi rỗng nếu Global ko có Namespace.

```php
/* Sử dụng __NAMESPACE__ để tạo dynamic instance */
<?php
namespace MyProject;

function get($classname)
{
    $target = __NAMESPACE__ . '\\' . $classname;
    return new $target;
}
?>
```

```php
/* Sử dụng từ khóa "namespace" */
<?php
namespace MyProject; // khai báo Namespace

blah\mine(); // calls function MyProject\blah\mine()
namespace\blah\mine(); // calls function MyProject\blah\mine()

namespace\func(); // calls function MyProject\func()
namespace\sub\func(); // calls function MyProject\sub\func()
namespace\cname::method(); // calls static method "method" of class MyProject\cname
$a = new namespace\sub\cname(); // instantiates object of class MyProject\sub\cname
$b = namespace\CONSTANT_NAME; // assigns value of constant MyProject\CONSTANT_NAME to $b
?>
```

### Aliasing/Importing với toán tử "use"

Có thể tạo 3 loại "alias" (cho "class name", "interface name" và "namespace name"). PHP 5.6+ ta cũng có thể tạo "alias" cho "functions name" và "constants name". Như vậy là có 5 loại "alias".

```php
<?php
namespace foo;
use My\Full\Classname as Another;

// this is the same as use My\Full\NSname as NSname
use My\Full\NSname;

// importing a global class
use ArrayObject;

// importing a function (PHP 5.6+)
use function My\Full\functionName;

// aliasing a function (PHP 5.6+)
use function My\Full\functionName as func;

// importing a constant (PHP 5.6+)
use const My\Full\CONSTANT_NAME;

$obj = new namespace\Another; // instantiates object of class foo\Another
$obj = new Another; // instantiates object of class My\Full\Classname
NSname\subns\func(); // calls function My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // instantiates object of class ArrayObject
// without the "use ArrayObject" we would instantiate an object of class foo\ArrayObject
func(); // calls function My\Full\functionName
echo CONSTANT; // echoes the value of My\Full\CONSTANT
?>
```

### Importing and dynamic names

```php
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$a = 'Another';
$obj = new $a;      // instantiates object of class Another
?>
```

### Importing and fully qualified names

```php
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$obj = new \Another; // instantiates object of class Another
$obj = new Another\thing; // instantiates object of class My\Full\Classname\thing
$obj = new \Another\thing; // instantiates object of class Another\thing
?>
```

### Classes and Objects

Ví dụ bên dưới sẽ nói về Class, __construct và __destruct, Access Modifiers, Properties, Methods.

```php
<?php
namespace My\App; // khai báo namespace
use My\Full\Classname as Another; // import & Alias

/* Định nghĩa class */
class Fruit {
    /**
    * Access Modifiers:
    * public - properties và methods có thể access ở mọi nơi => đây là mặc định (nếu ko có)
    * protected - properties và method có thể được access trong class và các class extends nó (lưu ý là BÊN TRONG)
    * private - CHỈ có thể sử dụng trong class
    **/

    // Properties
    public $name;
    public $color;

    /**
    * Nếu bạn tạo một hàm __construct(), PHP sẽ tự động gọi hàm này khi bạn tạo một đối tượng từ một lớp.
    * Không thể có nhiều __construct()
    **/
    function __construct($name) {
        $this->name = $name;
    }
    /**
    * Nếu bạn tạo hàm __desturation(), PHP sẽ tự động gọi hàm này ở cuối tập lệnh. Hàm này ko có đối số.
    **/
    function __destruct() {
        echo "The fruit is {$this->name}.";
    }

    // Methods
    function set_name($name) {
        $this->name = $name; // Từ khóa '$this' đề cập đến đối tượng hiện tại và chỉ có sẵn trong các phương thức.
    }
    function get_name() {
        return $this->name;
    }
    function set_color($color) {
        $this->color = $color;
    }
    function get_color() {
        return $this->color;
    }
}

$apple = new Fruit(null); // __construct() ở trên yêu cầu truyền tham số
$apple->set_name('Apple');
$apple->set_color('Red');
echo "Name: " . $apple->get_name();
echo "<br>";
echo "Color: " .  $apple->get_color();
echo "<br>";
var_dump($apple instanceof Fruit); // Sử dụng "instanceof" để kiểm tra xem một đối tượng có thuộc về một lớp cụ thể không
?>
```

### Inheritance

Lớp con sẽ kế thừa tất cả các thuộc tính và phương thức **public** và **protected** từ lớp cha. Ngoài ra, nó có thể có các thuộc tính và phương thức riêng.

```php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry is inherited from Fruit
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}
$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro(); // vì đang public nên call ở đây OK, nhưng nếu là protected thì sẽ ERROR! (phải call bên trong Strawberry)
```

### Overriding Inherited Methods

Inherited methods có thể ghi đè các methods và contrutor ở child class.

### Từ khóa "final"

Từ khóa **final** có thể được sử dụng để ngăn chặn kế thừa lớp (nếu dùng cho class) hoặc để ngăn chặn Overriding method (nếu dùng cho method).

```php
final class Fruit {
  // some code
}

// will result in error
class Strawberry extends Fruit {
  // some code
}

/*************************************/

class Fruit {
  final public function intro() {
    // some code
  }
}

class Strawberry extends Fruit {
  // will result in error
  public function intro() {
    // some code
  }
}
```

### Class Constants

Sử dụng từ khóa **const** để khai báo một *constant*. Sử dụng bằng **Class::CONST_NAME** hoặc **self::CONST_NAME** (*sử dụng trong class*)

```php
class Goodbye {
  const LEAVING_MESSAGE = "Thank you for visiting!";
  public function byebye() {
    echo self::LEAVING_MESSAGE;
  }
}

$goodbye = new Goodbye();
$goodbye->byebye();
echo "<br>-------<br>";
echo Goodbye::LEAVING_MESSAGE;
```
### Abstract Classes

```php
<?php
abstract class ParentClass {
  abstract public function someMethod1();
  abstract public function someMethod2($name, $color);
  abstract public function someMethod3() : string;
}
?>
```

```php
// Parent class
abstract class Car {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  abstract public function intro() : string;
}

// Child classes
class Audi extends Car {
  public function intro() : string {
    return "Choose German quality! I'm an $this->name!";
  }
}
```

```php
abstract class ParentClass {
  // Abstract method with an argument
  abstract protected function prefixName($name);
}

class ChildClass extends ParentClass {
  // The child class may define optional arguments that are not in the parent's abstract method
  public function prefixName($name, $separator = ".", $greet = "Dear") {
    if ($name == "John Doe") {
      $prefix = "Mr";
    } elseif ($name == "Jane Doe") {
      $prefix = "Mrs";
    } else {
      $prefix = "";
    }
    return "{$greet} {$prefix}{$separator} {$name}";
  }
}
```

### What are Traits?

PHP chỉ hỗ trợ đơn kế thừa (một lớp con chỉ có thể kế thừa từ một cha mẹ duy nhất). Muốn "đa kế thừa" thì sử dụng "**Traits**". <u>Lưu ý</u>: **private** và **protected** *access modifier* chỉ có thể call bên trong hàm "kế thừa" (sử dụng **Traits**). `CALL: $this->privateFunction()`

```php
/**
* sử dụng từ khóa "trait" để định nghĩa một Trait
**/
trait TraitClass1 {
  public function func11() { echo 'func11() <br>'; }
  protected function func12() { echo 'func12() <br>'; }
}
trait TraitClass2 {
  private function privateFunc() { echo 'privateFunc() <br>'; }
}

/**
* sử dụng từ khóa "use" để sử dụng Trait trong một class
**/
class ChildClass1 {
  use TraitClass1; // extends (use) TraitClass1 để sử dụng func11 & func12
}

class ChildClass2 {
  use TraitClass1, TraitClass2; // có thể extend (use) cả 2 Traits để sử dụng func11, func22 và privateFunc

  public function check() {
    $this -> privateFunc();
  }
}

$child1 = new ChildClass1();
$child1->func11(); // OK vì public
$child1->func12(); // Error vì protected
echo '<p>~~~~~~~~~~~~~~~~~~~~~~</p>';
$child2 = new ChildClass2();
$child2->func11(); // OK vì public
$child2->func12(); // Error vì protected
$child2->privateFunc(); // Error vì private
$child2->check(); // OK vì private nhưng đc call trong check() của ChildClass2
```

### Static Methods & Properties

```php
class Hi {
  public static function getName() {
    return "My Name"; // vì return value nên phải echo value đó ra
  }
}
class greeting extends Hi {
  public static $value = 3.14159; // một static property
  public static function welcome() { // một static function
    echo "Hello World!";
    echo parent::getName(); // sử dụng từ khóa "parent" để caal hàm static của class cha
  }
  public function __construct() {
    self::welcome(); // sử dụng từ khóa "self"
  }
}

// Call static method
GrEeTiNg::welcome(); // namespace không phân biệt hoa-thường
// Get static property
echo greeting::$value; // MORE: self::$value; parent::$value;
```

<!-- ## Làm việc với SOAP, streams và SPL -->

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