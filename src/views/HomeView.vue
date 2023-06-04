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
    <div class="box">
      <div class="badge">{{ choseBadge.length }}</div>
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
      <ShopContext
        v-for="item in choseBadge"
        :key="item.id"
        :item="item"
        @onGoBasket="show = false"
        v-if="show"
      />
    </div>
  </div>
  <div class="flex">
    <ProductCard
      @onItemBox="onItemFunct($event)"
      v-for="item in products"
      :item="item"
    />
  </div>
</template>

<script setup>
import ProductCard from "@/components/ProductCard.vue";
import ShopContext from "../components/ShopContext.vue";
import { ref, onMounted, watch } from "vue";
const show = ref(false);
const choseBadge = ref([]);
const onShow = () => {
  show.value = !show.value;
};
const activeCategory = ref(null);
const categories = ref([]);
const products = ref([]);
const onItemFunct = (e) => {
  choseBadge.value.push(e);
  console.log(choseBadge);
};
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
