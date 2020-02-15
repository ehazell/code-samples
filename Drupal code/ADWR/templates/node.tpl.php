<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?>">
  <div class="node-inner node-content">

    <?php if (!$page && $title): ?>
      <h2 class="title node-title">
        <?php print $title; ?>
      </h2>
    <?php endif; ?>

     <div class="content">
      <?php hide($content['comments']); ?>
      <?php hide($content['links']); ?>
      <?php print render($content); ?>
      <?php print render($content['comments']); ?>
    </div>

    <?php print render($content['links']); ?>


  </div>
</div>