"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:f,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:C}=(0,s.U)(),[w,A]=(0,r.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=v[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&A(e)}const N=e=>{const t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==w&&(E(t),A(a),null!=f&&C(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:N},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},50694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={id:"installation",title:"Installation"},s=void 0,c={unversionedId:"installation",id:"installation",title:"Installation",description:"driftctl is available on Linux, macOS and Windows.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/next/installation",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"What is driftctl?",permalink:"/next/"},next:{title:"Usage",permalink:"/next/usage"}},u={},p=[{value:"Verify digital signatures",id:"verify-digital-signatures",level:2},{value:"PGP Public Key",id:"pgp-public-key",level:2},{value:"Usage examples",id:"usage-examples",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"driftctl is available on Linux, macOS and Windows."),(0,r.kt)("p",null,"Binaries are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snyk/driftctl/releases"},"release page"),"."),(0,r.kt)(l.Z,{defaultValue:"manual",values:[{label:"Manual",value:"manual"},{label:"Docker",value:"docker"},{label:"Homebrew",value:"homebrew"},{label:"Macports",value:"macports"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"manual",mdxType:"TabItem"},(0,r.kt)(l.Z,{defaultValue:"linux-macos",values:[{label:"Linux / macOS",value:"linux-macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux-macos",mdxType:"TabItem"},(0,r.kt)("p",null,"This is an example using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),". If you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),", install it, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"wget"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux\n# x64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl\n\n# x86\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_386 -o driftctl\n\n# macOS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_darwin_amd64 -o driftctl\n")),(0,r.kt)("p",null,"Make the binary executable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ chmod +x driftctl\n")),(0,r.kt)("p",null,"Optionally install driftctl to a central location in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# use any path that suits you, this is just a standard example. Install sudo if needed.\n$ sudo mv driftctl /usr/local/bin/\n")),(0,r.kt)("h2",{id:"verify-digital-signatures"},"Verify digital signatures"),(0,r.kt)("p",null,"driftctl releases are signed using PGP key (ed25519) with fingerprint ",(0,r.kt)("inlineCode",{parentName:"p"},"65DD A08A A160 5FC8 211F C928 FFB5 FCAF D223 D274"),". Our key can be retrieved from common keyservers."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since ",(0,r.kt)("strong",{parentName:"p"},"07/01/2023")," the key to sign driftctl releases has been changed because of ",(0,r.kt)("a",{parentName:"p",href:"https://circleci.com/blog/january-4-2023-security-alert"},"a security issue")," with CircleCI secrets."),(0,r.kt)("p",{parentName:"admonition"},"Prior to ",(0,r.kt)("strong",{parentName:"p"},"v0.38.2")," they key used to verify release was ",(0,r.kt)("inlineCode",{parentName:"p"},"2776 6600 5A7F 01D4 84F6376D ACC7 76A7 9C82 4EBD"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current key")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fingerprint ",(0,r.kt)("inlineCode",{parentName:"li"},"65DD A08A A160 5FC8 211F C928 FFB5 FCAF D223 D274"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"legacy key < v0.38.2")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fingerprint ",(0,r.kt)("inlineCode",{parentName:"li"},"2776 6600 5A7F 01D4 84F6376D ACC7 76A7 9C82 4EBD"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Download binary, checksums and signature\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_linux_amd64 -o driftctl_linux_amd64\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS -o driftctl_SHA256SUMS\n$ curl -L https://github.com/snyk/driftctl/releases/latest/download/driftctl_SHA256SUMS.gpg -o driftctl_SHA256SUMS.gpg\n\n# Import key\n# The legacy key must be imported manually since it is now revoked on the keyservers\n$ gpg --keyserver hkps://keys.openpgp.org --recv-keys 65DDA08AA1605FC8211FC928FFB5FCAFD223D274\n\n# Verify signature (optionally trust the key from gnupg to avoid any warning)\n$ gpg --verify driftctl_SHA256SUMS.gpg driftctl_SHA256SUMS\n\n# Verify checksum\n$ sha256sum --ignore-missing -c driftctl_SHA256SUMS\ndriftctl_linux_amd64: OK\n")),(0,r.kt)("h2",{id:"pgp-public-key"},"PGP Public Key"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Current")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-----BEGIN PGP PUBLIC KEY BLOCK-----\nmDMEY7wXuhYJKwYBBAHaRw8BAQdAhxCEy/sUZ4SCXrHQbfzpH7t+ivMAz18YdHKR\nx6lqw8q0KVNueWsgPHRlYW0tY2xvdWQtY29uZmlnK3NlY3VyaXR5QHNueWsuaW8+\niJkEExYKAEEWIQRl3aCKoWBfyCEfySj/tfyv0iPSdAUCY7wXugIbAwUJCWYBgAUL\nCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRD/tfyv0iPSdOqxAQDCBtm8dE6D\ngxmDGf0SfFzkiI+kC25GQ15noy8YqFO8+QD7BD5Atetz8Htjm21EqD4YPWXk4CkA\n4SxepihFyQpoRwY=\n=lQGW\n-----END PGP PUBLIC KEY BLOCK-----\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Legacy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nxjMEYBv2ABYJKwYBBAHaRw8BAQdAstkQggX4bNXmfdiy+Cn6XrQLk0GNx+s4hbvuOi6DBS7NJENs\nb3Vkc2tpZmYgPHNlY3VyaXR5QGNsb3Vkc2tpZmYuY29tPsKQBBMWCAA4FiEEJ3ZmAFp/AdSE9jdt\nrMd2p5yCTr0FAmAb9gACGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQrMd2p5yCTr3CCgEA\n5kYdx5TMTHUJXwVs64QpQB5neN41y7EEnD7zWoZUMxcBAOeZxVsR6VZQENhpBpFcSJDSHAK6KDdr\nBYc2FpRDXQ4GwsFcBBABCgAGBQJgHBbYAAoJEDma9pCSxye2z4MQALniFM6VuVuDvP8wjpUixIFl\nH+Z702+VZU01hfQu27C0jR3WFDPlmRf4biqLD6NV4jfcWIUcAh19uRnHH31if2u4Ij4ZLB6uhm1C\nfcI0NLxyCvTorriA6Bf8rtt+iZ7K6nlolc2ZKJsQe6l2O3E0zC5WQlawjKKjjbjjA6C2CxFwcYib\ncmGobqIhTFHwta4sL9icFpEdt30XnVrJ1JHzEdYxK2YUoAJXyuPRH9Z9MbjJXL+uT98cigtOLdM2\nG/KCrWCrMS7lUznAvsJJ8Pova3dyT4d1AoVXPnKhOp0t4GPX5x4SRIe2QexvNEIoScXfQrxsONWL\nPkAVttALmfrveCgTESyBIw57Xe1wHOJmYrIkrMXNljBO2cC8DHkRKgo6xDOFmGfvBhQdUIiSe3/8\nbXbVnWjpjWhhIAoSMJBpPFWnFs+AlOk+BjYf/CMKf5eLuCSBF+JIGaulGDxhVdVcyBjp2FFw9FBs\n0tELKfds8OmXi2JzVT+K4oXNjRca9UwCmqhntkTOdOKMls/q9fCkVGxSiLKLGNr+fuU/1q9MISHi\nHqAiERT0cBjBFgr15Fn+hkpiSoDitaTZWoAfAQynnlh7WFXXPD2LQwk5lg3SkC0czSkacaaAoRCW\npSVXbMUWB0hD0lSaoPcDNsNyVfzEwMXqWWLBkKZbTki+GanHkb+J\n=dbR5\n-----END PGP PUBLIC KEY BLOCK-----\n"))),(0,r.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# x64\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_amd64.exe -o driftctl.exe\n# x86\n$ curl https://github.com/snyk/driftctl/releases/latest/download/driftctl_windows_386.exe -o driftctl.exe\n"))))),(0,r.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"You can use also our official Docker image from the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -t --rm \\\n  -v ~/.aws:/root/.aws:ro \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_PROFILE=non-default-profile \\\n  snyk/driftctl scan\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v ~/.aws:/root/.aws:ro")," (optionally) mounts your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aws")," containing AWS credentials and profile"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v $(pwd):/app:ro")," (optionally) mounts your working dir containing the terraform state"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v ~/.driftctl:/root/.driftctl")," (optionally) prevents driftctl to download the provider at each run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-e AWS_PROFILE=your_profile")," (optionally) exports the non-default AWS profile name to use"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"snyk/driftctl:<VERSION_TAG>")," run a specific driftctl tagged release"),(0,r.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# With a local state\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan\n\n# With state stored on a s3 backend\n$ docker run -t --rm \\\n  -v $(pwd):/app:ro \\\n  -v ~/.driftctl:/root/.driftctl \\\n  -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n  -e AWS_SECRET_ACCESS_KEY=XXXX \\\n  snyk/driftctl scan --from tfstate+s3://my-bucket/path/to/state.tfstate\n\n# With multiple states\n$ docker run -t --rm \\\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_ACCESS_KEY_ID=XXXXXXXX \\\n    -e AWS_SECRET_ACCESS_KEY=XXXX \\\n    snyk/driftctl scan --from tfstate://terraform_S3.tfstate --from tfstate://terraform_VPC.tfstate\n\n# Using a named profile\n$ docker run -t --rm \\\n    -v ~/.aws:/root/.aws:ro \\ # mount your aws config folder\n    -v $(pwd):/app:ro \\\n    -v ~/.driftctl:/root/.driftctl \\\n    -e AWS_PROFILE=your-profile \\\n    snyk/driftctl scan\n"))),(0,r.kt)(i.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,"Homebrew is a free and open-source package management system for Mac OS X. Install the official driftctl formula from the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install driftctl\n"))),(0,r.kt)(i.Z,{value:"macports",mdxType:"TabItem"},(0,r.kt)("p",null,"MacPorts is an easy to use system for compiling, installing, and managing open source software. Install the community port from the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo port install driftctl\n")))))}m.isMDXComponent=!0}}]);