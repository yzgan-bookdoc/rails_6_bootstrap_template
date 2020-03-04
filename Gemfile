# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

gem 'jbuilder', '~> 2.7'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'rails', '~> 6.0.2', '>= 6.0.2.1'
gem 'sass-rails', '>= 6'
gem 'turbolinks', '~> 5'
gem 'webpacker', '~> 4.0'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  gem 'brakeman'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 4.0.0.beta3'
  gem 'shoulda'
end

group :development do
  gem 'bullet'
  gem 'guard-livereload', '~> 2.5', require: false
  gem 'guard-rspec', require: false
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'shoulda-callback-matchers', '~> 1.1.1'
  gem 'shoulda-matchers'
  gem 'simplecov', require: false
  gem 'webdrivers'
end

gem 'rubocop', '~> 0.80.1', require: false
gem 'rubocop-rails', require: false
gem 'rubocop-rspec', require: false
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

gem 'draper', '~> 4.0'
gem 'haml'
gem 'haml-rails', '~> 2.0'
