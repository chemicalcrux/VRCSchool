"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[7761],{6477:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(5893),i=s(1151);const a={title:"Unity/VRChat Performance Benchmarks",sidebar_position:0,slug:"Benchmarks",last_edited:new Date("2024-06-04T19:53:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/)"},o="Introduction {#b4cf7988e4ab4c00bdfada2cf80eed65}",r={id:"Other/Benchmarks",title:"Unity/VRChat Performance Benchmarks",description:"Contributors: Jellejurre",source:"@site/docs/Other/Benchmarks.md",sourceDirName:"Other",slug:"/Other/Benchmarks",permalink:"/docs/Other/Benchmarks",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Other/Benchmarks.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Unity/VRChat Performance Benchmarks",sidebar_position:0,slug:"Benchmarks",last_edited:"2024-06-04T19:53:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/)"},sidebar:"sideBar",previous:{title:"Troubleshooting 3.0",permalink:"/docs/Avatars/Troubleshooting"},next:{title:"Network Sync",permalink:"/docs/Other/Network-Sync"}},l={},h=[{value:"Animator Controllers",id:"53522b80ca174b369736ba6ef73f63dd",level:2},{value:"Single Controller Performance",id:"8b4448b945d245e5ae1309030289212a",level:3},{value:"Baseline: Two state toggle",id:"baseline-two-state-toggle",level:4},{value:"AnyState",id:"anystate",level:4},{value:"Direct Blend Trees",id:"direct-blend-trees",level:4},{value:"Miscellaneous",id:"miscellaneous",level:4},{value:"Multiple Controller Performance",id:"5b4def9bfebe4193b32c5a6559771a79",level:3},{value:"Face Tracking",id:"eae81b01bded43f984ceccf46942a730",level:3},{value:"Constraints",id:"caec003575e446d2bf97a8a23de7daf8",level:2},{value:"Audio Sources",id:"0aa8f1f5ef8741579fb8e92b44fe3163",level:2},{value:"Contact Senders/Receivers",id:"f1c3c67f6e384fb7b8a853fdcc29f95a",level:2},{value:"Cloth",id:"fbcfa24e24804883b2ef8d7fb7288e21",level:2},{value:"PhysBones",id:"adb92e7129ff428a8c3b0fc2ae45714f",level:2},{value:"Skinned Mesh Renderers",id:"3a6a07f5614048f1b60ce344e0f9cef3",level:2},{value:"Materials",id:"d329f332f05b4555a329efb5bb56abb4",level:3},{value:"Bones",id:"a0609ab86fd144bbadeb4f57ca31e019",level:3},{value:"Blendshapes",id:"a2d0ed738bac4f348a092e6c96b822a3",level:3},{value:"Other components?",id:"d672e86efd5f43b99773069fd9478757",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{GreyItalicText:a,RightAlignedText:o}=t;return a||m("GreyItalicText",!0),o||m("RightAlignedText",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Contributors: ",(0,n.jsx)(t.a,{href:"https://jellejurre.dev/",children:"Jellejurre"})]}),"\n",(0,n.jsx)(t.h1,{id:"b4cf7988e4ab4c00bdfada2cf80eed65",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"This is a writeup on the performance (mostly focused on frame time) of components in Unity and VRChat."}),"\n",(0,n.jsx)(t.p,{children:"The general methodology used to generate this data is to not look at the performance of a single instance of a Component, but to add more and more components and extract the formula for the performance from this data. For example: If we want to know how much frame time it costs to have one extra layer on an FX controller, we can have 1, 8, 64 and 256 layers, plot those on a graph, fit a line to this data, and use the formula of this line to see how much frame time it costs to add a single extra layer."}),"\n",(0,n.jsx)(t.p,{children:"My goal is to test the performance of every single component that can be used in VRChat to give a rough estimate of how heavy they are to run compared to each other, to help the community choose more optimized methods to do things."}),"\n",(0,n.jsx)(t.p,{children:"Throughout this article, I will give the results in ms of frame time. To interpret this, it is good to think about it like this:"}),"\n",(0,n.jsx)(t.p,{children:"If your goal is to have 90 fps, you have approximately 11 ms (so 0.011 seconds) to render each frame. This is your budget. Some of this time will be spent on PhysBones, some of it will be spent on Animators, some of it will be spent on Materials, etc. So if something takes 1 ms, you can see this as taking about 9.1% of your \u201cbudget\u201d."}),"\n",(0,n.jsx)(t.p,{children:"Do note that this frame time is used for processing every single avatar and the world, so if something on a single avatar takes 9.1% of the total budget, that is quite a lot, and should probably be a point of optimization."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To have 60 fps, your frame time budget is approximately 16 ms.\r\nTo have 40 fps, your frame time budget is 25 ms."})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"The graphs used in this document are generated on a computer with the following specs"}),(0,n.jsx)(t.p,{children:"CPU: AMD Ryzen 7 5800X\r\nMemory: DDR4 2x16GB 3200 MHz CL18\r\nGPU: NVIDIA GeForce RTX 4090"}),(0,n.jsxs)(t.p,{children:["The data used throughout this document is generated using ",(0,n.jsx)(t.a,{href:"https://github.com/jellejurre/UnityBenchmark",children:"https://github.com/jellejurre/UnityBenchmark"})]})]}),"\n",(0,n.jsx)(t.p,{children:"Special thanks to Cibbi for contributing his data and helping me generate the controllers"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"53522b80ca174b369736ba6ef73f63dd",children:"Animator Controllers"}),"\n",(0,n.jsx)(t.p,{children:"To put the numbers in this section into perspective, I\u2019d like to mention two points:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Every test here is done without any state behaviours. Having one or more state behaviours on any layer of any controller increases the runtime of all controllers on that avatar by 50%. This happens regardless which state behaviour you are using, and since there are state behaviours on the default Action & Gesture layer, this cost is probably incurred on every single avatar that gets used. Because this cost is always there, I have chosen not to include it in any of my testing, since my tests are supposed to be comparative, but do note that if you\u2019re looking at any of the raw numbers, you should probably add a 50% cost on top of it to get the actual numbers."}),"\n",(0,n.jsx)(t.li,{children:"Animator controllers don\u2019t scale linearly. I will touch on this later, but having two avatars with 100 layers is not as laggy as having a single avatar with 200 layers. It is useful to optimize controllers, since less frametime is still a win, but if you get weird numbers (like the fact that if it scaled linearly, having 40 avatars with 50 layers would take 68 ms, but in reality it takes 6.4 ms)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"I will first go over single controller frame time performance, and then I will go over how this scales with having multiple controllers."}),"\n",(0,n.jsx)(t.h3,{id:"8b4448b945d245e5ae1309030289212a",children:"Single Controller Performance"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.h4,{id:"baseline-two-state-toggle",children:"Baseline: Two state toggle"}),(0,n.jsx)(t.p,{children:"For our baseline, we are going to look at the simple 2 state toggle."})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"The default toggle we will be comparing against. Two animations, each with two frames, both with the same value. Write defaults on.",src:s(9757).Z+"",width:"898",height:"247"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"The default toggle we will be comparing against. Two animations, each with two frames, both with the same value. Write defaults on."})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.p,{children:"In every layer count test, the graph for layers vs frame time is quadratic. this means that the more layers you have, the worse adding an extra layer becomes. However, the quadratic term isn\u2019t very strong, so for low layer counts, it can be approximated by a linear graph. For the basic toggle, this will be 0.01 ms per layer. This is our baseline to compare against."}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["The results shown in this graph are in the ",(0,n.jsx)(t.code,{children:"static"})," case, meaning no parameters were actively being changed."]})})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"The frame time to layer count graph for the basic toggle without being actively toggled.",src:s(8760).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"The frame time to layer count graph for the basic toggle without being actively toggled."})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.p,{children:"If we run this same benchmark again, but while actively animating the layers, we get the following graph."}),(0,n.jsx)(t.p,{children:"This graph shows us that there is an approximately 20-30% higher cost for toggles that are constantly toggled, compared to ones that aren\u2019t. This would be the case for face/eye tracking for example. This 20-30% higher cost seems to be consistent with all my setups (AnyState, AnyState self transition, multiple animators, etc.), except for direct Blend Trees, where it depends on the setup."})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"The frame time to layer count graph for the basic toggle while being actively toggled.",src:s(8476).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"The frame time to layer count graph for the basic toggle while being actively toggled."})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.h4,{id:"anystate",children:"AnyState"}),"\n",(0,n.jsx)(t.p,{children:"AnyState seems to be similar in performance to non-AnyState toggles, no matter the amount of AnyState toggles. This indicates the amount of transitions checks is not a significant contributing factor to frame time, which is confirmed by other tests."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["The only notable exception here is an AnyState toggle with \u201cCan Transition to Self\u201d active, as this does incur a ",(0,n.jsx)(t.strong,{children:"20% penalty over non-can-transition-to-self"}),", even with the constant toggling comparison."]})}),"\n",(0,n.jsx)(t.h4,{id:"direct-blend-trees",children:"Direct Blend Trees"}),"\n",(0,n.jsx)(t.p,{children:"When the surprisingly large cost of layers was first discovered, people called for Direct Blend Trees as the one magical solution that would cut frame time by orders of magnitude. My results indicate that, while they don\u2019t take zero time, they are an excellent tool in reducing frame time."}),"\n",(0,n.jsx)(t.p,{children:"I have found two setups which are more performant than the normal layer toggles, one easier to work with, but slightly slower, and the other more difficult to set up, but slightly more performant."}),"\n",(0,n.jsx)(t.p,{children:"For the slower setup I used a single Direct Blend Tree, with many 1D Blend Trees as children. All the children consistently had weight one, but the 1D Blend Tree blend value would be controlled for the toggles."}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Direct Blend Tree frame time without the constant toggling",src:s(777).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Direct Blend Tree frame time without the constant toggling"})]})}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Direct Blend Tree frame time with the constant toggling",src:s(9543).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Direct Blend Tree frame time with the constant toggling"})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.p,{children:"From these results we can see that this cut our frame time by approximately 3/4ths, which is very good. Especially with large amounts of toggles, this can help a lot with performance."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To find out how to make one of these Blend Trees, I recommend reading ",(0,n.jsx)(t.a,{href:"/docs/Other/DBT-Combining",children:"Combining Layers Using Direct Blend Trees"}),"."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Some people use the techniques described in ",(0,n.jsx)(t.a,{href:"/docs/Other/Advanced-BlendTrees",children:"Advanced Blend Tree Techniques"})," to use blend trees for dissolves. Exponential smoothing is 2x faster than a normal toggle, but is FPS dependent. Linear smoothing with frameTime detection is FPS independent, but 2x as slow as a normal toggle. So try to use Exponential smoothing for dissolve toggles, and if you can\u2019t, use a layer."]})}),"\n",(0,n.jsxs)(t.p,{children:["For the slightly faster setup, there are two layers required. The first layer is a single animation which animates the defaults of all the toggles. The second layer is a single Direct Blend Tree which uses the toggle parameters to toggle the state of the toggles with one animation per toggle.\r\nSo say for example I have a pair of shoes to toggle, and I want them on by default, then on the first layer in the big animation I\u2019d animate the ",(0,n.jsx)(t.code,{children:"IsActive"})," value to true, and on the second layer in the big Direct Blend Tree, I\u2019d put an animation which animates the ",(0,n.jsx)(t.code,{children:"IsActive"})," value to false, with the blend parameter being the parameter that I want to use. So when the parameter is 0, the animation weight is 0 and the default layer takes over, and when the parameter is 1 the animation is 1 and it overwrites the default layer."]}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Direct Blend Tree frame time with default animation layer without constant toggling",src:s(3489).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Direct Blend Tree frame time with default animation layer without constant toggling"})]})}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Direct Blend Tree frame time with default animation layer with constant toggling",src:s(9405).Z+"",width:"613",height:"471"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Direct Blend Tree frame time with default animation layer with constant toggling"})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.p,{children:"From these results we can see that we cut or frame time by approximately 4/5ths over the simple two state toggles, and by 50% over the 1D Blend Tree setup in the active case, which is quite a big improvement, but how it works might be less clear and it can be more work to set up."}),"\n",(0,n.jsx)(t.p,{children:"If you are constantly switching toggles (for example you\u2019re building some face tracking setup or you\u2019re using the voice parameter a lot), it might be an idea to use this, but otherwise, personally I\u2019d stick with the two state setup."}),"\n",(0,n.jsx)(t.h4,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,n.jsx)(t.p,{children:"Now for some miscellaneous data which doesn\u2019t directly relate to toggles, but might be useful to someone:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"State count per layer and transition count don\u2019t seem to matter much (which might be why AnyState is so cheap)"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"The only time where this isn\u2019t true is if there are many bool transitions out from a single state (many here meaning 1000 for 1 ms). Float/Int seems to not have this added overhead"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Using empty layers on humanoid rigs, using non-humanoid rigs and using no avatar all seem to cut frame time per layer by about 50% compared to the two state setup"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Masking seems to have little to no effect on frame time"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Using sub-state machines seems to have little to no effect on frame time"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Nesting blendtrees for clarity seems to have little to no effect on frame time"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For Direct Blend Trees, WD off seems to not change frame times by much"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"For layer toggles, WD off seems to increase frame time by around 50%"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Parameters on the local avatar seem to cost 1.5 ms per 1000, but this cost doesn\u2019t apply to remote avatars"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"5b4def9bfebe4193b32c5a6559771a79",children:"Multiple Controller Performance"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Having multiple controllers does NOT scale linearly (that is, having 2 controllers with 100 layers causes way less lag than 1 controller with 200 layers)."})}),(0,n.jsx)(t.p,{children:"The actual relationship is hard to describe, but here is a visual to maybe help with this. Where every line is a constant frame time. So for example 5 controllers with 580 layers are as laggy as 15 controllers with 300 layers."}),(0,n.jsx)(t.p,{children:"I see two main takeaways from this graph:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Big controllers cause a lot of frame time compared to many small ones. Optimization is especially necessary if you have many layers. (1 100 layer controller takes as much frame time as 10 30 layer controllers)."}),"\n",(0,n.jsx)(t.li,{children:"Even with many controllers, if you halve the layer count on all of them, your total frame time still goes down by 50%. So if everyone optimized their layer count/layer setup, this would increase performance for everyone."}),"\n"]}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This relation seems the same for all controller types/layer configurations."})})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Frame time for controllers vs layers per controller with WD on two toggle states without active toggling.",src:s(6065).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Frame time for controllers vs layers per controller with WD on two toggle states without active toggling."})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.h3,{id:"eae81b01bded43f984ceccf46942a730",children:"Face Tracking"}),"\n",(0,n.jsxs)(t.p,{children:["Since face tracking takes up many layers, I wanted to do a comparison between a normal VRCFT controller, and a FX controller generated by Razgriz\u2019s ",(0,n.jsx)(t.a,{href:"https://github.com/rrazgriz/VRCFTGenerator",children:"VRCFTGenerator"})," (which packs the layers into Blend Trees)."]}),"\n",(0,n.jsx)(t.p,{children:"I won\u2019t bore you with the graphs, since they are just a straight line, but as for the data (this is with 37 face tracking parameters):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"VRCFT: 0.1733 ms per controller"}),"\n",(0,n.jsx)(t.li,{children:"VRCFTGenerator: 0.066 ms per controller, a 62% decrease over the non Blend Tree version."}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"caec003575e446d2bf97a8a23de7daf8",children:"Constraints"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.p,{children:"After animator controllers, I\u2019m very happy to talk about something simple. Constraints behave weirdly, but in a very predictable way."}),(0,n.jsx)(t.p,{children:"Take the total amount of enabled constraints (type doesn\u2019t matter) and use this graph to get the frame time. You can see that there are slow inclines, until a big jump. When VRChat was choosing their limits for constraints, they chose 681 to make sure you don\u2019t have to take the penalty for that big jump, and I think that makes a lot of sense, since it goes from 1.7 ms to 2.4 ms (above the 0 point, which is 2 ms in this graph)."}),(0,n.jsx)(t.p,{children:"The jump alone there would take up 6% of your total frame budget for 90 fps, and that is without the performance cost of the constraints factored in."}),(0,n.jsx)(t.p,{children:"An approximation for their performance would be 2-4 ms per 1000 constraints, but that is assuming you don\u2019t go over 1250 constraints total enabled at the same time, since it goes up fast after that."}),(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"Disabled constraints do not count towards this total graph. Disabled here means either:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"GameObject is disabled"}),"\n",(0,n.jsx)(t.li,{children:"Constraint component is disabled"}),"\n",(0,n.jsx)(t.li,{children:"Constraint is set to \u201cdisabled\u201d"}),"\n"]}),(0,n.jsx)(t.p,{children:"However, setting the weight to 0 still makes it count for performance!"})]})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Frame time of constraints",src:s(6092).Z+"",width:"640",height:"480"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Frame time of constraints"})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"0aa8f1f5ef8741579fb8e92b44fe3163",children:"Audio Sources"}),"\n",(0,n.jsx)(t.p,{children:"Try as I might, I can\u2019t seem to make these have any performance impact at all, even in unity where the max is 64 compared to VRChat\u2019s 3 per avatar."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"f1c3c67f6e384fb7b8a853fdcc29f95a",children:"Contact Senders/Receivers"}),"\n",(0,n.jsx)(t.p,{children:"The first thing I want to say is that contacts have a max limit of 4096 per instance. If you have more than 4096 contacts in one instance, some will stop working"}),"\n",(0,n.jsx)(t.p,{children:"Contact senders and receivers are pretty straightforward as well, costing:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"0.5 ms of frame time for every 1000 senders/receivers while they aren\u2019t actively being toggled"}),"\n",(0,n.jsx)(t.li,{children:"0.75 ms of frame time for every 1000 receivers while they are actively being toggled"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"These values seems to be roughly the same no matter the shape, type, parameter count, and collision tags"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Do note that this isn\u2019t factoring in the time of parameters on your local avatar. Parameters on the local avatar have an extra cost of 1.5 ms per 1000 parameters"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"fbcfa24e24804883b2ef8d7fb7288e21",children:"Cloth"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5625)"},children:[(0,n.jsx)(t.p,{children:"Cloth components are very heavy and should be used very sparingly."}),(0,n.jsx)(t.p,{children:"For any reasonable amount of vertices (up to ~200k vertices), a cloth component will add around 0.2 ms per 1000 vertices. Above this, the frame time shoots up hard before tapering off, but this is only with unreasonable amounts of vertices."}),(0,n.jsx)(t.p,{children:"Note that this 200k vertices limit is for the entire lobby. The amount of cloth components does not seem to matter for the lag, just the amount of cloth vertices."}),(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Note that due to mirror and shadow clones, the local avatar\u2019s cloth is simulated three times, and therefore its vertices should be counted thrice"})}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Colliders will make a cloth component take about twice as much frame time per 10 colliders. So per collider, it will take about 7% more frame time."})})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.4375)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Frame time of cloth with changing vertex count",src:s(6093).Z+"",width:"667",height:"516"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Frame time of cloth with changing vertex count"})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"adb92e7129ff428a8c3b0fc2ae45714f",children:"PhysBones"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.p,{children:"Physbones are quite well optimized, and within reason can be considered pretty cheap. It seems that the frame time of PhysBones is mostly reliant on how many transforms they animate, at a rate of 0.66 ms per 1000 affected PhysBone transforms."}),(0,n.jsx)(t.p,{children:"The component hierarchy shape (what is parented to what) and amount of components seem to have a slight effect on this, giving me a 33% difference between extremes, where fewer components is better."}),(0,n.jsx)(t.p,{children:"Collider count has a very slight impact on frame time, and the other settings seem to have no noticeable effect."}),(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Since PhysBones\u2019 runtime is very different in VRChat and Unity, these results are gotten from tests within VRChat. While usually the results are verified in VRChat, this time all the data is from VRChat, and therefore the results may be less accurate."})})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Frame time of Phys Bone Transforms",src:s(2924).Z+"",width:"584",height:"471"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Frame time of Phys Bone Transforms"})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"3a6a07f5614048f1b60ce344e0f9cef3",children:"Skinned Mesh Renderers"}),"\n",(0,n.jsx)(t.p,{children:"Skinned Mesh Renderers are quite the important topic for optimization, as material count and vertex count can be one of the most difficult things to optimize on an avatar. They are mostly reliant on the GPU, so it is important to mention that these results have been obtained on a RTX 4090, however the general trends have been verified on a RTX 3080 and a GTX 1080Ti."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"These benchmarks only look at frame time, not VRAM, which is another performance metric heavily affected by meshes and their properties (especially blendshapes)."})}),"\n",(0,n.jsx)(t.h3,{id:"d329f332f05b4555a329efb5bb56abb4",children:"Materials"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.p,{children:"A \u201cDraw Call\u201d is when your CPU tells your GPU to render a mesh. Every material gets seen as a separate mesh and therefore gets its own draw call. 1 mesh with 3 materials is 3 draw calls, and 3 meshes with 1 material is also 3 draw calls."}),(0,n.jsx)(t.p,{children:"It is generally understood that more draw calls = more frame time, and my benchmarks seem to support this."}),(0,n.jsx)(t.p,{children:"So, 100 skinned mesh renderers using 1 material have about equal frame time as 1 skinned mesh renderer with 100 materials."}),(0,n.jsx)(t.p,{children:"As for concrete time numbers: 1000 draw calls seem to take about 2 ms."})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Frame times of Material Count vs Mesh Count. Note that the graph is quite symmetrical across the red line, meaning that 40 meshes with 60 materials has nearly the same frame time as 60 meshes with 40 materials.",src:s(1961).Z+"",width:"581",height:"482"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Frame times of Material Count vs Mesh Count. Note that the graph is quite symmetrical across the red line, meaning that 40 meshes with 60 materials has nearly the same frame time as 60 meshes with 40 materials."})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.h3,{id:"a0609ab86fd144bbadeb4f57ca31e019",children:"Bones"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsx)(t.p,{children:"Adding more bones to a skinned mesh renderer showed they seem to take about 0.32 ms per 1000 bones (while moving, however all bones move almost all the time). Do note that if you use PhysBones to move that many bones, the PhysBones would cost another 0.66 ms per 1000 bones."}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Vertex count did not seem to matter much for Bone or Material tests, but the Standard shader was used for all of these, so it might matter more for more intensive shaders that do heavy per-vertex calculations."})})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Frame time of bones on a Skinned Mesh Renderer",src:s(843).Z+"",width:"584",height:"471"}),(0,n.jsx)("br",{}),(0,n.jsx)(a,{children:"Frame time of bones on a Skinned Mesh Renderer"})]})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(t.h3,{id:"a2d0ed738bac4f348a092e6c96b822a3",children:"Blendshapes"}),"\n",(0,n.jsx)(t.p,{children:"Blendshapes are the one test where vertex count mattered, but not by a lot. Blendshapes seem to take 0.005 ms per million vertices per blendshape, if all blendshapes are actively being changed."}),"\n",(0,n.jsx)(t.p,{children:"Some interesting information:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"For frame time, It doesn\u2019t seem to matter if only one vertex, or all vertices are being changed by a blendshape"}),"\n",(0,n.jsx)(t.li,{children:"For frame time, Inactive blendshapes seem practically free"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"Blendshapes still have a VRAM cost, even when not changed, so they should still be eliminated where-ever possible."})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"d672e86efd5f43b99773069fd9478757",children:"Other components?"}),"\n",(0,n.jsx)(t.p,{children:"I am planning to continue benchmarking components after this. Some components I have already started on, but I\u2019m not sure enough yet about my data to post it."}),"\n",(0,n.jsx)(t.p,{children:"The components I want to benchmark in the future are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Particle Systems"}),"\n",(0,n.jsx)(t.li,{children:"Lights"}),"\n",(0,n.jsx)(t.li,{children:"Animations (whether value / reference matters, whether the amount of animated properties matters)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Once I\u2019ve got to them, I\u2019ll add them to this document"}),"\n",(0,n.jsx)(t.p,{children:"If you have other things you want me to benchmark or you think I made a mistake, feel free to let me know on discord at @jellejurre#8585"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(o,{children:"Last Updated: 04 June 2024 19:53:00"})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},843:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1010892394-c4d6e788c64fb9714e8e37f047d08296.png"},6065:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1011057958-46857a95e144335a6fb6c64f36a4862d.png"},3489:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1059997236-83944eeac8684c5575627336b206e1b8.png"},6092:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1062140885-10228989624d158da2d465af473aea41.png"},8476:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1115228553-15998831b1f6d0cc656b501a161feede.png"},1961:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1134044037-c29f21732e919af9e3d6731eb6729d2e.png"},9757:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1150136599-0a6114e2cfee1c371880905e267ea659.png"},2924:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1173956749-22389c736b2743045551835ca6dd367c.png"},777:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1513557126-47d20642915a324d984e71e270846601.png"},9405:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/1637761592-b1a7956d94e8b931c508ea22acb64080.png"},8760:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/451449969-255e5d182ee410a15cd5724d4d2234f1.png"},9543:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/738174773-561641ec45acf4495d1397c73354e291.png"},6093:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/824857978-62b7201d1b700e6622d2890e1091b017.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);