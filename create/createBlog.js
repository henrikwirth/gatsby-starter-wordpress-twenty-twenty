const { resolve } = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({ actions, graphql }, options) => {
  const { perPage, blogURI } = options

  const { data } = await graphql(/* GraphQL */ `
    {
      allWpPost(sort: { fields: modifiedGmt, order: DESC }) {
        nodes {
          uri
          id
        }
      }
    }
  `)

  const chunkedContentNodes = chunk(data.allWpPost.nodes, perPage)

  await Promise.all(
    chunkedContentNodes.map(async (nodesChunk, index) => {
      const firstNode = nodesChunk[0]

      await actions.createPage({
        component: resolve(`./src/templates/archive.js`),
        path: index === 0 ? blogURI : `${blogURI}page/${index + 1}/`,
        context: {
          firstId: firstNode.id,
          archivePath: blogURI,
          archiveType: "post",
          offset: perPage * index,
          pageNumber: index + 1,
          totalPages: chunkedContentNodes.length,
          perPage,
        },
      })
    })
  )
}
