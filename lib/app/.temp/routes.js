import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-752110f003cb7",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-752110f003cb7", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-a116c8178691d",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-a116c8178691d", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-1d1dbba111626",
    path: "/api/account.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\account.md").then(comp => {
        Vue.component("v-1d1dbba111626", comp.default)
        next()
      })
    }
  },
  {
    name: "v-36eccc86916e2",
    path: "/api/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\data.md").then(comp => {
        Vue.component("v-36eccc86916e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f66553b95ecf7",
    path: "/api/dept.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\dept.md").then(comp => {
        Vue.component("v-f66553b95ecf7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d736422d8af12",
    path: "/api/domain.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\domain.md").then(comp => {
        Vue.component("v-d736422d8af12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4214e1205c6f",
    path: "/api/menu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\menu.md").then(comp => {
        Vue.component("v-e4214e1205c6f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d070d9878ffeb",
    path: "/api/perm.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\perm.md").then(comp => {
        Vue.component("v-d070d9878ffeb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-91b3553623845",
    path: "/api/role.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\role.md").then(comp => {
        Vue.component("v-91b3553623845", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f85efd4f66fde",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-f85efd4f66fde", comp.default)
        next()
      })
    }
  },
  {
    name: "v-539a3bcbb610f",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-539a3bcbb610f", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-8b69e363a2063",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-8b69e363a2063", comp.default)
        next()
      })
    }
  },
  {
    name: "v-59057c448bfc9",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-59057c448bfc9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d7aa23c06edd",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-6d7aa23c06edd", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]