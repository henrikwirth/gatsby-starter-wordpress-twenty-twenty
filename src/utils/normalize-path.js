// @todo once the source plugin is updated to the latest WPGQL version, we wont need this helper anymore
exports.normalizePath = (path) => {
  if (!path.endsWith(`/`)) {
    path = `${path}/`
  }

  if (!path.startsWith(`http`) && !path.startsWith(`/`)) {
    path = `/${path}`
  }

  return path
}
