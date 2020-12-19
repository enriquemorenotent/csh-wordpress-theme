<?php

function csh_enqueue_styles_and_scripts()
{
    // Bootstrap

    wp_enqueue_style("bootstrap-style", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css");
    wp_enqueue_script("bootstrap-js", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js");

    // Fontawesome

    wp_enqueue_style("fontawesome-style" , "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

    // Custom styles

    wp_enqueue_style("main-style", get_stylesheet_uri());

    // Custom scripts

    wp_enqueue_script("main-js", get_template_directory_uri() . "/assets/js/index.js", ["jquery"]);
}

add_action("wp_enqueue_scripts", "csh_enqueue_styles_and_scripts");

function csh_enqueue_editor_styles()
{
    add_editor_style( './assets/css/style-editor.css');
}

add_action("after_setup_theme", "csh_enqueue_editor_styles");


/**
 * Enqueue block JavaScript and CSS for the editor
 */
// function my_block_plugin_editor_scripts()
// {
//     wp_enqueue_style(
//         'my-block-editor-css',
//         get_template_directory_uri() . "/assets/css/style-editor.css",
//         [ 'wp-edit-blocks' ],
//         filemtime( get_template_directory_uri() . "/assets/css/style-editor.css" )
//     );
// }

// // Hook the enqueue functions into the editor
// add_action( 'enqueue_block_editor_assets', 'my_block_plugin_editor_scripts' );
