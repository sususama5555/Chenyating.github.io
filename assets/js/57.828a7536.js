(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{188:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"坐标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#坐标"}},[s._v("#")]),s._v(" 坐标")]),s._v(" "),n("h2",{attrs:{id:"坐标系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#坐标系"}},[s._v("#")]),s._v(" 坐标系")]),s._v(" "),n("p",[s._v("x轴正方向向右，y轴正方向向上，z轴由屏幕从里向外。")]),s._v(" "),n("p",[s._v("在Threejs中，一条线由"),n("code",[s._v("点")]),s._v("，"),n("code",[s._v("材质")]),s._v("和"),n("code",[s._v("颜色")]),s._v("组成。")]),s._v(" "),n("p",[s._v("点由THREE.Vector3表示，Threejs中没有提供单独画点的函数，它必须被放到一个THREE.Geometry形状中，这个结构中包含一个数组"),n("code",[s._v("vertices")]),s._v("，这个vertices就是存放无数的点（THREE.Vector3）的数组")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" geometry "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Geometry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ngeometry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ngeometry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("geometry.vertices的能够使用push方法，是因为geometry.vertices是一个数组。这样geometry 中就有了2个点了。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//单纯的直线")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("initObject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明了一个几何体geometry")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" geometry "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Geometry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义一种线条的材质，使用THREE.LineBasicMaterial类型来定义，它接受一个集合作为参数，其原型如下：")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" material "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LineBasicMaterial")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("vertexColors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Parameters是一个定义材质外观的对象，它包含多个属性来定义材质，这些属性是：")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Color：线条的颜色，用16进制来表示，默认的颜色是白色。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Linewidth：线条的宽度，默认时候1个单位宽度。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Linecap：线条两端的外观，默认是圆角端点，当线条较粗的时候才看得出效果，如果线条很细，那么你几乎看不出效果了。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Linejoin：两个线条的连接点处的外观，默认是“round”，表示圆角。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// VertexColors：定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值。（如果关于插值不是很明白，可以QQ问我，QQ在前言中你一定能够找到，嘿嘿，虽然没有明确写出）。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Fog：定义材质的颜色是否受全局雾效的影响。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" color1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x444444")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFF0000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 线的材质可以由2点的颜色决定")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Vector3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Vector3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 几何体里面有一个vertices变量，可以用来存放点。")]),s._v("\n            geometry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            geometry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// geometry中colors表示顶点的颜色，")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必须材质中vertexColors等于THREE.VertexColors 时，颜色才有效")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ，如果vertexColors等于THREE.NoColors时，颜色就没有效果了。那么就会去取材质中color的值，这个很重要，大家一定记住。")]),s._v("\n            geometry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("color1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义线条，使用THREE.Line类")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一个参数是几何体geometry，里面包含了2个顶点和顶点的颜色。第二个参数是线条的材质，或者是线条的属性，表示线条以哪种方式取色。第三个参数是一组点的连接方式，我们会在后面详细讲解。")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" line "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Line")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("geometry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" material"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("THREE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("LinePieces"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将这条线加入到场景中")]),s._v("\n            scene"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//网格线")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// function initObject() {")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     var geometry = new THREE.Geometry();")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     // B begin")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     // 这两个点决定了x轴上的一条线段，将这条线段复制20次，分别平行移动到z轴的不同位置，就能够形成一组平行的线段。")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     geometry.vertices.push(new THREE.Vector3(-500, 0, 0));")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     geometry.vertices.push(new THREE.Vector3(500, 0, 0));")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     // B end")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     for (var i = 0; i <= 3; i++) {")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     // 这两个点决定了x轴上的一条线段，将这条线段复制20次，分别平行移动到z轴的不同位置，就能够形成一组平行的线段。")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     // 同理，将p1p2这条线先围绕y轴旋转90度，然后再复制20份，平行于z轴移动到不同的位置，也能形成一组平行线。")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2}));")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         line.position.z = (i * 50) - 500;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         scene.add(line);")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0x000000, opacity: 0.2}));")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         line.position.x = (i * 50) - 500;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         line.rotation.y = 90 * Math.PI / 180;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         scene.add(line);")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     }")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);