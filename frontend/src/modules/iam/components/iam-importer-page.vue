<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/iam' }">
        <app-i18n code="iam.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="iam.importer.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>
    
    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="iam.importer.title"></app-i18n>
      </h1>
            <div class="grid-content">
                      <p>----------------------------------------------------------</p>

          <h4>Import doanh thu nhân viên</h4>
          <app-importer storePath="iam/importer"></app-importer>
                    <p>----------------------------------------------------------</p>
      </div>
      


           <h1 class="app-content-title"></h1>
          <h4>Import nhóm kinh doanh</h4>
          <app-importer storePath="staff/importer"></app-importer>
          <p>----------------------------------------------------------</p>
          <h1 class="app-content-title"></h1>
          <h4>Import TP kinh doanh</h4>
          <app-importer storePath="customers/importer"></app-importer>
        </div>
      </div>
</template>

<script>
export default {
  name: 'app-iam-importer-page',
};
</script>

<style>
</style>
