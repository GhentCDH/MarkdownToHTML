---
title: "Markdown To HTML Readme"
subtitle: "Convert markdown to a modern, searchable static site."
author: "Joren Six"
date: "2023-11"
---

# Markdown documentation to HTML

Goal is to convert markdown from various sources into a clear **static and searchable** website to host together with projects. The markdown souce can describe workflows, guides or documentation of code or procedures.

Some sources of mardown files: 

* [Obsidian](https://obsidian.md/): an easy to use graphical interface to create markdown document which are almost standard markdown
* Source code project documentation in [GitHub flavored Markdown](https://github.github.com/gfm/)
* Internal knowledge base documentation from e.g. [outline](https://www.getoutline.com/)


## VitePress

[VitePress](https://vitepress.dev/) is a __Vite & Vue Powered Static Site Generator__. It uses a Javascript stack and runtime to generate a static site. See the [VitePress getting started guide](https://vitepress.dev/guide/getting-started) for more detail but the following should get you started. 

During the init step choose the directory with `md` files e.g. `./docs`.

````
npm add -D vitepress
npx vitepress init
````

The index.md file is created and links to other files. It needs manual changes to work as expected. Also the sidebar links need to be manually configured in the [`config.mts`](docs/.vitepress/config.mts) file: 

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

### VitePress in Github Pages

There is a [GitHub Action to automatically publish documentation](./.github/workflows/deploy.yml). For this repository, it automatically publishes to the  [Markdown to HTML Github Pages](https://ghentcdh.github.io/MarkdownToHTML/). To make this work a couple of thing are needed. The repository needs to be configured to enable `Pages`. To do this, go to the GitHub repository `Settings - Pages` and under `Build and deployment` choose the `Source` to be `GitHub Actions`.

The [./docs/.vitepress/config.mts](./docs/.vitepress/config.mts) needs to be configured with the correct `base` url to make the static file links work: base needs to be set to `/the-repo-name/`.

Once this config is done, the deploy GitHub action should build the static site and immediately deploy it to Pages automatically.

## Other static site generators

There are many other static site generators based on markdown. There is an [extensive list of static site generators on JamStack](https://jamstack.org/generators/). Some are more geared towards [books](https://github.com/rust-lang/mdBook), [blogs](https://gohugo.io/) or [interactive codebooks](https://quarto.org/) and not geared towards documentation.

## Obsidian Markdown to 'standard' Markdown

Every environment and platform has its Markdown extensions. For Obsidian this is also the case. The project [Obsidian Export](https://github.com/zoni/obsidian-export) converts most Obsidian extensions to CommonMark.

To use it first download the latest  [Obsidian Export](https://github.com/zoni/obsidian-export/releases/) executable and run it on a folder `obsidian-export Obsidian/Docs OutputDir`

## Testing with Docker

If you have docker, there is no a Dockerfile provided to try out the live update version without needing to install any additional dependencies. First build the container and name it `markdown_to_html` using the following command, this step should be only done once: 

```
docker build . -t markdown_to_html
```

To start the vitepress server run the container. The `-v` flag maps the local `docs` folder to the expected location in the host `/app/docs`. The port mapping can be configured as well. Here vitepress starts in the container on port 3000 which is mapped to the local port 3000.

````
docker run -v $PWD/docs:/app/docs -p 3000:3000 markdown_to_html
````


## Credits

* [Obsidian Export](https://github.com/zoni/obsidian-export)
* [VitePress](https://vitepress.dev/)
* [Pandoc](https://pandoc.org/) and [pandoc html and CSS themes](https://jez.io/pandoc-markdown-css-theme/)

