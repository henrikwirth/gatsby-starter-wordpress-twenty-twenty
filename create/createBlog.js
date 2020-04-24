const {resolve} = require(`path`)
const chunk = require(`lodash/chunk`)

module.exports = async ({actions, graphql}, options) => {
    const {perPage, blogURI} = options

    const {data} = await graphql(`
    {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          uri
          id
          date
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
                    archiveType: 'post',
                    offset: perPage * index,
                    pageNumber: index + 1,
                    totalPages: chunkedContentNodes.length,
                    perPage,
                },
            })
        })
    )
}
