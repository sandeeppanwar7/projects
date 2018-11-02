# Server-side rendering in Create React App

_SSR with all the goodies, without ejecting._

## Goals

- Create React App 
- React 16
- React Router v4 (with Thunk)
- **Full SEO support** via React Helmet
- **Preloaded page data** via async/await and React Frontload
- **Code splitting** via React Loadable
- Server-side **cookie support**

## Examples

- Multiple pages (`/`, `/about`)
- **Post-specific pages with preloaded data** set on a timeout to fake an API call (`/posts/1`, `/posts/2`)
- **Basic authentication with cookie storage** (`/login`, `/dashboard`, `/logout`)
- Not found (404, etc.) page

## Installation

1.  Install dependencies via `yarn install`
2.  To run locally, use `yarn start`
3.  To run under SSR mode, use `yarn build && yarn serve`

## Why?

Server-side rendering is a requirement for many modern web applications to appear correctly in search engines and social media parsers.
