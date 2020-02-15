<div id="zone-branding" class="zone" role="navigation" aria-labelledby="zone-branding">
  <div class="silhouette">
    <div id="region-branding" class="clearfix">
      <?php if ($logo || $site_name || $site_slogan): ?>
        <div class="site-details col-md-7 col-xs-12 clearfix">
          <?php if ($logo): ?>
            <a class="logo" href="/">
              <img class="visible-xs img-responsive site-logo" src="<?php echo $logo; ?>"
                   alt="<?php echo $persistent_site_name; ?> Logo">
            </a>
          <?php endif; ?>

          <?php if ($site_name || $site_slogan): ?>
            <div class="site-info">
              <?php if ($site_name): ?>
                <div class="site-name">
                  <h1>
                    <a href="/">
                      <?php echo $site_name; ?>
                    </a>
                  </h1>
                </div>
              <?php endif; ?>
              <?php if ($site_slogan): ?>
                <div class="site-slogan">
                  <div><?php echo $site_slogan; ?></div>
                </div>
              <?php endif; ?>
            </div>
          <?php endif; ?>
        </div>
      <?php endif; ?>
      <?php if ($page['branding']) : ?>
        <div class="col-md-3 col-xs-12">
          <?php print render($page['branding']); ?>
        </div>
      <?php endif; ?>
      <div class="social-networks col-md-2 hidden-xs">
         <a class="btn btn-social-icon btn-briefcase" title="Careers at ADWR" href="http://www.hr.az.gov/AZStateJobs" target="_blank">
          <span class="fa fa-briefcase"></span>
         </a>
         <a class="btn btn-social-icon btn-youtube" title="YouTube" href="https://www.youtube.com/channel/UCKvc5_o4nvfj-QIUQcgBEdQ" target="_blank">
          <span class="fa fa-youtube"></span>
         </a>
          <a class="btn btn-social-icon btn-twitter" title="Twitter" href="https://twitter.com/azwater" target="_blank">
          <span class="fa fa-twitter"></span>
        </a>
        <a class="btn btn-social-icon btn-facebook" title="Facebook" href="https://www.facebook.com/azwatergov/" target="_blank">
          <span class="fa fa-facebook"></span>
        </a>
        <a class="btn btn-social-icon btn-google" title="Google+" href="https://plus.google.com/u/0/113828969915636042943" target="_blank">
          <span class="fa fa-google-plus"></span>
        </a>
      </div>
    </div>

   <!--  <div class="hidden-xs" id="mobile-menu">
      <button type="button" class="navbar-toggle tb-megamenu-button menuInstance-processed" data-toggle="collapse" data-target=".nav-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div> -->
    <div id="logo" class="hidden-xs">
        <a class="adwr-seal" href="/"></a>
      </div>
    <?php if ($page['menu']) : ?>
      <?php print render($page['menu']); ?>

    <?php endif; ?>

  </div>
</div>
