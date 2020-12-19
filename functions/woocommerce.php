<?php

/**
 * Adding support
 */
function customtheme_add_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}
add_action( 'after_setup_theme', 'customtheme_add_woocommerce_support' );

/**
 * Override theme default specification for product # per row
 */
function loop_columns() {
    return 4;
}
add_filter('loop_shop_columns', 'loop_columns', 999);