<?php

function set_theme_support()
{
    // Editor styles
    add_theme_support( 'editor-styles' );

    // Tab title shows the post name
    add_theme_support( 'title-tag' );

    // All kinds of post can use a "Featured image"
    add_theme_support("post-thumbnails");

    // Blocks can take the whole width of the editor
    add_theme_support("align-wide");

    // Site logo can be set under "Appearance ->> Customize -> Site identity"
    add_theme_support("custom-logo", [
        "width" => 90,
        "height" => 120,
        "flex-width" => true,
        "flex-height" => true
    ]);

    // Enables HTML5 features, like using <article> instead of <div class="article">, for example
    add_theme_support("html5", [
        "search-form",
        "comment-form",
        "comment-list",
        "gallery",
        "caption",
        "script",
        "style"
    ]);

    // Enable excerpts for pages. By default, it is enabled only for posts
    add_post_type_support("page", "excerpt");

    // Define custom image size presets
    // Example: HD images with a resolution 1920x1080
    add_image_size("HD", 1920, 1080);

    // Default thumbnail size
    set_post_thumbnail_size(800, 600);

}

add_action("after_setup_theme", "set_theme_support");