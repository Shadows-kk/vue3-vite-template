<template>
  <div>
    <el-table :data="data" style="width: 100%" v-bind="$attrs">
      <template v-for="(item, index) in tableOptions" :key="index">
        <!-- 普通列，无需插槽处理 -->
        <el-table-column
          v-if="!item.slot"
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :width="item.width"
          :sortable="item.sortable"
        ></el-table-column>
        <!-- 特殊列，需要插槽处理 -->
        <el-table-column
          v-else
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :width="item.width"
        >
          <template #default="scope">
            <slot :name="item.slot" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 操作列 -->
      <el-table-column
        v-if="actionOptions"
        :label="actionOptions.label"
        :align="actionOptions.align"
        :width="actionOptions.width"
      >
        <template #default="scope">
          <slot name="action" :scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <div
      class="pagenation"
      :style="{
        justifyContent: paginationJustify,
      }"
      v-if="pagination"
    >
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSizes"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  // 决定表格是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 分页器当前页
  currentPage: {
    type: Number,
    default: 1,
  },
  // 每一页的数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 每一页数据可选值
  pageSizes: {
    type: Array,
    default: [10, 20, 30, 40],
  },
  // 数据总数
  total: {
    type: Number,
  },
  // 分页器的排列方式
  paginationAlign: {
    type: String,
    default: "center",
  },
});
const emits = defineEmits(["sizeChange", "currentChange"]);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
// 拿到表格中的普通项
const tableOptions = computed(() =>
  props.options.filter((item) => !item.action)
);
// 拿到表格中的操作项
const actionOptions = computed(() => props.options.find((item) => item.action));
// 处理分页器的排列方式
let paginationJustify = computed(() => {
  switch (props.paginationAlign) {
    case "left":
      return "flex-start";
    case "center":
      return "center";
    case "right":
      return "flex-end";
  }
});
// 分页数据改变
const handleSizeChange = (val) => {
  emits("sizeChange", val);
};
const handleCurrentChange = (val) => {
  emits("currentChange", val);
};
</script>

<style lang="scss" scoped>
.pagenation {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
