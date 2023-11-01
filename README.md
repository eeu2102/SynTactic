# SynTactic: Your Shortcut To Syntax Mastery
ESaaS Fall '23 Project

# Team Members

- **Charles Liu**: crl2157
- **Dorothy Zhang**: dcz2114
- **Markus Tran**: ht2573
- **Eki Uzamere**: eeu2102

# Installation

- Clone repo
- Run `bundle install`
- Run `npm install`

# Testing

- Run `bundle exec cucumber`
- Run `rspec spec`

# Running

- Start the Rails server and esbuild with one command `./bin/dev`
- Hit [http://localhost:3000/home/](http://localhost:3000/home/)

# Heroku Deployment Link

- Hit [https://syntacticsugar-e3a3513c5494.herokuapp.com/home/](https://syntacticsugar-e3a3513c5494.herokuapp.com/home/)

# Missing Features

- Currently, we have a drop-down coding language selector. Right now, no matter which language you select, the problem sets are based on Python. We will iterate lessons for more languages in Iteration 2.
- Currently, we only offer one method for Syntax learning (multiple choice). The 'Flashcards' button is not yet functional. We will introduce this feature in Iteration 2.
- The profile page is presently in a static state, displaying a fixed name and lacking any user-specific data on performance. We plan to revitalize this section in Iteration 2, introducing dynamic user data and a login system to personalize the learning experience.

# Thanks to Raphael Sofaer

- Special thanks to Raphael Sofaer for helping us debug a very annoying Webpacker error. You may see some of his commits from our (11/1/2023) Office Hour Session where we were trying different methods of deleting and reinstalling configuration files. Thankfully we found a solution in deleting the following line from our Gemfile: 

```ruby
gem 'webpacker', '~> 5.4', '>= 5.4.4'
```
