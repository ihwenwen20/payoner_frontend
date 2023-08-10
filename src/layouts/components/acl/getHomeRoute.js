/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'user') return '/acl'
  else return '/home'
}

export default getHomeRoute
