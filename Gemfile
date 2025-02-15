# ~> (Twiddle-Waka): Cho phép cập nhật phiên bản nhỏ hoặc bản vá, nhưng không cho phép cập nhật phiên bản lớn. VD: '~> 6.1.3' nghĩa là bạn chấp nhận tất cả các phiên bản từ 6.1.3 đến < 6.2.0.
# >= (Greater Than or Equal To): Chấp nhận tất cả các phiên bản lớn hơn hoặc bằng phiên bản chỉ định. VD: '>= 6.1.3' nghĩa là chấp nhận tất cả các phiên bản từ 6.1.3 trở lên.
# <= (Less Than or Equal To): Chấp nhận tất cả các phiên bản nhỏ hơn hoặc bằng phiên bản chỉ định. VD: '<= 6.1.3' nghĩa là chấp nhận tất cả các phiên bản từ 6.1.3 trở xuống.
# = (Exact Version): Chỉ chấp nhận đúng một phiên bản nhất định. VD: '= 6.1.3' nghĩa là chỉ chấp nhận phiên bản 6.1.3.
# > (Greater Than): Chấp nhận tất cả các phiên bản lớn hơn phiên bản chỉ định. VD: '> 6.1.3' nghĩa là chấp nhận tất cả các phiên bản lớn hơn 6.1.3.
# < (Less Than): Chấp nhận tất cả các phiên bản nhỏ hơn phiên bản chỉ định. VD: '< 6.1.3' nghĩa là chấp nhận tất cả các phiên bản nhỏ hơn 6.1.3.
# Kết hợp: gem 'rails', '>= 6.0', '< 7.0' nghĩa là chấp nhận tất cả các phiên bản từ 6.0 trở lên và nhỏ hơn 7.0.
# Nếu không chỉ định phiên bản của gem, Bundler sẽ mặc định cài đặt phiên bản mới nhất hiện có trên RubyGems vào thời điểm chạy lệnh bundle install.
# Nên khóa hoặc chỉ định phạm vi phiên bản trong Gemfile. VD: gem 'rails', '~> 7.0.0'  # Cho phép cập nhật bản vá, không cho phép bản lớn hơn 7.0
source "https://rubygems.org"

# Github Page support versions: https://pages.github.com/versions/
gem "jekyll" #, "~> 4.0.0" => jekyll (4.4.1, 4.0.1)
gem 'nokogiri' #, '~> 1.6', '>= 1.10.9' => nokogiri (1.18.2 x64-mingw-ucrt)
# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-paginate-v2" #, "~> 3.0.0" => jekyll-paginate-v2 (3.0.0)
  gem "jekyll-furigana" #, "~> 1.0" => jekyll-furigana (1.0.0)
  gem 'jekyll-admin' #, '~> 0.11.0' => jekyll-admin (0.11.1)
end

# NO NEED: Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem and associated library.
# install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
#   gem "tzinfo", "~> 1.2"
#   gem "tzinfo-data"
# end

########## ruby 3.4.1 (2024-12-25 revision 48d4efcb85) +PRISM [x64-mingw-ucrt] ##########
# Install rubyinstaller-devkit-3.4.1-2-x64.exe > ridk install > enter > ridk enable
# CMD: ruby -v | bundle -v | gem update --system | gem install bundler | gem list | gem uninstall -aIx
# RUN: delete Gemfile.lock > bundle install > jekyll serve | jekyll s
########################################################################################
# From Ruby 3.4.0, csv is not part of the default gems starting from Ruby 3.4.0. Install csv from RubyGems
gem 'csv' # csv (3.3.2)
# From Ruby 3.4.0, base64 is not part of the default gems starting from Ruby 3.4.0. Install base64 from RubyGems.
gem 'base64' # base64 (0.2.0)
# From Ruby 3.4.0, bigdecimal is not part of the default gems starting from Ruby 3.4.0. Install bigdecimal from RubyGems
gem 'bigdecimal' # bigdecimal (3.1.9)
# logger was loaded from the standard library, but will no longer be part of the default gems starting from Ruby 3.5.0
gem 'logger' # logger (1.6.6, default: 1.6.4)
# For error: cannot load such file -- webrick
gem 'webrick' # webrick (1.9.1)
# For warning: ostruct was loaded from the standard library, but will no longer be part of the default gems starting from Ruby 3.5.0
gem "ostruct" # ostruct (0.6.1)
# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform? # wdm (0.2.0)

########## 
# Khi sử dụng Jekyll Admin, Sinatra (từ 4.0 trở lên) và Rack (từ 3.0 trở lên) không tương thích với nhau.
gem 'sinatra', '< 4.0' # # Vì sinatra (4.1.1) => RUN: bundle update sinatra => gem list: sinatra (4.1.1, 3.2.0)
########################################################################################
