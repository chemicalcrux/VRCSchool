"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[1344],{9743:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(5893),n=a(1151);const s={title:"Designing Scale-Friendly Systems",sidebar_position:5,slug:"Scale-Friendly",last_edited:new Date("2024-03-31T08:54:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},o="Designing Scale-Friendly Systems {#7042deaa6d19442cb40e3879b6232c87}",r={id:"Other/Scale-Friendly",title:"Designing Scale-Friendly Systems",description:"Contributors: Jellejurre, JustSleightly",source:"@site/docs/Other/Scale-Friendly.md",sourceDirName:"Other",slug:"/Other/Scale-Friendly",permalink:"/docs/Other/Scale-Friendly",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Other/Scale-Friendly.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Designing Scale-Friendly Systems",sidebar_position:5,slug:"Scale-Friendly",last_edited:"2024-03-31T08:54:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},sidebar:"sideBar",previous:{title:"Animated Animator Parameters (AAP)",permalink:"/docs/Other/AAPs"},next:{title:"Stations",permalink:"/docs/Other/Stations"}},l={},c=[{value:"Scaling in VRChat",id:"4f1097a40aab4bee9d4bb699a8ba52be",level:2},{value:"Shader Material Properties",id:"dd70c591f3af4678808f9f5ec08052b9",level:3},{value:"Constraint Components",id:"8415330c761649419b5c753f3f2d3c1b",level:3},{value:"World Constraints",id:"93b7d7e7b17a48508919828c21918537",level:3},{value:"Cloth Components",id:"08a040cd49f24569aea40fdfdcefb396",level:3},{value:"Particle Systems",id:"3afc6815bcfd4829947900eede2a48ab",level:3},{value:"Physics Components",id:"424514ad999e4dabab50eabbea734dab",level:3},{value:"Audio Sources",id:"1535ebb070bd45d2bf0d4074db88b863",level:3},{value:"Scale Friendly Animating",id:"f29427e831b748a887a288edc489d925",level:2},{value:"Using <code>EyeHeightAsMeters</code> with Direct Blend Trees",id:"12ffd925c0fd4776b0116e01ead50121",level:3},{value:"Using <code>EyeHeightAsPercent</code> with Motion Time",id:"ec7c7add67b540feb0f801030327983a",level:3},{value:"For Shader Developers",id:"ee3fabc05137428c8e2ce37b5c970316",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{GreyItalicText:s,RightAlignedText:o}=t;return s||u("GreyItalicText",!0),o||u("RightAlignedText",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Contributors: ",(0,i.jsx)(t.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,i.jsx)(t.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"})]}),"\n",(0,i.jsx)(t.h1,{id:"7042deaa6d19442cb40e3879b6232c87",children:"Designing Scale-Friendly Systems"}),"\n",(0,i.jsx)(t.h2,{id:"4f1097a40aab4bee9d4bb699a8ba52be",children:"Scaling in VRChat"}),"\n",(0,i.jsx)(t.p,{children:"VRChat recently added Avatar Scaling to the game. Players can scale their avatar using the hand circle menu between the minimum and maximum. By default, these values are 0.2m and 5m, but these can be set by worlds to be anything from 0.1m to 100m, and worlds can even force avatars to be a certain height. Worlds can also disable scaling if they want, but by default, scaling is enabled."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Avatars that are uploaded with sizes outside of the default size range won\u2019t be scaled by default, but will be set to a value inside of the range when the user uses avatar scaling or when the world forces a certain avatar height. You can\u2019t upload an avatar with a shoulder height lower than 0.1m, but you can upload an avatar with any height above that."})}),"\n",(0,i.jsx)(t.p,{children:"This scaling update may break older systems, which use static offsets in certain places, and aren\u2019t designed to change scale. This article will go over how to design systems or modify systems to work in this new scaling environment."}),"\n",(0,i.jsx)(t.p,{children:"The general rule for creating scale-friendly systems is that whenever the avatar scales, you want all relative effects to be the same. This means that for example the distance between two objects, or the distance an audio source can play, should scale with avatar height."}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"It seems that VRChat currently does not late sync scale parameters. All scale related float parameters seem to be set to 1.0 for late joiners. Hopefully this will be fixed soon."})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"dd70c591f3af4678808f9f5ec08052b9",children:"Shader Material Properties"}),"\n",(0,i.jsx)(t.p,{children:"Depending on the shader and what properties you use, some values may be absolute instead of relative, and not scale well with your avatar. Examples include many properties that utilize offsets from the surface/UV, such as vertex offset, point-to-point dissolve start/end values, and geometric dissolve offsets."}),"\n",(0,i.jsxs)(t.p,{children:["You may be able to resolve some of these properties with avatar scale with , or in some cases even utilizing ",(0,i.jsx)(t.a,{href:"https://www.poiyomi.com/general/textures-and-colors#vertex-colors",children:"vertex colors"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"8415330c761649419b5c753f3f2d3c1b",children:"Constraint Components"}),"\n",(0,i.jsxs)(t.p,{children:["Constraint components all respond quite well to scaling, since offsets are relative to constraint target scale. The only exception to this is ",(0,i.jsx)("u",{children:"parent constraint offsets"}),". Their offsets are absolute, and don\u2019t scale with target scale in Unity."]}),"\n",(0,i.jsx)(t.p,{children:"VRChat has implemented a change for this, where in VRChat, parent constraints offsets scale with target scale. This means that parent constraints react differently in Unity and in VRChat."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The latest version of the ",(0,i.jsx)(t.a,{href:"https://github.com/lyuma/Av3Emulator",children:"AV3 Emulator"})," emulates this relative behaviour in unity."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"93b7d7e7b17a48508919828c21918537",children:"World Constraints"}),"\n",(0,i.jsx)(t.p,{children:"World constraints require a bit more care to work properly with scale, since we don\u2019t want the offset from the world origin to scale (which would move the object), but we do want the object in the container to scale."}),"\n",(0,i.jsxs)(t.p,{children:["To achieve this, you would want to add a Scale constraint to the ",(0,i.jsx)(t.code,{children:"World Constraint"})," GameObject, with as source the World prefab. This will make it so the object doesn\u2019t move when scaling."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want the prop itself to scale with your avatar, you would want to add another scale constraint to the ",(0,i.jsx)(t.code,{children:"Container"})," GameObject with the source as your avatar."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The latest version of the ",(0,i.jsx)(t.a,{href:"https://github.com/VRLabs/World-Constraint",children:"VRLabs\u2019 World Constraint"})," has the World prefab scale constraint already added. Note that this doesn\u2019t include the prop scaling, you will need to add this yourself if you want it."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"08a040cd49f24569aea40fdfdcefb396",children:"Cloth Components"}),"\n",(0,i.jsx)(t.p,{children:"Cloth components scale on their own except for that they need to be disabled and re-enabled for the offsets to be calculated properly. This is currently done in the latest VRChat Open Beta when scaling."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The latest version of the ",(0,i.jsx)(t.a,{href:"https://github.com/lyuma/Av3Emulator",children:"AV3 Emulator"})," on the master branch emulates this cloth toggle behaviour in unit."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"3afc6815bcfd4829947900eede2a48ab",children:"Particle Systems"}),"\n",(0,i.jsxs)(t.p,{children:["For particle systems to scale, their ",(0,i.jsx)(t.code,{children:"Scaling Mode"})," needs to be set to ",(0,i.jsx)(t.code,{children:"Hierarchy Scale"}),". However, even if this property is set, you might need to animate other properties with avatar scale, such as properties involving speed/gravity/velocity. How this is done is elaborated on in the  section."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"424514ad999e4dabab50eabbea734dab",children:"Physics Components"}),"\n",(0,i.jsx)(t.p,{children:"Some properties of Rigidbodies and Joints may not scale as intended, and may require certain properties (such as limits/velocity) to be scaled along with avatar size. How this is done is elaborated on in the  section."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"1535ebb070bd45d2bf0d4074db88b863",children:"Audio Sources"}),"\n",(0,i.jsx)(t.p,{children:"These components don\u2019t scale very well either, and will likely require their falloff distance property to be scaled along with avatar size. How this is done is elaborated on in the  section."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"f29427e831b748a887a288edc489d925",children:"Scale Friendly Animating"}),"\n",(0,i.jsxs)(t.p,{children:["To animate properties relative to avatar scale, VRC has provided 5 ",(0,i.jsx)(t.a,{href:"https://creators.vrchat.com/avatars/animator-parameters/#avatar-scaling-parameters",children:"read-only native parameters"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ScaleModified"})," is a bool that returns True if your Avatar is not your default scale via avatar scaling"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ScaleFactor"})," and ",(0,i.jsx)(t.code,{children:"ScaleFactorInverse"})," are relative values based on your Avatar\u2019s default scale upon upload, which are more effective for quick drop in Direct Blend Tree (DBT) multiplications to modify your existing animation clips made for your current avatar"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EyeHeightAsMeters"})," and ",(0,i.jsx)(t.code,{children:"EyeHeightAsPercent"})," are absolute values based on the World\u2019s units that are more effective if you need a more universal solution, such as for prefabs/systems that need to be applied to any avatar at any default size, and may take more effort/math to convert your animation clips to work with"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EyeHeightAsPercent"})," is the only parameter that is normalized and compatible with state motion time (with values ranging from 0.0 - 1.0), as long as the avatar height is between 0.2m and 5m (which are the default limits)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EyeHeightAsMeters"})," is the only one that scales linearly beyond the 5m Avatar scale limit towards the Udon max of 100m"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Testing Avatars 3.0 animations can be done using the ",(0,i.jsx)(t.a,{href:"https://github.com/lyuma/Av3Emulator",children:"https://github.com/lyuma/Av3Emulator"})," which can be found as a ",(0,i.jsx)(t.a,{href:"https://vcc.docs.vrchat.com/vpm/curated-community-packages",children:"curated package"})," in the \u201cManage Projects\u201d section of the ",(0,i.jsx)(t.a,{href:"https://vcc.docs.vrchat.com/",children:"VRChat Creator Companion"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"12ffd925c0fd4776b0116e01ead50121",children:["Using ",(0,i.jsx)(t.code,{children:"EyeHeightAsMeters"})," with Direct Blend Trees"]}),"\n",(0,i.jsxs)(t.p,{children:["This method is one of the most universal ways to make an animation clip scale. Its primary advantage is being compatible with scaling both static and non-static clips, as every keyframe in the animation clip will have it\u2019s value multiplied with scale. Its limitations are that ",(0,i.jsx)("u",{children:"all the values"})," are scaled with your Avatar scale, and that they are scaled ",(0,i.jsx)("u",{children:"linearly"}),". If you have any properties that should not have their values multiplied (such as weights normalized between 0 and 1), you may need to separate those properties out to another animation clip."]}),"\n",(0,i.jsx)(t.p,{children:"If you have a value you want to convert to scale linearly with avatar scale, you can divide this value by your Avatar\u2019s Viewpoint Y value to get the value per meter, and animate this with a Direct Blend Tree (DBT) with blend parameter EyeHeightAsMeters to get a linearly scaling animation."}),"\n",(0,i.jsxs)("div",{class:"notion-row",children:[(0,i.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,i.jsx)(t.p,{children:"As an example, say your particle system has a velocity of 3.0 and your avatar has a default viewpoint Y height of 1.5m."}),(0,i.jsxs)(t.p,{children:["You would then make an Animation Clip with two keyframes, with both frames setting the velocity to ",(0,i.jsx)(t.code,{children:"3.0 / 1.5 = 2.0"}),". This animation would be played in a Direct Blend Tree with ",(0,i.jsx)(t.code,{children:"EyeHeightAsMeters"})," as a direct blend parameter."]}),(0,i.jsxs)(t.p,{children:["In game, say your height is 1.5m, the actual value would then be ",(0,i.jsx)(t.code,{children:"Value * EyeHeightAsMeters"})," or ",(0,i.jsx)(t.code,{children:"2.0 * 1.5 = 3.0"}),", as expected."]}),(0,i.jsxs)(t.p,{children:["If you change your avatar scale to 3.0m (twice as big), the values would be ",(0,i.jsx)(t.code,{children:"2.0 * 3.0 = 6.0"})," (twice as large). Your value now scales linearly with avatar height."]})]}),(0,i.jsx)("div",{className:"notion-spacer"}),(0,i.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"The Direct Blend Tree from the example.",src:a(8163).Z+"",width:"611",height:"264"}),(0,i.jsx)("br",{}),(0,i.jsx)(s,{children:"The Direct Blend Tree from the example."})]})}),(0,i.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"This will work by default for values above 1 meter, but if you want it to work for values below 1 meter, you will need to put everything you\u2019re animating in the clip at 0 when uploading, or you would need a reset layer above this one where you animate the values to 0. In our example, we could either set the particle system velocity to 0 when uploading, or animate it to 0 in a layer above this one."})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"When mixing a WD On Direct Blend Tree with WD Off states in the same animator layer, you may experience issues if there are any transitions outbound of the DBT with transition duration. This includes AnyState transitions. This behaviour is only observed in VRChat after upload, and not in the native Unity Editor."})}),"\n",(0,i.jsxs)(t.p,{children:["Note that, as all Direct Blend Trees, the state this Direct Blend Tree is in should be Write Defaults On, and have the text ",(0,i.jsx)(t.code,{children:"(WD On)"})," be somewhere in the name of the state. More information on this can be found at the ",(0,i.jsx)(t.a,{href:"/docs/Unity-Animations/Write-Defaults",children:"Write Defaults"})," page."]}),"\n",(0,i.jsxs)(t.h3,{id:"ec7c7add67b540feb0f801030327983a",children:["Using ",(0,i.jsx)(t.code,{children:"EyeHeightAsPercent"})," with Motion Time"]}),"\n",(0,i.jsx)(t.p,{children:"This method\u2019s primary advantage is being able to mix non-scaling and scaling properties together in the same animation clip, as well as being able to scale non-linearly if necessary, all without needing a Blend Tree. Its limitation is that it is only compatible with static animation clips that do not actively change values when the state is entered, because the use of Motion Time normalizes the duration of the animation clip. This is also limited to the scalable range of Avatars, and may cause unintended behaviour if worlds enforce scaling beyond the avatar scale maximum of 5 meters."}),"\n",(0,i.jsxs)(t.p,{children:["If you have a value you want to convert to scale linearly with avatar scale, you can divide this value by your Avatar\u2019s Viewpoint Y value to get the value per meter (",(0,i.jsx)(t.em,{children:"unit value"}),"). Afterwards, divide your ",(0,i.jsx)(t.em,{children:"unit value"})," by 5 to get the value of the first keyframe of your new scale-friendly animation clip, and multiply your ",(0,i.jsx)(t.em,{children:"unit value"})," by 5 to get the value of the last keyframe of your new animation clip. You can then add this animation clip to a state with motion time parameter ",(0,i.jsx)(t.code,{children:"EyeHeightAsPercent"})," to get a linearly scaling animation."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"ee3fabc05137428c8e2ce37b5c970316",children:"For Shader Developers"}),"\n",(0,i.jsxs)("div",{class:"notion-row",children:[(0,i.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,i.jsx)(t.p,{children:"If you are writing any shaders for your system, it is possible you may need to take scale into account for specific effects."}),(0,i.jsx)(t.p,{children:"While animating a value on the material is always an option, if the shader is applied to a non-skinned mesh renderer, it is also possible to get the object scale directly in the shader like so:"})]}),(0,i.jsx)("div",{className:"notion-spacer"}),(0,i.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c#",children:"float3 worldScale = float3(\r\n\tlength(float3(unity_ObjectToWorld[0].x, unity_ObjectToWorld[1].x, unity_ObjectToWorld[2].x)), // scale x axis\r\n\tlength(float3(unity_ObjectToWorld[0].y, unity_ObjectToWorld[1].y, unity_ObjectToWorld[2].y)), // scale y axis\r\n\tlength(float3(unity_ObjectToWorld[0].z, unity_ObjectToWorld[1].z, unity_ObjectToWorld[2].z))  // scale z axis\r\n);\n"})})}),(0,i.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(o,{children:"Last Updated: 31 March 2024 08:54:00"})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8163:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/2075350278-d679046903a7bfa45d90fd2fb9fec4b5.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var i=a(7294);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);