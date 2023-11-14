"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const l={title:"Manual Upgrades",weight:10},s=void 0,i={unversionedId:"upgrades/manual",id:"upgrades/manual",title:"Manual Upgrades",description:"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version.",source:"@site/docs/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/upgrades/manual",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1699984532,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{title:"Manual Upgrades",weight:10},sidebar:"mySidebar",previous:{title:"Stopping K3s",permalink:"/upgrades/killall"},next:{title:"Automated Upgrades",permalink:"/upgrades/automated"}},o={},p=[{value:"Release Channels",id:"release-channels",level:3},{value:"Upgrade K3s Using the Installation Script",id:"upgrade-k3s-using-the-installation-script",level:3},{value:"Manually Upgrade K3s Using the Binary",id:"manually-upgrade-k3s-using-the-binary",level:3},{value:"Restarting K3s",id:"restarting-k3s",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can upgrade K3s by using the installation script, or by manually installing the binary of the desired version."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When upgrading, upgrade server nodes first one at a time, then any agent nodes.")),(0,r.kt)("h3",{id:"release-channels"},"Release Channels"),(0,r.kt)("p",null,"Upgrades performed via the installation script or using our ",(0,r.kt)("a",{parentName:"p",href:"/upgrades/automated"},"automated upgrades")," feature can be tied to different release channels. The following channels are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Channel"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stable"),(0,r.kt)("td",{parentName:"tr",align:null},"(Default) Stable is recommended for production environments. These releases have been through a period of community hardening.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest is recommended for trying out the latest features.  These releases have not yet been through a period of community hardening.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v1.26 (example)"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a release channel tied to each Kubernetes minor version, including versions that are end-of-life. These channels will select the latest patch available, not necessarily a stable release.")))),(0,r.kt)("p",null,"For an exhaustive and up-to-date list of channels, you can visit the ",(0,r.kt)("a",{parentName:"p",href:"https://update.k3s.io/v1-release/channels"},"k3s channel service API"),". For more technical details on how channels work, you see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/channelserver"},"channelserver project"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When attempting to upgrade to a new version of K3s, the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"},"Kubernetes version skew policy")," applies. Ensure that your plan does not skip intermediate minor versions when upgrading. The system-upgrade-controller itself will not protect against unsupported changes to the Kubernetes version.")),(0,r.kt)("h3",{id:"upgrade-k3s-using-the-installation-script"},"Upgrade K3s Using the Installation Script"),(0,r.kt)("p",null,"To upgrade K3s from an older version you can re-run the installation script using the same configuration options you originally used when running the install script."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC")," variable, ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_")," variables, and trailing shell arguments are all used by the install script to generate the systemd unit and environment file.\nIf you set configuration when originally running the install script, but do not set it again when re-running the install script, the original values will be lost."),(0,r.kt)("p",{parentName:"admonition"},"The contents of the ",(0,r.kt)("a",{parentName:"p",href:"/installation/configuration#configuration-file"},"configuration file")," are not managed by the install script.\nIf you want your configuration to be independent from the install script, you should use a configuration file instead of passing environment variables or arguments to the install script.")),(0,r.kt)("p",null,"For example, to upgrade to the current stable release:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n")),(0,r.kt)("p",null,"If you want to upgrade to a newer version in a specific channel (such as latest) you can specify the channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n")),(0,r.kt)("p",null,"If you want to upgrade to a specific version you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z-rc1 <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n")),(0,r.kt)("h3",{id:"manually-upgrade-k3s-using-the-binary"},"Manually Upgrade K3s Using the Binary"),(0,r.kt)("p",null,"Or to manually upgrade K3s:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the desired version of the K3s binary from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/k3s-io/k3s/releases"},"releases")),(0,r.kt)("li",{parentName:"ol"},"Copy the downloaded binary to ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/k3s")," (or your desired location)"),(0,r.kt)("li",{parentName:"ol"},"Stop the old k3s binary"),(0,r.kt)("li",{parentName:"ol"},"Launch the new k3s binary")),(0,r.kt)("h3",{id:"restarting-k3s"},"Restarting K3s"),(0,r.kt)("p",null,"Restarting K3s is supported by the installation script for systemd and OpenRC."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"systemd")),(0,r.kt)("p",null,"To restart servers manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s\n")),(0,r.kt)("p",null,"To restart agents manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl restart k3s-agent\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OpenRC")),(0,r.kt)("p",null,"To restart servers manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s restart\n")),(0,r.kt)("p",null,"To restart agents manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo service k3s-agent restart\n")))}c.isMDXComponent=!0}}]);