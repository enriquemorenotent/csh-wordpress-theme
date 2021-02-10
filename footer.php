        <footer>
            <div class="container">
            <div class="row">
            <div class="col-md-4">
                <h4>Quick links</h4>
                <?php wp_nav_menu( ['theme_location' => 'footer-menu'] ); ?>
            </div>
            <div class="col-md-4">
                <h4>Kontact</h4>
                <ul class="contact">
                    <li><i class="fas fa-phone-alt"></i> 0351 8489549</li>
                    <li><i class="far fa-envelope"></i> cosmetic_dd@web.de</li>
                    <li><i class="far fa-clock"></i> Mon - Frei: 09:00 - 17:00 </li>
                </ul>
            </div>
            <div class="col-md-4">
            </div>
            </div>
            </div>
        </footer>

        <?php wp_footer() ?>
    </body>
</html>