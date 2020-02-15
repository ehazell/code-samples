<div id="zone-footer" class="zone" role="contentinfo" aria-labelledby="<?php (($page['footer_first']) ? print('footer-first '):'') ?>footer-first-contact<?php (($page['footer_second']) ? print(' region-footer-second'):'') ?>">
  <div class="footer-content">
  <div class="col-sm-4 col-xs-12">
    <div class="footer-social">
      <h2>Follow Us</h2>
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
      <a class="btn btn-social-icon btn-linkedin" title="LinkedIn" href="https://www.linkedin.com/company/arizona-department-of-water-resources/" target="_blank"><span class="fa fa-linkedin"></span>
      <a class="btn btn-social-icon btn-wordpress" title="WordPress" href="https://azwaternews.com" target="_blank">
      <span class="fa fa-wordpress"></span>
     </a>
      <a class="btn btn-social-icon btn-briefcase" title="Careers at ADWR" href="http://www.hr.az.gov/AZStateJobs" target="_blank">
      <span class="fa fa-briefcase"></span>
      </a>
    </div> <!-- end .footer-social -->
  </div>
  <div class="col-sm-4 col-xs-12">
    <h2>Contact Info</h2>
  <?php if ($footer_settings['show branding'] || $footer_settings['show contact']) : ?>
  <?php include_once('footer-contact.inc'); ?>
  <?php endif; ?>

    </div>
    <div class="col-sm-4 col-xs-12">
      <div class="newsletter" role="group" aria-labelledby="ic_signupform">
      <h2>Newsletter Subscription</h2>
      <p>Sign up to get breaking news and information about Arizona’s water industry! </p>

     <form action="https://app.icontact.com/icp/core/mycontacts/signup/designer/form/?id=728&cid=1630359&lid=2199" method="post" target="_blank" id="ic_signupform" captcha-key="6LeCZCcUAAAAALhxcQ5fN80W6Wa2K3GqRQK6WRjA" captcha-theme="light" new-captcha="true" onsubmit="return verifyRequired265();" accept-charset="UTF-8">
        <div class="sortables row">
     <div class="col-sm-7 col-xs-12 formEl fieldtype-input required" data-validation-type="1" data-label="Email" style="display: inline-block;">
        <label>Email<span class="indicator required">*</span></label>
        <input type="text" placeholder="Email" title="Subscribe to Email Newsletter" name="data[email]" aria-label="Subscribe to Newsletter">
     </div>
     <div class="formEl fieldtype-checkbox required" dataname="listGroups" data-validation-type="1" data-label="Lists" style="display: none; width: 100%;">
        <h3>Lists<span class="indicator required">*</span></h3>
        <div class="option-container">
           <label class="checkbox"><input type="checkbox" alt="Lists" name="data[listGroups][]" value="3393" checked="checked">AZ Water Newsletter List</label>
        </div>
     </div>
     <div class="col-sm-5 col-xs-12 submit-container">
        <input type="submit" value="Submit" class="btn btn-submit">
     </div>
  </div>
  <div class="hidden-container"></div>

      </form>
      </div>
    </div>
  </div>
    <div class="col-sm-12 policy-sitemap">
      <div class="footer-links">&copy; 1980 - <?php echo date("Y"); ?> Arizona Department of Water Resources - <a href="http://az.gov/policies">Statements & Policies</a> | <a href="/sitemap.xml">Site Map</a></div>
    </div>

  <?php if ($page['footer_first']): ?>
    <div id="footer-first">
      <?php print render($page['footer_first']); ?>
    </div> <!-- end #footer-first -->
  <?php endif; ?>
  <?php if ($page['footer_second']) : ?>
    <div id="region-footer-second">
      <?php print render($page['footer_second']); ?>
    </div>
  <?php endif; ?>
  </div>
</div>
