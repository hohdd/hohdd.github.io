---
layout: collections
author_name: Dong Ho
draft: false # public or not
sticky: false # sticky or not, apply for POST only (not COLLECTION) with including thumbnailImg
exclude: false # exclude on search
### SEO
title: "C++ programming"
description: "C++ programming"

### HUMAN
header: "C++ programming"
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
## C++ programming
- C++ được phát triển bởi Bjarne Stroustrup, như một phần mở rộng của ngôn ngữ C.
- Cả hai ngôn ngữ đều có cú pháp gần như giống nhau. Sự khác biệt chính giữa C và C++ là C++ hỗ trợ các lớp và đối tượng, trong khi C thì không.
- C++ là ngôn ngữ lập trình hướng đối tượng (OOP). Mọi thứ trong C++ đều được liên kết với các lớp và đối tượng, cùng với các thuộc tính và phương thức của nó.
- C++ **không phù hợp để phát triển GUI** (Apple tạo ra Objective-C > Swift; Microsoft tạo ra C# và thay thế các thư viện GUI viết bằng C++ trong Object Windows Library...)
- C++ là **ngôn ngữ biên dịch** (nội dung cần được biên dịch, không thể thay đổi trong **thời gian chạy**)

```c++
#include <iostream> // thư viện tệp tiêu đề cho phép chúng ta làm việc với các đối tượng đầu vào và đầu ra, chẳng hạn như 'cout'
using namespace std; // sử dụng trực tiếp tên các đối tượng và biến từ thư viện chuẩn. (ko cần phải 'std::cout')

int main() {
    int x, y; // khai báo biến 'x', 'y'
    int sum;
    cout << "Type a number: "; // in ra màn hình, 'cout' (phát âm là "see-out"), sử dụng với toán tử chèn (<<) để xuất/in văn bản.
    cin >> x; // 'cin' (phát âm là "see-in"), dùng để nhập liệu, sử dụng với toán tử trích xuất (>>)
    cout << "Type another number: "; // in ra màn hình
    cin >> y; // Nhận dữ liệu nhập của người dùng từ bàn phím 
    sum = x + y; // tính toán
    cout << "Sum is: " << sum; // Hiển thị giá trị
}
```

### C++ Variables & Data Types

| Data Type |	Size |	Description
|:-|:-:|-:
| **int**	 | 2 or 4 bytes | lưu giá trị số, **không có dấu thập phân** (số thập phân)
| **float** |	4 bytes |	Lưu trữ các số phân số, chứa một hoặc nhiều số thập phân. Đủ để lưu trữ **6-7 chữ số thập phân**
| **double** |	8 bytes |	Lưu trữ các số phân số, chứa một hoặc nhiều số thập phân. Đủ để lưu trữ **15 chữ số thập phân**
| **boolean**	| 1 byte |	Lưu trữ giá trị '**true**' hoặc '**false**' (khi **in ra** là '**1**' và '**0**')
| **char**	| 1 byte |	Lưu trữ một ký tự/chữ cái/số hoặc giá trị ASCII
| **string** |	```#include <string>``` | Kiểu chuỗi được sử dụng để lưu trữ một chuỗi ký tự (văn bản). **Đây không phải là loại tích hợp sẵn**.
{:.w3-table-all.w3-hoverable.w3-card-4.w3-section.th-indigo}

### C++ Strings
- Vì string không phải là loại tích hợp sẵn nên cần có ```#include <string>```
- Có thể cộng '**+**' các chuỗi: ```string fullName = firstName + " " + lastName;```
- Có thể sử dụng '**append()**' để nối chuỗi: ```string fullName = firstName.append(lastName);```
- Sử dụng '**length()**' hoặc '**size()** (*là alias của length*)' để lấy độ dài của chuỗi: ```txt.length();```
- Có thể truy cập các ký tự trong một chuỗi bằng '**index**'. Bắt đầu bằng 0: [0] là ký tự đầu tiên. [1] là ký tự thứ hai, v.v.

{% msg warning <strong>cin</strong> coi khoảng trắng (space, tab, v.v.) là <strong>ký tự kết thúc</strong>, do đó người ta thường dùng <strong>getline()</strong> để đọc một dòng văn bản. VD: <strong>getline(cin, fullName);</strong> %}

### C++ Math

C++ có nhiều hàm cho phép bạn thực hiện các tác vụ toán học trên các con số.
- **Include** the cmath library: ```#include <cmath>```
- **Functions**: abs(x), acos(x), asin(x), atan(x)...

### References & Pointers
- Biến tham chiếu là "reference" đến một biến hiện có và được tạo bằng toán tử **&**: ```string &meal = food;    // reference to food```
- Con trỏ là một biến lưu trữ địa chỉ bộ nhớ làm giá trị của nó và được tạo bằng toán tử **\***: ```string* ptr = &food;```

### Function Overloading
- Với **Function Overloading**, nhiều hàm có thể có cùng tên nhưng có các tham số khác nhau:
- Nhiều hàm có thể có cùng tên **miễn là *số lượng*** và/hoặc ***loại tham số*** khác nhau.

### OOP

#### Classes and Objects

```c++
// --- Create a Class ---
class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
    // --- Create an Object ---
    MyClass myObj;  // Create an object of MyClass (giống struct, data type... ko cần 'new')

    // Access attributes and set values
    myObj.myNum = 15; 
    myObj.myString = "Some text";

    // Print attribute values
    cout << myObj.myNum << "\n";
    cout << myObj.myString;
    return 0;
}
```

#### Class Methods
- Có hai cách để định nghĩa các hàm thuộc về một lớp:
    + Định nghĩa **bên trong** class (như bình thường)
    + Định nghĩa **bên ngoài** class (tiện cho file header, tổ chức code... sử dụng toán tử **::**)

    ```c++
    class MyClass {        // The class
    public:              // Access specifier
        void myMethod();   // Method/function declaration
    };

    // Method/function definition outside the class
    void MyClass::myMethod() {
    cout << "Hello World!";
    }

    int main() {
    MyClass myObj;     // Create an object of MyClass
    myObj.myMethod();  // Call the method
    return 0;
    }
    ```

#### Constructors
- **Lưu ý**: Hàm **Constructor** tạo có **cùng tên với Class**, luôn luôn **public** và không có bất kỳ giá trị trả về (**return**) nào.
- Cũng giống như các **Functions**, **Constructors** có thể định nghĩa ở **bên ngoài Class** và có thể **Overloading**

```c++
class Car {        // The class
  public:          // Access specifier
    string brand;  // Attribute
    string model;  // Attribute
    int year;      // Attribute
    Car(string x, string y, int z); // Constructor declaration
};

// Constructor definition outside the class
Car::Car(string x, string y, int z) { // Constructor with parameters
  brand = x; // căn cứ scope, không sử dụng 'this'
  model = y;
  year = z;
}

int main() {
  // Create Car objects and call the constructor with different values
  Car carObj1("BMW", "X5", 1999);
  Car carObj2("Ford", "Mustang", 1969);

  // Print values
  cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year << "\n";
  cout << carObj2.brand << " " << carObj2.model << " " << carObj2.year << "\n";
  return 0;
}
```

#### Access Specifiers
- Trong C++, có ba bộ xác định quyền truy cập:
    + **public** - các thành viên có thể truy cập từ bên ngoài lớp
    + **private** - các thành viên không thể được truy cập (hoặc xem) từ bên ngoài lớp. Việc truy cập thông qua một hàm public khác (Encapsulation: **getter, setter**)
    + **protected** - các thành viên không thể được truy cập từ bên ngoài lớp, tuy nhiên, chúng có thể được truy cập trong các lớp kế thừa.
- **Theo mặc định**, tất cả thành viên của một lớp **đều ở chế độ riêng tư**.

#### Inheritance
- Trong C++, có thể kế thừa các thuộc tính và phương thức từ lớp này sang lớp khác. Chúng ta có thể group loại kế thừa thành 2 loại:
    + **derived class** (*child*) - lớp kế thừa từ lớp khác.
    + **base class** (*parent*) - lớp được kế thừa từ.
- Để kế thừa từ một lớp, hãy sử dụng ký hiệu **:**. VD: **class *MyChild*: public *MyClass***
- Một lớp cũng có thể được dẫn xuất từ ​​một lớp đã được dẫn xuất từ ​​một lớp khác. VD: ***MyGrandChild < MyChild < MyClass***
- Một lớp cũng có thể được bắt nguồn từ nhiều lớp cơ sở, sử dụng **danh sách được phân tách bằng dấu phẩy**: **class *MyChildClass*: public *MyClass*, public *MyOtherClass* {...}**
- Trong các lớp kế thừa có thể truy cập các biến '**protected**' trong parent.

#### Polymorphism
- Đa hình có nghĩa là "**nhiều dạng**" và nó xảy ra khi chúng ta có nhiều lớp có liên quan với nhau bằng tính kế thừa.

```c++
// Base class
class Animal {
  public:
    void animalSound() {
      cout << "The animal makes a sound \n";
    }
};

// Derived class
class Pig : public Animal {
  public:
    void animalSound() {
      cout << "The pig says: wee wee \n";
    }
};

// Derived class
class Dog : public Animal {
  public:
    void animalSound() {
      cout << "The dog says: bow wow \n";
    }
};
```

#### C++ Files
- Thư viện **fstream** cho phép chúng ta làm việc với các tập tin.
- Có ba lớp có trong thư viện **fstream**, được sử dụng để **tạo, ghi** hoặc **đọc** tệp:
    + **ofstream**: Tạo và ghi vào tập tin
    + **ifstream**: Đọc từ tập tin
    + **fstream**: Sự kết hợp giữa ofstream và ifstream: tạo, đọc và ghi vào tệp
- Để sử dụng thư viện **fstream**, hãy bao gồm cả tệp tiêu đề ```<iostream> VÀ <fstream>``` tiêu chuẩn.

```c++
// --- Create and Write To a File
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  // Create and open a text file (o = open, f = file...)
  ofstream MyFile("filename.txt");

  // Write to the file
  MyFile << "Files can be tricky, but it is fun enough!";

  // Close the file
  MyFile.close(); // need to close
}

// --- Read a File
// Create a text string, which is used to output the text file
string myText;

// Read from the text file (i = input, file = file...)
ifstream MyReadFile("filename.txt");

// Use a while loop together with the getline() function to read the file line by line
while (getline (MyReadFile, myText)) {
  // Output the text from the file
  cout << myText;
}

// Close the file
MyReadFile.close();
```

#### Exceptions
- Xử lý ngoại lệ trong C++ bao gồm ba từ khóa: **try**, **throw** and **catch**:
    + Câu lệnh **try** cho phép bạn xác định một khối mã để kiểm tra lỗi trong khi nó đang được thực thi.
    + Từ khóa **throw** ném ra một ngoại lệ khi phát hiện sự cố, điều này cho phép chúng ta tạo lỗi tùy chỉnh.
    + Câu lệnh **catch** cho phép bạn xác định khối mã sẽ được thực thi nếu xảy ra lỗi trong khối **try**.

    ```c++
    try { // khoanh vùng lỗi
        int age = 15;
        if (age >= 18) {
            cout << "Access granted - you are old enough.";
        } else {
            throw (age); // CHỈ throw MỘT thứ cho 'catch', và phải có kiểu 'tích hợp sẵn' (string không phải là tích hợp sẵn)
        }
    }
    catch (int myNum) { // xử lý nếu có lỗi xảy ra, kiểu phải phù hợp với throw, nếu không biết kiểu gì thì sử dụng 3 chấm '...'
        cout << "Access denied - You must be at least 18 years old.\n";
        cout << "Age is: " << myNum;
    }
    ```