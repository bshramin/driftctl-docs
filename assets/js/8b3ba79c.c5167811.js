"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57413],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var o=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],a={id:"completion-usage",title:"Completion"},c=void 0,s={unversionedId:"usage/cmd/completion-usage",id:"version-0.19.0/usage/cmd/completion-usage",title:"Completion",description:"driftctl can output completion script (also known as tab completion) for you to use on your shell. Currently bash, zsh, fish and powershell shells are supported.",source:"@site/versioned_docs/version-0.19.0/usage/cmd/completion.mdx",sourceDirName:"usage/cmd",slug:"/usage/cmd/completion-usage",permalink:"/0.19.0/usage/cmd/completion-usage",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.19.0/usage/cmd/completion.mdx",tags:[],version:"0.19.0",frontMatter:{id:"completion-usage",title:"Completion"},sidebar:"version-0.19.0/docs",previous:{title:"Scan",permalink:"/0.19.0/usage/cmd/scan-usage"},next:{title:".driftignore generator",permalink:"/0.19.0/usage/cmd/gen-driftignore-usage"}},p={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Generate the completion file",id:"generate-the-completion-file",level:2},{value:"Bash",id:"bash",level:2},{value:"Zsh",id:"zsh",level:2},{value:"Oh-My-Zsh",id:"oh-my-zsh",level:3},{value:"Fish",id:"fish",level:2},{value:"Powershell",id:"powershell",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"driftctl can output completion script (also known as ",(0,l.kt)("em",{parentName:"p"},"tab completion"),") for you to use on your shell. Currently ",(0,l.kt)("inlineCode",{parentName:"p"},"bash"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zsh"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"fish")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"powershell")," shells are supported."),(0,l.kt)("h2",{id:"before-you-start"},"Before you start"),(0,l.kt)("p",null,"In order to generate the completion script required to make the completion work, you have to install driftctl CLI first."),(0,l.kt)("h2",{id:"generate-the-completion-file"},"Generate the completion file"),(0,l.kt)("p",null,"To generate the completion script you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion [bash|zsh|fish|powershell]\n")),(0,l.kt)("p",null,"By default, this command will print on the standard output the content of the completion script. To make the completion work you will need to redirect it to the completion folder of your shell."),(0,l.kt)("h2",{id:"bash"},"Bash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Linux:\n$ driftctl completion bash | sudo tee /etc/bash_completion.d/driftctl\n\n# macOS:\n$ driftctl completion bash > /usr/local/etc/bash_completion.d/driftctl\n")),(0,l.kt)("p",null,"Remember to open a new shell to test the functionality."),(0,l.kt)("h2",{id:"zsh"},"Zsh"),(0,l.kt)("p",null,"If shell completion is not already enabled in your environment, you will need to enable it. You can execute the following once:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,l.kt)("p",null,"At this point you can generate and place the completion script in your completion folder listed in your ",(0,l.kt)("inlineCode",{parentName:"p"},"fpath")," if it already exists. Otherwise, you can create a directory, add it to your ",(0,l.kt)("inlineCode",{parentName:"p"},"fpath")," and copy the file in it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion zsh > fpath/completion_folder/_driftctl\n")),(0,l.kt)("h3",{id:"oh-my-zsh"},"Oh-My-Zsh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p ~/.oh-my-zsh/completions\n$ driftctl completion zsh > ~/.oh-my-zsh/completions/_driftctl\n")),(0,l.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,l.kt)("h2",{id:"fish"},"Fish"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion fish > ~/.config/fish/completions/driftctl.fish\n")),(0,l.kt)("p",null,"Remember to create the directory if it's not already there ",(0,l.kt)("inlineCode",{parentName:"p"},"mkdir -p ~/.config/fish/completions/"),"."),(0,l.kt)("p",null,"Remember to open a new shell to test the functionality."),(0,l.kt)("h2",{id:"powershell"},"Powershell"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion powershell > driftctl.ps1\n")),(0,l.kt)("p",null,"You will need to source this file from your powershell profile for this to work as expected."))}d.isMDXComponent=!0}}]);