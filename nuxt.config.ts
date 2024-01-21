// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '../src/module.ts'
  ],  
  build: {
    transpile: ['jsonwebtoken']
  },
  devtools: { enabled: true },
  auth: {
    baseURL: 'http://localhost:8080', 
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' }, 
        getSession: { path: '/user' },
      },
      token: {
        signInResponseTokenPointer: '/token'
      },
      sessionDataType: { id: 'string', email: 'string', name: 'string'}
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 5000
    },
    globalAppMiddleware: {
      isEnabled: true
    }
  }
})

