<template>
  <div class="filterWrapper">
    <div class="topFlex">
      <div
        @click="activeCategory = activeCategory === item ? '' : item"
        :class="activeCategory === item ? 'activeCategory' : ''"
        class="category"
        v-for="item in categories"
      >
        {{ item }}
      </div>
    </div>
    <div>Sort</div>
  </div>
  <div class="flex">
    <div v-for="item in products">{{ item.id }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
const activeCategory = ref(null);
const categories = ref([]);
const products = ref([]);

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const jsonData = await response.json();
  categories.value = jsonData;
  console.log(categories.value);
};
const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?sort=");
  const jsonData = await response.json();
  products.value = jsonData;
};
const fetchProductsByCategories = async (product) => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/" + product
  );
  const jsonData = await response.json();
  products.value = jsonData;
};

onMounted(fetchData);
onMounted(fetchProducts);
watch(activeCategory, (newVal) => {
  if (newVal === "") {
    fetchProducts();
  } else {
    fetchProductsByCategories(newVal);
  }
});
</script>
<style scoped>
.filterWrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.topFlex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.category {
  cursor: pointer;
  padding: 4px 16px;
  background-color: #fafafa;
  border: 1px solid grey;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 16px;
  font-weight: 500;
  margin-top: 8px;
}
.activeCategory {
  border: 1px solid red;
  background-color: red;
  color: white;
  font-weight: 600;
}
</style>
