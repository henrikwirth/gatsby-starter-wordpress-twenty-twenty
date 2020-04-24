const path = require(`path`)
const glob = require(`glob`)

const createBlog = require(`./create/createBlog`)
const createContentTypes = require(`./create/createContentTypes`)
const createCategories = require(`./create/createCategories`)
const createAuthors = require(`./create/createAuthors`)

const getTemplates = () => {
    const sitePath = path.resolve(`./`)
    return glob.sync(`./src/templates/**/*.js`, {cwd: sitePath})
}


exports.createPages = async ({actions, graphql}) => {

    const {data: wpSettings} = await graphql(`
        {
            wp {
                readingSettings {
                        postsPerPage
                }
            }
        }
    `)

    const perPage = wpSettings.wp.readingSettings.postsPerPage || 10
    const blogURI = "/"
    const templates = getTemplates()

    await createContentTypes({actions, graphql}, {templates})
    await createBlog({actions, graphql}, {perPage, blogURI})
    await createCategories({actions, graphql}, {perPage})
    await createAuthors({actions, graphql}, {perPage})
}
