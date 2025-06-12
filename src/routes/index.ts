import type RouterItemType from '@/types/routerType'
import loadable from '@loadable/component'

const lazyWarpper = (compPath: string) => loadable(() => import(`@/pages${compPath}`))

export default [
  {
    path: '/home',
    key: 'Home',
    Component: lazyWarpper('/home'),
    menu: true,
    authKey: 'test-key',
    children: []
  },

] as RouterItemType[]