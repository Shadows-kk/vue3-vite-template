<template>
  <ul class="tags-wrap">
    <li v-for="(tag, index) in tagList" :key="tag.path" @click="tagClick(tag)" :class="tagListCls(tag)">
      <el-dropdown trigger="contextmenu" :style="{ display: 'block' }" class="tagItem">
        <el-tag type="info" :closable="closable(tag)" @close="closeTag(tag)" :disable-transitions="false">
          <template v-if="tag.path === HomePath">
            <el-tooltip content="主页" placement="bottom" effect="dark">
              <div class="homeIcon">
                <el-icon>
                  <House />
                </el-icon>
              </div>
            </el-tooltip>

          </template>
          <template v-else>{{ tag.title }}</template>
        </el-tag>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="closeRight(index)">关闭右侧</el-dropdown-item>
            <el-dropdown-item @click="closeAll">关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </li>
  </ul>
</template>
<script setup>
import { computed, ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from 'pinia'

import { set } from "@vueuse/core";

import { HomePath } from "@/config/constants";
import { useTagsStore } from "@/pinia"

const router = useRouter();
const tagsStore = useTagsStore()
const pathname = computed(() => router.currentRoute.value.path)
const { tagList } = storeToRefs(tagsStore)
const tagListCls = (tag) => [{ 'tag-active': pathname.value === tag.path }, { 'tag-home': HomePath === tag.path }]
const closable = (tag) => tag.path !== HomePath;
const tagChange = () => {
  router.push(tagList.value[tagList.value.length - 1].path)
}
const closeTag = (tag) => {
  tagsStore.closeTagAction(tag)
  tagChange()
}
const closeRight = (index) => {
  tagsStore.closeRightTags(index)
  tagChange()
}
const closeAll = () => {
  tagsStore.$reset()
  tagChange()
}
const tagClick = (tag) => {
  router.push(tag.path)
}
</script>

<style lang="scss">
.tags-wrap {
  // background-color: #3794ff;
  margin: 0;
  position: relative;
  top: -10px;

  .tagItem {
    line-height: 36px;
    height: 36px;
    margin-right: 10px;
    border: 0;
    // border-left: 1px solid #666;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    background-color: #fff;
    vertical-align: inherit;

    .homeIcon {
      position: relative;
      top: 4px
    }

    .el-tag {
      width: 100% !important;
      height: 100% !important;
      padding: 0 20px;
      box-sizing: border-box;
      background-color: #fff;
      border: none;
      color: #333;
      font-size: 14px;
      line-height: 36px;
      vertical-align: top;

      &:hover {
        color: #fff;
        background-color: #3794ff;

        .el-icon {
          color: #fff;
        }
      }

      .el-icon {
        color: #333;
        font-size: 18px;

        &:hover {
          color: #fff;
          background-color: rgba(34, 12, 64, 0.6);
        }
      }
    }


  }

  .tag-active {
    .el-tag {
      background-color: #3794ff;
      color: #fff;

      .el-icon {
        color: #fff;
        font-size: 18px;

        &:hover {
          color: #fff;
          background-color: rgba(34, 12, 64, 0.6);
        }
      }
    }
  }
}
</style>
