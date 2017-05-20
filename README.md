# ImageGallery

An image gallery with subtle kenburns effect, visual white noise overlay, and slightly shaking letters.

https://southwood.github.io/ImageGallery/

## Development
- install homebrew
  ```bash
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```
- install node.js
  ```bash
  brew install node
  ```
- install http-server
  ```bash
  npm install -g http-server
  ```
- run the server
  ```bash
  http-server public
  ```
- deploy to github pages
  ```bash
  git subtree push --prefix public origin gh-pages
  ```
