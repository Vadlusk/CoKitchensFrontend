import fetchAPI from './api'

export const getTeamMembers = () => fetchAPI('/team_members')
export const getKitchens = () => fetchAPI('/kitchens')
export const getStories = () => fetchAPI('/stories')
export const getTools = () => fetchAPI('/tools')
