<template>
  <div style="margin: 20px;">
    <div class="c_header">
      <div class="left">
        左区域
      </div>
      <div class="right">
        右区域
      </div>
      <div class="auto">
        自定义区域
      </div>
    </div>
    <div class="c_header">
      <div class="back">页面标题</div>
    </div>
    <h3>图标</h3>
    <span class="e_red e_strong">临</span>
    <i class="el-icon-share"></i>
    <i class="el-icon-error"></i>
    <t-icon name="share"></t-icon>
    <t-icon name="family" pic="red">aaa</t-icon>
    <TIcon name="back" pic="blue"></TIcon>
    <t-icon name="back" pic="xxxl"></t-icon>
    <el-button>默认按钮</el-button>
  </div>
</template>
<script>
  export default {
      data(){
          return{
          }
      }
  };
</script>
