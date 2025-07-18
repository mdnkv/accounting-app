export interface SideNavMenuItem {
  title: string
  icon: string
  route: string
}

export const SIDENAV_MENU_ITEMS: SideNavMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'analytics',
    route: '/dashboard'
  },
  {
    title: 'Accounts',
    icon: 'folder',
    route: '/accounts'
  },
  {
    title: 'Transactions',
    icon: 'paid',
    route: '/transactions'
  }
]
