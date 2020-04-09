# gatsby-source-wordpress V4 (alpha) starter

**WARNING:** this is a work in progress. There will be bugs. Features and api's may change in this starter and the new source plugin it's using. This starter is also not thoroughly considered and was written quickly to show how to set-up the new plugin.

## Intro

This starter uses an early alpha version of the upcoming `gatsby-source-wordpress@v4`. For now, the only documentation that exists is here in this starter. That will soon change - better docs will be written and moved to the Gatsby repo as features solidify and things become more stable.

## Installation

- Install Gatsby and gatsby-cli
- Set up this starter locally `gatsby new wordpress-v4 https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental`
- In the `WordPress/plugins/` directory of this starter there are two plugins which both need to be installed into a live WordPress installation
  - WPGraphQL v0.6.1 - this adds GraphQL to our WordPress server
  - WPGatsby v0.0.1 - this modifies the WPGQL schema and records when user actions have happened to allow us to do selective cache invalidation in Gatsby (to speed up builds).
  - For now, ignore the update notification for WPGatsby on the plugins page in wp-admin https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/issues/1.

## Getting started

- In `gatsby-config.js`, update the plugin options for `gatsby-source-wordpress-experimental`
  - Change `url` to point to your WordPress install. This should be the full url of your graphql endpoint. Eg `https://yoursite.com/graphql`
  - The `nodeUpdateInterval` option specifies in milliseconds how often Gatsby will ask WP what data has changed during development. If you want to see data update in near-realtime while you're developing, set this low. Your server may have trouble responding to too many requests over a long period of time and in that case, set this high. Setting it higher saves electricity too ⚡️🌲
- in .env.GATSBY_CONCURRENT_DOWNLOAD, set how many concurrent connections your server can handle. If this plugin knocks your server over and it stops responding, lower the concurrent connections.

## Cool features

- Supports Gatsby cloud preview (see below)
- Automatically pulls as much of the remote WPGQL schema as possible and creates Gatsby nodes from that data. Data is never fetched twice. If we will already have data, for example on a connection field between an Author and a Post, we only pull the id of the Post and link the field to the Post node in Gatsby.
- After the first build or run of develop only changed data is pulled.
- Only referenced media items and files are downloaded. If you have a site where an admin has uploaded 10k images but there are only 1k pages, we don't want to have to pull all those images, just the ones that are used. That's the default behaviour of the source plugin. There is also an option to lazily download files as they're queried for, but it's currently problematic for some CI providers, it messes up cli output, and Gatsby currently only runs 4 gql queries concurrently which slows down file fetching. This will work in the future though!
- Potentially works with all (or most) WPGQL plugins. So ACF, polylang, etc will work. See "known issues" below if a plugin doesn't work.
- Do you have a site with 50k posts and you want to do some quick development on it? You can limit the amount of nodes that will be pulled by setting an option to limit the amount of posts that will be pulled (by typename) in the plugin options. For example, you can get working quickly by setting the plugin to only pull 10 posts.
- If the remote schema changes between builds, the entire cache will be invalidated and the plugin will start a fresh pull/build.
- Lot's of other things :p will write more/actual documentation as features solidify

## WP Preview

Preview is supported! For now with a couple caveats:

- [wp-graphql-jwt-auth](https://github.com/wp-graphql/wp-graphql-jwt-authentication) is a required plugin until jwt auth is added directly to WPGatsby
- Since WP currently only revisions titles and post content the same is true for WPGraphQL. Soon ACF revision support will be added and any unrevisioned data/meta will be pulled from the main post of the revision (for ex for featured images)

To get started, setup a Preview instance on Gatsby cloud, then take your preview URL and add it to your WP instance under wp-admin->Settings->GatsbyJS->"Preview Webhook"

You can also host your own preview server or test it out locally by running `ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop` and pointing your Preview webhook setting at `http://localhost:8000` or at the url for your self-hosted preview instance.

## Recommendations

- For now I recommend hosting on WPEngine (or another mid-to-high-performance WP host) for your remote WP server, and using Local by Flywheel (upgrade to the latest version for ultra-speed) to do local development. You can use this with other setups, but it may be less enjoyable if your server is slower than the recommended setup. More work will be done in the future to ensure this works well on all types of hosts. If you use a slower setup, change GATSBY_CONCURRENT_DOWNLOADS to a lower number to prevent your server from getting overloaded.
- Stick to WPGraphQL v0.6.x for now, as previous or future versions may not yet work with the new source plugin. There will be a compatibility API coming soon which will give you the proper download links for WPGatsby and WPGraphQL based on your version of `gatsby-source-worpress` if your WP install has the wrong version.

## Debugging

If you're getting errors while the nodes are being sourced, you can see which query had the error with the following options:

```js
{
  resolve: `gatsby-source-wordpress-experimental`,
  options: {
    debug: {
      graphql: {
        showQueryOnError: true,
        showQueryVarsOnError: true,
        copyQueryOnError: true,
        panicOnError: true,
      },
    },
  }
}
```

## Super rough and unscientific benchmarks using pantheon as a host

- With a 6k page site that has 5k images and 12k image transforms - Gatsby cloud built this in 20 minutes. A second rebuild with some changed content took 2 minutes.
- With a 500 page site with 500 images - Gatsby cloud built this in 3:30 and a second rebuild with changed content took 1 minute.
- locally these both build in 20 seconds on a second run. re-starting your development server always takes around 12 seconds regardless of the size of your site.

## Known issues

- This starter doesn't build it's Styled components properly
- WPGatsby doesn't use the build webhook in settings
- The cache isn't selectively invalidated for every possible user interaction. For now this only works for creating/updating/deleting/reattributing users and adding or removing them based on if their profile is public or not, creating/deleting/drafting/updating posts/pages/CPT's, editing/creating/deleting media items, and adding/editing/deleting categories/terms/tags.
- Changing the homepage doesn't invalidate the cache
- Probably other things :p

## gatsby-source-wordpress-experimental

Currently the source plugin code lives here -> https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/gatsby-source-wordpress-experimental
And the WPGatsby code lives here -> https://github.com/TylerBarnes/gatsby/tree/feat/source-wordpress-v4/packages/wp-gatsby
