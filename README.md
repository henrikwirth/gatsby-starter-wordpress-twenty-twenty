# Gatsby Starter - WordPress Twenty Twenty

A port of the WordPress Twenty Twenty theme to Gatsby. 

**Works pretty well but still a work in progress**

This starter uses the new `gatsby-source-wordpress@v4`. You can find documentation for that package [here](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/).

Checkout some options of the source plugin: [plugin-options.md](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/plugin-options.md)

## Plugin Versions

Last tested with the following plugin versions.

- WPGraphQL: 1.1.3
- WPGatsby: 1.0.3
- gatsby-source-wordpress: 4.0.1

## WordPress Setup

1. Make sure to install the two required WP plugins [wp-gatsby](https://github.com/gatsbyjs/wp-gatsby) and [wp-graphql](https://github.com/wp-graphql/wp-graphql)
2. Best you install and activate the default WordPress Twenty Twenty theme
3. Make sure you have Menus with the following slugs: 
   -  `primary` - Thats the top menu
   -  `extended` - That is the menu that opens on the right side as drawer
   -  `social-links-menu` - For the Social menu in the footer and in the expanded drawer
      -  For the social Icons you need to adjust `SocialMenu.js`. There is a `SocialIcon` function that parses svgs depending on the Link label
4. Rename `.env.example` file to `.env` and edit it with your domain variables.
      
## Limitations

-  Comments are not implemented yet.
-  The monthly archive pages are not implemented.
-  Tags are not implemented (only Categories).
-  Surely there is more. Feel free to suggest things as issues. 

## Links

- [gatsby-source-wordpress (v4)](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md)
- [WPGatsby - WordPress Plugin](https://github.com/gatsbyjs/wp-gatsby)
- [Twenty Twenty - WordPress Theme](https://de.wordpress.org/themes/twentytwenty/)

## Acknowledgements

- [NeverNull GmbH](https://nevernull.io) - The team I'm working with. Checkout what we are building here: [mobileui.dev](https://mobileui.dev)
- [@TylerBarnes](https://github.com/TylerBarnes) - Head developer of gatsby-source-wordpress@v4
- [@JasonBahl](https://github.com/jasonbahl) - Head developer of WPGraphQL
- [@LouieChristie](https://github.com/louiechristie) - Open source contributor
