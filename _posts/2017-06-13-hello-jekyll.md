---
layout: post
# SEO
title: Hello Jekyll! xây dựng website tĩnh với Jekyll.
description: Jekyll là một generator các file web tĩnh, sử dụng để tạo blog cá nhân, trang web của dự án, trang web của tổ chức. Jekyll được biết bằng Ruby bởi Tom Preston-Werner (GitHub's co-founder), nó được phân phối dưới giấy phép mã nguồn mở (open source MIT license).
robots: noindex, nofollow, nofollow, noarchive

# HUMAN: tiêu đề hiển thị của bài viết
header: Hello Jekyll
# thumbnail image size: 300x251
# thumbnailImg: /assets/img/articles/demo/girl_hat.jpg
# categories: mỗi category cách nhau bởi dấu cách!
# categories: Jekyll
# chế độ hiển thị (bài viết nháp: template mặc định true)
draft: true
# Table of content (TOC mặc định false), SKIP: <h1 class="no_toc">Skip toc</h1> hoặc <div class="no_toc_section">
toc: true
highlight: true
# Date nếu không có sẽ lấy từ tên file theo format "YEAR-MONTH-DAY-title.md"
date: 2017-06-13 22:26:14 +0700
author_name: Dong Ho
---
Jekyll là một `generator` các file web tĩnh, sử dụng để tạo blog cá nhân, trang web của dự án, trang web của tổ chức. Jekyll được biết bằng Ruby bởi Tom Preston-Werner (GitHub's co-founder), nó được phân phối dưới giấy phép mã nguồn mở (open source MIT license).

Đặc điểm của website được tạo bởi Jekyll là bạn sẽ không cần phải có database, bạn chỉ cần viết các file HTML hoặc Markdown trực tiếp để phục vụ nội dung cho người xem, các nội dung là public và không có giá trị gì để lo lắng việc website có thể bị hack cả.

Vì chỉ có các file HTML tĩnh nên server host cũng rất đơn giản, tốc độ website cực nhanh chạy nhanh. Khả năng tùy biến cho trang web cũng rất nhiều, bạn có thể nhúng comment, tìm kiếm, chat với người dùng, bán sản phẩm trên web của mình...

Chỉ cần setup một khung website ban đầu và bắt đầu viết nội dung của bạn thôi.

{% raw %}
## 1. Setup
- Cài Ruby và Tools cần thiết để có thể "installing gems with native extensions" (RubyInstaller: Ruby+Devkit):

- Check: `ruby -v`, `gem -v`, `gcc -v`, `g++ -v`, `make -v`
- Cài Jekyll: `gem install jekyll bundler`
- Tạo một Site: `jekyll new mySite`
- Build: `jekyll build` => các file build ra sẽ nằm trong `_site`, đây là các static files phục vụ người xem.
- Start web server: `jekyll serve` hoặc `bundle exec jekyll serve` =>  http://localhost:4000

<div class="w3-card w3-leftbar w3-border-yellow w3-pale-yellow w3-panel w3-padding-16">
    Nếu dùng Ubuntu trên windows 10 cài bằng câu lệnh sẽ nhanh hơn.
</div>

- Bonus: làm việc với Ruby, Gem, Bundle
    - Listing installed GEMs: `gem list`, hoặc muốn xem trên browser thì chạy `gem server` => http://localhost:8808/
    - Cài đặt/Xóa một gem `gem install/uninstall jekyll`, nếu các gem nằm trong file `Gemfile` => `bundle install`

## 2. Liquid
Liquid là "template language": có 3 phần chính: **objects, tags, filters**

- **Objects**: `{{ page.title }}`
- **Tags**: `{% if page.show_sidebar %} ...HTML... {% endif %}`
- **Filters**: `{{ "hi" | capitalize }} hoặc {{ "Hello World!" | downcase }} ... {{ -17 | abs }} ... {{ article.published_at | date: "%a, %b %d, %y" }} ...`

<div class="w3-card w3-leftbar w3-border-yellow w3-pale-yellow w3-panel w3-padding-16">
    Vì là template language nên có một số hạn chế, không thể dùng tùy tiện code ruby được.
</div>

## 3. Front Matter
Front matter là một đoạn dạng YAML ở đầu mỗi page, mục đích là bổ sung thêm các biến để dùng, nó cũng để Jekyll kích hoạt xử lý liquid, vì vậy nếu ko khai báo biến thì vẫn phải có.

## 4. Layouts
Các file nằm trong `_layouts`: default.html (biến `content` đại diện cho content của page được gọi (.html | .md | .markdown)

## 5. Includes
Các file nằm trong thư mục `_includes` => sử dụng ở layout như sau: `{% include navigation.html %}`

<div class="w3-card w3-leftbar w3-border-yellow w3-pale-yellow w3-panel w3-padding-16">
    Với Layouts và Includes, bạn sẽ dễ dang tùy biến và xây dựng bố cục theme cho website.
</div>

## 6. Data Files
Các file nằm trong thư mục `_data`, Jekyll sẽ load các file (YAML, JSON, CSV) trong thư mục này và đưa vào biến `site.data.<tên_file>`

**Ví dụ:**
- Nội dung của một file `_data/navigation.yml` như sau

    ```yml
    - name: Home
        link: /
    - name: About
        link: /about.html
    ```
- Dùng file `navigation.yml` như sau
    ```liquid
    <nav>
        {% for item in site.data.navigation %}
        <a href="{{ item.link }}" {% if page.url == item.link %}style="color: red;"{% endif %}>
            {{ item.name }}
        </a>
        {% endfor %}
    </nav>
    ```
	
## 7. Assets
Nơi chứa các file: CSS, JS, images...
```
├── assets
│   ├── css
│   ├── images
│   └── js
```
Các file SASS nằm trong thư mục `_sass/main.scss` => CSS khác (assets/css/styles.scss) dùng như sau: `@import "main";`

## 8. Blogging
- Posts: các file markdown (.md) nằm trong `_posts` theo định dạng `YYYY-MM-DD-title.md` > nội dung bắt đầu bằng "Front Matter" (YAML nằm giữa 2 dấu 3 gạch `---` ở trên cùng)
- Sử dụng: `{{ site.posts }}, {{ post.url }}, {{post.excerpt}}` : `post.excerpt` là đoạn văn đầu tiên
- Bonus (xem thêm mục **Variables** ở dưới): `{{ paginator | jsonify }}`, `{{ page }}`

## 9. Collections
Collections là ý tưởng tốt để nhóm những bài viết liên quan hoặc members, talks, tutorials, serials...

Định nghĩa collections trong `_config.yml` ở thư mục gốc.

<div class="w3-card w3-leftbar w3-border-yellow w3-pale-yellow w3-panel w3-padding-16">
    Thay đổi cấu hình trong `_config.yml` thì phải build lại.
</div>

Thêm Collections của bạn như sau (ví dụ ở đây mình sẽ group các pages lại với nhau trong thư mục `_pages`)
```yml
# Collections
collections:
  pages:
    output: true

# Default values
defaults:
  -
    scope:
      path: ""
      type: "pages"
    values:
      layout: "page"
```

Sau đó bạn có thể truy cập vào Documents (phải có `output: true`) của collections qua biến `site.pages`

Thêm thuộc tính cho biến collection trong `_config.yml`, lấy mảng collections trong `{{ site }}`, trong mỗi collection có `label, docs ...`, `docs` là mảng document gồm các thuộc tính `url, date, collection, content ...`

## 10. Variables
- Global Variables: `{{ site, page, layout, content, paginator }}`
- Site Variables: `{{ site.time, site.pages, site.posts, site.related_posts, site.static_files, site.documents, site.url, site.[CONFIGURATION_DATA] ...  }}`
- Page Variables: `{{ page.content, page.title, page.excerpt, page.url, page.date, page.id, page.next, page.previous ... }}`
- Paginator: `{{ paginator.page, paginator.per_page, paginator.total_posts, paginator.total_pages, paginator.next_page, paginator.previous_page ... }}`
{% endraw %}

## 11. Deployment
Có thể sử dụng **Apache HTTP Server** hoặc **Google Firebase** để tự host những static file build ra. Hoặc bạn cũng có thể sử dụng **Github Page**, nó support sẵn **Jekyll**, tuy nhiên không phải versions và dependencies nào nó cũng support ([xem ở đây](https://pages.github.com/versions/){:.hvr-float-shadow rel="nofollow" target="_blank"}), trong trường hợp đó thì bạn phải tự build và push thủ công hoặc tự động với **Travis CI**. **Gitlab Page** cũng là một lựa chọn tốt.

Xem hướng dẫn sử dụng Jekyll với Github Page ở đây: [Setting up a GitHub Pages site with Jekyll](https://help.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll){:.hvr-forward rel="nofollow" target="_blank"}

## 12. Usage
- Khi viết bài có nhiều code có syntax của Liquid phải dùng `raw` và `endraw` để ko bị lỗi!
- Có thể sử dụng cả HTML và Markdown syntax cùng một trang nhưng không được mix với nhau. Ví dụ sử dụng `<div> ... [markdown] ...</div>` là toang.

## 13. Reference
- [Jekyll Quickstart](https://jekyllrb.com/docs/){:.hvr-forward rel="nofollow" target="_blank"}
- [Kramdown Quick Reference](https://kramdown.gettalong.org/quickref.html){:.hvr-forward rel="nofollow" target="_blank"}
- [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers){:.hvr-forward rel="nofollow" target="_blank"}
- [Jekyll Paginate V2](https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-GENERATOR.md){:.hvr-forward rel="nofollow" target="_blank"}