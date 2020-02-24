(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{146:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web缓存"}},[t._v("#")]),t._v(" web缓存")]),t._v(" "),s("p",[t._v("客户端缓存")]),t._v(" "),s("ul",[s("li",[t._v("from disk cache")]),t._v(" "),s("li",[t._v("from memory cache")])]),t._v(" "),s("p",[t._v("每次打开新的页面会使用本地缓存，再次刷新，就使用浏览器缓存；\n关闭标签以后，就没有浏览器缓存了")]),t._v(" "),s("h2",{attrs:{id:"web缓存-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web缓存-2"}},[t._v("#")]),t._v(" web缓存")]),t._v(" "),s("p",[t._v("web资源存在于web服务器和客户端之间的副本；")]),t._v(" "),s("h3",{attrs:{id:"web缓存的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web缓存的作用"}},[t._v("#")]),t._v(" web缓存的作用")]),t._v(" "),s("ul",[s("li",[t._v("减少网络带宽消耗；")]),t._v(" "),s("li",[t._v("减低服务器压力；")]),t._v(" "),s("li",[t._v("减少网络延迟，加快页面打开速度；")])]),t._v(" "),s("h3",{attrs:{id:"web缓存的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web缓存的类型"}},[t._v("#")]),t._v(" web缓存的类型")]),t._v(" "),s("ul",[s("li",[t._v("数据库数据缓存；")]),t._v(" "),s("li",[t._v("服务器端换；")]),t._v(" "),s("li",[t._v("浏览器端缓存；")]),t._v(" "),s("li",[t._v("web应用层缓存；")])]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器缓存是将文件保存在客户端，在同一个会话过程中会检查缓存的副本是否足够新；在退后网页是，访问过的资源可以从浏览器缓存中拿出使用；")])]),t._v(" "),s("h3",{attrs:{id:"web缓存的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web缓存的工作原理"}},[t._v("#")]),t._v(" web缓存的工作原理")]),t._v(" "),s("ol",[s("li",[t._v("规则是在http协议头和html页面的Meta标签中定义的；")]),t._v(" "),s("li",[t._v("从新鲜度和校验值两个维度规定浏览器是否去使用缓存中的副本；")])]),t._v(" "),s("h3",{attrs:{id:"新鲜度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新鲜度"}},[t._v("#")]),t._v(" 新鲜度")]),t._v(" "),s("p",[t._v("缓存副本有效期，")]),t._v(" "),s("h3",{attrs:{id:"校验值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验值"}},[t._v("#")]),t._v(" 校验值")]),t._v(" "),s("p",[t._v("服务器返回资源的时候有在控制头信息带上这个资源的实体标签Etag。可以用作浏览器请求过程的教研表示，校验不匹配说明资源已过期或被修改，则浏览器重新获取资源内容；")]),t._v(" "),s("p",[t._v("方法：")]),t._v(" "),s("ol",[s("li",[t._v("仅在部分浏览器支持，代理器失效，因为代理器不解析HTML内容本身；")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("HTTP-EQUIV")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Pragma"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("CONTENT")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("no-cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("与缓存相关的消息报头：")]),t._v(" "),s("ol",[s("li",[t._v("Expires")]),t._v(" "),s("li",[t._v("Pragme//忽略缓存副本")]),t._v(" "),s("li",[t._v("Cache-Contol：no-cache 忽略缓存副本；no-store 任何情况下都不保存副本； max-age=[秒] 缓存副本有效时长； public 无条件缓存资源； private 只对单个用户或实体缓存；")]),t._v(" "),s("li",[t._v("Last-Modified：告诉浏览器当前资源最后修改时间；")]),t._v(" "),s("li",[t._v("If-Modify-Match：如果第一次请求中last-modify非空，第二次请求同一资源会八他当做该项的值发给服务器；")])])])}),[],!1,null,null,null);a.default=r.exports}}]);