"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,f=c["".concat(l,".").concat(h)]||c[h]||p[h]||s;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const s={title:"FAQ",weight:60},o=void 0,i={unversionedId:"faq/faq",id:"faq/faq",title:"FAQ",description:"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s.",source:"@site/docs/faq/faq.md",sourceDirName:"faq",slug:"/faq/",permalink:"/faq/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/faq/faq.md",tags:[],version:"current",lastUpdatedAt:1694184800,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{title:"FAQ",weight:60},sidebar:"mySidebar",previous:{title:"Advanced Options / Configuration",permalink:"/advanced/"},next:{title:"CLI Tools",permalink:"/cli/"}},l={},u=[{value:"Is K3s a suitable replacement for Kubernetes?",id:"is-k3s-a-suitable-replacement-for-kubernetes",level:3},{value:"How can I use my own Ingress instead of Traefik?",id:"how-can-i-use-my-own-ingress-instead-of-traefik",level:3},{value:"Does K3s support Windows?",id:"does-k3s-support-windows",level:3},{value:"What exactly are Servers and Agents?",id:"what-exactly-are-servers-and-agents",level:3},{value:"How can I build from source?",id:"how-can-i-build-from-source",level:3},{value:"Where are the K3s logs?",id:"where-are-the-k3s-logs",level:3},{value:"Can I run K3s in Docker?",id:"can-i-run-k3s-in-docker",level:3},{value:"What is the difference between K3s Server and Agent Tokens?",id:"what-is-the-difference-between-k3s-server-and-agent-tokens",level:3},{value:"How compatible are different versions of K3s?",id:"how-compatible-are-different-versions-of-k3s",level:3},{value:"I&#39;m having an issue, where can I get help?",id:"im-having-an-issue-where-can-i-get-help",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The FAQ is updated periodically and designed to answer the questions our users most frequently ask about K3s."),(0,a.kt)("h3",{id:"is-k3s-a-suitable-replacement-for-kubernetes"},"Is K3s a suitable replacement for Kubernetes?"),(0,a.kt)("p",null,"K3s is a CNCF-certified Kubernetes distribution, and can do everything required of a standard Kubernetes cluster. It is just a more lightweight version. See the ",(0,a.kt)("a",{parentName:"p",href:"/"},"main")," docs page for more details."),(0,a.kt)("h3",{id:"how-can-i-use-my-own-ingress-instead-of-traefik"},"How can I use my own Ingress instead of Traefik?"),(0,a.kt)("p",null,"Simply start K3s server with ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable=traefik")," and deploy your ingress."),(0,a.kt)("h3",{id:"does-k3s-support-windows"},"Does K3s support Windows?"),(0,a.kt)("p",null,"At this time K3s does not natively support Windows, however we are open to the idea in the future."),(0,a.kt)("h3",{id:"what-exactly-are-servers-and-agents"},"What exactly are Servers and Agents?"),(0,a.kt)("p",null,"For a breakdown on the components that make up a server and agent, see the ",(0,a.kt)("a",{parentName:"p",href:"/architecture/"},"Architecture page"),"."),(0,a.kt)("h3",{id:"how-can-i-build-from-source"},"How can I build from source?"),(0,a.kt)("p",null,"Please reference the K3s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/blob/master/BUILDING.md"},"BUILDING.md")," with instructions."),(0,a.kt)("h3",{id:"where-are-the-k3s-logs"},"Where are the K3s logs?"),(0,a.kt)("p",null,"The location of K3s logs will vary depending on how you run K3s and the node's OS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When run from the command line, logs are sent to stdout and stderr."),(0,a.kt)("li",{parentName:"ul"},"When running under openrc, logs will be created at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/k3s.log"),"."),(0,a.kt)("li",{parentName:"ul"},"When running under Systemd, logs will be sent to Journald and can be viewed using ",(0,a.kt)("inlineCode",{parentName:"li"},"journalctl -u k3s"),"."),(0,a.kt)("li",{parentName:"ul"},"Pod logs can be found at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/pods"),"."),(0,a.kt)("li",{parentName:"ul"},"Containerd logs can be found at ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/containerd/containerd.log"),".")),(0,a.kt)("p",null,"You can generate more detailed logs by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," flag when starting K3s (or ",(0,a.kt)("inlineCode",{parentName:"p"},"debug: true")," in the configuration file)."),(0,a.kt)("p",null,"Kubernetes uses a logging framework known as ",(0,a.kt)("inlineCode",{parentName:"p"},"klog"),", which uses a single logging configuration for all components within a process.\nSince K3s runs all Kubernetes components within a single process, it is not possible to configure different log levels or destinations for individual Kubernetes components.\nUse of the ",(0,a.kt)("inlineCode",{parentName:"p"},"-v=<level>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--vmodule=<module>=<level>")," component args will likely not have the desired effect. "),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#additional-logging-sources"},"Additional Logging Sources")," for even more log options."),(0,a.kt)("h3",{id:"can-i-run-k3s-in-docker"},"Can I run K3s in Docker?"),(0,a.kt)("p",null,"Yes, there are multiple ways to run K3s in Docker. See ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#running-k3s-in-docker"},"Advanced Options")," for more details."),(0,a.kt)("h3",{id:"what-is-the-difference-between-k3s-server-and-agent-tokens"},"What is the difference between K3s Server and Agent Tokens?"),(0,a.kt)("p",null,"For more information on managing K3s join tokens, see the ",(0,a.kt)("a",{parentName:"p",href:"/cli/token"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s token")," command documentation"),"."),(0,a.kt)("h3",{id:"how-compatible-are-different-versions-of-k3s"},"How compatible are different versions of K3s?"),(0,a.kt)("p",null,"In general, the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes version skew policy")," applies."),(0,a.kt)("p",null,"In short, servers can be newer than agents, but agents cannot be newer than servers."),(0,a.kt)("h3",{id:"im-having-an-issue-where-can-i-get-help"},"I'm having an issue, where can I get help?"),(0,a.kt)("p",null,"If you are having an issue with deploying K3s, you should:"),(0,a.kt)("p",null,"1) Check the ",(0,a.kt)("a",{parentName:"p",href:"/known-issues/"},"Known Issues")," page."),(0,a.kt)("p",null,"2) Check that you have resolved any ",(0,a.kt)("a",{parentName:"p",href:"/advanced/#additional-os-preparations"},"Additional OS Preparation"),". Run ",(0,a.kt)("inlineCode",{parentName:"p"},"k3s check-config")," and ensure that it passes."),(0,a.kt)("p",null,"3) Search the K3s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues"},"Issues")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/discussions"},"Discussions")," for one that matches your problem."),(0,a.kt)("p",null,"4) Join the ",(0,a.kt)("a",{parentName:"p",href:"https://slack.rancher.io/"},"Rancher Slack")," K3s channel to get help."),(0,a.kt)("p",null,"5) Submit a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/issues/new/choose"},"New Issue")," on the K3s Github describing your setup and the issue you are experiencing."))}p.isMDXComponent=!0}}]);