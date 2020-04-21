import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu, Button, Grid, Box } from "@chakra-ui/core"
import { normalizePath } from "../utils/get-url-path"

export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            connectedObject {
              ... on WpContentNode {
                uri
              }
            }
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <Box mb={10}>
      <Menu>
        <Grid autoFlow="column">
          {wpMenu.menuItems.nodes.map((menuItem, i) => {
            const path = menuItem?.connectedObject?.uri ?? menuItem.url

            return (
              <Link style={{ display: `block` }} to={normalizePath(path)}>
                <Button w="100%" key={i + menuItem.url} as={Button}>
                  {menuItem.label}
                </Button>
              </Link>
            )
          })}
        </Grid>
      </Menu>
    </Box>
  ) : null
}
