<?php get_header() ?>

<main>
    <?php if ( have_posts() ): ?>
        <?php while ( have_posts() ): ?>
            <?php the_post(); ?>
            <?php the_content(__('(more...)')); ?>
        <?php endwhile; ?>
    <?php else: ?>
    <?php endif; ?>
</main>

<?php get_footer() ?>

