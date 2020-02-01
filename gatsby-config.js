require("dotenv").config({
  path: `.env.concurrent_download`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://dev-gatsby-source-wordpress-v4.pantheonsite.io/graphql`,
        verbose: true,
        // for wp-graphql-gutenberg, attributes currently breaks due
        // to the origin schema. It works if we exclude attributes
        excludeFields: [`attributes`],
        schema: {
          queryDepth: 15,
          typePrefix: `Wp`,
        },
        develop: {
          nodeUpdateInterval: 5000,
        },
        type:
          // our "alot" post type has 30k posts.
          // Lets just pull 50 in development to make it easy on ourselves.
          // and we don't actually need more than 5000 in production!
          process.env.NODE_ENV === `development`
            ? {
                Alot: {
                  limit: 50,
                },
              }
            : {
                Alot: {
                  limit: 800,
                },
              },
      },
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
