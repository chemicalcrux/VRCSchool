"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[1990],{8032:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=i(5893),s=i(1151),n=i(2004),o=i.n(n);const l={title:"Radial Puppets (Hue Shifts and more)",sidebar_position:10,slug:"Radial-Puppets",last_edited:new Date("2024-03-31T08:54:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},r="Radial Puppets {#4d050d9826884a7b802198f54c2f8420}",d={id:"Avatars/Radial-Puppets",title:"Radial Puppets (Hue Shifts and more)",description:"Contributors: Jellejurre, JustSleightly",source:"@site/docs/Avatars/Radial-Puppets.md",sourceDirName:"Avatars",slug:"/Avatars/Radial-Puppets",permalink:"/docs/Avatars/Radial-Puppets",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Avatars/Radial-Puppets.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Radial Puppets (Hue Shifts and more)",sidebar_position:10,slug:"Radial-Puppets",last_edited:"2024-03-31T08:54:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},sidebar:"sideBar",previous:{title:"Dissolve Toggles",permalink:"/docs/Avatars/Dissolve-Toggles"},next:{title:"Phys Bones",permalink:"/docs/Avatars/PhysBones"}},h={},c=[{value:"Motion Time",id:"motion-time",level:2},{value:"Blend Tree",id:"blend-tree",level:2},{value:"Pros and Cons",id:"4976a5e38f3543fd8a2a4f962bc92f33",level:2},{value:"Motion Time",id:"f6e3207f2f6246368863f16bf179e64b",level:3},{value:"Blend Tree",id:"77a377a60a1f44e28c4427ff94a857a5",level:3},{value:"Applications of Radial Puppets",id:"dda0bd67044a4036a42d46ce4f7eda89",level:2},{value:"Hue Shift",id:"14772ce641124a07928f677f5a92ac12",level:3},{value:"Quest Hue Shift",id:"0e6256c9c6bf4cd18819fcb537d14437",level:3},{value:"Scalers",id:"20545526dd734ac3b101c183d9c52a81",level:3},{value:"Multi-Toggles",id:"24910eac19324d189b638d73784a01e7",level:3}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{GreyItalicText:n,RightAlignedText:l}=t;return n||p("GreyItalicText",!0),l||p("RightAlignedText",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Contributors: ",(0,a.jsx)(t.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,a.jsx)(t.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"})]}),"\n","\n",(0,a.jsx)(t.h1,{id:"4d050d9826884a7b802198f54c2f8420",children:"Radial Puppets"}),"\n",(0,a.jsxs)(t.p,{children:["Radial Puppets are a type of Expression Menu Control (See ",(0,a.jsx)(t.a,{href:"/docs/Avatars/Expressions-Menu-Params",children:"Expressions Menu and Parameters"}),") that allow you to set a float between 0 and 1 based on the rotation of a puppet. This article will go over some common use cases and how to set them up."]}),"\n",(0,a.jsxs)(t.p,{children:["This article will assume you know how to record certain values into Animation Clips. If you don\u2019t know this, a step by step guide is given in the ",(0,a.jsx)(t.a,{href:"/docs/Unity-Animations/Animation-Clips",children:"Animation Clips"})," article."]}),"\n",(0,a.jsxs)(t.p,{children:["There are two ways to animate a Radial Puppet: ",(0,a.jsx)(t.strong,{children:"Motion Time"})," and ",(0,a.jsx)(t.strong,{children:"1D Blend Tree"}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.h2,{id:"motion-time",children:"Motion Time"}),(0,a.jsx)(t.p,{children:"With a Motion Time animation, you have a single animation which you use motion time to \u201cscroll through\u201d. To make this animation, you will want to make an animation with two key frames. One at 0:00 with the Hue Shift at 0, and one at 0:01 with the Hue Shift at 1."}),(0,a.jsxs)(t.p,{children:["Note that you will have to set ",(0,a.jsx)(t.code,{children:"Both Tangents"})," to ",(0,a.jsx)(t.code,{children:"Linear"})," in the Dope Sheet view of the Animation Window, otherwise your Animation won\u2019t play smoothly."]}),(0,a.jsx)(t.p,{children:"To use this animation for a Motion Time Hue Shift, make sure your Radial Puppet Rotation Parameter is added to your FX layer as a Float, and add a new layer. Set the layer weight to 1 by clicking on the Gear icon, and dragging the Weight to 1."}),(0,a.jsx)(t.p,{children:"Then, select your new layer, give it a new name by double clicking it, and create a new state in the layer, which will have as its Motion your animation, its Motion Time enabled, and as its Motion Time your Radial Puppet Rotation Parameter."}),(0,a.jsxs)(t.p,{children:["Make sure to Lock your material, so you can test it like it would be in game, and then you can use the ",(0,a.jsx)(t.a,{href:"https://github.com/lyuma/Av3Emulator",children:"Av3 Emulator"})," or ",(0,a.jsx)(t.a,{href:"https://github.com/BlackStartx/VRC-Gesture-Manager",children:"Gesture Manager"})," from the VCC to test the Hue Shift."]}),(0,a.jsx)(t.p,{children:"The whole process, from start to finish, is shown here:"})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsx)(o(),{width:"100%",height:"auto",controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/8e670445-539f-4c92-8851-1bb8b0e71c7b/9fb65777-13a3-478f-a697-a776cd1f679b/2023-09-21_00-14-05.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240331T221530Z&X-Amz-Expires=3600&X-Amz-Signature=b9b565a300dd8c9cb7ed44eac7d84a0c801f0b73bcd973d2137610a742ee958e&X-Amz-SignedHeaders=host&x-id=GetObject"})}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.h2,{id:"blend-tree",children:"Blend Tree"}),(0,a.jsx)(t.p,{children:"With a Blend Tree animation, you will need two animations, each with two keyframes. One animation has its keyframes set to 0, the other has its keyframes set to 1. These animations will be put as the two children of a 1d Blend Tree, with the keyframe 0 animation set to parameter value 0, and the keyframe 1 animation set to parameter value 1."}),(0,a.jsx)(t.p,{children:"To use this blend tree for a Motion Time Hue Shift, make sure your Radial Puppet Rotation Parameter is added to your FX layer as a Float, and add a new layer. Set the layer weight to 1 by clicking on the Gear icon, and dragging the Weight to 1."}),(0,a.jsxs)(t.p,{children:["Then, select your new layer, give it a new name by double clicking it, and create a new state in the layer with a blend tree by ",(0,a.jsx)(t.code,{children:"Right Clicking"})," \u2192 ",(0,a.jsx)(t.code,{children:"Create State"})," \u2192 ",(0,a.jsx)(t.code,{children:"From New Blend Tree"}),",  which will have as its children your two animations as described above, and as its Blend Parameter your Radial Puppet Rotation Parameter."]}),(0,a.jsxs)(t.p,{children:["Make sure to Lock your material, so you can test it like it would be in game, and then you can use the ",(0,a.jsx)(t.a,{href:"https://github.com/lyuma/Av3Emulator",children:"Av3 Emulator"})," or ",(0,a.jsx)(t.a,{href:"https://github.com/BlackStartx/VRC-Gesture-Manager",children:"Gesture Manager"})," from the VCC to test the Hue Shift."]}),(0,a.jsx)(t.p,{children:"The whole process, from start to finish, is shown here:"})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsx)(o(),{width:"100%",height:"auto",controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/8e670445-539f-4c92-8851-1bb8b0e71c7b/7e1bf72b-3b60-43be-95ed-7244f553b998/2023-09-21_00-22-27.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240331T221532Z&X-Amz-Expires=3600&X-Amz-Signature=0dbbc8395cc34882f0cba4fbf42958fb6f162f5964abbf7201891ec9ed419cd9&X-Amz-SignedHeaders=host&x-id=GetObject"})}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"4976a5e38f3543fd8a2a4f962bc92f33",children:"Pros and Cons"}),"\n",(0,a.jsx)(t.h3,{id:"f6e3207f2f6246368863f16bf179e64b",children:"Motion Time"}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.p,{children:"Pros:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Only requires 1 animation"}),"\n",(0,a.jsx)(t.li,{children:"Allows for finer control by adding more keyframes and editing their tangents"}),"\n"]})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.p,{children:"Cons:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Can\u2019t be added to Direct Blend Tree for optimization (see ",(0,a.jsx)(t.a,{href:"/docs/Other/DBT-Combining",children:"Combining Layers Using Direct Blend Trees"}),")"]}),"\n"]})]}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.h3,{id:"77a377a60a1f44e28c4427ff94a857a5",children:"Blend Tree"}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.p,{children:"Pros:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Can be added to Direct Blend Tree for optimization (see ",(0,a.jsx)(t.a,{href:"/docs/Other/DBT-Combining",children:"Combining Layers Using Direct Blend Trees"}),")"]}),"\n"]})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.p,{children:"Cons:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Requires 2 animations"}),"\n",(0,a.jsx)(t.li,{children:"Harder to have finer control since you need to make more animations, and even then it\u2019s only linear"}),"\n"]})]}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"dda0bd67044a4036a42d46ce4f7eda89",children:"Applications of Radial Puppets"}),"\n",(0,a.jsxs)(t.p,{children:["Anything that you can animate in an animation clip can be manipulated by a Radial Puppet. For some examples, see ",(0,a.jsx)(t.a,{href:"/docs/Unity-Animations/Types-Of-Animations",children:"Types of Animation Clips"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Below are some common use cases"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"14772ce641124a07928f677f5a92ac12",children:"Hue Shift"}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsx)(t.p,{children:"A hue shift is a way to change the color (specifically, the Hue) of a Material. To make a hue shift, you will need to record Animation Clips which change the hue of the avatar."})}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(o(),{width:"100%",height:"auto",controls:!0,url:"https://i.gyazo.com/20401193a52f174f05def805c2c6665b.mp4"}),(0,a.jsx)(n,{children:"An Example Hue Shift in the Poiyomi shader."})]}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsxs)(t.p,{children:["Note that if you are using the Poiyomi shader, you will need to set the Hue Shift field to ",(0,a.jsx)(t.code,{children:"Animated (when locked)"})," if there is only one material you\u2019re hue shifting on that mesh, or to ",(0,a.jsx)(t.code,{children:"Renamed (when locked)"})," when there are multiple materials you\u2019re hue shifting on that mesh."]}),(0,a.jsx)(t.p,{children:"This is done so that it will keep the right property animatable when the shader is locked, and that multiple hue shifts on the same mesh won\u2019t conflict."})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Where to find the Hue Shift option in the Poiyomi shader, and how to set it to Animate when locked (or Renamed when locked)",src:i(2023).Z+"",width:"494",height:"396"}),(0,a.jsx)("br",{}),(0,a.jsx)(n,{children:"Where to find the Hue Shift option in the Poiyomi shader, and how to set it to Animate when locked (or Renamed when locked)"})]})}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.h3,{id:"0e6256c9c6bf4cd18819fcb537d14437",children:"Quest Hue Shift"}),"\n",(0,a.jsx)(t.p,{children:"Sadly, Quest doesn\u2019t have an easy way to do Hue Shifts like PC does. It is possible by animating the Red, Green and Blue values of the Main Color field in an animation to emulate a hue shift, but that will need more work to set up and also will tint the entire object that color instead of hue shifting."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"20545526dd734ac3b101c183d9c52a81",children:"Scalers"}),"\n",(0,a.jsx)(t.p,{children:"Radial Puppets are also sometimes used for scale animations. These are made in the same way as the Hue Shift animations, but instead of animating the Hue Shift Material Property, you animate the Transform Scale x, y, and z properties."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"24910eac19324d189b638d73784a01e7",children:"Multi-Toggles"}),"\n",(0,a.jsxs)("div",{class:"notion-row",children:[(0,a.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,a.jsx)(t.p,{children:"A Multi-Toggle is a way for one Radial Puppet to switch between multiple mutually exclusive options. For example having five different tops, or maybe even a bunch of combinations of them. The world is your oyster."}),(0,a.jsx)(t.p,{children:"Multi-Toggles can theoretically be made with both the Blend Tree and the Motion Time methods, but the Motion Time method is by far easier and less error prone."}),(0,a.jsx)(t.p,{children:"To create a multi-toggle, you will want to create one keyframe per option, and enable/disable the GameObjects you want to disable for that option. Make sure every GameObject is animated at every keyframe. At the end, you want to copy and paste the last keyframe, to make sure all options have one set of keyframes where they are the one that is enabled. Then, select all keyframes and set Both Tangents to Constant."}),(0,a.jsx)(t.p,{children:"The whole process, from start to finish, is shown here. As the result, the GameObjects Item0 to Item4 are toggled based on the rotation of the puppet."})]}),(0,a.jsx)("div",{className:"notion-spacer"}),(0,a.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,a.jsx)(o(),{width:"100%",height:"auto",controls:!0,url:"https://prod-files-secure.s3.us-west-2.amazonaws.com/8e670445-539f-4c92-8851-1bb8b0e71c7b/5088a0ad-f4d6-40b9-bfb7-162038919656/2023-09-21_00-48-33.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240331T221545Z&X-Amz-Expires=3600&X-Amz-Signature=2fd625b1516dfd1a194b6152fe4ed597c91184f1bbd89a17ff4c10376843e8f7&X-Amz-SignedHeaders=host&x-id=GetObject"})}),(0,a.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(l,{children:"Last Updated: 31 March 2024 08:54:00"})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2023:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/1376020130-0f89331618c58c2087dd21757481a492.png"}}]);