import fetchAPI from './api'

export const getTeamMembers = () => fetchAPI('/team_members')
