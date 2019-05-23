import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-6b23e5102102",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-6b23e5102102", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-70aedc53be073",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-70aedc53be073", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-8e0976a5e6f8e",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-8e0976a5e6f8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7725c8d39f07d",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-7725c8d39f07d", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-d2608659784e6",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-d2608659784e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-09b0a3619f4e9",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-09b0a3619f4e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a4cebdbadaaa",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-4a4cebdbadaaa", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]