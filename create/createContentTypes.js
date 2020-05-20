const { normalizePath } = require("../src/utils/normalize-path")

const { resolve } = require(`path`)

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

module.exports = async ({ actions, graphql }, options) => {
  const { templates } = options

  const {
    data: { allWpContentType },
  } = await graphql(`
    query ALL_CONTENT_TYPES {
      allWpContentType(filter: {graphqlPluralName: {ne: "mediaItems"}}) {
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

    // this is a super super basic template hierarchy
    // this doesn't reflect what our hierarchy will look like.
    // this is for testing/demo purposes
    const contentTypeTemplate = contentTypeTemplates.find(
      (path) => path === `./src/templates/types/${graphqlSingleName}.js`
    )

    if (!contentTypeTemplate) {
      continue
    }

    const gatsbyNodeListFieldName = `allWp${capitalize(graphqlSingleName)}`

    const { data } = await graphql(`
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

    // const fs = require('fs')
    // const fileOne = fs.createWriteStream('./fileWordPress.txt')
    // const fileTwo = fs.createWriteStream('./fileGatsby.txt')

    await Promise.all(
      nodes.map(async (node, i) => {
        // await fileOne.write("https://thesis.local" + normalizePath(node.uri) + '\r\n')
        // await fileTwo.write("https://thesis-gatsby.local" + normalizePath(node.uri) + '\r\n')
        // @todo: determine why pages using allWpContentNode queries
        // don't get automatically updated with incremental data fetching



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

    fileOne.end();
    fileTwo.end();
  }
}
