export interface SideNavMenuItem {
  title: string
  icon: string
}

export const SIDENAV_MENU_ITEMS: SideNavMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'analytics',
  },
  {
    title: 'Accounts',
    icon: 'folder'
  },
  {
    title: 'Transactions',
    icon: 'paid'
  }
]
