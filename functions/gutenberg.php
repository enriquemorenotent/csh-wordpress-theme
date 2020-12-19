<?php

// function csh_gutenber_default_colors()
// {
//     add_theme_support(
//         "editor-color-palette",
//         array(
//             array(
//                 "name" => "White",
//                 "slug" => "white",
//                 "color" => "#ffffff"
//             ),
//             array(
//                 "name" => "Red",
//                 "slug" => "red",
//                 "color" => "#d30050"
//             )
//         )
//     );

//     add_theme_support(
//         "editor-font-sizes",
//         array(
//             array(
//                 "name" => "Normal",
//                 "slug" => "normal",
//                 "size" => 16,
//             )
//         )
//     );
// }

// add_action("init", "csh_gutenber_default_colors");

// function csh_gutenberg_blocks()
// {
//     wp_register_script(
//         "csh-cta-js",
//         get_template_directory_uri() . "/build/index.js",
//         array(
//             'wp-editor',
//             'wp-blocks',
//             'wp-components',
//             // 'wp-element',
//         ),
//     );

//     register_block_type("csh/cta", array(
//         "editor_script" => "csh-cta-js",
//     ));
// }

// add_action("init", "csh_gutenberg_blocks");