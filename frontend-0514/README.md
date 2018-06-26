# QAS 2 Frontend

此專案前端是由 [Angular CLI](https://github.com/angular/angular-cli) 所開發，主要功能為協助測試人員管理測試計劃，以及測試裝置的整理。

## 0. 啟動

* Development
  ```
  npm run config -- --PRODUCTION=false --API_URL=http://localhost:22629 --GOOGLE_CLIENT_ID=167882235353-ls3jksicf384t8vplkfom4enab5jbm6e.apps.googleusercontent.com --MICROSOFT_CLIENT_ID=ec2e20bb-f8dc-4ae3-b77e-991c3334e613 --MICROSOFT_REDIRECT_URI=/&& ng serve
  ```
* Production
  ```
  npm run config -- --PRODUCTION=false --API_URL=https://test.dpqqa.com:22629 --GOOGLE_CLIENT_ID=167882235353-cm3a9nc97g83mni32ht8vf9dutdm92l6.apps.googleusercontent.com --MICROSOFT_CLIENT_ID=7b3303a3-df20-4d28-8d58-dffb64ea2d54 --MICROSOFT_REDIRECT_URI=https://test.dpqqa.com:22629/~owen/#/&& ng serve
  ```

## 1. 額外套件（ Package ）

* 為了避免過多的套件導致衝突或不相容的情況，因此需控管現有已使用的套件，並且把未使用之套件移除
* 若需要新增套件：
  1. `npm install --save [套件]` ，透過 `--save` 來使用 package.json 統一管理套件。
  2. 在 README.md 中加入該套件的名稱和版本號（和 package.json 所列相同）。
  
  | 套件名稱                           | 版本號   | 備註             |
  | --------------------------------- | ------- | ---------------- |
  | bootstrap                         | 4.0.0   |                  |
  | jquery                            | 3.2.1   |                  |
  | angularx-social-login             | 1.0.0   | Google Login     |
  | @angular/material                 | 5.0.4   | Angular Material |
  | @angular/cdk                      | 5.0.4   | Angular Material |
  | @angular/animations               | 5.2.0   | Angular Material |
  | hammerjs                          | 2.0.8   | Angular Material |
  | @compodoc/compodoc                | 1.0.5   |                  |
  | hellojs                           | 2.0.0-4 | Microsoft Login  |
  | @types/hellojs                    | 1.15.0  | Microsoft Login  |
  | @microsoft/microsoft-graph-client | 1.0.0   | Microsoft Login  |
  | @microsoft/microsoft-graph-types  | 1.1.0   | Microsoft Login  |
  | ts-md5                            | 1.2.3   |                  |
  | ngx-cookie                        | 2.0.1   |                  |
  | dhtmlx-scheduler                  | 4.4.0   |                  |
  | @types/dhtmlxscheduler            | 4.3.36  |                  |
  | dotenv                            | 5.0.1   | Parse .env file  |
  | yargs                             | 11.0.0  | Var. of command  |
  

## 2. 開發工具

* Node.js
  * 雖然安裝 `v6.9.x` 以上版本都可以，但我們建議安裝 Node.js `v9.0.0` 以上版本，你可以從 [Node.js](https://nodejs.org/en/) 下載最新版本的 Node.js 。
  * 如果使用 Mac ，可以使用 `brew install node` 指令安裝。 
  * 如果你使用 Node.js `v6.9.x` 版本，請將 npm 升級到 `5.0` 以上，新版本可加快 npm 套件安裝以及專案編譯速度。
    * 如果是 Mac 用戶，可以使用以下指令升級 `npm install npm@latest -g` 。
    * 如果是 Windows 用戶，請透過 [npm-windows-upgrade](https://www.npmjs.com/package/npm-windows-upgrade) 進行升級。
  * 驗證安裝結果的指令
    * `node -v` 確認為 `v6.9.0` 以上版本。
    * `npm -v` 確認為 `v5.0.0` 以上版本。
* Angular CLI
  * 使用指令 `npm install -g @angular/cli` 進行安裝，請務必安裝或升級成 `v1.6.4` 以上版本，不然會造成和部分 packages 衝突的可能（例如： Bootstrap 4 ）。
  * 驗證安裝結果的指令
    * `ng -v` 確認為 `v1.6.4` 以上版本。
* 整合開發環境（ IDE ）
  * 前端開發環境種類很多種，建議可以使用 Visual Studio Code 或 WebStorm（付費）。
  * Visual Studio Code
    * 請至 [官方網站](https://code.visualstudio.com/) 安裝或更新至最新版。
    * 安裝 [Angular 擴充套件包](https://marketplace.visualstudio.com/items?itemName=doggy8088.angular-extension-pack)。
  * WebStorm
    * 請至 [官方網站](https://www.jetbrains.com/webstorm/) 安裝或更新至最新版。
        
## 3. 從 Git 上 clone 程式碼

至本地開發資料夾底下，使用指令 `git clone ssh://git@inhouse.htcstudio.com:7999/hc30k/qas-2.git` 將專案 clone 至本地開發資料夾，並確定專案資料夾中包含 Backend 和 Frontend。

## 4. Angular package 安裝

至 `/專案目錄/Frontend` ，使用指令 `npm install` ，來安裝與本專案相依的 package 。

## 5. 啟動開發 server

至 `/專案目錄/Frontend` ，使用指令 `ng serve` 來啟動 server ，並從瀏覽器連線至 `http://localhost:4200/` 來確認是否啟動成功，另外也可以使用 `ng serve --port="[port]" --host="[ip]"` 來改變 server 的 port 和 ip 位置。

## 6. 共同工作流程（ Co-work ）

為了在多人共同工作時，避免程式碼衝突以及有效的版本控管，不論是增加新功能或是 Hotfix 都必須遵循 Git 的開發原則。
  1. 至 [Bitbucket](https://inhouse.htcstudio.com/bitbucket/projects/HC30K/repos/qas-2/branches) 專案下管理分支的頁面，開啟一個新分支（ create branch ）。
  2. 你可以根據實際情況，來決定要從 master 或是其他分支中，來延伸出新的分支。
  3. 分支名稱必須明確的表示出此分支的目的，字數不限，但必須讓其他使用者，可以迅速且明確地了解該分支的功能。
  4. 分支創立完成後，回到本地開發資料夾，使用指令 `git pull` 來更新本地 Git ，然後使用指令 `git checkout [分支名稱]` 來切換到新分支，同時可以使用 `git status` 或 `git branch` 來確定分支狀態。
  5. 當整個分支工作都完成時，即準備將該分支合併（ merge ）回該分支的出身位置（通常是 master ，不過還是依實際情況為準。），回到 [Bitbucket](https://inhouse.htcstudio.com/bitbucket/projects/HC30K/repos/qas-2/branches) 對該分支進行 pull request ，並且標注團隊內所有人進行 code review ，當所有人都同意後才進行 merge 。
  6. 欲進行 pull request 的程式碼應將 dead code 和協助開發之訊息（例如： console.log ）去除，並且 pull request 訊息應該明確記載此分支所有更動。

## 7. 目錄結構

```
node_modules
src
|-app
  |-admin
  |-booking-room
  |-clock-in
  |-core
    |-main
    |-navbar
    |-sign-in
    |-sign-up
  |-shared
    |-*.service.ts|spec.ts
  |-test-project
    |-mmh
      |-mmh-dashboard
    |-project-controller
  |-test-unit
    |-add-device
    |-modify-device
    |-search-device
    |-transfer-device
  |-tools
  |-app.component.ts|css|html|spec.ts
  |-app.module.ts
  |-app-routing.module.ts
```

## 8. 新增 component 、 service 、 module

* 若要在專案中新增 component 、 service 、 module ，務必使用以下指令，來保持專案的完整性和一致性。
  * 新增 component ： `ng generate component [名稱]` 。
  * 新增 service ： `ng generate service [名稱]` 。
  * 新增 module ： `ng generate module [名稱]` 。
* 名稱定義

## 9. HttpClient 與呼叫 API

Angular 5 中，使用 http method 呼叫 API 從原本的 HttpModule 改為 HttpcClientModule （ [Biggest changes in v5](https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced) ），所以呼叫 API 的 service 也有所差異，詳細可參考[官方文件](https://angular.io/guide/http)。
```
http
  .get('/url/api')
  .subscribe(
    // Successful responses call the first callback.
    data => {
      // Data is now an instance of type ItemsResponse.
      this.results = data.results; 
    },
    err => {
      // Errors will call this callback instead.
      console.log('Something went wrong : ' + err);
    }
  );
```

## 10. 路由（ Routes ）

若要從 URL 傳遞參數，且目標為固定 Component 可以透過路由來幫忙傳遞該參數，詳細可參考[CodeCraft](https://codecraft.tv/courses/angular/routing/parameterised-routes/)。
```
// in app-routing.module.ts
const routes: Routes = [
  { path: 'blog/:id', component: BlogComponent } 
];

// in BlogComponent
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe( params => console.log(params) );
}
// if we visited "url/blog/1" then console result:
{ id: 1 }
```
  
## 11. 開發指導方針（ Guideline ）

為了提升整體專案程式碼架構完整性，可以遵照以下開發指導方針，來幫助開發過程。
  * TypeScript 程式編寫與檔案規則可參考 [Angular Style Guide](https://angular.io/guide/styleguide) 以及[CodeCraft Angular 5](https://codecraft.tv/courses/angular/quickstart/overview/)
  * Html 與 Css 可參考 [Bootstrap 4 Documentation](https://v4-alpha.getbootstrap.com/getting-started/introduction/)
  * 免費圖示資源 [Font Awesome](https://fontawesome.com/)
