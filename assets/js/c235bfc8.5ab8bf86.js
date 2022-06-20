"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5430],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(o,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],l={id:"gitlabci",title:"GitlabCI"},o=void 0,s={unversionedId:"ci_cd/guides/gitlabci",id:"ci_cd/guides/gitlabci",title:"GitlabCI",description:"You can integrate driftctl in GitlabCI by taking as example this repository.",source:"@site/docs/ci_cd/guides/gitlabci.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/gitlabci",permalink:"/next/ci_cd/guides/gitlabci",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/docs/ci_cd/guides/gitlabci.mdx",tags:[],version:"current",frontMatter:{id:"gitlabci",title:"GitlabCI"},sidebar:"docs",previous:{title:"GitHub Action",permalink:"/next/ci_cd/guides/ghaction"},next:{title:"Jenkins",permalink:"/next/ci_cd/guides/jenkins"}},u={},p=[{value:"Full example",id:"full-example",level:2}],f={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can integrate driftctl in GitlabCI by taking as example this ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/cloudskiff/driftctl-ci-example"},"repository"),"."),(0,i.kt)("p",null,"You can integrate driftctl within your GitOps workflow to get something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"success",src:n(18532).Z,width:"931",height:"279"})),(0,i.kt)("p",null,"In this kind of workflow if a new drift happens it will block your pipeline execution:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"failure",src:n(96463).Z,width:"981",height:"303"})),(0,i.kt)("p",null,"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a driftctl run every hour"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"schedule",src:n(89616).Z,width:"1106",height:"741"})),(0,i.kt)("h2",{id:"full-example"},"Full example"),(0,i.kt)("p",null,"Below you can find a full GitlabCI example with a complete GitOps workflow example and a scheduled run of driftctl."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'stages:\n  - init\n  - validate\n  - plan\n  - deploy\n\n.driftctl:\n  image:\n    name: snyk/driftctl\n    entrypoint: [""]\n  script:\n    - driftctl scan\n\n# ====================\n# Scheduled driftctl run\n# ====================\n# Scheduled driftctl run\ndriftctl:scheduled:\n  extends: .driftctl\n  only:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\n# ====================\n# Classic GitOps workflow\n# ====================\n\n# Used to share .terraform cached providers in terraform jobs\n.tfcache: &tfcache\n  cache:\n    key: ${CI_PIPELINE_ID}\n    paths:\n      - .terraform\n\n# Terraform image to use for every terraform jobs\n.terraform: &terraform\n  image:\n    name: hashicorp/terraform:0.14.4\n    entrypoint: [""]\n\nterraform/init:\n  <<: *terraform\n  <<: *tfcache\n  stage: init\n  except:\n    - schedules\n  script:\n    - terraform init\n\ndriftctl:\n  extends: .driftctl\n  except:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\nterraform/fmt:\n  <<: *terraform\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform fmt -check -diff\n\nterraform/validate:\n  <<: *terraform\n  <<: *tfcache\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform validate\n\nterraform/plan:\n  <<: *terraform\n  <<: *tfcache\n  stage: plan\n  except:\n    - schedules\n  artifacts:\n    name: plan\n    expire_in: 1 day\n    paths:\n      - "plan.out"\n  script:\n    - terraform plan -out=plan.out\n\nterraform/apply:\n  <<: *terraform\n  <<: *tfcache\n  stage: deploy\n  when: manual\n  dependencies:\n    - terraform/plan\n  except:\n    - schedules\n  script:\n    - terraform apply plan.out\n\n')))}d.isMDXComponent=!0},96463:function(e,t,n){t.Z=n.p+"assets/images/failure-a4ca4f35cf518566b1c6280998a321e4.png"},89616:function(e,t,n){t.Z=n.p+"assets/images/schedule-638af56b6a9427cae93b13493b558e5d.png"},18532:function(e,t,n){t.Z=n.p+"assets/images/success-739403b2ff1c76505754d68b5cf4f3c3.png"}}]);