export default {
  path: '/user',
  name: 'user',
  component: () => import('@/layouts/User/index.vue'),
  meta: { title: 'user' },
  children: [
    // NEWS
    {
      path: 'news',
      name: 'user.news',
      component: () => import('@/views/user/News/index.vue'),
      meta: { title: 'events' }
    },
    // DOINGS
    {
      path: 'doings',
      name: 'user.doings',
      component: () => import('@/views/user/Doings/index.vue'),
      meta: { title: 'doings' },
      redirect: 'doings/project',
      children: [
        // D. PROJECT
        {
          path: 'project',
          name: 'user.doings.project.list',
          component: () => import('@/views/user/Doings/Project/index.vue'),
          meta: { title: 'project list' }
        },
        {
          path: 'project/:id?',
          name: 'user.doings.project',
          component: () => import('@/views/user/Doings/Project/project.vue'),
          meta: { title: 'project' }
        },
        // D. LESSON
        {
          path: 'lesson',
          name: 'user.doings.lesson.list',
          component: () => import('@/views/user/Doings/Lesson/index.vue'),
          meta: { title: 'lesson list' }
        },
        {
          path: 'lesson/:id?',
          name: 'user.doings.lesson',
          component: () => import('@/views/user/Doings/Lesson/lesson.vue'),
          meta: { title: 'lesson' }
        },
        {
          path: 'lesson/:id/unit/:id?',
          name: 'user.doings.lesson.unit',
          component: () => import('@/views/user/Doings/Lesson/LessonUnit/index.vue'),
          meta: { title: 'lesson unit' }
        }
      ]
    },
    // PROJECTS
    {
      path: 'projects',
      name: 'user.projects',
      component: () => import('@/views/user/PublicProject/index.vue'),
      meta: { title: 'rest projects' }
    },
    // SETTINGS
    {
      path: 'settings',
      name: 'user.settings',
      component: () => import('@/views/user/Settings/index.vue'),
      meta: { title: 'settings' }
    },
    // REST ???
    {
      path: 'child',
      name: 'user.child',
      component: () => import('@/views/About.vue'),
      meta: { title: 'user' }
    }
  ]
}
