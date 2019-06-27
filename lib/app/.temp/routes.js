import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-ef3b132bb6393",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-ef3b132bb6393", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-644325db3a4d1",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-644325db3a4d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-341c6f84785d8",
    path: "/api/account.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\account.md").then(comp => {
        Vue.component("v-341c6f84785d8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5fcaa929e346a",
    path: "/api/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\data.md").then(comp => {
        Vue.component("v-5fcaa929e346a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f426e1770c006",
    path: "/api/dept.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\dept.md").then(comp => {
        Vue.component("v-f426e1770c006", comp.default)
        next()
      })
    }
  },
  {
    name: "v-457b56e077c7",
    path: "/api/domain.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\domain.md").then(comp => {
        Vue.component("v-457b56e077c7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4bda71fcdf2de",
    path: "/api/menu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\menu.md").then(comp => {
        Vue.component("v-4bda71fcdf2de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ebe60e2a8e99f",
    path: "/api/perm.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\perm.md").then(comp => {
        Vue.component("v-ebe60e2a8e99f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1bc721f1789b",
    path: "/api/role.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\role.md").then(comp => {
        Vue.component("v-b1bc721f1789b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-200614ccfbe9e",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-200614ccfbe9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1fd57d288278",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-1fd57d288278", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-df6311bc64a24",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-df6311bc64a24", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28d698ac473cf",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-28d698ac473cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a903dec68b2a8",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-a903dec68b2a8", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]