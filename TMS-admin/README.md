# TMS Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Structure

```
├── README.md
├── angular.json
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.e2e.json
├── ngsw-config.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── core
│   │   │   ├── core.module.ts
│   │   │   ├── dialog
│   │   │   │   ├── dialog.component.css
│   │   │   │   ├── dialog.component.html
│   │   │   │   └── dialog.component.ts
│   │   │   ├── error-page
│   │   │   │   ├── error-page.component.css
│   │   │   │   ├── error-page.component.html
│   │   │   │   └── error-page.component.ts
│   │   │   ├── main
│   │   │   │   ├── main.component.css
│   │   │   │   ├── main.component.html
│   │   │   │   └── main.component.ts
│   │   │   ├── side-nav
│   │   │   │   ├── side-nav.component.css
│   │   │   │   ├── side-nav.component.html
│   │   │   │   └── side-nav.component.ts
│   │   │   ├── side-nav-min
│   │   │   │   ├── side-nav-min.component.css
│   │   │   │   ├── side-nav-min.component.html
│   │   │   │   └── side-nav-min.component.ts
│   │   │   ├── sign-in
│   │   │   │   ├── sign-in.component.css
│   │   │   │   ├── sign-in.component.html
│   │   │   │   └── sign-in.component.ts
│   │   │   └── tool-bar
│   │   │       ├── tool-bar.component.css
│   │   │       ├── tool-bar.component.html
│   │   │       └── tool-bar.component.ts
│   │   ├── dashboards
│   │   │   ├── dashboards.module.ts
│   │   │   ├── hospital-dashboard
│   │   │   │   ├── hospital-dashboard.component.css
│   │   │   │   ├── hospital-dashboard.component.html
│   │   │   │   └── hospital-dashboard.component.ts
│   │   │   └── symptom-dashboard
│   │   │       ├── symptom-dashboard.component.css
│   │   │       ├── symptom-dashboard.component.html
│   │   │       └── symptom-dashboard.component.ts
│   │   ├── editings
│   │   │   ├── body-editing
│   │   │   │   ├── body-editing.component.css
│   │   │   │   ├── body-editing.component.html
│   │   │   │   └── body-editing.component.ts
│   │   │   ├── department-editing
│   │   │   │   ├── department-editing.component.css
│   │   │   │   ├── department-editing.component.html
│   │   │   │   └── department-editing.component.ts
│   │   │   ├── duration-editing
│   │   │   │   ├── duration-editing.component.css
│   │   │   │   ├── duration-editing.component.html
│   │   │   │   └── duration-editing.component.ts
│   │   │   ├── editings.module.ts
│   │   │   ├── gender-editing
│   │   │   │   ├── gender-editing.component.css
│   │   │   │   ├── gender-editing.component.html
│   │   │   │   └── gender-editing.component.ts
│   │   │   ├── hospital-editing
│   │   │   │   ├── hospital-editing.component.css
│   │   │   │   ├── hospital-editing.component.html
│   │   │   │   └── hospital-editing.component.ts
│   │   │   ├── severity-editing
│   │   │   │   ├── severity-editing.component.css
│   │   │   │   ├── severity-editing.component.html
│   │   │   │   └── severity-editing.component.ts
│   │   │   └── symptom-editing
│   │   │       ├── symptom-editing.component.css
│   │   │       ├── symptom-editing.component.html
│   │   │       └── symptom-editing.component.ts
│   │   ├── model
│   │   │   ├── account.model.ts
│   │   │   ├── body-reference.model.ts
│   │   │   ├── body.model.ts
│   │   │   ├── branch.model.ts
│   │   │   ├── create
│   │   │   │   └── create-request.model.ts
│   │   │   ├── cui.model.ts
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard-body.model.ts
│   │   │   │   ├── dashboard-department.model.ts
│   │   │   │   ├── dashboard-duration.model.ts
│   │   │   │   ├── dashboard-gender.model.ts
│   │   │   │   ├── dashboard-response.model.ts
│   │   │   │   ├── dashboard-severity.model.ts
│   │   │   │   ├── dashboard-symptom.model.ts
│   │   │   │   └── dashboard-term.model.ts
│   │   │   ├── department-reference.model.ts
│   │   │   ├── department.model.ts
│   │   │   ├── duration-reference.model.ts
│   │   │   ├── duration.model.ts
│   │   │   ├── error-message.model.ts
│   │   │   ├── gender-reference.model.ts
│   │   │   ├── gender.model.ts
│   │   │   ├── hospital-permission.model.ts
│   │   │   ├── hospital.model.ts
│   │   │   ├── menu-permission.model.ts
│   │   │   ├── menu.model.ts
│   │   │   ├── modify
│   │   │   │   └── modify-request.model.ts
│   │   │   ├── permit
│   │   │   │   ├── permit-hospital.model.ts
│   │   │   │   ├── permit-menu.model.ts
│   │   │   │   └── permit-response.model.ts
│   │   │   ├── query
│   │   │   │   ├── query-body.model.ts
│   │   │   │   ├── query-department.model.ts
│   │   │   │   ├── query-duration.model.ts
│   │   │   │   ├── query-gender.model.ts
│   │   │   │   ├── query-hospital-permission.model.ts
│   │   │   │   ├── query-response.model.ts
│   │   │   │   └── query-severity.model.ts
│   │   │   ├── severity-reference.model.ts
│   │   │   ├── severity.model.ts
│   │   │   ├── symptom-reference.model.ts
│   │   │   └── term.model.ts
│   │   └── shared
│   │       ├── api
│   │       │   ├── api-branch.service.ts
│   │       │   ├── api-create.service.ts
│   │       │   ├── api-dashboard.service.ts
│   │       │   ├── api-export.service.ts
│   │       │   ├── api-modify.service.ts
│   │       │   ├── api-permit.service.ts
│   │       │   ├── api-query.service.ts
│   │       │   └── api-querys.service.ts
│   │       ├── google-auth.service.ts
│   │       ├── handle-http-error.service.ts
│   │       ├── material.module.ts
│   │       ├── md5-hash.service.ts
│   │       ├── shared.module.ts
│   │       ├── sign-in-guard.service.ts
│   │       └── user-profile.service.ts
│   ├── assets
│   │   ├── icons
│   │   │   ├── icon-128x128.png
│   │   │   ├── icon-144x144.png
│   │   │   ├── icon-152x152.png
│   │   │   ├── icon-192x192.png
│   │   │   ├── icon-384x384.png
│   │   │   ├── icon-512x512.png
│   │   │   ├── icon-72x72.png
│   │   │   └── icon-96x96.png
│   │   └── logo.png
│   ├── browserslist
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── manifest.json
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```
