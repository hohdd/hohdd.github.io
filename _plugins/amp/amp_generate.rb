# # Explain: This plugin generates AMP pages for each post in the site. It uses a custom layout called amp.html.
# # Usage: Add this file to your _plugins directory in your Jekyll site. Create a new layout called amp.html in your _layouts directory.
# # Note: You can customize the layout to your liking. The layout should include the following code:
# # <!DOCTYPE html>
# # <html ⚡ lang="{{ page.lang | default: site.lang | default: "en" }}">
# # <head>
# #   <meta charset="utf-8">
# #   <title>{{ page.title }}</title>
# #   <link rel="canonical" href="{{ page.canonical_url }}">
# #   <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
# #   <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
# #   <script async src="https://cdn.ampproject.org/v0.js"></script>
# # </head>
# # <body>
# #   {{ content }}
# # </body>
# # </html>
# # You can also customize the AMP layout in the plugin file itself. The layout is defined in the AmpPost class.
# # REF: https://github.com/juusaw/amp-jekyll/
# module Jekyll
#     # Defines the base class of AMP posts
#     class AmpPost < Jekyll::Page
#       def initialize(site, base, dir, post)
#         @site = site
#         @base = base
#         @dir = dir
#         # Needed for posts with permalink
#         @url = dir
#         @name = 'index.html'
#         self.process(@name)
#         self.read_yaml(File.join(base, '_layouts'), 'amp.html')
#         self.content               = post.content
#         self.data['body']          = (Liquid::Template.parse post.content).render site.site_payload
  
#         # Merge all data from post so that keys from self.data have higher priority
#         self.data = post.data.merge(self.data)
  
#         # Remove non needed keys from data
#         # Excerpt will cause an error if kept
#         self.data.delete('excerpt')
#         # Generating the page fails silently if page has a permalink and it is copied
#         # over to the AMP version
#         self.data.delete('permalink')
  
#         self.data['canonical_url'] = post.url
#       end
#     end
#     # Generates a new AMP post for each existing post
#     class AmpGenerator < Generator
#       priority :low
#       def generate(site)
#         dir = site.config['ampdir'] || 'amp'
#         # posts
#         # site.posts.docs.each do |post|
#         #   next if post.data['skip_amp'] == true or post.data['draft'] == true
#         #   site.pages << AmpPost.new(site, site.source, File.join(dir, post.id), post)
#         # end

#         # collections
#         site.collections.each do |serial|
#             # next if serial.isSerial == false or serial.show == false            
#             serial[1].docs.each do |doc|
#                 # next if doc.draft == true or doc.skip_amp == true
#                 site.pages << AmpPost.new(site, site.source, File.join(dir, doc.id), doc)
#             end
#         end
#       end
#     end
# end