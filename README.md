# Gatsby Starter - WordPress Twenty Twenty

## Setup and Usage

-  Follow upstream repo instructions here: [@henrikwirth/gatsby-starter-wordpress-twenty-twenty](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty)
-  To add additional footer widget menus, update the WordPress Twenty Twenty theme `functions.php`:

```
/**
 * Register navigation menus uses wp_nav_menu in five places.
 */
function twentytwenty_menus() {

	$locations = array(
		'primary'  => __( 'Desktop Horizontal Menu', 'twentytwenty' ),
		'expanded' => __( 'Desktop Expanded Menu', 'twentytwenty' ),
		'mobile'   => __( 'Mobile Menu', 'twentytwenty' ),
		'footer-1'   => __( 'Footer Menu 1', 'twentytwenty' ),
		'footer-2'   => __( 'Footer Menu 2', 'twentytwenty' ),
		'footer-3'   => __( 'Footer Menu 3', 'twentytwenty' ),
		'footer-4'   => __( 'Footer Menu 4', 'twentytwenty' ),
		'footer-5'   => __( 'Footer Menu 5', 'twentytwenty' ),
		'social'   => __( 'Social Menu', 'twentytwenty' ),
	);

	register_nav_menus( $locations );
}

add_action( 'init', 'twentytwenty_menus' );
```

## Additional Features

-  Netlify contact form
-  Landing page
-  Footer widget menus

## Limitations

-  Comments are not implemented.
-  The monthly archive pages are not implemented.
-  Tags are not implemented (only Categories).

## TODO

-  Featured images
-  Google Analytics
-  Google Maps
-  Customizer

## Acknowledgements

- [@henrikwirth](https://github.com/henrikwirth/gatsby-starter-wordpress-twenty-twenty)
