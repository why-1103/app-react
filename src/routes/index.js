import Login from "../pages/Login";
import List from "../pages/admin/products/List";
import index from "../pages/admin/dashboard";
import Edit from "../pages/admin/products/Edit";
import PageNotFound from "../pages/PageNotFound";

export const mainRoutes = [
  { path: "/login", component: Login },
  { path: "/404", component: PageNotFound },
];
export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: index,
    title: "dashboard",
  },
  {
    path: "/admin/products",
    component: List,
    exact: true,
    title: "List",
  },
  {
    path: "/admin/products/edit/:id?",
    component: Edit,
    title: "detail",
  },
];
