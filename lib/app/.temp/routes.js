import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-3529f30214c7e",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-3529f30214c7e", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-062d654d8471b",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-062d654d8471b", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-78acceafb6098",
    path: "/api/account.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\account.md").then(comp => {
        Vue.component("v-78acceafb6098", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a81603a014e54",
    path: "/api/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\data.md").then(comp => {
        Vue.component("v-a81603a014e54", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a09a2b57dd351",
    path: "/api/dept.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\dept.md").then(comp => {
        Vue.component("v-a09a2b57dd351", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26ffbaa1655b9",
    path: "/api/domain.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\domain.md").then(comp => {
        Vue.component("v-26ffbaa1655b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3741aba079c18",
    path: "/api/menu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\menu.md").then(comp => {
        Vue.component("v-3741aba079c18", comp.default)
        next()
      })
    }
  },
  {
    name: "v-16b20c0fa8f8b",
    path: "/api/perm.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\perm.md").then(comp => {
        Vue.component("v-16b20c0fa8f8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4647897c4103",
    path: "/api/role.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\role.md").then(comp => {
        Vue.component("v-a4647897c4103", comp.default)
        next()
      })
    }
  },
  {
    name: "v-02b6692da6d81",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-02b6692da6d81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-20273e83aad39",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-20273e83aad39", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-aa52deea4e342",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-aa52deea4e342", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a993be4a68bb",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-a993be4a68bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5ddabec02ce16",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-5ddabec02ce16", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]