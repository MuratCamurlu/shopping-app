<template>
  <div class="appHeader">
    <div class="logo">Logo {{ show }}</div>
    <div class="box">
      <div class="badge">1</div>
      <svg
        @click="onShow"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const show = ref(false);
const onShow = () => {
  show.value = !show.value;
};
</script>
<style scoped>
.appHeader {
  border-bottom: 1px solid #eff1f3;
  padding: 16px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 12px;
}
.box {
  position: relative;
  cursor: pointer;
  color: #374051;
  transition: all 0.5s;
}
.box:hover {
  color: #1874ff;
}
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 10px;
  background-color: #1874ff;
  border-radius: 100%;
  color: #fff;
  width: 16px;
  height: 16px;
}
</style>
