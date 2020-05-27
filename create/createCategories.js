const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage } = options

  const { data: categoryData } = await graphql(/* GraphQL */ `
    {
      allWpTermNode {
        nodes {
          ... on WpCategory {
            name
            uri
            databaseId
          }
        }
      }
    }
  `)

  if (
    !categoryData.allWpTermNode.nodes ||
    categoryData.allWpTermNode.nodes.length === 0
  )
    return

  await Promise.all(
    categoryData.allWpTermNode.nodes.map(async (category, index) => {
      // making sure if the union objects are empty, that this doesn't go further (... on WpCategory can produce empty {} objects)
      if (Object.keys(category).length) {
        const { data } = await graphql(/* GraphQL */ `
          {
            allWpPost(
              filter: {
                categories: {
                  nodes: {
                    elemMatch: { databaseId: { eq: ${category.databaseId} } }
                  }
                }
              }
              sort: { fields: date, order: DESC }
            ) {
              nodes {
                uri
                id
                date
              }
            }
          }
        `)

        if (!data.allWpPost.nodes || data.allWpPost.nodes.length === 0) return

        const chunkedContentNodes = chunk(data.allWpPost.nodes, perPage)

        const categoryPath = category.uri

        await Promise.all(
          chunkedContentNodes.map(async (nodesChunk, index) => {
            const firstNode = nodesChunk[0]

            await actions.createPage({
              component: resolve(`./src/templates/archive.js`),
              path:
                index === 0
                  ? categoryPath
                  : `${categoryPath}page/${index + 1}/`,
              context: {
                firstId: firstNode.id,
                archiveType: "category",
                archivePath: categoryPath,
                categoryDatabaseId: category.databaseId,
                offset: perPage * index,
                pageNumber: index + 1,
                totalPages: chunkedContentNodes.length,
                perPage,
              },
            })
          })
        )
      }
    })
  )
}
