<template>
  <div class="pagination-container" v-if="totalPages > 0">
    <!-- 桌面版分頁 -->
    <nav class="d-none d-sm-block">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">
            <i class="bi bi-caret-left-fill"></i>
          </a>
        </li>

        <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>

        <li v-if="showLastPage" class="page-item">
          <a class="page-link" href="#" @click.prevent="changePage(totalPages)">...{{ totalPages }}</a>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">
            <i class="bi bi-caret-right-fill"></i>
          </a>
        </li>
      </ul>
    </nav>

    <!-- 移動版分頁 -->
    <div class="d-sm-none">
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-primary" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
          <i class="bi bi-caret-left-fill"></i>
        </button>
        <input 
          type="number" 
          class="form-control mx-2" 
          style="width: 70px;" 
          v-model.number="inputPage" 
          @change="changePage(inputPage)"
        >
        <span>/ {{ totalPages }}</span>
        <button class="btn btn-outline-primary ml-2" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
          <i class="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  visiblePageCount: {
    type: Number,
    default: 5
  }
});

const emit = defineEmits(['update:currentPage']);

const inputPage = ref(props.currentPage);

watch(() => props.currentPage, (newValue) => {
  inputPage.value = newValue;
});

const visiblePages = computed(() => {
  const halfVisible = Math.floor(props.visiblePageCount / 2);
  let start = Math.max(1, props.currentPage - halfVisible);
  let end = Math.min(props.totalPages, start + props.visiblePageCount - 1);

  if (end - start + 1 < props.visiblePageCount) {
    start = Math.max(1, end - props.visiblePageCount + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const showLastPage = computed(() => {
  return props.totalPages > Math.max(...visiblePages.value);
});

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page);
  }
};
</script>

<style scoped>
.pagination-container {
  margin-top: 20px;
}
</style>