<template>
  <div class="table-container">
    <table class="custom-table">
      <colgroup>
        <col style="width: 20%;" /> <!-- 第一列宽度 -->
        <col style="width: 20%;" /> <!-- 第二列宽度 -->
        <col style="width: 60%;" /> <!-- 第三列宽度 -->
      </colgroup>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(cell, colIndex) in row" :key="colIndex">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        ["范杰", "项目经理", "基于大语言模型的航空维修知识管理研究与应用"],
        ["李宇飞", "项目经理", "基于混合现实技术实操培训的研究与应用"],
        ["杨乐", "项目经理", "航线运行平台 QAR数据平台 图像识别平台"],
        ["王储", "专职成员", "AR智慧工卡"],
        ["刘孟萌", "专职成员", "构建“三化”的质量检验系统"],
        ["杨铭", "项目经理", "多模态融合驱发动机高压涡轮叶片寿命预测与监控"],
        ["马利媛", "专职成员", "B737NG空调性能监控和液压油量异常故障解决方案"],
        ["梁健彬", "专职成员", "基于大数据应用的精益航材采购"],
        ["沙治宇", "专职成员", "飞行大数据智能建模工具"],
        ["沈明京", "专职成员", "复杂维修现场风险管控系统"]
      ] // 固定表格数据
    };
  }
};
</script>

<style scoped>
.table-container {
  width: 95%;
  margin-top: 20px;
  margin-left: 15px; /* 表格整体左移 */
}

.custom-table {
  border-collapse: collapse; /* 合并单元格边框 */
  width: 100%;
  text-align: center; /* 表格内容居中 */
  font-size: 13px; /* 字体大小 */
  font-family: "Arial", sans-serif; /* 字体样式 */
  table-layout: fixed; /* 固定列宽 */
}

.custom-table td {
  border: 1px solid #ccc; /* 单元格边框颜色 */
  padding: 1px; /* 单元格内边距 */
  height: 5px; /* 单元格高度 */
  overflow: hidden; /* 防止超出内容 */
  text-overflow: ellipsis; /* 内容超出显示省略号 */
  white-space: nowrap; /* 禁止换行 */
  color: #00ccff; /* 字体颜色 */
}

.custom-table td:hover {
  background-color: #1d3dcc; /* 鼠标悬停时背景颜色 */
}
</style>
