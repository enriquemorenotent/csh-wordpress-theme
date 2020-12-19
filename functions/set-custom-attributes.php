<?php

function set_custom_attributes($wp_customize)
{
    // $wp_customize->add_panel("dummy-panel", [
    //     "title" => "Dummy Panel",
    //     "description" => "This is a dummy panel",
    //     "priority" => 10
    // ]);

    // $wp_customize->add_section("dummy-section", [
    //     "title" => "Dummy section",
    //     "priority" => 10,
    //     "panel" => "dummy-panel"
    // ]);


    // $wp_customize->add_setting("dummy-panel", ["default" => ""]);

    // $wp_customize->add_control("dummy-attribute", [
    //     "label" => "Dummy attribute",
    //     "type" => "label",
    //     "section" => "dummy-section",
    //     "settings" => "dummy-panel"
    // ]);
}

add_action("customize_register", "set_custom_attributes");