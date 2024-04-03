"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[7928],{1506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=a(5893),o=a(1151);const s={title:"Playable Layers",sidebar_position:15,slug:"Playable-Layers",last_edited:new Date("2024-03-31T08:54:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},r="Playable Layers {#b6aeaeafafbf46dead3ee008d181aa7c}",i={id:"Avatars/Playable-Layers",title:"Playable Layers",description:"Contributors: Jellejurre, JustSleightly",source:"@site/docs/Avatars/Playable-Layers.md",sourceDirName:"Avatars",slug:"/Avatars/Playable-Layers",permalink:"/docs/Avatars/Playable-Layers",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Avatars/Playable-Layers.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Playable Layers",sidebar_position:15,slug:"Playable-Layers",last_edited:"2024-03-31T08:54:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},sidebar:"sideBar",previous:{title:"Built-In VRC Parameters",permalink:"/docs/Avatars/VRC-Parameters"},next:{title:"VRC State Behaviours",permalink:"/docs/Avatars/State-Behaviours"}},l={},h=[{value:"Locomotion",id:"0c8d7eda31b04a2facca1aec9e5375d1",level:2},{value:"Additive",id:"b59a4b1fe2f94957ab83d0c99d162a0c",level:2},{value:"Gesture",id:"7ce515efea5b46a4b31678260885dab7",level:2},{value:"Action",id:"2933b4c5b31445c8b56e16bacb71faab",level:2},{value:"FX",id:"183e37777b154840a6b4bfa11f7ada89",level:2},{value:"T-Pose",id:"bbb369a56d41476fb44544c6e0013964",level:2},{value:"IK-Pose",id:"ca32150b65074fb99d8403a5d23f5ce6",level:2},{value:"Sitting",id:"46d814311cc64419b50c105cc2384984",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{RightAlignedText:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("RightAlignedText",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Contributors: ",(0,n.jsx)(t.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,n.jsx)(t.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"})]}),"\n",(0,n.jsx)(t.h1,{id:"b6aeaeafafbf46dead3ee008d181aa7c",children:"Playable Layers"}),"\n",(0,n.jsx)(t.p,{children:"The Playable Layers are a list of Animator Controllers that VRChat combine for you to generate the final animations on your avatar. This system allows you to only swap out a single controller (for example Locomotion), without having to touch any of the other Animator Controllers."}),"\n",(0,n.jsx)(t.p,{children:"They are named this way because VRChat uses the Playable System to combine these in a layer by layer basis: First, Base gets applied, then Additive, then Gesture, then Action, then FX. This means that anything you do in FX overwrites an animation in Gesture if you animate the same component."}),"\n",(0,n.jsx)(t.p,{children:"This article will describe what every layer is commonly used for in VRChat, as well as some common mistakes to make with Layers. It will be biased based on what is most likely to make your layers work with what is commonly out there."}),"\n",(0,n.jsxs)(t.p,{children:["If you want a more in depth explanation of how the layers are combined and how their masking works, you can find that on the ",(0,n.jsx)(t.a,{href:"/docs/Avatars/Avatar-Masks",children:"Avatar Masks"})," page."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"0c8d7eda31b04a2facca1aec9e5375d1",children:"Locomotion"}),"\n",(0,n.jsx)(t.p,{children:"This Layer is used to animate the Humanoid Skeleton, except for the hands. You should only animate the humanoid skeleton here, and this layer should be used for general locomotion and the preview pose."}),"\n",(0,n.jsxs)(t.p,{children:["In general this layer is either kept as the default layer, replaced by ",(0,n.jsx)(t.a,{href:"https://franadavrc.gumroad.com/l/gogoloco",children:"Franada\u2019s GoGo Loco"}),", or replaced by ",(0,n.jsx)(t.a,{href:"https://wetcat.gumroad.com/l/locomotionVRC",children:"WetCat\u2019s Locomotion Fix"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"b59a4b1fe2f94957ab83d0c99d162a0c",children:"Additive"}),"\n",(0,n.jsx)(t.p,{children:"This Layer is used to animate the Humanoid Skeleton with Additive blending. This means that the animations are applied on top of the locomotion layer, instead of overwriting it."}),"\n",(0,n.jsxs)(t.p,{children:["The sample VRChat Additive Controller animates a breathing animation, and the only time it\u2019s ever replaced is by ",(0,n.jsx)(t.a,{href:"https://franadavrc.gumroad.com/l/gogoloco",children:"Franada\u2019s Go Go Loco"}),", which just replaces a Write Defaults Off Empty state with an animated state, since that can sometimes break things."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"7ce515efea5b46a4b31678260885dab7",children:"Gesture"}),"\n",(0,n.jsxs)(t.p,{children:["This Layer is used to animate the Humanoid Hands (and should therefore have the ",(0,n.jsx)(t.em,{children:"VRC_HandsOnly"})," mask on its top layer)."]}),"\n",(0,n.jsxs)(t.p,{children:["It is generally custom made by taking the VRChat Sample Hands controller and editing it with the avatar\u2019s own hand gesture animations, replaced by ",(0,n.jsx)(t.a,{href:"https://franadavrc.gumroad.com/l/gogoloco",children:"Franada\u2019s GoGo Loco"}),", or kept as the default."]}),"\n",(0,n.jsx)(t.p,{children:"While it is theoretically possible to animate miscellaneous Transforms here as well, it is not recommended as they could get overwritten by the FX layer unless proper masking is used, and the VRChat community as a whole generally animates Transforms on the FX layer."}),"\n",(0,n.jsxs)(t.p,{children:["More information on the Gestures and Facial Expressions can be found on the ",(0,n.jsx)(t.a,{href:"/docs/Avatars/Gestures",children:"Hand Gestures/Facial Expressions"})," page."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"2933b4c5b31445c8b56e16bacb71faab",children:"Action"}),"\n",(0,n.jsx)(t.p,{children:"This Layer is used to take over the Humanoid Skeleton during for example emotes. It is set to a weight of 0 by default (and therefore won\u2019t overwrite anything by default)."}),"\n",(0,n.jsx)(t.p,{children:"Its weight can be changed by using a VRC Playable Layer Control, which is generally done to start the emote, and then at the end of the emote it is blended down to 0 again."}),"\n",(0,n.jsxs)(t.p,{children:["It is generally either kept as the default, or replaced by ",(0,n.jsx)(t.a,{href:"https://franadavrc.gumroad.com/l/gogoloco",children:"Franada\u2019s GoGo Loco"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"183e37777b154840a6b4bfa11f7ada89",children:"FX"}),"\n",(0,n.jsx)(t.p,{children:"This layer is used to animate everything that isn\u2019t the Humanoid Skeleton. Anything from matswaps, to toggles, to facial expressions gets done here."}),"\n",(0,n.jsxs)(t.p,{children:["More information about Facial Expressions can be found on the ",(0,n.jsx)(t.a,{href:"/docs/Avatars/Gestures",children:"Hand Gestures/Facial Expressions"})," page."]}),"\n",(0,n.jsxs)(t.p,{children:["More information on toggles and how they\u2019re made can be found on the ",(0,n.jsx)(t.a,{href:"/docs/Avatars/Toggles",children:"Toggles"})," page."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"bbb369a56d41476fb44544c6e0013964",children:"T-Pose"}),"\n",(0,n.jsx)(t.p,{children:"The T-Pose Controller is used by VRChat to calculate multiple different measures for your avatar:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The location of the viewpoint compared to the head bone"}),"\n",(0,n.jsx)(t.li,{children:"The wingspan of the avatar, used for estimating the IPD"}),"\n",(0,n.jsx)(t.li,{children:"The way your wrist is pointed, this helps for animations on how the wrist moves when turning the controller"}),"\n",(0,n.jsx)(t.li,{children:"The proportions of the Avatar in general. There shouldn\u2019t be any bends in the T-Pose Controller\u2019s pose, as that can lead to weird issues"}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"ca32150b65074fb99d8403a5d23f5ce6",children:"IK-Pose"}),"\n",(0,n.jsx)(t.p,{children:"The IK-Pose Controller is used by VRChat to estimate how you want the joints to bend in 3 point/4 point/full body tracking."}),"\n",(0,n.jsx)(t.p,{children:"They look at how the joints are bent in the IK-Pose Controller, and assume that\u2019s how you want them to bend in VRChat."}),"\n",(0,n.jsx)(t.p,{children:"Note: To make the knees bend more inward, rotate the feet more outward and vice versa."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"46d814311cc64419b50c105cc2384984",children:"Sitting"}),"\n",(0,n.jsx)(t.p,{children:"The Sitting Controller is used by VRChat once you enter a Station with the Seated flag enabled. It might be overwritten by the Station\u2019s Sitting controller. It is also used for the location of the viewpoint compared to the head when sitting."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(a,{children:"Last Updated: 31 March 2024 08:54:00"})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var n=a(7294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);