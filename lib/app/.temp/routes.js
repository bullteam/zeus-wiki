import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-658116617ebde",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-658116617ebde", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-dd98828322836",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-dd98828322836", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-291cf29454b8f",
    path: "/api/account.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\account.md").then(comp => {
        Vue.component("v-291cf29454b8f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6067928320ff",
    path: "/api/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\data.md").then(comp => {
        Vue.component("v-e6067928320ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bacf5e0240568",
    path: "/api/dept.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\dept.md").then(comp => {
        Vue.component("v-bacf5e0240568", comp.default)
        next()
      })
    }
  },
  {
    name: "v-937d8875b38b7",
    path: "/api/domain.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\domain.md").then(comp => {
        Vue.component("v-937d8875b38b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ab48a7bdafd8",
    path: "/api/menu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\menu.md").then(comp => {
        Vue.component("v-9ab48a7bdafd8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c47e69719a171",
    path: "/api/perm.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\perm.md").then(comp => {
        Vue.component("v-c47e69719a171", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cb0f9a3d7eb2c",
    path: "/api/role.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\role.md").then(comp => {
        Vue.component("v-cb0f9a3d7eb2c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d58db6cd92e4",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-2d58db6cd92e4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2df03e168c244",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-2df03e168c244", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-326e7c4a73f35",
    path: "/guide/architecture.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\architecture.md").then(comp => {
        Vue.component("v-326e7c4a73f35", comp.default)
        next()
      })
    }
  },
  {
    name: "v-daa0c52b4975a",
    path: "/guide/config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\config.md").then(comp => {
        Vue.component("v-daa0c52b4975a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4aef0931bb8aa",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\getting-started.md").then(comp => {
        Vue.component("v-4aef0931bb8aa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-314a05760b9db",
    path: "/guide/install.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\install.md").then(comp => {
        Vue.component("v-314a05760b9db", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3fdb08b354f01",
    path: "/guide/sys.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\sys.md").then(comp => {
        Vue.component("v-3fdb08b354f01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aeec09bc8b7a1",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-aeec09bc8b7a1", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]