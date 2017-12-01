<template>
  <div id="tooltip">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Basic Usage</h2>
          </div>
          <div class="idb-block-content">
            <p>Easily add tooltips to elements or components via the <code>&#60;b-tooltip&#62;</code> component or <code>v-b-tooltip</code> directive (preferred method).</p>
            <b-btn variant="primary" class="mb-20" v-b-tooltip.hover.auto title="I'm a tooltip!">Hover Me</b-btn>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Positioning</h2>
          </div>
          <div class="idb-block-content">
            <b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.top title="Tooltip on top!">Tooltip On Top</b-btn>
            <b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.bottom title="Tooltip on bottom!">Tooltip On Bottom</b-btn>
            <b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.left title="Tooltip on left!">Tooltip On Left</b-btn>
            <b-btn variant="primary" class="mr-10 mb-10" v-b-tooltip.hover.right title="Tooltip on right!">Tooltip On Right</b-btn>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Popover</h2>
          </div>
          <div class="idb-block-content">
            <p>The Popover feature, which provides a tooltip-like behavior, can be easily applied to any interactive element via the <code>&#60;b-popover&#62;</code> component or <code>v-b-popover</code> directive.</p>
            <b-btn variant="primary" class="mb-10" v-b-popover.hover.auto="'I am popover content!'" title="Popover Title">Hover Me</b-btn>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Popover Positioning</h2>
          </div>
          <div class="idb-block-content">
            <p>The Popover feature, which provides a tooltip-like behavior, can be easily applied to any interactive element via the <code>&#60;b-popover&#62;</code> component or <code>v-b-popover</code> directive.</p>
            <b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.top="'I am popover content!'" title="Popover On Top">Popover On Top</b-btn>
            <b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.bottom="'I am popover content!'" title="Popover On Bottom">Popover On Bottom</b-btn>
            <b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.left="'I am popover content!'" title="Popover On Left">Popover On Left</b-btn>
            <b-btn variant="primary" class="mb-10 mr-10" v-b-popover.hover.right="'I am popover content!'" title="Popover On Right">Popover On Right</b-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tooltip'
}
</script>
