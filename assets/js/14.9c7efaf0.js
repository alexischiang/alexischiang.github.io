(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{329:function(t,a,s){t.exports=s.p+"assets/img/updateVnode.2df5303d.png"},361:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"⭕️-第二篇-虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⭕️-第二篇-虚拟-dom"}},[t._v("#")]),t._v(" ⭕️ 第二篇 虚拟 DOM")]),t._v(" "),n("h3",{attrs:{id:"什么是虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟-dom"}},[t._v("#")]),t._v(" 什么是虚拟 DOM")]),t._v(" "),n("p",[t._v("🔥🔥"),n("strong",[t._v("虚拟 DOM 是将状态映射成视图的众多解决方案之一")])]),t._v(" "),n("blockquote",[n("p",[t._v("虚拟 DOM 的解决方式是通过状态生成一个虚拟节点树 🌲，然后使用虚拟节点树进行渲染。\n在渲染之前，会使用新生成的寻你节点树和上一次生成的虚拟节点树进行对比，只渲染不同的部分。")])]),t._v(" "),n("h3",{attrs:{id:"为什么要引入虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要引入虚拟-dom"}},[t._v("#")]),t._v(" 为什么要引入虚拟 DOM")]),t._v(" "),n("p",[t._v("Angular 和 react 的变换侦测都不知道哪些状态变了，"),n("strong",[t._v("因此需要进行暴力比对。")])]),t._v(" "),n("ul",[n("li",[t._v("Angular 使用脏检查")]),t._v(" "),n("li",[t._v("React 使用虚拟 DOM")])]),t._v(" "),n("p",[t._v("Vue 的变化侦测和上两者不同，因为 vue 知道具体哪些状态发生了变化，这样就可以"),n("strong",[t._v("通过更细的粒度来绑定更新视图。")])]),t._v(" "),n("ul",[n("li",[t._v("Vue.js 1.0 无需比对直接对更新节点操作 "),n("strong",[t._v("（无虚拟 DOM 操作）")]),t._v(" "),n("ul",[n("li",[t._v("因为粒度太细，每一个绑定的状态都有一个相应的 watcher 来观察")]),t._v(" "),n("li",[t._v("当状态被越多的节点使用时开销会变得极大")])])]),t._v(" "),n("li",[t._v("Vue.js 2.0 选择中等粒度的解决方案 —— "),n("strong",[t._v("引入虚拟 DOM")]),t._v(" "),n("ul",[n("li",[t._v("一个 watcher 实例仅观察一个组件")]),t._v(" "),n("li",[t._v("🔥"),n("strong",[t._v("状态变化时 watcher 通知组件，组件内通过虚拟 DOM 去进行比对与渲染")])])])])]),t._v(" "),n("h3",{attrs:{id:"vue-js-中的虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-中的虚拟-dom"}},[t._v("#")]),t._v(" Vue.js 中的虚拟 DOM")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[t._v("模板 ⏩ 渲染函数 ⏩ vnode(patch) ⏩ 视图")])]),t._v(" "),n("ul",[n("li",[t._v("模板：我们使用模板来描述状态与 DOM 之间的映射关系 如"),n("code",[t._v("{{}}")]),t._v("语法")]),t._v(" "),n("li",[t._v("Vue.js 通过编译将模板转换成"),n("strong",[t._v("渲染函数 render")])]),t._v(" "),n("li",[t._v("执行 render 即可得到虚拟节点树 🌲")]),t._v(" "),n("li",[t._v("使用虚拟节点树进行"),n("strong",[t._v("Patch 算法")]),t._v("后即可更新视图\n"),n("ul",[n("li",[t._v("🔥Patch 算法详见下文")])])])]),t._v(" "),n("h3",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" ----------")]),t._v(" "),n("h3",{attrs:{id:"什么是-vnode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-vnode"}},[t._v("#")]),t._v(" 什么是 VNode")]),t._v(" "),n("blockquote",[n("p",[t._v("Vue.js 中存在一个 vnode 类，使用它可以实例化不同类型的 vnode 实例，而不同类型的 vnode 实例各自表示不同类型的 DOM 元素")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("elm"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tag\n\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("🔥"),n("strong",[t._v("简单地说，vnode 可以理解成节点描述对象，它描述了怎样去创建真实的 DOM 节点。")])]),t._v(" "),n("h3",{attrs:{id:"vnode-的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vnode-的作用"}},[t._v("#")]),t._v(" VNode 的作用")]),t._v(" "),n("p",[t._v("🔥"),n("strong",[t._v("将上一次渲染视图时创建的 vnode 缓存起来，重新渲染时进行比对")])]),t._v(" "),n("h3",{attrs:{id:"vnode-类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vnode-类型"}},[t._v("#")]),t._v(" VNode 类型")]),t._v(" "),n("ul",[n("li",[t._v("注释节点"),n("code",[t._v("\x3c!-- 注释节点 --\x3e")])]),t._v(" "),n("li",[t._v("文本节点")]),t._v(" "),n("li",[t._v("元素节点\n"),n("ul",[n("li",[t._v("tag:p,ul,li,div...")]),t._v(" "),n("li",[t._v("data:class,id...")])])]),t._v(" "),n("li",[t._v("组件节点\n"),n("ul",[n("li",[t._v("componentOptions")]),t._v(" "),n("li",[t._v("componentInstance")])])]),t._v(" "),n("li",[t._v("函数式组件\n"),n("ul",[n("li",[t._v("functionalContext")]),t._v(" "),n("li",[t._v("functionalOptions")])])]),t._v(" "),n("li",[t._v("克隆节点:优化静态节点和插槽节点\n"),n("ul",[n("li",[t._v("将现有节点全部属性复制到新节点即可")]),t._v(" "),n("li",[t._v("isCloned = true")])])])]),t._v(" "),n("h3",{attrs:{id:"-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")]),t._v(" ----------")]),t._v(" "),n("h3",{attrs:{id:"patch-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#patch-介绍"}},[t._v("#")]),t._v(" Patch 介绍")]),t._v(" "),n("p",[t._v("🔥🔥"),n("strong",[t._v("创建 ➕ 删除 ➕ 更新节点")])]),t._v(" "),n("p",[t._v("🔁"),n("strong",[t._v("运行流程:")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("oldVnode 是否存在")]),t._v(" ➡️ ❎ 不存在则使用 vnode 创建节点插入视图\n"),n("ul",[n("li",[t._v("✅ 存在 "),n("strong",[t._v("检查 OldVnode 和 Vnode 是否为同一节点")]),t._v(" ➡️ ✅ 是则使用 patchVnode 进行更新\n"),n("ul",[n("li",[t._v("❎ 不是则使用 vnode 创建真实节点插入视图 并删除旧节点")])])])])])]),t._v(" "),n("h3",{attrs:{id:"创建节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建节点"}},[t._v("#")]),t._v(" 创建节点")]),t._v(" "),n("blockquote",[n("p",[t._v("⚠️ 只有三种节点会被插入 DOM 中："),n("strong",[t._v("元素节点、注释节点、文本节点")])])]),t._v(" "),n("p",[n("strong",[t._v("判断顺序:")])]),t._v(" "),n("ul",[n("li",[t._v("是否为元素节点\n"),n("ul",[n("li",[t._v("依据"),n("code",[t._v("vnode.tag")])]),t._v(" "),n("li",[t._v("🔥"),n("strong",[t._v("如何创建真实元素节点:")]),t._v(" "),n("ul",[n("li",[t._v("1️⃣ 调用"),n("code",[t._v("createElement")]),t._v("创建元素节点")]),t._v(" "),n("li",[t._v("2️⃣ 循环 vnode 的 children 属性")]),t._v(" "),n("li",[t._v("3️⃣ 调用"),n("code",[t._v("appendChild")]),t._v("插入父节点")])])])])]),t._v(" "),n("li",[t._v("是否为注释节点\n"),n("ul",[n("li",[t._v("依据"),n("code",[t._v("vnode.isComment")])]),t._v(" "),n("li",[t._v("调用 "),n("code",[t._v("createComment")])])])]),t._v(" "),n("li",[t._v("文本节点\n"),n("ul",[n("li",[t._v("调用 "),n("code",[t._v("createTextNode")])])])])]),t._v(" "),n("h3",{attrs:{id:"删除节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除节点"}},[t._v("#")]),t._v(" 删除节点")]),t._v(" "),n("p",[t._v("逻辑较为简单")]),t._v(" "),n("h3",{attrs:{id:"更新节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新节点"}},[t._v("#")]),t._v(" 更新节点")]),t._v(" "),n("blockquote",[n("p",[t._v("更新并不是暴力的用新节点覆盖旧节点，而是"),n("strong",[t._v("通过比对找出不一样的地方进行更新。")])])]),t._v(" "),n("h4",{attrs:{id:"静态节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态节点"}},[t._v("#")]),t._v(" 静态节点")]),t._v(" "),n("p",[t._v("⚠️ 更新节点时首先判断是否为静态节点，如果是则不需要进行操作。")]),t._v(" "),n("p",[t._v("例如"),n("code",[t._v("<p>12345</p>")]),t._v("没有绑定状态的节点即为静态节点，一旦被渲染后不会发生变化。")]),t._v(" "),n("p",[n("strong",[t._v("更新节点算法将跳过类似节点。")])]),t._v(" "),n("h4",{attrs:{id:"🔥-具体流程图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#🔥-具体流程图"}},[t._v("#")]),t._v(" 🔥 具体流程图")]),t._v(" "),n("p",[n("img",{attrs:{src:s(329),alt:"upadte vnode"}})]),t._v(" "),n("h3",{attrs:{id:"更新子节点【详解】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新子节点【详解】"}},[t._v("#")]),t._v(" 更新子节点【详解】")]),t._v(" "),n("h4",{attrs:{id:"更新策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新策略"}},[t._v("#")]),t._v(" 更新策略")]),t._v(" "),n("ul",[n("li",[t._v("创建子节点："),n("strong",[t._v("插入到所有未处理之前")])]),t._v(" "),n("li",[t._v("更新子节点")]),t._v(" "),n("li",[t._v("移动子节点："),n("code",[t._v("Node.insertBefore()")]),n("strong",[t._v("插入所有未处理之前")])]),t._v(" "),n("li",[t._v("删除子节点：循环完 new 后 old 中还存在未处理的节点即可删除")])]),t._v(" "),n("h4",{attrs:{id:"优化策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化策略"}},[t._v("#")]),t._v(" 优化策略")]),t._v(" "),n("blockquote",[n("p",[t._v("针对位置不变或者说位置可以预测的节点，我们不需要循环来查找，因为我们有一个更快捷的查找方式。")])]),t._v(" "),n("p",[t._v("⚠️"),n("strong",[t._v("4 种快捷查找方式")])]),t._v(" "),n("ul",[n("li",[t._v("新前 🆚 旧前 : 更新")]),t._v(" "),n("li",[t._v("新后 🆚 旧后 : 更新")]),t._v(" "),n("li",[t._v("新后 🆚 旧前 : 更新+移动")]),t._v(" "),n("li",[t._v("新前 🆚 旧后 : 更新+移动")])]),t._v(" "),n("h4",{attrs:{id:"🔥-哪些节点是未处理过的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#🔥-哪些节点是未处理过的"}},[t._v("#")]),t._v(" 🔥 哪些节点是未处理过的")]),t._v(" "),n("p",[t._v("设置四个变量"),n("code",[t._v("oldStartIdx oldEndIdx newStartIdx newEndIdx")]),t._v("每处理一个节点则向相应方向移动一个位置。")]),t._v(" "),n("p",[n("strong",[t._v("结束循环条件:old 或 new 中任意一个的 idx 开始位置大于结束位置即停止")])]),t._v(" "),n("ul",[n("li",[t._v("old 提前结束：new 中剩下的节点都为需要新增的节点")]),t._v(" "),n("li",[t._v("new 提前结束：old 中剩下的都是舍弃的节点")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldStartIdx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" oldEndIdx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newStartIdx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" newEndIdx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//循环体")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h2",{attrs:{id:"⭕️-第三篇-模板编译原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#⭕️-第三篇-模板编译原理"}},[t._v("#")]),t._v(" ⭕️ 第三篇 模板编译原理")]),t._v(" "),n("h3",{attrs:{id:"模板编译介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#模板编译介绍"}},[t._v("#")]),t._v(" 模板编译介绍")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[n("strong",[t._v("模板编译的主要目标是生成渲染函数，每次执行渲染函数就会使用当前最新的状态生成一份新 node")])])]),t._v(" "),n("p",[t._v("🔥"),n("strong",[t._v("逻辑上分为三步：")])]),t._v(" "),n("ul",[n("li",[t._v("将模板解析为 AST（解析器）")]),t._v(" "),n("li",[t._v("遍历 AST 标记静态节点（优化器）")]),t._v(" "),n("li",[t._v("使用 AST 生成渲染函数（代码生成器）")])]),t._v(" "),n("h3",{attrs:{id:"解析器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解析器"}},[t._v("#")]),t._v(" 解析器")]),t._v(" "),n("blockquote",[n("p",[t._v("在解析器内部，分成了很多小解析器，其中包括过滤器解析器、文本解析器和 HTML 解析器，然后通过一条主线将这些解析器组装在一起")])]),t._v(" "),n("ul",[n("li",[t._v("过滤器解析器")]),t._v(" "),n("li",[t._v("文本解析器 "),n("code",[t._v("hello { {name}}")])]),t._v(" "),n("li",[t._v("HTML 解析器")])]),t._v(" "),n("p",[t._v("如何解析详解见下文")]),t._v(" "),n("h3",{attrs:{id:"优化器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[t._v("#")]),t._v(" 优化器")]),t._v(" "),n("p",[n("strong",[t._v("优化器的目标是遍历 AST，检测出所有静态子树并给其打标记")])]),t._v(" "),n("h3",{attrs:{id:"代码生成器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码生成器"}},[t._v("#")]),t._v(" 代码生成器")]),t._v(" "),n("p",[n("strong",[t._v("模板编译的最后一步，将 AST 转换成渲染函数中的内容，该内容称为“代码字符串”")])]),t._v(" "),n("h3",{attrs:{id:"-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[t._v("#")]),t._v(" ----------")]),t._v(" "),n("h3",{attrs:{id:"解析器内部运行原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解析器内部运行原理"}},[t._v("#")]),t._v(" 解析器内部运行原理")]),t._v(" "),n("h4",{attrs:{id:"钩子函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数"}},[t._v("#")]),t._v(" 钩子函数")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseHTML")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attrs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unary")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签开始 标签名 属性 是否自闭合")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签结束")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chars")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析文本")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("comment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("text")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析注释")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h4",{attrs:{id:"栈管理-ast-层级关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈管理-ast-层级关系"}},[t._v("#")]),t._v(" 栈管理 AST 层级关系")]),t._v(" "),n("p",[t._v("🔥 一个 AST 节点具有父节点和子节点，"),n("strong",[t._v("我们维护一个栈用来记录 DOM 的深度，每次触发钩子函数 start，把当前节点推入栈，触发 end 时弹出一个节点。")])]),t._v(" "),n("h3",{attrs:{id:"html-解析器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html-解析器"}},[t._v("#")]),t._v(" HTML 解析器")])])}),[],!1,null,null,null);a.default=e.exports}}]);