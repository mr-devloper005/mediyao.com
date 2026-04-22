export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press Releases',
    route: '/updates',
    description: 'Official media announcements and company updates.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
