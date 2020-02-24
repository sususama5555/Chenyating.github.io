(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{189:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"材质和光源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#材质和光源"}},[t._v("#")]),t._v(" 材质和光源")]),t._v(" "),a("h2",{attrs:{id:"光源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光源"}},[t._v("#")]),t._v(" 光源")]),t._v(" "),a("h3",{attrs:{id:"光源基类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光源基类"}},[t._v("#")]),t._v(" 光源基类")]),t._v(" "),a("p",[t._v("在Threejs中，光源用Light表示，它是所有光源的基类。它的构造函数是：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Light")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" hex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("它有一个参数hex，接受一个16进制的颜色值。例如要定义一种红色的光源，我们可以这样来定义：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Var redLight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Light")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFF0000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("所有的具体光源都继承与THREE.Light类")]),t._v(" "),a("h2",{attrs:{id:"环境光"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境光"}},[t._v("#")]),t._v(" 环境光")]),t._v(" "),a("blockquote",[a("p",[t._v("环境光是经过多次反射而来的光称为环境光，无法确定其最初的方向。环境光是一种无处不在的光。环境光源放出的光线被认为来自任何方向。因此，当你仅为场景指定环境光时，所有的物体无论法向量如何，都将表现为同样的明暗程度。 （这是因为，反射光可以从各个方向进入您的眼睛）")])]),t._v(" "),a("p",[t._v("它的构造函数如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AmbientLight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" hex "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("它仍然接受一个16进制的颜色值，作为光源的颜色。环境光将照射场景中的所有物体，让物体显示出某种颜色。环境光的使用例子如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" light "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AmbientLight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff0000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" light "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("只需要将光源加入场景，场景就能够通过光源渲染出好的效果来了。")]),t._v(" "),a("p",[t._v("环境光就是在场景中无处不在的光，它对物体的影响是均匀的，也就是无论你从物体的那个角度观察，物体的颜色都是一样的，这就是伟大的环境光。")]),t._v(" "),a("h2",{attrs:{id:"点光源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点光源"}},[t._v("#")]),t._v(" 点光源")]),t._v(" "),a("p",[t._v("点光源：由这种光源放出的光线来自同一点，且方向辐射自四面八方。例如蜡烛放出的光，萤火虫放出的光。")]),t._v(" "),a("p",[t._v("点光源用PointLight来表示，它的构造函数如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PointLight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intensity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Color：光的颜色\nIntensity：光的强度，默认是1.0,就是说是100%强度的灯光，\ndistance：光的距离，从光源所在的位置，经过distance这段距离之后，光的强度将从Intensity衰减为0。 默认情况下，这个值为0.0，表示光源强度不衰减。")]),t._v(" "),a("h2",{attrs:{id:"聚光灯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚光灯"}},[t._v("#")]),t._v(" 聚光灯")]),t._v(" "),a("p",[t._v("聚光灯：这种光源的光线从一个锥体中射出，在被照射的物体上产生聚光的效果。使用这种光源需要指定光的射出方向以及锥体的顶角α。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SpotLight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intensity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" angle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("函数的参数如下所示：")]),t._v(" "),a("p",[t._v("Hex：聚光灯发出的颜色，如0xFFFFFF")]),t._v(" "),a("p",[t._v("Intensity：光源的强度，默认是1.0，如果为0.5，则强度是一半，意思是颜色会淡一些。和上面点光源一样。")]),t._v(" "),a("p",[t._v("Distance：光线的强度，从最大值衰减到0，需要的距离。 默认为0，表示光不衰减，如果非0，则表示从光源的位置到Distance的距离，光都在线性衰减。到离光源距离Distance时，光源强度为0.")]),t._v(" "),a("p",[t._v("Angle：聚光灯着色的角度，用弧度作为单位，这个角度是和光源的方向形成的角度。")]),t._v(" "),a("p",[t._v("exponent：光源模型中，衰减的一个参数，越大衰减约快。")]),t._v(" "),a("h2",{attrs:{id:"材质与光源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#材质与光源"}},[t._v("#")]),t._v(" 材质与光源")]),t._v(" "),a("p",[t._v("材质就是物体的质地。我们可以用撤分文字的方法来理解。材质就是材料和质感的完美结合。")]),t._v(" "),a("p",[t._v("结论：当没有任何光源的时候，最终的颜色将是黑色，无论材质是什么颜色。")]),t._v(" "),a("h2",{attrs:{id:"方向光"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方向光"}},[t._v("#")]),t._v(" 方向光")]),t._v(" "),a("p",[t._v("平行光又称为方向光（Directional Light），是一组没有衰减的平行的光线，类似太阳光的效果。")]),t._v(" "),a("p",[t._v("方向光的构造函数如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("DirectionalLight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intensity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其参数如下：")]),t._v(" "),a("p",[t._v("Hex：关系的颜色，用16进制表示")]),t._v(" "),a("p",[t._v("Intensity：光线的强度，默认为1。因为RGB的三个值均在0~255之间，不能反映出光照的强度变化，光照越强，物体表面就更明亮。它的取值范围是0到1。如果为0，表示光线基本没什么作用，那么物体就会显示为黑色。呆会你可以尝试来更改这个参数，看看实际的效果")]),t._v(" "),a("h2",{attrs:{id:"点光源-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点光源-2"}},[t._v("#")]),t._v(" 点光源")]),t._v(" "),a("p",[t._v("点光源是理想化为质点的向四面八方发出光线的光源。点光源是抽象化了的物理概念，为了把物理问题的研究简单化。就像平时说的光滑平面，质点，无空气阻力一样，点光源在现实中也是不存在的，指的是从一个点向周围空间均匀发光的光源。")]),t._v(" "),a("p",[t._v("点光源的特点是发光部分为一个小圆面，近似一个点")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"材质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#材质"}},[t._v("#")]),t._v(" 材质")]),t._v(" "),a("h2",{attrs:{id:"meshbasicmaterial-和设置颜色的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meshbasicmaterial-和设置颜色的方法"}},[t._v("#")]),t._v(" MeshBasicMaterial 和设置颜色的方法")]),t._v(" "),a("p",[t._v("这种材质是一种简单的材质，"),a("code",[t._v("不会受到光的影响")]),t._v("，直接看到的效果就是整个物体的颜色都是一样，"),a("code",[t._v("没有立体的感觉")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"meshnormalmaterial-法向材质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meshnormalmaterial-法向材质"}},[t._v("#")]),t._v(" MeshNormalMaterial 法向材质")]),t._v(" "),a("p",[t._v("这种材质会根据面的方向不同自动改变颜色")]),t._v(" "),a("h2",{attrs:{id:"linebasicmaterial-线条材质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linebasicmaterial-线条材质"}},[t._v("#")]),t._v(" LineBasicMaterial 线条材质")]),t._v(" "),a("p",[t._v("由于 Windows 系统的原因，线的宽度只能为1。")]),t._v(" "),a("p",[t._v("要绘制线段，我们需要确定两个点，就是起点和终点，")]),t._v(" "),a("p",[t._v("LineDashedMaterial 虚线\n我们也可以创建虚线，这里我们来点新花样，就是实现曲线。曲线也和直线一样，在 Windows 系统线的粗度只能为1。")]),t._v(" "),a("p",[t._v("要创建曲线，我们需要使用到 THREE.CatmullRomCurve3 来生成一个 curve 对象，这是一个曲线对象，可以从对象获取生成的曲线的点的集合，在这里科普一下，曲线也是由无数段的直线组成的，段数分的越清晰，曲线过渡越顺滑。")])])}),[],!1,null,null,null);s.default=e.exports}}]);