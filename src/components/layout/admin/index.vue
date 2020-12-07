<template>
  <div class = "flex body">
    <div class = "flex-item menu">
      <ul>
        <li>display:flex</li>
      </ul>
    </div>
    <div class = "flex-item-a main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutAdmin'
}
</script>

<style scoped>
.body {
  height: 100%;
}

.menu {
  width: 200px;
  padding: 20px;
  background: #3c3c3c;
  color: #eaeaea
}

.main {
  background: #f1f1f1;
  padding: 20px;
}
</style>
