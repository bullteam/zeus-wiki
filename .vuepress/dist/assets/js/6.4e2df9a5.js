(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{171:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("blockquote",[s("p",[t._v("如果需要本地开发调试，请使用 "),s("a",{attrs:{href:"https://documenter.getpostman.com/view/159835/S1LyTSN3?version=latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman 接口文档"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("API 与用户端通讯使用HTTPS 协议")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("不同环境使用不同域名")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("将API的版本号放入URL,参考 "),s("a",{attrs:{href:"https://developer.github.com/v3/media/#request-specific-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v('路径又称"终点"（endpoint），表示API的具体网址。')]),t._v(" "),s("p",[t._v('在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的"集合"（collection），所以API中的名词也应该使用复数。')]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),s("p",[t._v("例子：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("针对不同操作，服务器向用户返回的结果应该符合以下规范。")]),t._v(" "),t._m(20),t._m(21),t._v(" "),s("p",[t._v("客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("成功")]),t._v(" "),t._m(27),s("p",[t._v("失败")]),t._v(" "),t._m(28),t._m(29),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/restful_api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-RESTful API 设计指南"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.vultr.com/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vultr api 文档"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://lark-open.bytedance.net/document/ukTMukTMukTM/uADN14CM0UjLwQTN",target:"_blank",rel:"noopener noreferrer"}},[t._v("飞书开发者文档"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"接口文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口文档","aria-hidden":"true"}},[this._v("#")]),this._v(" 接口文档")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"restful-接口标准"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restful-接口标准","aria-hidden":"true"}},[this._v("#")]),this._v(" Restful 接口标准")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了统一接口，我们采用"),e("code",[this._v("Restful")]),this._v("进行描述接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"一、协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、协议","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"二、域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、域名","aria-hidden":"true"}},[this._v("#")]),this._v(" 二、域名")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("ul",[e("li",[this._v("https://api.bullteam.local #开发测试环境")]),this._v(" "),e("li",[this._v("https://api.bullteam.work # QA测试环境")]),this._v(" "),e("li",[this._v("https://api.bullteam.life # 仿真回归环境")]),this._v(" "),e("li",[this._v("https://api.bullteam.cn  #正式环境")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"三、版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("https://api.bullteam.cn"),e("code",[this._v("/v1/")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"四、路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、路径","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、路径")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- https://api.bullteam.cn/v1/users\n- https://api.bullteam.cn/v1/menus\n- https://api.bullteam.cn/v1/datas\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"五、http-url-的动词"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、http-url-的动词","aria-hidden":"true"}},[this._v("#")]),this._v(" 五、HTTP(URL)的动词")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- GET（SELECT）：从服务器取出资源（一项或多项）。\n- POST（CREATE）：在服务器新建一个资源。\n- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。\n- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。\n- DELETE（DELETE）：从服务器删除资源。\n- HEAD：获取资源的元数据。\n- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- GET /users：列出所有用户\n- POST /users：新建一个用户\n- GET /users/<ID>：获取某个用户的信息\n- PUT /users/<ID>：更新某个指定用户的信息（提供该用户的全部信息）\n- PATCH /users/<ID>：更新某个指定用户的信息（提供该用户的部分信息）\n- DELETE /users/<ID>：删除某个用户\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"六、过滤信息（filtering）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、过滤信息（filtering）","aria-hidden":"true"}},[this._v("#")]),this._v(" 六、过滤信息（Filtering）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- ?limit=10：指定返回记录的数量\n- ?offset=10：指定返回记录的开始位置。\n- ?page=2&per_page=100：指定第几页，以及每页的记录数。\n- ?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。\n- ?users_id=1：指定筛选条件\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"七、http状态码（status-codes）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、http状态码（status-codes）","aria-hidden":"true"}},[this._v("#")]),this._v(" 七、HTTP状态码（Status Codes）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。\n- 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。\n- 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）\n- 204 NO CONTENT - [DELETE]：用户删除数据成功。\n- 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。\n- 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。\n- 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。\n- 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。\n- 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。\n- 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。\n- 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。\n- 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"八、错误处理（error-handling）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、错误处理（error-handling）","aria-hidden":"true"}},[this._v("#")]),this._v(" 八、错误处理（Error handling）")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    error"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid API key"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"九、返回结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、返回结果","aria-hidden":"true"}},[this._v("#")]),this._v(" 九、返回结果")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- GET /collection：返回资源对象的列表（数组）\n- GET /collection/resource：返回单个资源对象\n- POST /collection：返回新生成的资源对象\n- PUT /collection/resource：返回完整的资源对象\n- PATCH /collection/resource：返回完整的资源对象\n- DELETE /collection/resource：返回一个空文档\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"十、jwt-认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、jwt-认证","aria-hidden":"true"}},[this._v("#")]),this._v(" 十、JWT 认证")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("此后，客户端每次与服务器通信，都要带上这个 "),e("code",[this._v("JWT")]),this._v("。放在 HTTP 请求的头信息"),e("code",[this._v("Authorization")]),this._v("字段里面。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Content-Type: application/json\nAuthorization: Bearer + token \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"十一、其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十一、其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 十一、其他")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("strong",[this._v("全部小写，用中划线连接")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"返回结构体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回结构体","aria-hidden":"true"}},[this._v("#")]),this._v(" 返回结构体")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"done"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求状态描述，调试用")]),t._v("\n    data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求数据，对象或数组均可")]),t._v("\n        user_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        user_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coso"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        user_avatar_url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bullteam.cn/avatar.jpg"')]),t._v("\n        ...\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1009")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 业务自定义错误状态码")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"用户名或密码错误"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.default=r.exports}}]);