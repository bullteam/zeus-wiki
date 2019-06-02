import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
<<<<<<< HEAD
    name: "v-6b23e5102102",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-6b23e5102102", comp.default)
=======
    name: "v-355ac09f2f98a",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-355ac09f2f98a", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
<<<<<<< HEAD
    name: "v-70aedc53be073",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-70aedc53be073", comp.default)
=======
    name: "v-0758cd1d411f7",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-0758cd1d411f7", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
<<<<<<< HEAD
    name: "v-8e0976a5e6f8e",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-8e0976a5e6f8e", comp.default)
=======
    name: "v-75594140e3a0c",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-75594140e3a0c", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
<<<<<<< HEAD
    name: "v-7725c8d39f07d",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-7725c8d39f07d", comp.default)
=======
    name: "v-5e4487db5b5df",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-5e4487db5b5df", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
<<<<<<< HEAD
    name: "v-d2608659784e6",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-d2608659784e6", comp.default)
=======
    name: "v-ce55fbb5d2a06",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-ce55fbb5d2a06", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
<<<<<<< HEAD
    name: "v-09b0a3619f4e9",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-09b0a3619f4e9", comp.default)
=======
    name: "v-49baab6f25835",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-49baab6f25835", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
<<<<<<< HEAD
    name: "v-4a4cebdbadaaa",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\myprojects\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-4a4cebdbadaaa", comp.default)
=======
    name: "v-b528d6ae1496e",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-b528d6ae1496e", comp.default)
>>>>>>> 增加规范
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]