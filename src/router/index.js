import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/AppLanding.vue";
import RegisterUserView from "@/views/AppRegisterUser.vue";
import QnaView from "@/views/AppQna.vue";
import QnaList from "@/components/User/UserQnaList.vue";
// import QnaWrite from "@/components/User/UserQnaForm.vue";
import UserView from "@/views/AppUser.vue";
import LoginView from "@/views/AppLogin.vue";
import SearchView from "../views/AppSearch.vue";
import ResultView from "../views/AppResult.vue";
import NoticeView from "../views/AppNotice.vue";
import NoticeDetail from "@/components/NoticeDetail.vue";
import NoticeWrite from "@/components/NoticeForm.vue";
import SidebarAptDetail from "@/components/search/sidebar/SidebarAptDetail.vue";
// import SearchBoxView from "@/components/search/searchbox/SearchBoxView.vue";
import { createApp } from "vue";
import store from "@/store";

// Vue.use(VueRouter);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      children: [
        {
          path: "list/:dongCode",
          name: "list",
          props: true,
          component: () => import("@/components/search/sidebar/SidebarAptList.vue"),
        },
        {
          path: "detail/:aptCode",
          name: "detail",
          props: true,
          //component: () => import("@/components/search/sidebar/SidebarAptDetail.vue"),
          component: SidebarAptDetail,
        },
      ],
    },
    {
      path: "/result",
      name: "result",
      component: ResultView,
    },
    {
      path: "/register-user",
      name: "registerUser",
      component: RegisterUserView,
    },
    {
      path: "/user",
      name: "user",
      component: UserView,
      children: [
        {
          path: "qna-list",
          name: "qna-list",
          component: QnaList,
        },
        // {
        //   path: "qna-write",
        //   name: "qna-write",
        //   component: QnaWrite,
        // },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/notice",
      name: "notice",
      component: NoticeView,
    },
    {
      path: "/notice-write",
      name: "notice-write",
      component: NoticeWrite,
    },
    {
      path: "/notice-detail/:getno",
      name: "notice-detail",
      props: true,
      component: NoticeDetail,
    },
    {
      path: "/qna",
      name: "qna",
      component: QnaView,
    },

    // {
    //   path: "/searchbox",
    //   name: "searchbox",
    //   component: SearchBoxView,
    //   redirect: "/searchbox/dong",
    //   children: [
    //     {
    //       path: "dong",
    //       name: "dong",
    //       component: () => import("@/components/search/searchbox/SearchBoxDong.vue"),
    //     },
    //   ],
    // },
  ],
});

export default router;
