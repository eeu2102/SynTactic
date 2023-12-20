# SynTactic: Your Shortcut To Syntax Mastery
ESaaS Fall '23 Project

# Team Members

- **Charles Liu**: crl2157
- **Dorothy Zhang**: dcz2114
- **Markus Tran**: ht2573
- **Eki Uzamere**: eeu2102

# Installation

- Clone repo
- - Run `npm install`
- Run `bundle install`
- Run `npm install`

# Testing

- Run `bundle exec cucumber`
- Run `rspec spec`

# Running

- Start the Rails server and esbuild with one command `./bin/dev`
- Hit [http://localhost:3000/login/](http://localhost:3000/login/)

# Heroku Deployment Link

- Hit [https://syntacticsugar-e3a3513c5494.herokuapp.com/login/](https://syntacticsugar-e3a3513c5494.herokuapp.com/login/)

# Thanks to Raphael Sofaer

- Special thanks to Raphael Sofaer for helping us debug a very annoying Webpacker error. You may see some of his commits from our (11/1/2023) Office Hour Session where we were trying different methods of deleting and reinstalling configuration files. Thankfully we found a solution in deleting the following line from our Gemfile: 

```ruby
gem 'webpacker', '~> 5.4', '>= 5.4.4'
```
