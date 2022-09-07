import { Route, Router } from "@vaadin/router";

const routes: Route[] = [
  {
    path: "/",
    component: "pkmon-app",
    action: async () => {
      await import("./pages/pkmon-app.js");
    },
    children: [
      {
        path: "/",
        component: "pkmon-home",
        action: async () => {
          await import("./pages/home/pkmon-home.js");
        },
      },
      {
        path: "/about",
        component: "pkmon-about",
        action: async () => {
          await import("./pages/about/pkmon-about.js");
        },
      },
    ],
  },
];

const app = document.getElementById("app");
const router = new Router(app);
router.setRoutes(routes);

export function goToPage(path: string) {
  return router.urlForPath(path);
}
