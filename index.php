<?php get_header() ?>


<div class="container">
    <div class="row">
        <?php if ( have_posts() ): ?>
            <?php while ( have_posts() ): ?>
                <?php the_post(); ?>
                <div class="col">
                    <h1><?php the_title(); ?></h1>
                    <?php the_content(__('(more...)')); ?>
                </div>
            <?php endwhile; ?>
        <?php else: ?>
        <?php endif; ?>

    </div>
</div>

<?php get_footer() ?>

