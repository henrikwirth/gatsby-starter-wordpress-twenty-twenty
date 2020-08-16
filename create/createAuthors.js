const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage } = options

  const { data } = await graphql(/* GraphQL */ `
    {
      allWpUser {
        nodes {
          uri
          databaseId
          slug
          name
        }
      }
    }
  `)

  // const chunkedContentNodes = chunk(data.allWpPost.nodes, perPage)
  if (!data.allWpUser.nodes || data.allWpUser.nodes.length === 0) return

  await Promise.all(
    data.allWpUser.nodes.map(async (user, index) => {
      const { data } = await graphql(/* GraphQL */ `
            {
                allWpPost(filter: {author: {node: {databaseId: {eq: ${user.databaseId} }}}}, sort: { fields: date, order: DESC }) {
                    nodes {
                        uri
                        databaseId
                        slug
                    }
                }
            }
          `)

      if (!data.allWpPost.nodes || data.allWpPost.nodes.length === 0) return

      const chunkedContentNodes = chunk(data.allWpPost.nodes, perPage)

      const userPath = user.uri

      await Promise.all(
        chunkedContentNodes.map(async (nodesChunk, index) => {
          const firstNode = nodesChunk[0]

          await actions.createPage({
            component: resolve(`./src/templates/archive.js`),
            path: index === 0 ? userPath : `${userPath}page/${index + 1}/`,
            context: {
              firstId: firstNode.id,
              archiveType: "author",
              archivePath: userPath,
              userDatabaseId: user.databaseId,
              offset: perPage * index,
              pageNumber: index + 1,
              totalPages: chunkedContentNodes.length,
              perPage,
            },
          })
        })
      )
    })
  )
}
