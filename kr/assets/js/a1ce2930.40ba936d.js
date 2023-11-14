"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=o(n),u=a,d=k["".concat(p,".").concat(u)]||k[u]||m[u]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=n(3117),a=(n(7294),n(3905));const s={title:"secrets-encrypt"},i="k3s secrets-encrypt",l={unversionedId:"cli/secrets-encrypt",id:"cli/secrets-encrypt",title:"secrets-encrypt",description:"K3s supports enabling secrets encryption at rest. For more information, see Secrets Encryption.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/secrets-encrypt.md",sourceDirName:"cli",slug:"/cli/secrets-encrypt",permalink:"/kr/cli/secrets-encrypt",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/secrets-encrypt.md",tags:[],version:"current",lastUpdatedAt:1699984532,formattedLastUpdatedAt:"Nov 14, 2023",frontMatter:{title:"secrets-encrypt"},sidebar:"mySidebar",previous:{title:"etcd-snapshot",permalink:"/kr/cli/etcd-snapshot"},next:{title:"token",permalink:"/kr/cli/token"}},p={},o=[{value:"Secrets Encryption Tool",id:"secrets-encryption-tool",level:2},{value:"Encryption Key Rotation",id:"encryption-key-rotation",level:3},{value:"Secrets Encryption Disable/Enable",id:"secrets-encryption-disableenable",level:3},{value:"Secrets Encryption Status",id:"secrets-encryption-status",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("Tabs"),k=c("TabItem"),u={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k3s-secrets-encrypt"},"k3s secrets-encrypt"),(0,a.kt)("p",null,"K3s supports enabling secrets encryption at rest. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/kr/security/secrets-encryption"},"Secrets Encryption"),"."),(0,a.kt)("h2",{id:"secrets-encryption-tool"},"Secrets Encryption Tool"),(0,a.kt)("admonition",{title:"Version Gate",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Available as of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.8%2Bk3s1"},"v1.21.8+k3s1"))),(0,a.kt)("p",null,"K3s contains a CLI tool ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),", which enables automatic control over the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Disabling/Enabling secrets encryption"),(0,a.kt)("li",{parentName:"ul"},"Adding new encryption keys"),(0,a.kt)("li",{parentName:"ul"},"Rotating and deleting encryption keys"),(0,a.kt)("li",{parentName:"ul"},"Reencrypting secrets")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Failure to follow proper procedure for rotating encryption keys can leave your cluster permanently corrupted. Proceed with caution.")),(0,a.kt)("h3",{id:"encryption-key-rotation"},"Encryption Key Rotation"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(k,{value:"Single-Server",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"To rotate secrets encryption keys on a single-server cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start the K3s server with the flag ",(0,a.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Starting K3s without encryption and enabling it at a later time is currently ",(0,a.kt)("em",{parentName:"p"},"not")," supported.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rotate"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt"),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"K3s will reencrypt ~5 secrets per second.",(0,a.kt)("br",{parentName:"p"}),"\n","Clusters with large # of secrets can take several minutes to reencrypt.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))))),(0,a.kt)(k,{value:"High-Availability",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The steps are the same for both embedded DB and external DB clusters."),(0,a.kt)("p",null,"To rotate secrets encryption keys on HA setups:"),(0,a.kt)("admonition",{title:"Notes",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Starting K3s without encryption and enabling it at a later time is currently ",(0,a.kt)("em",{parentName:"li"},"not")," supported."),(0,a.kt)("li",{parentName:"ul"},"While not required, it is recommended that you pick one server node from which to run the ",(0,a.kt)("inlineCode",{parentName:"li"},"secrets-encrypt")," commands."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start up all three K3s servers with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flag. For brevity, the servers will be referred to as S1, S2, S3.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rotate on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt on S1"),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"K3s will reencrypt ~5 secrets per second.",(0,a.kt)("br",{parentName:"p"}),"\n","Clusters with large # of secrets can take several minutes to reencrypt.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3"))))),(0,a.kt)("h3",{id:"secrets-encryption-disableenable"},"Secrets Encryption Disable/Enable"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(k,{value:"Single-Server",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"After launching a server with ",(0,a.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flag, secrets encryption can be disabled."),(0,a.kt)("p",null,"To disable secrets encryption on a single-node cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Disable"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,a.kt)("p",null,"To re-enable secrets encryption on a single node cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart the K3s server with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n"))))),(0,a.kt)(k,{value:"High-Availability",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"After launching a HA cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"--secrets-encryption")," flags, secrets encryption can be disabled."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While not required, it is recommended that you pick one server node from which to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," commands.")),(0,a.kt)("p",null,"For brevity, the three servers used in this guide will be referred to as S1, S2, S3."),(0,a.kt)("p",null,"To disable secrets encryption on a HA cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Disable on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt disable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments. If running K3s as a service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# If using systemd\nsystemctl restart k3s\n# If using openrc\nrc-service k3s restart\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))),(0,a.kt)("p",null,"To re-enable secrets encryption on a HA cluster:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt enable\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Kill and restart S1 with same arguments")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once S1 is up, kill and restart the S2 and S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reencrypt with flags on S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k3s secrets-encrypt reencrypt --force --skip\n")))))),(0,a.kt)("h3",{id:"secrets-encryption-status"},"Secrets Encryption Status"),(0,a.kt)("p",null,"The secrets-encrypt tool includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," command that displays information about the current status of secrets encryption on the node."),(0,a.kt)("p",null,"An example of the command on a single-server node:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"Another example on HA cluster, after rotating the keys, but before restarting the servers:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ k3s secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"Details on each section are as follows:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Encryption Status"),": Displayed whether secrets encryption is disabled or enabled on the node  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Current Rotation Stage"),": Indicates the current rotation stage on the node.",(0,a.kt)("br",{parentName:"li"}),"Stages are: ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"prepare"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"rotate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_finished"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),": Useful for HA clusters, this indicates whether all servers are on the same stage with their local files. This can be used to identify whether a restart of servers is required before proceeding to the next stage. In the HA example above, node-1 and node-2 have different hashes, indicating that they currently do not have the same encryption configuration. Restarting the servers will sync up their configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Key Table"),": Summarizes information about the secrets encryption keys found on the node.  ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Active"),': The "*" indicates which, if any, of the keys are currently used for secrets encryption. An active key is used by Kubernetes to encrypt any new secrets.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Key Type"),": All keys using this tool are ",(0,a.kt)("inlineCode",{parentName:"li"},"AES-CBC")," type. See more info ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": Name of the encryption key.")))))}d.isMDXComponent=!0}}]);