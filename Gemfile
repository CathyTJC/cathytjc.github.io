source 'https://rubygems.org'

gem 'jekyll', '~> 4.3.2'
gem 'webrick', '~> 1.8'

# Core plugins that directly affect site building
group :jekyll_plugins do
    gem 'jekyll-archives-v2', '~> 3.0'
    gem 'jekyll-email-protect', '~> 1.1'
    gem 'jekyll-feed', '~> 0.17'
    gem 'jekyll-get-json', '~> 0.0.3'
    gem 'jekyll-imagemagick', '~> 0.0.1'
    gem 'jekyll-jupyter-notebook', '~> 0.0.1'
    gem 'jekyll-link-attributes', '~> 0.0.1'
    gem 'jekyll-minifier', '~> 0.1.10'
    gem 'jekyll-paginate-v2', '~> 3.0'
    gem 'jekyll-regex-replace', '~> 1.0'
    gem 'jekyll-scholar', '~> 7.0'
    gem 'jekyll-sitemap', '~> 1.4'
    gem 'jekyll-tabs', '~> 1.0'
    gem 'jekyll-terser', :git => "https://github.com/RobertoJBeltran/jekyll-terser.git"
    gem 'jekyll-toc', '~> 0.17'
    gem 'jekyll-twitter-plugin', '~> 1.0'
    gem 'jemoji', '~> 0.13'

    gem 'classifier-reborn', '~> 2.2'  # used for content categorization during the build
end

# Gems for development or external data fetching (outside :jekyll_plugins)
group :other_plugins do
    gem 'css_parser', '~> 1.12'
    gem 'feedjira', '~> 3.2'
    gem 'httparty', '~> 0.21'
    gem 'observer', '~> 0.1'       # used by jekyll-scholar
    gem 'ostruct', '~> 0.5'        # used by jekyll-twitter-plugin
    gem 'terser', '~> 1.1'         # used by jekyll-terser
    gem 'unicode_utils', '~> 1.4'  # required for text processing
end
