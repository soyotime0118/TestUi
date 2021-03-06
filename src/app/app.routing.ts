import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { UserComponent } from "./user/user.component";
import { UserAccountComponent } from "./user/user-account/user-account.component";
import { NoAccessComponent } from "./shared/components/no-access/no-access.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { NoticeComponent } from "./notice/notice.component";
import { AdminLoginComponent } from "./index/admin-login/admin-login.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "index",
        loadChildren: "./index/index.module#IndexModule"
      },
      {
        path: "products",
        loadChildren: "./product/product.module#ProductModule"
      },
      {
        path: "users",
        loadChildren: "./user/user.module#UserModule"
      },
      {
        path: "notice",
        loadChildren: "./notice/notice.module#NoticeModule"
      },
      {
          path: "admin",
          loadChildren: "./admin/admin.module#AdminModule"
      }
    ]
  },
  { path: "adminlogin", component: AdminLoginComponent },
  { path: "no-access", component: NoAccessComponent },
  { path: "**", component: PageNotFoundComponent }
];
