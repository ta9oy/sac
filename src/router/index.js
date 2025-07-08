import { createRouter, createWebHistory } from 'vue-router';
import { LoginServices } from '../services';

const routes = [
  {
    path: '/user-login',
    name: 'User Login',
    component: () => import('@/views/login/UserLogin.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/DefaultLayout.vue'),
    redirect: '/dashboard',
    // Use actual layout
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/approval',
        name: 'Approval',
        component: () => import('@/views/approval/Approval.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/users/UsersList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/add-user',
        name: 'Add User',
        component: () => import('@/views/users/UsersForm.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/guards',
        name: 'Guards',
        component: () => import('@/views/guards/GuardsForm.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/residents',
        name: 'Residents',
        component: () => import('@/views/residents/ResidentsForm.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
];




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

new LoginServices().checkToken().then((response) => {
  if (response.data.status == 200) {
    localStorage.setItem("token", response.data.object); // Store token if logged in
  } else {
    localStorage.removeItem("token"); // Clear token if not logged in
  }
}
).catch((error) => {
  console.error("Error checking login status:", error);
  localStorage.removeItem("token"); // Clear token on error
}
);

// **Navigation Guard for Authentication**
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check token
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/user-login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed
  }
});

export default router;
