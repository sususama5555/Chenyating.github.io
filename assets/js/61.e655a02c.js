(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{192:function(v,_,t){"use strict";t.r(_);var a=t(1),r=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"相机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相机"}},[v._v("#")]),v._v(" 相机")]),v._v(" "),t("p",[v._v("在Threejs中相机的表示是THREE.Camera，它是相机的抽象基类，其子类有两种相机，分别是正投影相机"),t("code",[v._v("THREE.OrthographicCamera")]),v._v("和透视投影相机"),t("code",[v._v("THREE.PerspectiveCamera")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("正投影相机有时候也叫正交投影摄像机:其特点是，远近高低比例都相同。")]),v._v(" "),t("li",[v._v("透视投影有一个基本点，就是远处的物体比近处的物体小")])]),v._v(" "),t("h2",{attrs:{id:"正投影相机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正投影相机"}},[v._v("#")]),v._v(" 正投影相机")]),v._v(" "),t("p",[v._v("OrthographicCamera( left, right, top, bottom, near, far )\n1、 left参数")]),v._v(" "),t("p",[v._v("left：左平面距离相机中心点的垂直距离。从图中可以看出，左平面是屏幕里面的那个平面。")]),v._v(" "),t("p",[v._v("2、 right参数")]),v._v(" "),t("p",[v._v("right：右平面距离相机中心点的垂直距离。从图中可以看出，右平面是屏幕稍微外面一点的那个平面。")]),v._v(" "),t("p",[v._v("3、 top参数")]),v._v(" "),t("p",[v._v("top：顶平面距离相机中心点的垂直距离。上图中的顶平面，是长方体头朝天的平面。")]),v._v(" "),t("p",[v._v("4、 bottom参数")]),v._v(" "),t("p",[v._v("bottom：底平面距离相机中心点的垂直距离。底平面是头朝地的平面。")]),v._v(" "),t("p",[v._v("5、near参数")]),v._v(" "),t("p",[v._v("near：近平面距离相机中心点的垂直距离。近平面是左边竖着的那个平面。")]),v._v(" "),t("p",[v._v("6、far参数")]),v._v(" "),t("p",[v._v("far：远平面距离相机中心点的垂直距离。远平面是右边竖着的那个平面。")]),v._v(" "),t("p",[v._v("有了这些参数和相机中心点，我们这里将相机的中心点又定义为相机的位置。通过这些参数，我们就能够在三维空间中唯一的确定上图的一个长方体。这个长方体也叫做视景体。")]),v._v(" "),t("p",[v._v("投影变换的目的就是定义一个视景体，使得视景体外多余的部分裁剪掉，最终图像只是视景体内的有关部分。")]),v._v(" "),t("h2",{attrs:{id:"透视投影相机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#透视投影相机"}},[v._v("#")]),v._v(" 透视投影相机")]),v._v(" "),t("p",[v._v("透视投影相机的构造函数如下所示：")]),v._v(" "),t("p",[v._v("PerspectiveCamera( fov, aspect, near, far )")]),v._v(" "),t("p",[v._v("1、视角fov：这个最难理解,我的理解是,眼睛睁开的角度,即,视角的大小,如果设置为0,相当你闭上眼睛了,所以什么也看不到,如果为180,那么可以认为你的视界很广阔,但是在180度的时候，往往物体很小，因为他在你的整个可视区域中的比例变小了。")]),v._v(" "),t("p",[v._v("2、近平面near：这个呢，表示你近处的裁面的距离。补充一下，也可以认为是眼睛距离近处的距离，假设为10米远，请不要设置为负值，Three.js就傻了,不知道怎么算了,")]),v._v(" "),t("p",[v._v("3、远平面far：这个呢，表示你远处的裁面,")]),v._v(" "),t("p",[v._v("4、纵横比aspect：实际窗口的纵横比，即宽度除以高度。这个值越大，说明你宽度越大，那么你可能看的是宽银幕电影了，如果这个值小于1，那么可能你看到的是如下的图中的LED屏幕了")]),v._v(" "),t("p",[v._v("视角越大，中间的物体越小，这是因为，视角越大，看到的场景越大，那么中间的物体相对于整个场景来说，就越小了。")])])}),[],!1,null,null,null);_.default=r.exports}}]);