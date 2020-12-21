<?php

function csh_gutenber_default_colors()
{
    add_theme_support(
        "editor-color-palette",
        [
            [
                "name" => "Default",
                "slug" => "default",
                "color" => "#cda34d"
            ],
            [
                "name" => "Primary",
                "slug" => "primary",
                "color" => "#d30050"
            ],
            [
                "name" => "Heading",
                "slug" => "heading",
                "color" => "#2f2e2c"
            ],
            [
                "name" => "Base",
                "slug" => "base",
                "color" => "#686663"
            ],
            [
                "name" => "Bg color",
                "slug" => "bg_color",
                "color" => "#f6f3ec"
            ],
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
        ]
    );

    add_theme_support(
        "editor-font-sizes",
        array(
            array(
                "name" => "Hero",
                "slug" => "hero",
                "size" => 36,
            )
        )
    );
}

add_action("init", "csh_gutenber_default_colors");
