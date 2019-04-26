(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,s,n){"use strict";n.r(s);var a=n(0),c=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"快速部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速部署")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# 生成目录")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/Work"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/Work"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p data project log runtime src/"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("app,script,web"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 下载程序")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/Work/src/web/\n\n"),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:bullteam/zeus-ui.git admin.bullteam.cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:bullteam/zeus.git api.admin.bullteam.cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 部署")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/Work/project/\n"),n("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:bullteam/zeus-deploy.git zeus"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" ./zeus"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n./run.sh uninstall all"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n./run.sh "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" all"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# 修改 hosts")]),t._v("\n127.0.0.1 admin.bullteam.cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n127.0.0.1 api-admin.bullteam.cn"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("请确保你的环境已经安装docker & docker composer")])])])}],!1,null,null,null);s.default=c.exports}}]);