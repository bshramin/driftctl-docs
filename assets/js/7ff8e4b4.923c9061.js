"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71109],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11469:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"ghaction",title:"GitHub Action"},u=void 0,s={unversionedId:"ci_cd/guides/ghaction",id:"version-0.15.0/ci_cd/guides/ghaction",title:"GitHub Action",description:"You can run a full driftctl scan in your GitHub Actions workflow by using the official action.",source:"@site/versioned_docs/version-0.15.0/ci_cd/guides/ghaction.mdx",sourceDirName:"ci_cd/guides",slug:"/ci_cd/guides/ghaction",permalink:"/0.15.0/ci_cd/guides/ghaction",draft:!1,editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.15.0/ci_cd/guides/ghaction.mdx",tags:[],version:"0.15.0",frontMatter:{id:"ghaction",title:"GitHub Action"},sidebar:"version-0.15.0/docs",previous:{title:"CircleCI",permalink:"/0.15.0/ci_cd/guides/circleci"},next:{title:"GitlabCI",permalink:"/0.15.0/ci_cd/guides/gitlabci"}},l={},p=[{value:"Scheduled example",id:"scheduled-example",level:2},{value:"GitOps example",id:"gitops-example",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can run a full driftctl scan in your GitHub Actions workflow by using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/driftctl-action"},"official action"),"."),(0,a.kt)("h2",{id:"scheduled-example"},"Scheduled example"),(0,a.kt)("p",null,"Below you can find a GitHub Actions workflow example with a scheduled run of driftctl."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: driftctl\n\non:\n  # Triggers driftctl every 10 minutes\n  schedule:\n    - cron: "*/10 * * * *"\n\njobs:\n  scheduled:\n    runs-on: ubuntu-latest\n    env:\n      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n      AWS_DEFAULT_REGION: us-east-1\n    steps:\n      - name: Run driftctl\n        uses: snyk/driftctl-action@v1\n        env:\n          DCTL_FILTER: "Type==\'aws_instance\'"\n        with:\n          version: 0.6.0\n')),(0,a.kt)("h2",{id:"gitops-example"},"GitOps example"),(0,a.kt)("p",null,"Below you can find a GitOps GitHub Actions workflow example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"name: gitops\n\non:\n  push:\n    branches:\n      - main\n\nenv:\n  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n  AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n  AWS_DEFAULT_REGION: us-east-1\n\njobs:\n  validate-fmt:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Format\n        run: terraform fmt -check\n      - name: Terraform Validate\n        run: terraform validate\n  driftctl:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Run driftctl\n        uses: snyk/driftctl-action@v1\n        env:\n          DCTL_FROM: tfstate+s3://my-path/terraform.tfstate\n  plan:\n    needs: [validate-fmt, driftctl]\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Setup Terraform\n        uses: hashicorp/setup-terraform@v1\n      - name: Terraform Init\n        run: terraform init\n      - name: Terraform Plan\n        run: terraform plan\n")))}d.isMDXComponent=!0}}]);