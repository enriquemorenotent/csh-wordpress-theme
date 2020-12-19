<?php

function csh_gutenber_default_colors()
{
    add_theme_support(
        "editor-color-palette",
        [
            [
                "name" => "White",
                "slug" => "white",
                "color" => "#ffffff"
            ],
            [
                "name" => "Black",
                "slug" => "black",
                "color" => "#000000"
            ],
            [
                "name" => "Red",
                "slug" => "red",
                "color" => "#d30050"
            ],
            [
                "name" => "Foo",
                "slug" => "foo",
                "color" => "#262582"
            ],

        ]
    );

    add_theme_support(
        "editor-font-sizes",
        array(
            array(
                "name" => "Normal",
                "slug" => "normal",
                "size" => 16,
            )
        )
    );
}

add_action("init", "csh_gutenber_default_colors");

function csh_gutenberg_blocks()
{
    wp_register_script(
        "csh-blocks-js",
        get_template_directory_uri() . "/build/index.js",
        array(
            'wp-editor',
            'wp-blocks',
            'wp-components',
            // 'wp-element',
        ),
    );

    wp_register_style(
        "csh-blocks-css",
        get_template_directory_uri() . "/blocks.css",
        []
    );

    wp_register_style(
        "csh-blocks-editor-css",
        get_template_directory_uri() . "/blocks-editor.css",
        []
    );

    register_block_type("csh/cta", array(
        "editor_script" => "csh-blocks-js",
        "editor_style" => "csh-blocks-editor-css",
        "style" => "csh-blocks-css"
    ));
}

add_action("init", "csh_gutenberg_blocks");

