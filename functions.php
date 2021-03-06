<?php

@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );

include "functions/set-features-support.php";
include "functions/enqueue-styles-and-scripts.php";
include "functions/register-menus.php";
include "functions/set-custom-attributes.php";
include "functions/set-custom-post-types.php";
include "functions/set-custom-taxonomies.php";
include "functions/add-shortcodes.php";
include "functions/woocommerce.php";
include "functions/gutenberg.php";

