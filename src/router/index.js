import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/views/Home";
import NutritionProgramm from '@/components/views/Nutrition-Programs';
import BusinessLanchess from '@/components/views/Business-Lunches';
import GastroShop from '@/components/views/GastroShop';
import AboutUs from "@/components/views/AboutUs";
import BlogPage from "@/components/views/BlogPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/Nutrition-Programm',
    name: 'Nutrition',
    component: NutritionProgramm
  },
  {
    path: '/Business-Lanchess',
    name: 'BusinessLanchess',
    component: BusinessLanchess
  },
  {
    path: '/Gastro-Shop',
    name: 'GastroShop',
    component: GastroShop
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;