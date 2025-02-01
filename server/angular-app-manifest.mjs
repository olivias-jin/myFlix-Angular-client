
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/myFlix-Angular-client/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/myFlix-Angular-client/welcome",
    "route": "/myFlix-Angular-client"
  },
  {
    "renderMode": 2,
    "route": "/myFlix-Angular-client/movie-card"
  },
  {
    "renderMode": 2,
    "route": "/myFlix-Angular-client/user-profile"
  },
  {
    "renderMode": 2,
    "route": "/myFlix-Angular-client/welcome"
  },
  {
    "renderMode": 2,
    "route": "/myFlix-Angular-client/movies"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23610, hash: 'ad88fe6dd89677f6e0ecd33ea9fc16dc4c8ade9b8b73a8f669c9edacc87a58e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17184, hash: '21ad8356b0e297265dccba952a117c5233fe2c143d3443e440521fcc498211b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movie-card/index.html': {size: 47433, hash: 'bf6fd143e392df348fdcbd751b47a160044f98de494773abaa554d04bd92dfe2', text: () => import('./assets-chunks/movie-card_index_html.mjs').then(m => m.default)},
    'user-profile/index.html': {size: 92699, hash: '46de722ff483e4a268e0838cc238ee8c8b0de859edbd333dab5efeada852739a', text: () => import('./assets-chunks/user-profile_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 46345, hash: '7aa76aa63d5229ca243c7ee3054460ee75ece2299c4a5a2a2978056373d3e7d6', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'movies/index.html': {size: 47433, hash: 'bf6fd143e392df348fdcbd751b47a160044f98de494773abaa554d04bd92dfe2', text: () => import('./assets-chunks/movies_index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
