<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>">
  <div class="node-inner node-content">
    <?php print render($content['field_banner_image']); ?>
    <?php if (!$page && $title): ?>
      <h2 class="title node-title">
        <?php print $title; ?>
      </h2>
    <?php endif; ?>

    <!-- <div class="sharethis">
      <ul>
        <li><span class='st_facebook_large' displayText='Facebook'></span></li>
        <li><span class='st_twitter_large' st_via="azwater"displayText='Tweet'></span></li>
        <li><span class='st_googleplus_large' displayText='Google +'></span></li>
        <li><span class='st_email_large' displayText='Email'></span></li>
        <li><span class='st_print_large' displayText='Print'></span></li>
      </ul>
    </div> -->

    <div class="content">
      <?php hide($content['comments']); ?>
      <?php hide($content['links']); ?>
      <?php print render($content); ?>
<!--      <div class="newsletter" role="group" aria-labelledby="ic_signupform">-->
<!--        <form id="ic_signupform" class="form-inline" captcha-key="6LeCZCcUAAAAALhxcQ5fN80W6Wa2K3GqRQK6WRjA" captcha-theme="light" new-captcha="true" method="POST" action="https://app.icontact.com/icp/core/mycontacts/signup/designer/form/?id=367&cid=1630359&lid=2199">-->
<!--          <input type="hidden" name="redirect" value="http://www.icontact.com/www/signup/thanks.html">-->
<!---->
<!---->
<!--          <div id="SignUp" class="form-group elcontainer normal inline-label-left left-aligned">-->
<!--            <div class="sortables">-->
<!--              <div class="row formEl fieldtype-input required" data-validation-type="1" data-label="Sign up for our news updates">-->
<!--                <label class="col-sm-5 col-xs-12">Sign up for our news updates</label>-->
<!--                <input class="col-sm-4 col-xs-12 form-control" type="text" placeholder="Email" name="data[email]" aria-label="Subscribe for news updates" title="Subscribe to Email Newsletter">-->
<!--                <div class="col-sm-3 col-xs-12 submit-container">-->
<!--                  <input type="submit" value="Sign Up" class="form-control btn btn-submit">-->
<!--                </div>-->
<!--              </div>-->
<!--                <div class="formEl fieldtype-checkbox required" dataname="listGroups" data-validation-type="1" data-label="Lists" style="display: none; width: 100%;">-->
<!--                  <h3>Lists<span class="indicator required">*</span></h3>-->
<!--                  <div class="option-container">-->
<!--                    <label class="checkbox"><input type="checkbox" alt="Lists" name="data[listGroups][]" value="3393" checked="checked">AZ Water Newsletter List</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="hidden-container"></div>-->
<!--            </div>-->
<!--          </form>-->
<!--          <img src="//app.icontact.com/icp/core/signup/tracking.gif?id=367&cid=1630359&lid=2199"/>-->
<!--      </div>-->
      <?php print render($content['comments']); ?>
    </div>

    <?php print render($content['links']); ?>

  </div>
</div>
