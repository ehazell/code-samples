<?php $tag = $block->subject ? 'section' : 'div'; ?>

<<?php print $tag; ?> id="<?php echo $block_html_id; ?>" class="<?php echo $classes; ?>">
<div class="block-inner clearfix">
  <?php print render($title_prefix); ?>
  <?php if ($block->subject): ?>
    <h2<?php print $title_attributes; ?>><?php print $block->subject; ?></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <div class="content" <?php print $content_attributes; ?>>

    <script type="text/javascript" src="//app.icontact.com/icp/core/mycontacts/signup/designer/form/automatic?id=495&cid=1630359&lid=2199"></script>

<!--    <form id="ic_signupform" captcha-key="6LeCZCcUAAAAALhxcQ5fN80W6Wa2K3GqRQK6WRjA" captcha-theme="light" new-captcha="true" method="POST" action="https://app.icontact.com/icp/core/mycontacts/signup/designer/form/?id=495&cid=1630359&lid=2199">-->
<!--      <div class="elcontainer normal stacked center-aligned">-->
<!--        <div class="sortables">-->
<!--          <div class="formEl fieldtype-input required" data-label="Sign up for our news updates" data-validation-type="1" style="display: inline-block; width: 90%;">-->
<!--            <label>Sign up for our news updates<span class="indicator required">*</span></label><input name="data[email]" placeholder="Email" type="text">-->
<!--          </div>-->
<!--          <div class="formEl fieldtype-checkbox required" data-label="Lists" data-validation-type="1" dataname="listGroups" style="display: none; width: 100%;">-->
<!--            <h3>Lists<span class="indicator required">*</span></h3>-->
<!--            <div class="option-container">-->
<!--              <label class="checkbox"><input alt="Lists" checked="checked" name="data[listGroups][]" type="checkbox" value="3393">AZ Water Newsletter List</label>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="submit-container">-->
<!--            <input class="btn btn-submit" type="submit" value="Submit">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="hidden-container">&nbsp;</div>-->
<!--      </div>-->
<!--    </form>-->
  </div>
</div>
</<?php print $tag; ?>>
