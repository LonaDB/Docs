---
layout: home

hero:
  name: "LonaDB"
  text: "JSON based and written in PHP"
  tagline: Simple, free and Open-Source.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/LonaDB
  image: 
    src: /logo_large.svg
    alt: LonaDB Logo

features:
  - title: What is LonaDB?
    details: LonaDB is a prototype of a PHP-based database. It utilizes Encrypted JSON-objects as its storage format and provides support for multiple users and tables.
  - title: Open-Source!
    details: This is a Open-Source Project. This means that anyone can look at our source code. That way, we can't collect your data.
  - title: How does it work?
    details: It's really simple! The Server is installed using a installer script. The Client libraries can be found on npm or pip for examle. If there is no Package Manager for your programming language (or we didn't upload the client on it), you can always check our GitHub profile for a client.
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