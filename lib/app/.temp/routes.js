import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-585e69e6eb9ef",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-585e69e6eb9ef", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-3643b107a4d19",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-3643b107a4d19", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-1db1758093619",
    path: "/api/account.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\account.md").then(comp => {
        Vue.component("v-1db1758093619", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4996d7c658987",
    path: "/api/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\data.md").then(comp => {
        Vue.component("v-4996d7c658987", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce67cd4236a57",
    path: "/api/dept.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\dept.md").then(comp => {
        Vue.component("v-ce67cd4236a57", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0e8d85b05e6d",
    path: "/api/domain.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\domain.md").then(comp => {
        Vue.component("v-b0e8d85b05e6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43305c3f9b10c",
    path: "/api/menu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\menu.md").then(comp => {
        Vue.component("v-43305c3f9b10c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de23524ff1e05",
    path: "/api/perm.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\perm.md").then(comp => {
        Vue.component("v-de23524ff1e05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d519d07d2247b",
    path: "/api/role.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\role.md").then(comp => {
        Vue.component("v-d519d07d2247b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-583350bb2c129",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-583350bb2c129", comp.default)
        next()
      })
    }
  },
  {
    name: "v-848a53f31e9fa",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-848a53f31e9fa", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-47b471c041b08",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-47b471c041b08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-20d7863071f9f",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-20d7863071f9f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a108ca6db4ee",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-a108ca6db4ee", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]