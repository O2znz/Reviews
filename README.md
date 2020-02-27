# Project Name

> An app to render reviews for a website's item listing page. It includes a seed script to generate example data.

## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)
3. [Features](#features)
4. [Related Projects] (#related-projects)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.15.1
- Mongo 4.2.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run seed
npm run build
npm run start
```

## Features

Features include:
  - Reviews for the home listings
    - arranged in different sections
    - shows average reviews, total number of reviews, and the average rating per service category
    - a search input bar to filter reviews
    - clicking on the search icon will filter all the reviews with the search input
    - hitting the return or enter key on your keyboard will filter all the reviews with the search input

Screenshots of deployed service:

Preview
<img width="100%" alt="screenshot1" src="/client/dist/reviews-screenshots/reviews-preview.png">

Search icon when clicked with result
<img width="100%" alt="screenshot2" src="/client/dist/reviews-screenshots/reviews-searchicon.png">

Search with enter/return keystroke with result
<img width="100%" alt="screenshot3" src="/client/dist/reviews-screenshots/reviews-enterkeystroke.png">

## Related Projects

  - https://github.com/O2znz/photo-gallery
  - https://github.com/O2znz/reservations
  - https://github.com/O2znz/reviews
  - https://github.com/O2znz/recommendations
  - https://github.com/O2znz/experiences
  - https://github.com/O2znz/reviews-proxy (proxy server that renders this service and the services listed above)