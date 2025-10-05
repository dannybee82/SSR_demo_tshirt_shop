# SSRDemoTShirtShop

An _Angular 20 SSR application_ (with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4) that demonstrates **Server Side Rendering** (SSR).  
The application loads the title, meta-title and meta-description dynamically for the category-page and product-page.  
The example data is hard-coded with Observables.
See the root of this project for example images.

### **Angular application installation**

**Angular 20** needs a **Node.js** version of at least _20.19.0_

**Command to install**

_npm install_

or shorter:

_npm i_

**Commands to see Server Side Rendering (SSR) in action**

1.  Run the command in the terminal:  
    _ng\_build_

The command here above creates a _/dist/_ folder with 2 bundles: 1 for the server and 1 for the client.

1.  Run the command in the terminal:  
    _npm run serve:ssr:SSR\_demo\_tshirt\_shop_

This will start the server at _http://localhost:4000_

Note **curl** is native on _Windows_ and pre-installed on _macOS_.  
But for _Linux_ **curl** is available via package managers.  
To see the title, meta-title and meta-description in action - use **curl** commands:

**From a CMD-prompt:**  
curl -s "http://localhost:4000"

curl -s "http://localhost:4000/category/1"

curl -s "http://localhost:4000/product/1"

**From the VS Code teriminal:**  
curl.exe -s "http://localhost:4000"

curl.exe -s "http://localhost:4000/category/1"

curl.exe -s "http://localhost:4000/product/1"

**Command to run the client application:**

_ng serve --open_

or shorter:

_ng s --o_

Note: the normal application runs on: http://localhost:4200

### **Changelog:**

_Ocotber 2025_

\- First commit.

\- Applied SSR vulnerability fix - see the code:  
`const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);`

See the link below for more information about the SSR vulnerability fix:

[https://github.com/angular/angular/security/advisories/GHSA-68x2-mx4q-78m7](https://github.com/angular/angular/security/advisories/GHSA-68x2-mx4q-78m7)