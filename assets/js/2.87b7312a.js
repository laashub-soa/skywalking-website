(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{204:function(t,a,s){t.exports=s.p+"assets/img/menu.c57f77b0.png"},205:function(t,a,s){t.exports=s.p+"assets/img/login.82fd8a27.png"},206:function(t,a,s){t.exports=s.p+"assets/img/dashboard.d449fbf1.jpg"},207:function(t,a,s){t.exports=s.p+"assets/img/app_tip.b2ab923f.png"},208:function(t,a,s){t.exports=s.p+"assets/img/service_tip.00970c32.png"},209:function(t,a,s){t.exports=s.p+"assets/img/time_chooser.2cfc8b06.jpg"},210:function(t,a,s){t.exports=s.p+"assets/img/topology.e7d94383.jpg"},211:function(t,a,s){t.exports=s.p+"assets/img/topologyMap.3c75cca1.jpg"},212:function(t,a,s){t.exports=s.p+"assets/img/topology_search.471d395a.jpg"},213:function(t,a,s){t.exports=s.p+"assets/img/topology_click.d80ce3e6.jpg"},214:function(t,a,s){t.exports=s.p+"assets/img/application.a804f4a7.jpg"},215:function(t,a,s){t.exports=s.p+"assets/img/application_findmore.3cafdaa2.jpg"},216:function(t,a,s){t.exports=s.p+"assets/img/application_heapgc_info.203cf77d.jpg"},217:function(t,a,s){t.exports=s.p+"assets/img/service.7a31325f.jpg"},218:function(t,a,s){t.exports=s.p+"assets/img/demo.aba097be.jpg"},219:function(t,a,s){t.exports=s.p+"assets/img/analysis.cc1f3bda.jpg"},220:function(t,a,s){t.exports=s.p+"assets/img/tags_logs.164d36c7.jpg"},221:function(t,a,s){t.exports=s.p+"assets/img/alarm.413b5c0e.jpg"},222:function(t,a,s){t.exports=s.p+"assets/img/trace_search.5acbcf24.jpg"},223:function(t,a,s){t.exports=s.p+"assets/img/trace_duration.ee46607d.jpg"},224:function(t,a,s){t.exports=s.p+"assets/img/trace2.76999ada.jpg"},225:function(t,a,s){t.exports=s.p+"assets/img/traceLog.78e895dd.jpg"},226:function(t,a,s){t.exports=s.p+"assets/img/trace1.9838417d.jpg"},227:function(t,a,s){t.exports=s.p+"assets/img/dashboarddemo.c37c42cc.jpg"},228:function(t,a,s){t.exports=s.p+"assets/img/top20slowtrace.6b84f585.jpg"},229:function(t,a,s){t.exports=s.p+"assets/img/applicationdemo.2787fd95.jpg"},230:function(t,a,s){t.exports=s.p+"assets/img/slowtrace.80495d71.jpg"},310:function(t,a,s){"use strict";s.r(a);var p=[function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("div",{staticClass:"content"},[p("h1",{attrs:{id:"apache-skywalking-5-0中文版图文详解使用手册"}},[t._v("Apache SkyWalking 5.0中文版图文详解使用手册")]),t._v(" "),p("p",[t._v("作者： 公众号【工匠小猪猪的技术世界】原创")]),t._v(" "),p("blockquote",[p("p",[t._v("本文纯粹介绍Apache SkyWalking如何使用，面对的群体包括了解和不了解SkyWalking原理的使用者和打算使用者。")])]),t._v(" "),p("h1",{attrs:{id:"版本选择"}},[t._v("版本选择")]),t._v(" "),p("p",[t._v("我们采用的是5.0.0-RC2的版本,SkyWalking的版本信息可以参考 https://github.com/apache/incubator-skywalking/blob/5.x/CHANGES.md")]),t._v(" "),p("p",[t._v("那么为什么我们没有采用5.1.0版本呢，这是因为我们公司内部需要支持es x-pack，但是在官方发布里面，没有支持xpack的版本。")]),t._v(" "),p("p",[t._v("在Apache SkyWalking官方文档https://github.com/CharlesMaster/incubator-skywalking/tree/master/docs/others/cn中有提到，SkyWalking 5.x 仍受社区支持。")]),t._v(" "),p("p",[t._v("对于用户计划从5.x升级到6.x，您应该知道关于有一些概念的定义的变更。最重要的两个改变了的概念是：")]),t._v(" "),p("ol",[p("li",[t._v("Application（在5.x中）更改为"),p("strong",[t._v("Service")]),t._v("（在6.x中），Application Instance也更改为"),p("strong",[t._v("Service Instance")]),t._v("。")]),t._v(" "),p("li",[t._v("Service（在5.x中）更改为Endpoint（在6.x中）。")])]),t._v(" "),p("h1",{attrs:{id:"图文详解"}},[t._v("图文详解")]),t._v(" "),p("p",[t._v("Apache SkyWalking的监控界面由Monitor和Trace两者构成，Monitor菜单又包括Dashbord、Topology、Application、Service、Alarm五个子菜单构成。本文就是围绕这些菜单分别逐一进行介绍。")]),t._v(" "),p("p",[p("img",{attrs:{src:s(204),alt:""}})]),t._v(" "),p("h1",{attrs:{id:"monitor"}},[t._v("Monitor")]),t._v(" "),p("p",[t._v("当用户通过SkyWalking登陆界面使用用户名、密码登陆以后，就会默认进入到SkyWalking的Monitor下的Dashboard界面")]),t._v(" "),p("p",[p("img",{attrs:{src:s(205),alt:""}})]),t._v(" "),p("h2",{attrs:{id:"dashboard"}},[t._v("Dashboard")]),t._v(" "),p("p",[t._v("下图就是用户登陆之后都会看到的关键Dashboard页面，在这个页面的下方的关键指标，图中都做了详细的解释。\n"),p("img",{attrs:{src:s(206),alt:""}})]),t._v(" "),p("p",[t._v("上图中app需要强调的是，52个app并不代表52个应用，比如paycenter有两台paycenter1和paycenter2就算了2个app，当然还有一些应用是3个以上的。在我们公司，paycenter1、paycenter2这些运维都和我们跳板机管理平台上的名称设置的一样，约定大于配置，开发人员可以更加便捷的排查问题。")]),t._v(" "),p("blockquote",[p("p",[t._v("再次修正一下，关于dashboard页面的app数，语言类探针，是探针的app_code来决定的。比如我们公司的线上配置就是agent.application_code=auth-center-1")])]),t._v(" "),p("p",[t._v("上图中需要解释两个概念：")]),t._v(" "),p("ul",[p("li",[t._v("cpm代表每分钟请求次数")]),t._v(" "),p("li",[t._v("SLA=(TRANSACTION_CALLS- TRANSACTION_ERROR_CALLS ) * 10000 ) / TRANSACTION_CALLS")])]),t._v(" "),p("p",[t._v("该页面主要支持四个跳转：")]),t._v(" "),p("p",[t._v("一、在上图中，App板块上的帮助选项是可以直接跳转到Application监控页面的。\n"),p("img",{attrs:{src:s(207),alt:""}})]),t._v(" "),p("p",[t._v("二、 Service板块上的帮助选项是可以直接跳转到Service监控页面的。"),p("br"),t._v(" "),p("img",{attrs:{src:s(208),alt:""}})]),t._v(" "),p("p",[t._v("三、 Slow Service列表中的每一个慢服务点击以后都会进入到其专项的Service监控页面。")]),t._v(" "),p("p",[t._v("四、 Application Throughput列表中的每一个Application点击以后也都是可以进入到其专项的Application监控页面。")]),t._v(" "),p("blockquote",[p("p",[t._v("关于Application和Service的详细介绍我们后续会展开")])]),t._v(" "),p("p",[t._v("在Dashboard的页面上部分，还有一个选择功能模块：\n"),p("img",{attrs:{src:s(209),alt:""}})]),t._v(" "),p("p",[t._v("左侧部分可以定期refresh Dashboard的数据，右侧则可以调整整体的查询区间。")]),t._v(" "),p("h2",{attrs:{id:"topology"}},[t._v("Topology")]),t._v(" "),p("p",[t._v("点击Monitor菜单下的Topology你会看到下面这张拓扑图")]),t._v(" "),p("p",[p("img",{attrs:{src:s(210),alt:""}})]),t._v(" "),p("p",[t._v("当然这张图太过于夸张了，如果接入SkyWalking的应用并不是很多，会如下图所示：\n"),p("img",{attrs:{src:s(211),alt:""}})]),t._v(" "),p("p",[t._v("左侧的三个小按钮可以调整你的视图，支持拖拽。右侧可以输入你所关心的应用名。比如我们输入一个支付和订单两个应用，左侧的拓扑图会变得更加清晰：")]),t._v(" "),p("p",[p("img",{attrs:{src:s(212),alt:""}})]),t._v(" "),p("p",[t._v("另外，上图中的绿色圆圈都是可以点击的，如果你点击以后，还会出现节点信息：\n"),p("img",{attrs:{src:s(213),alt:""}})]),t._v(" "),p("h2",{attrs:{id:"application"}},[t._v("Application")]),t._v(" "),p("p",[t._v("点击Monitor菜单下的Application你会看到下面这张图，这张图里你可以看到的东西都做了注解。")]),t._v(" "),p("p",[p("img",{attrs:{src:s(214),alt:""}})]),t._v(" "),p("p",[t._v("这张图里有一个惊喜，就是如果你点开More Server Details，你可以看到更多的信息")]),t._v(" "),p("p",[p("img",{attrs:{src:s(215),alt:""}}),t._v(" "),p("img",{attrs:{src:s(216),alt:""}})]),t._v(" "),p("p",[t._v("是的，除了Host、IPv4、Pid、OS以外，你还可以看到CPU、Heap、Non-Heap、GC（Young GC、Old GC）等详细监控信息。")]),t._v(" "),p("h2",{attrs:{id:"service"}},[t._v("Service")]),t._v(" "),p("p",[t._v("点击Monitor菜单下的Service你会看到下面这张图，这张图里你可以看到的同样都做了注解。\n"),p("img",{attrs:{src:s(217),alt:""}})]),t._v(" "),p("p",[t._v("关于Dependency Map这张图我们再补充一下，鼠标悬停可以看到每个阶段的执行时间，这是Service下的功能\n"),p("img",{attrs:{src:s(218),alt:""}})]),t._v(" "),p("p",[t._v("我们点开图中该图中Top 20 Slow Traces下面的被我马赛克掉的trace的按钮框，可以看到如下更加详细的信息：\n"),p("img",{attrs:{src:s(219),alt:""}})]),t._v(" "),p("p",[t._v("这些信息可以帮助我们知道每一个方法在哪个阶段那个具体实现耗时了多久。\n"),p("img",{attrs:{src:s(220),alt:""}})]),t._v(" "),p("p",[t._v("如上图所示，每一行基本都是可以打开的，每一行都包含了Tags、Logs等监控内容")]),t._v(" "),p("h2",{attrs:{id:"alarm"}},[t._v("Alarm")]),t._v(" "),p("p",[t._v("点击Monitor菜单下的Alarm你会看到告警菜单。目前5.X版本的还没有接入邮件、短信等告警方式，后续6支持webhook，用户可以自己去接短信和邮件。")]),t._v(" "),p("p",[t._v("告警内容中你可以看到Applicaion、Server和Service三个层面的告警内容")]),t._v(" "),p("p",[p("img",{attrs:{src:s(221),alt:""}})]),t._v(" "),p("h1",{attrs:{id:"trace"}},[t._v("Trace")]),t._v(" "),p("p",[t._v("Trace是一个非常实用的功能，用户可以根据精确的TraceId去查找")]),t._v(" "),p("p",[p("img",{attrs:{src:s(222),alt:""}})]),t._v(" "),p("p",[t._v("也可以设定时间段去查找")]),t._v(" "),p("p",[p("img",{attrs:{src:s(223),alt:""}})]),t._v(" "),p("p",[t._v("我在写使用手册时候，非常巧的是，看到了上图三起异常，于是我们往下拉列表看到了具体的数据")]),t._v(" "),p("p",[p("img",{attrs:{src:s(224),alt:""}})]),t._v(" "),p("p",[t._v("点击进去，我们可以看到具体的失败原因\n"),p("img",{attrs:{src:s(225),alt:""}})]),t._v(" "),p("p",[t._v("当然用户也可以直接将Trace State调整为Error级别进行查询")]),t._v(" "),p("p",[p("img",{attrs:{src:s(226),alt:""}})]),t._v(" "),p("h1",{attrs:{id:"再回顾一遍"}},[t._v("再回顾一遍")]),t._v(" "),p("p",[t._v("一、首先我们进入首页："),p("br"),t._v(" "),p("img",{attrs:{src:s(227),alt:""}})]),t._v(" "),p("p",[t._v("二、点击一下首页的Slow Service的projectC，可以看到如下信息："),p("br"),t._v(" "),p("img",{attrs:{src:s(228),alt:""}})]),t._v(" "),p("p",[t._v("三、如果点击首页的Appliation Throughput中的projectD，可以看到如下信息："),p("br"),t._v(" "),p("img",{attrs:{src:s(229),alt:""}})]),t._v(" "),p("p",[t._v("四、继续点进去右下角的这个slow service里的Consumer，我们可以看到下图："),p("br"),t._v(" "),p("img",{attrs:{src:s(230),alt:""}})]),t._v(" "),p("h1",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),p("p",[t._v("https://twitter.com/AsfSkyWalking/status/1013616673218179072"),p("br"),t._v("\nhttps://twitter.com/AsfSkyWalking/status/1013617100143800320")])])}],i=s(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},p,!1,null,null,null);a.default=r.exports}}]);