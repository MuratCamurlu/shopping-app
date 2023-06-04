<template>
  <div class="contextWrapper">
    <div class="contextItem">
      <div class="image">
        <img src="" alt="" />
      </div>
      <div class="content">
        <div class="title">Header</div>
        <div class="price">100$</div>
      </div>
    </div>
    <div class="contextItem complateBox" @click="goBasket">Go to Basket</div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const emit = defineEmits(["onGoBasket"]);
const goBasket = () => {
  router.push("/basket");
  emit("onGoBasket");
};
</script>
<style scoped>
.contextWrapper {
  z-index: 10;
  position: absolute;
  background-color: #fff;
  right: 0;
  border: 1px solid grey;
  padding-top: 8px;
  padding-bottom: 8px;
  filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.15));
  border-radius: 10px;
  max-width: 600px;
  min-width: 250px;
}
.contextItem {
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
}
.image {
  margin-right: 12px;
}
.image img {
  width: 50px;
  height: 50px;
  object-fit: fill;
}
.content {
  font-weight: 500;
  display: flex;
  flex-direction: column;
}
.price {
  margin-top: 4px;
  color: #1874ff;
}
.title {
  font-size: 20px;
  font-weight: 600;
  color: #262b37 !important;
}
.complateBox {
  border-top: 1px soid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  color: #1874ff;
}
</style>
