---
layout: home

hero:
  name: "LonaDB"
  text: "JSON based and written in JavaScript"
  tagline: Simple, free and Open-Source.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/LonaDB/Server
  image: 
    src: /logo_large.svg
    alt: LonaDB Logo

features:
  - title: What is LonaDB?
    details: LonaDB is an early-stage prototype of a JavaScript-based database. It utilizes Binary JSON as its storage format and provides support for multiple users and tables.
  - title: Open-Source!
    details: This is a Open-Source Project. This means that anyone can look at our source code. That way, we can't put a license check for example in our project.
  - title: How does it work?
    details: Hadro is our database server running in Node.js! It provides Client Libraries for interacting with the database. Also, it utilizes a TCP-Socket for communication with the clients.
  - title: Your own instance!
    details: LonaDB is self-hosted, meaning you can run it on your own server. This allows you to have full control over your data with no one spying.
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3b82f6 30%, #86efac);

  --vp-home-hero-image-background-image: linear-gradient(-15deg, #1d3cd8 50%, #22c55b 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>