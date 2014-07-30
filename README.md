# BB

## Installation

Run in terminal

```bash
git clone https://github.com/tadatuta/bb.git
cd bb
npm i
```

Build script assumes you have `./node_modules/.bin` in your `PATH`:

```bash
export PATH=./node_modules/.bin:$PATH
```

## Rebuild content

```bash
./build
```

## Content

To generate static pages put markdown files into `content/pages` with `lang.md` suffixes (e.g. `index.en.md`).

To generate blog roll put markdowns into `content/blog` folder.
You may use yaml header to set title and tags like this:

```
---
title: Post title
tags:
    - tag1
    - tag2
    - tag3
---
```

Open http://localhost:8080/ in browser to see the result.
