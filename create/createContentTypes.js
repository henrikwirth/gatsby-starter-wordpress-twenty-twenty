const { resolve } = require(`path`)

const capitalize = (s) => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

module.exports = async ({ actions, graphql }, options) => {
  const { templates } = options

  const {
    data: { allWpContentType },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_TYPES {
      allWpContentType(filter: { graphqlPluralName: { ne: "mediaItems" } }) {
        nodes {
          graphqlSingleName
        }
      }
    }
  `)

  const contentTypeTemplates = templates.filter((path) =>
    path.includes(`./src/templates/types/`)
  )

  for (const contentType of allWpContentType.nodes) {
    const { graphqlSingleName } = contentType

    const contentTypeTemplate = contentTypeTemplates.find(
      (path) => path === `./src/templates/types/${graphqlSingleName}.js`
    )

    if (!contentTypeTemplate) {
      continue
    }

    const gatsbyNodeListFieldName = `allWp${capitalize(graphqlSingleName)}`

    const { data } = await graphql(/* GraphQL */ `
          query ALL_CONTENT_NODES {
            ${gatsbyNodeListFieldName} {
              nodes {
                uri
                id
                date
                ${graphqlSingleName === "page" ? "isFrontPage" : ""}
              }
            }
          }
        `)

    const { nodes } = data[gatsbyNodeListFieldName]

    await Promise.all(
      nodes.map(async (node, i) => {
        await actions.createPage({
          component: resolve(contentTypeTemplate),
          path: node.isFrontPage ? "/" : node.uri,
          context: {
            id: node.id,
            nextPage: (nodes[i - 1] || {}).id,
            previousPage: (nodes[i + 1] || {}).id,
          },
        })
      })
    )
  }
}
