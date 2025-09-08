
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://angelfermota.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-GBQQSXXE.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SDN5V2VK.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BXSLNA34.js"
    ],
    "route": "/work-experience"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7CQMVUUS.js"
    ],
    "route": "/technical-skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N4OVFWGG.js"
    ],
    "route": "/soft-skills"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NQNAT6L7.js"
    ],
    "route": "/education"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WYYIPUSE.js"
    ],
    "route": "/languages"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MQ2BAKEJ.js"
    ],
    "route": "/personal-strengths"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QUNXD3SG.js"
    ],
    "route": "/courses"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7JY3TH6V.js"
    ],
    "route": "/downloads"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1878, hash: 'ab074e0947b48348fb2c6792b19fe5bc10177800a49c2c16122e9fc93104a60f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1081, hash: '7f3b9aaa82dc5e63c373779fe8cd8534eea76a87961752bff0d1e0d4e142fea8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8019, hash: 'ec348e1a6177886f8a349438236b712ee4e651a5ee6252e90e0f53021885fe97', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 8019, hash: '95f90f139343b5af52b6da8dc6486799a94a77bfeac556377c9514e80100130d', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8019, hash: 'c00d78145db037a0afc81446415c3a36fc7e3aeab756a0d64f71921c6fcca339', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'work-experience/index.html': {size: 8019, hash: '0190f26991fd5ec680e57ba111d033270ee4b178aca367f0f89dee8e99dc0f29', text: () => import('./assets-chunks/work-experience_index_html.mjs').then(m => m.default)},
    'soft-skills/index.html': {size: 8019, hash: '33ce3b99485367512cd8e2caa902317dc6fae5a4b1acd892ede4ab63ba54f6ea', text: () => import('./assets-chunks/soft-skills_index_html.mjs').then(m => m.default)},
    'languages/index.html': {size: 8019, hash: 'd03b2633c3aa40bae094e86a45568ce11684ab7da51807c608e2b241f04aa719', text: () => import('./assets-chunks/languages_index_html.mjs').then(m => m.default)},
    'technical-skills/index.html': {size: 8019, hash: '54a50aa16db2a071745c2b0da5a13fe9e4c3c10dea29dfa5ad2cc0774d5d5911', text: () => import('./assets-chunks/technical-skills_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 8019, hash: '2e7c73acc16b19b6ad99f9ab2c93aa3d78fdd23ca4c8feaa2dd949ffe0ada08d', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'downloads/index.html': {size: 8019, hash: '258601f4aad175d30dfeec2b0f7f546dca6fa3cc56df1c2c204b33fc4be55173', text: () => import('./assets-chunks/downloads_index_html.mjs').then(m => m.default)},
    'personal-strengths/index.html': {size: 8019, hash: 'b3d541b77759bc47d827cc4f79c5dae20f651928f40c1efb0c7e12a60632e526', text: () => import('./assets-chunks/personal-strengths_index_html.mjs').then(m => m.default)},
    'styles-7BSIEE5A.css': {size: 4380, hash: 'JbDkERAXd7Y', text: () => import('./assets-chunks/styles-7BSIEE5A_css.mjs').then(m => m.default)}
  },
};
