
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/welcome",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/movie-card"
  },
  {
    "renderMode": 2,
    "route": "/user-profile"
  },
  {
    "renderMode": 2,
    "route": "/welcome"
  },
  {
    "renderMode": 2,
    "route": "/movies"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23588, hash: 'a66f4da5fc7a49cbd41e4dea849014af59877d7bf69f0ca62b5f86e692a57d5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17162, hash: '000ebf71e54284e1a89a25711fa7faf30213f914a072c340a555e643fb2365b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movie-card/index.html': {size: 47411, hash: 'd0c8f8fc0ccf47e0e935ab979e6ed31aaf070d8575f7531d079719ef0bd1f10d', text: () => import('./assets-chunks/movie-card_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 46323, hash: '84d1559c1134670c16bdd553186f88ea5646441afee0f8542d7376efc3959fa7', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'movies/index.html': {size: 47411, hash: 'd0c8f8fc0ccf47e0e935ab979e6ed31aaf070d8575f7531d079719ef0bd1f10d', text: () => import('./assets-chunks/movies_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 92677, hash: '421377a1e4bc5f54ddd9acb50079c4da14f1475884e14427eebcd63028157865', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
