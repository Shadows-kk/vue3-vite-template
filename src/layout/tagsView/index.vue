<script setup>
import tagList from './tagList/index.vue'
</script>
<template>
  <div class="app-tagsview">
    <tag-list />
  </div>
</template>
<style lang="scss">
.app-tagsview {
  white-space: nowrap;
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid var(--color-border-2);
  // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  background: var(--color-menu-light-bg);

  .tags-wrap {
    padding-inline-start: 0;

    &>li {
      display: inline-block;

      &:first-of-type {
        // margin-left: 15px;
        // border-left: 1px solid var(--color-border-2);

      }

      &:last-of-type {
        margin-right: 15px;
        // border-right: 1px solid var(--color-border-2);
      }

      &.tag-home {

        .el-tag {
          background-color: #3794ff;

          .el-icon {
            color: #fff;
            transition: all 100ms;

            &:hover {
              background-color: transparent;
            }
          }
        }

        &:hover {
          .el-icon {
            transform: scale(1.3);
            transition: all 100ms;
          }
        }
      }
    }
  }
}
</style>
