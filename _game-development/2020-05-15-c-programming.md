---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "C programming"
description: "C programming"

### HUMAN
header: "C programming"
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
## C programming

```c
#include <stdio.h> // giống import các thư viện để có thể sử dụng các functions (VD: printf())

int main() { // hoặc 'int main(int argc, char const *argv[])'
    printf("Hello world!"); // Note: printf không thể print một Variable => cần sử dụng 'Format Specifiers'
    printf("Add new line at the end!\n"); // \t for TAB
    printf("Hello World!\nI am learning C.\nAnd it is awesome!");
    return 0; // Mọi câu lệnh C đều kết thúc bằng dấu chấm phẩy ;
    /* this is a comment */
    /* this is
    another
    comment */
}
```

**Difference between C and C++**
- C++ được phát triển như một phần mở rộng của C và cả hai ngôn ngữ đều có cú pháp gần như giống nhau
- Sự khác biệt chính giữa C và C++ là C++ hỗ trợ các lớp và đối tượng (**OOP**), còn C thì không.

**Dưới đây là một số khái niệm cơ bản về lập trình C:**
- Biến (**Variable**):
    + Khai báo biến (Variable **Declaration**): ```type variableName = value;``` Định nghĩa biến để lưu trữ dữ liệu.
    + Khởi tạo biến (Variable **Initialization**): ```int x = 5, y = 6, z = 50;``` Gán giá trị ban đầu cho biến.
    + Tên biến (Variable **Name**): Tên đại diện cho biến.
    + Gán giá trị (**Assignment**): ```x = y = z = 50;``` Gán giá trị mới cho biến.
    + Phạm vi biến (Variable **Scope**): Phạm vi mà biến có thể truy cập.
    + Kiểu dữ liệu (**Data Type**): Xác định loại dữ liệu mà biến có thể chứa, VD: **int** (%d or %i), **float** (%f or %F), **double** (%lf), **char** (%c), *string* (%s)

    ```c
    // Create variables of different data types
    int items = 50;
    float cost_per_item = 9.99;
    float total_cost = items * cost_per_item;
    char currency = '$';

    // Print variables
    printf("Number of items: %d\n", items);
    printf("Cost per item: %.2f %c\n", cost_per_item, currency);
    printf("Total cost = %.2f %c\n", total_cost, currency);
    // --- Output ---
    // Number of items: 50
    // Cost per item: 9.99 $
    // Total cost = 499.50 $
    ```

    + Type Conversion: **Implicit** Conversion (*automatically*), **Explicit** Conversion (*manually*)

    ```c
    // Automatic conversion: int to float
    float myFloat = 9;
    printf("%f", myFloat); // 9.000000
    // Automatic conversion: float to int
    int myInt = 9.99;
    printf("%d", myInt); // 9
    // Manual conversion: int to float (ép kiểu)
    float sum = (float) 5 / 2;
    printf("%f", sum); // 2.500000
    ```

    + Constants: Khi bạn khai báo một biến không đổi, nó phải được gán một giá trị. ```const int minutesPerHour = 60;```
    + Boolean Variables: không phải là built-in data type > cần import ```#include <stdbool.h>``` > ```bool isProgrammingFun = true;```

- Hàm (**Function**):
    + Cú pháp của hàm: Định nghĩa và sử dụng hàm. *returnType functionName(parameter1, parameter2, parameter3) {...}*
    + Gọi hàm: Khi cần thực thi một đoạn mã nào đó.
    + Hàm có hoặc không có giá trị trả về: Một hàm có thể trả về giá trị hoặc không.
    
    ```c
    // Function declaration: [Khai báo] tên hàm, kiểu trả về và tham số (nếu có)
    void myFunction(); // Để tối ưu hóa mã, nên tách phần khai báo và định nghĩa hàm.

    // The main method
    // Bạn sẽ thường thấy các chương trình C có khai báo hàm ở trên main() và định nghĩa hàm ở dưới main().
    // Điều này sẽ làm cho mã được tổ chức tốt hơn và dễ đọc hơn:
    int main() {
        myFunction();  // call the function
        return 0; // return int
    }

    // Function definition: [Định nghĩa] phần thân của hàm (mã sẽ được thực thi)
    void myFunction() {
        printf("I just got executed!");
    }
    ```

    + Recursion (đệ quy): Phải **hết sức cẩn thận** với đệ quy vì có thể khá dễ dàng viết một hàm **không bao giờ kết thúc** hoặc một hàm **sử dụng quá nhiều bộ nhớ** hoặc sức mạnh bộ xử lý. Tuy nhiên, khi được viết chính xác, đệ quy có thể là một cách tiếp cận lập trình rất hiệu quả và tinh tế về mặt toán học.
    + Math Functions: *sqrt(), ceil(), floor(), pow(), abs(x), sin(x), cos(x)*... **Cần** có *#include \<**math.h**\>*

- Chuỗi (String):
    + Định nghĩa chuỗi: Lưu trữ dãy ký tự (**mảng char**). VD: ```char greetings[] = "Hello World!";```
    + Làm việc với chuỗi: Thao tác trên chuỗi như nối, cắt, tìm kiếm... **cần có** ```#include <string.h>```
- Mảng (Array):
    + Định nghĩa và Khai báo Mảng: Lưu trữ nhiều giá trị **cùng loại**. ```int myNumbers[] = {25, 50, 75, 100};```
    + Truy cập phần tử trong Mảng: Sử dụng chỉ số để truy xuất giá trị.

    ```c
    // Declare an array of four integers:
    int myNumbers[3];
    // Add elements
    myNumbers[0] = 25;
    myNumbers[1] = 50;
    myNumbers[2] = 75;
    ```

    + Array Size: toán tử **sizeof** trả về kích thước của một kiểu tính bằng byte, vậy nên tính *size* (**length**) sẽ là ```int length = sizeof(myNumbers) / sizeof(myNumbers[0]);```

    ```c
    int myNumbers[] = {25, 50, 75, 100};
    int length = sizeof(myNumbers) / sizeof(myNumbers[0]);
    int i;
    // It is better to write:
    for (i = 0; i < length; i++) {
        printf("%d\n", myNumbers[i]);
    }
    ```

    + Multidimensional Arrays: *type VarName[**row**][**column**]*.

    ```c
    int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };
    printf("%d", matrix[0][2]);  // Outputs 2
    ```

- Câu lệnh điều kiện (Conditional Statement):
    + Câu lệnh if…else: Kiểm tra điều kiện và thực hiện các hành động tương ứng.
    + Câu lệnh switch: Xử lý nhiều trường hợp khác nhau.
- Vòng lặp (Loop):
    + Vòng lặp for: Lặp qua một dãy giá trị. ```for (expression 1; expression 2; expression 3) {...}```
    + Vòng lặp while: Lặp khi điều kiện còn đúng. ```while (condition) {...}```
    + Vòng lặp do…while: Lặp ít nhất một lần. ```do {...} while (condition);```
- User Input: sử dụng **scanf()**. VD:

    ```c
    // --- Multiple Inputs
    int myNum; // Create an int and a char variable
    char myChar;
    // Ask the user to type a number AND a character
    printf("Type a number AND a character and press enter: \n");
    // Get and save the number AND character the user types
    scanf("%d %c", &myNum, &myChar);
    // Print the number
    printf("Your number is: %d\n", myNum);
    // Print the character
    printf("Your character is: %c\n", myChar);

    /// --- Take String Input
    char firstName[30]; // Create a string
    // Ask the user to input some text
    printf("Enter your first name: \n");
    // Get and save the text
    scanf("%s", firstName);
    // Output the text
    printf("Hello %s", firstName);
    ```

- Memory Address: toán tử tham chiếu (**&**) biểu thị nơi biến được lưu trữ:

    ```c
    int myAge = 43;
    printf("%p", &myAge); // Outputs 0x7ffe5367e044
    ```

- Con trỏ (Pointer): **là một biến** lưu trữ địa chỉ bộ nhớ của một biến khác làm giá trị của nó. Biến Con trỏ được tạo bằng toán tử **type\***

    ```c
    int myAge = 43;     // An int variable
    int* ptr = &myAge;  // A pointer variable, with the name ptr, that stores the address of myAge
    // Output the value of myAge (43)
    printf("%d\n", myAge);
    // Output the memory address of myAge (0x7ffe5367e044)
    printf("%p\n", &myAge);
    // Output the memory address of myAge with the pointer (0x7ffe5367e044)
    printf("%p\n", ptr);
    ```

    {% msg success Có hai cách khai báo biến con trỏ trong C:<br>int<strong>*</strong> myNum;<br>int <strong>*</strong>myNum;<br><br>Cũng có thể sử dụng <strong>*</strong> để lấy giá trị của biến con trỏ<br>int myAge = 43;<br>int* ptr = <strong>&</strong>myAge;<br>printf("%d\n", *ptr); %}

    {% msg warning Con trỏ là một trong những điều khiến C nổi bật so với các ngôn ngữ lập trình khác.<br>Chúng quan trọng trong C vì chúng cho phép chúng ta thao tác dữ liệu trong bộ nhớ máy tính. Điều này có thể làm giảm mã và cải thiện hiệu suất.<br>Đôi khi bạn thậm chí phải sử dụng con trỏ, chẳng hạn như khi làm việc với các tệp.<p><strong>Nhưng hãy cẩn thận</strong>: con trỏ phải được xử lý cẩn thận vì có thể làm hỏng dữ liệu được lưu trữ trong các địa chỉ bộ nhớ khác.</p> %}

- Pointers & Arrays: Con trỏ liên quan đến mảng như thế nào? trong C, **tên** của một mảng, **thực sự là một con trỏ tới phần tử đầu tiên của mảng**. Về cơ bản, điều này có nghĩa là chúng ta có thể làm việc với mảng thông qua con trỏ!

    ```c
    int myNumbers[4] = {25, 50, 75, 100};
    // Sử dụng toán tử '*' để lấy giá trị của con trỏ 'myNumbers', kết quả là 25! (là một con trỏ tới phần tử đầu tiên của mảng)
    printf("%d", *myNumbers); // Result: 25
    // Để truy cập phần tử còn lại trong myNumbers, bạn có thể tăng con trỏ/mảng (+1, +2, v.v.):
    printf("%d\n", *(myNumbers + 1)); // 50
    printf("%d", *(myNumbers + 2)); // 75
    // Hoặc loop:
    for (i = 0; i < 4; i++) {
        printf("%d\n", *(myNumbers + i));
    }
    // Cũng có thể thay đổi giá trị của các phần tử mảng bằng con trỏ:
    *myNumbers = 13; // Thay đổi giá trị của phần tử đầu tiên thành 13
    *(myNumbers +1) = 17; // Thay đổi giá trị của phần tử thứ hai thành 17
    ```

    {% msg success Đối với các <strong>mảng lớn</strong>, việc truy cập và thao tác các mảng bằng con trỏ có thể <strong>hiệu quả hơn nhiều</strong>. Nó cũng được coi là <strong>nhanh hơn và dễ dàng hơn</strong> để truy cập <strong>mảng hai chiều</strong> bằng con trỏ.<br>Và vì chuỗi thực chất là mảng nên bạn cũng có thể sử dụng con trỏ để truy cập chuỗi. %}

- File I/O (Input/Output): Đọc và ghi dữ liệu từ/đến tệp tin.

Ngôn ngữ C đã tạo nền tảng cho nhiều ngôn ngữ lập trình khác, bao gồm C++, C#, và nhiều ngôn ngữ khác. Nó cũng là ngôn ngữ phổ biến cho việc viết hệ điều hành và phần mềm nhúng do khả năng kiểm soát phần cứng của nó. Hãy bắt đầu học C và khám phá thế giới lập trình!

### Ngôn ngữ C hoạt động như thế nào?

Ngôn ngữ lập trình C hoạt động theo các bước sau:
- 1) Biên dịch (Compilation):
    + Người lập trình viết mã nguồn bằng ngôn ngữ C trong một tệp tin văn bản (thường có phần mở rộng .c).
    + Trình biên dịch (compiler) chuyển đổi mã nguồn C thành mã máy (binary code) có thể thực thi trên máy tính.
    + Kết quả của quá trình biên dịch là một tệp thực thi (executable file) có thể chạy trên hệ điều hành.
- 2) Liên kết (Linking):
    + Trong quá trình biên dịch, nếu chương trình sử dụng các thư viện (libraries) bên ngoài, trình biên dịch sẽ tạo ra các tệp thư viện tương ứng.
    + Trình liên kết (linker) kết hợp tất cả các tệp thư viện và tạo ra một tệp thực thi hoàn chỉnh.
- 3) Thực thi (Execution):
    + Người dùng chạy tệp thực thi trên máy tính.
    + Chương trình C được thực thi, và máy tính thực hiện các lệnh trong mã máy tương ứng.
- 4) Chu kỳ thực thi (Execution Cycle):
    + Chương trình bắt đầu từ hàm main().
    + Máy tính thực hiện lần lượt từng lệnh trong hàm main().
    + Các biến được tạo ra và lưu trữ trong bộ nhớ.
    + Các câu lệnh điều kiện (if, switch) kiểm tra điều kiện và thực hiện các hành động tương ứng.
    + Vòng lặp (for, while, do…while) lặp qua các lệnh nhiều lần.
    + Các hàm được gọi và thực thi.
    + Khi hàm main() kết thúc, chương trình kết thúc.
    
### Những loại lỗi chính trong C programming

Trong ngôn ngữ lập trình C, có năm loại lỗi chính:
- Lỗi cú pháp (Syntax Error):
    + Xảy ra khi lập trình viên viết sai cú pháp hoặc gõ sai từ khóa trong mã nguồn.
    + Ví dụ: Sử dụng ‘print’ thay vì ‘printf’ để hiển thị ngày hôm nay dẫn đến lỗi, vì trình biên dịch không nhận diện ‘print’.
    + Lỗi cú pháp có thể dẫn đến việc không biên dịch được, dừng thực thi, hoặc tạo ra kết quả sai.
    + Trình biên dịch thường sẽ báo lỗi trước khi biên dịch.
- Lỗi thời gian chạy (Run-Time Error):
    + Xảy ra khi chương trình đang thực thi.
    + Ví dụ: Chia một số cho 0 dẫn đến lỗi thời gian chạy.
    + Đôi khi không có thông báo lỗi, chương trình chỉ kết thúc đột ngột.
- Lỗi logic (Logical Error):
    + Xảy ra khi mã nguồn không hoạt động đúng theo ý định.
    + Ví dụ: Tính toán sai, kiểm tra điều kiện không đúng.
- Lỗi ngữ nghĩa (Semantic Error):
    + Xảy ra khi mã nguồn không tuân theo ý nghĩa logic.
    + Ví dụ: Sử dụng sai kiểu dữ liệu, gán giá trị không đúng.
- Lỗi liên kết (Linker Error):
    + Xảy ra khi liên kết các tệp thư viện không thành công.
    + Ví dụ: Sử dụng hàm không tồn tại trong thư viện.

Tìm và xử lý lỗi bằng công cụ hỗ trợ:
- Trình gỡ lỗi (Debugger): Sử dụng trình gỡ lỗi để theo dõi giá trị biến, kiểm tra luồng thực thi, và tìm lỗi.
- Thêm thông tin gỡ lỗi (Debug Info): Thêm thông tin gỡ lỗi vào mã nguồn để biết được dòng lỗi cụ thể.
- Ghi log (Logging): Thêm lệnh ghi log để theo dõi luồng thực thi và giá trị biến.

### IDE & Enviroment, Make-Makefiles & CMake-CMakeLists.txt

**IDE**:
- Các IDE phổ biến bao gồm **Code::Blocks**, **Eclipse**, **Visual Studio** và **Visual Studio code**.
- Nếu bạn sử dụng **Visual Studio Code**, hãy tham khảo cài đặt extension [**C/C++ for Visual Studio Code**](https://code.visualstudio.com/docs/languages/cpp){:.external.hvr-forward rel="nofollow" target="_blank"}

**Compilers**
- Các trình biên dịch phổ biến đã được cài đặt sẵn trên một số nền tảng là **GNU Compiler Collection** (**GCC**) trên **Linux** và các công cụ **Clang** với **Xcode** trên **macOS**.
- **Apple** đã phát triển **Clang**, một giao diện người dùng trình biên dịch mới **hỗ trợ C, Objective-C và C++**. Vào tháng 7 năm 2007, dự án đã nhận được sự chấp thuận để trở thành nguồn mở.
- Clang hoạt động song song với LLVM. Sự **kết hợp giữa Clang và LLVM** cung cấp hầu hết chuỗi công cụ để thay thế ngăn xếp **GCC**.
- Một trong những mục tiêu chính của Clang là cung cấp kiến ​​trúc dựa trên thư viện. Ngược lại, **GCC** hoạt động theo quy trình **Compile-Link-Debug**. Việc tích hợp nó (**GCC**) với các công cụ khác không phải lúc nào cũng dễ dàng.
- Clang giữ lại nhiều thông tin hơn trong quá trình biên dịch so với GCC và giữ nguyên dạng tổng thể của mã gốc, giúp việc ánh xạ lỗi trở lại nguồn ban đầu dễ dàng hơn. Báo cáo lỗi của Clang chi tiết hơn, cụ thể hơn và máy có thể đọc được hơn, do đó IDE có thể lập chỉ mục đầu ra của trình biên dịch.
- Clang chỉ biên dịch các ngôn ngữ giống C, chẳng hạn như C, C++, Objective-C và Objective-C++. Trong nhiều trường hợp, Clang có thể thay thế GCC.
- Clang tương thích với GCC. Giao diện dòng lệnh (CLI) của nó chia sẻ nhiều Flags và tùy chọn của GCC. Clang triển khai nhiều phần mở rộng ngôn ngữ GNU và nội tại của trình biên dịch (built-in functions), một số trong đó hoàn toàn nhằm mục đích tương thích.
- Trong thực tế, Clang là sự thay thế thay thế cho GCC.

**Check if you have a compiler installed**
- Mở CMD hoặc Terminal của VSC và chạy lệnh sau ```g++ version``` hoặc ```gcc --version``` hoặc ```clang --version``` sẽ cho thông tin về compiler đã được cài đặt (version, vị trí...)
- Nếu bạn chắc chắn là compiler đã có trong máy nhưng câu lệnh ở trên không work thì cần kiểm tra lại ***PATH*** trong **enviroment variables**
- Install a compiler nếu chưa có (Windows):
    + **MinGW** (*Minimalist GNU for Windows*):
        - Trước hết cài [**MSYS2**](https://www.msys2.org/){:.external.hvr-forward rel="nofollow" target="_blank"} (MSYS2 là tập hợp các công cụ và thư viện. MSYS2 cung cấp các bản dựng gốc cập nhật cho GCC, mingw-w64, CPython, CMake, Meson, OpenSSL, FFmpeg, Rust, Ruby...). Để cung cấp khả năng cài đặt gói dễ dàng và cách cập nhật chúng, MSYS2 có hệ thống **quản lý gói** có tên **Pacman**.
        - Sau đó cài **MinGW** (*Minimalist GNU for Windows*) thông qua **Pacman**.
    + Microsoft Visual C++ (**MSVC**) compiler toolset:
        - Cài đặt thông qua **Visual Studio Installer**. Tool > Get Tools and Features... > Desktop development with C++
        - Kiểm tra cài đặt: Start > search: developer > "*Developer Command **Prompt** for VS 20XX*" > nhập "cl" > xuất hiện thông tin của **MSVC**
    + Trên Linux hoặc macOS tham khảo [*Install a compiler*](https://code.visualstudio.com/docs/languages/cpp#_install-a-compiler){:.external.hvr-forward rel="nofollow" target="_blank"}
- Sử dụng Compiler: ```gcc .\hello.c``` > **a.exe** > **.\a.exe** > **hello world!**
- Sử dụng [**Code::Blocks**](https://www.codeblocks.org/){:.external.hvr-forward rel="nofollow" target="_blank"}: Tải về > Cài đặt (D:\...Program Files\CodeBlocks)
- Tài liệu học C Programming > [w3schools](https://www.w3schools.com/c/c_getstarted.php){:.external.hvr-forward rel="nofollow" target="_blank"}
- Khám phá sức mạnh của C với **Console** App, **GUI** App, 2D/3D **Graphic**, **Embedded** Systems...