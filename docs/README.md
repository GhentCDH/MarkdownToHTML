---
title: "Markdown To HTML Readme"
subtitle: "Some subtitle"
author: "JorenSix"
date: "2023-11"
---

# Markdown documentation to HTML

Goal is to convert markdown from various sources into a clear **static** website to host together with projects. The markdown souce can describe workflows, guides or documentation of code or procedures.

Some sources of the mardown files: 

* [Obsidian](https://obsidian.md/): an easy to use graphical interface to create markdown document which are almost standard markdown
* Source code project documentation in [GitHub flavored Markdown](https://github.github.com/gfm/)
* Internal knowledge base documentation from e.g. [outline](https://www.getoutline.com/)


## Pandoc

[Pandoc](https://pandoc.org/) is a __universal document converter__. It can convert from standard markdown, GitHub flavored markdown and CommonMark to HTML. Unfortunately the default style of the HTML is rather dry. The advantages are that pandoc is a well suported stable and easy to use. After installation it takes a single step to convert documents:

```
pandoc README.md -f markdown -t html -s -o readme.pandoc.html
```

With additional [pandoc html and CSS themes](https://jez.io/pandoc-markdown-css-theme/) the output can look much better.

```
pandoc \
  --from markdown \
  --to html5+smart \
  --template=pandoc-template/template \
  --css="pandoc-template/theme.css" \
  --css="pandoc-template/paper.css" \
  --toc \
  --wrap=none \
  --output docs/pandoc-templated-readme.html \
  docs/README.md
open docs/pandoc-multiple-files.html
```

There is no search functionality. There is no easy way to link to other documents. Pandoc is designed with a single large document in mind. E.g. a book with multiple chapters in markdown is converted to a single HTML document or PDF by concatenating the markdown files. E.g. this creates a single html file:

```
pandoc \
  --from markdown \
  --to html5+smart \
  --output docs/pandoc-multiple-files.html \
  docs/README.md docs/GentCDH.md
open docs/pandoc-multiple-files.html
```

Clean temporary files
````
rm docs/*html
````

## VitePress

[VitePress](https://vitepress.dev/) is a __Vite & Vue Powered Static Site Generator__. It uses a Javascript stack and runtime to generate a static site. See the [VitePress getting started guide](https://vitepress.dev/guide/getting-started) for more detail but the following should get you started. 

During the init step choose the directory with `md` files e.g. `./docs`.

````
npm add -D vitepress
npx vitepress init
````

The index.md file is created and links to other files. It needs manual changes to work as expected. Also the sidebar links need to be manually configured in the `config.mts` file: 

````
import { defineConfig } from 'vitepress'

export default defineConfig({
  ...
  themeConfig: {
    ...
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Readme', link: '/README' },
          { text: 'GhentCDH', link: '/GhentCDH' }
        ]
      }
    ]
    ...
  }
})
````


To develop and modify the webpage current run `npm run docs:dev`. To view the contents of this repo:

````
git clone https://github.com/GhentCDH/MarkdownToHTML.git
cd MarkdownToHTML
npm install
npm run docs:dev
````

To build the static html and view the result:

````
git clone https://github.com/GhentCDH/MarkdownToHTML.git
cd MarkdownToHTML
npm run docs:build
npm run docs:preview
````


### Search in VitePress

To enable **search in Vitepress** the following needs to be added to the `config.mts` file. The search system works best if many headers are present in the documents. 

````
import { defineConfig } from 'vitepress'
export default defineConfig({
  ...
  themeConfig: {
    ...
    search: {
      provider: 'local'
    }
    ...
  }
})
````


## Other static site generators

There are many other static site generators based on markdown. There is an [extensive list of static site generators on JamStack](https://jamstack.org/generators/). Some are more geared towards [books](https://github.com/rust-lang/mdBook), [blogs](https://gohugo.io/) or [interactive codebooks](https://quarto.org/) and not geared towards documentation.

## Obsidian Markdown to 'standard' Markdown

Every environment and platform has its Markdown extensions. For Obsidian this is also the case. The project [Obsidian Export](https://github.com/zoni/obsidian-export) converts most Obsidian extensions to CommonMark.

To use it first download the latest  [Obsidian Export](https://github.com/zoni/obsidian-export/releases/) executable and run it on a folder `obsidian-export Obsidian/Docs OutputDir`

## Credits

* [Obsidian Export](https://github.com/zoni/obsidian-export)
* [VitePress](https://vitepress.dev/)
* [Pandoc](https://pandoc.org/) and [pandoc html and CSS themes](https://jez.io/pandoc-markdown-css-theme/)

