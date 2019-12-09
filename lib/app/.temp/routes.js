import Vue from 'vue'

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-0e8e834c1d785",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\README.md").then(comp => {
        Vue.component("v-0e8e834c1d785", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c0241176eded1",
    path: "/api/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\README.md").then(comp => {
        Vue.component("v-c0241176eded1", comp.default)
        next()
      })
    }
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-c34b7fce405a8",
    path: "/api/account.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\account.md").then(comp => {
        Vue.component("v-c34b7fce405a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-72852720ec112",
    path: "/api/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\data.md").then(comp => {
        Vue.component("v-72852720ec112", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b7c71e219c0a",
    path: "/api/dept.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\dept.md").then(comp => {
        Vue.component("v-9b7c71e219c0a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4000c1da89c09",
    path: "/api/domain.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\domain.md").then(comp => {
        Vue.component("v-4000c1da89c09", comp.default)
        next()
      })
    }
  },
  {
    name: "v-265e790063bfe",
    path: "/api/menu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\menu.md").then(comp => {
        Vue.component("v-265e790063bfe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-784a824d52b9f",
    path: "/api/perm.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\perm.md").then(comp => {
        Vue.component("v-784a824d52b9f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-36b15044f9d18",
    path: "/api/role.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\role.md").then(comp => {
        Vue.component("v-36b15044f9d18", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6dc2e73b0e36",
    path: "/api/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\api\\user.md").then(comp => {
        Vue.component("v-f6dc2e73b0e36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-526322b730b02",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\README.md").then(comp => {
        Vue.component("v-526322b730b02", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-e2fb0d54e0d24",
    path: "/guide/architecture.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\architecture.md").then(comp => {
        Vue.component("v-e2fb0d54e0d24", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d029597abc1de",
    path: "/guide/config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\config.md").then(comp => {
        Vue.component("v-d029597abc1de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-90ab836a87d54",
    path: "/guide/data.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\data.md").then(comp => {
        Vue.component("v-90ab836a87d54", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e9e4f18f7a0c",
    path: "/guide/develop.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\develop.md").then(comp => {
        Vue.component("v-4e9e4f18f7a0c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-669f252bb08e7",
    path: "/guide/install.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\install.md").then(comp => {
        Vue.component("v-669f252bb08e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e86ff3e74635f",
    path: "/guide/ldap.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\ldap.md").then(comp => {
        Vue.component("v-e86ff3e74635f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1563736add91e",
    path: "/guide/user.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("D:\\code\\zeus\\zeus-wiki\\docs\\guide\\user.md").then(comp => {
        Vue.component("v-1563736add91e", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]