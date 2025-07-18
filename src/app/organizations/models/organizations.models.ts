export interface Organization {
  name: string
  id?: string
}

export interface OrganizationUser {
  active: boolean
  organization: Organization
}
