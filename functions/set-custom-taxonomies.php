<?php

function set_custom_taxonomies()
{
    // register_taxonomies("news-category", "news-item", [
    //     "label" => __("Category"),
    //     "rewrite" => ["slug" => "news-category"],
    //     "hierarchical" => true
    // ]);
}

add_action("init", "set_custom_taxonomies");