<template>
  <div class="container py-4 d-none d-sm-block"
        v-if="filterData.length != 0">
    <nav>
      <ul class="pagination d-flex justify-content-center ">
        <li class="page-item" 
            :class="{'disabled':!page.hasPrevPage}"
            v-if="page.totalPage > 0">
          <a class="page-link" href="#" 
            @click.prevent="page.currentPage -= 1">
            <i class="bi bi-caret-left-fill"></i>
          </a>
        </li>
        <!-- 分頁按鈕不改變順序，key用index可以 -->
        <li class="page-item d-flex" 
            v-for="(item,index) in page.pageNumBox" :key="index" 
            :class="{'active': item === page.currentPage}">
          <a class="page-link" href="#" 
            @click.prevent="page.currentPage = item">{{item}}
          </a>
        </li>

        <!-- 頁面數大於5才顯示最大頁數及指定頁數 -->
        <li class="page-item"
          v-if="page.totalPage > 5">
          <a class="page-link" href="#"
          @click.prevent="page.currentPage = page.totalPage">
            ...{{page.totalPage}}</a>
        </li>

        <li class="page-item" 
            :class="{'disabled':!page.hasNextPage}"
            v-if="page.totalPage > 0">
          <a class="page-link" href="#" 
            @click.prevent="page.currentPage += 1">
            <i class="bi bi-caret-right-fill"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="container d-flex justify-content-center my-32 d-block d-sm-none"
        v-if="filterData.length != 0">
    <div class="pagination row g-1 justify-content-center align-items-center">
      <div class="col-auto page-item" 
            :class="{'disabled':!page.hasPrevPage}"
            v-if="page.totalPage > 0">
        <a class="page-link" href="#" 
            @click.prevent="page.currentPage -= 1">
            <i class="bi bi-caret-left-fill"></i>
        </a>
      </div>
      <div class="col-3">      
        <input class="form-control" 
              type="number"
              id="selPage" 
              placeholder="請輸入頁碼" 
              aria-label="default input example"
              v-model="page.currentPage">
      </div>
      <div class="col-auto ">
        <label for="selPage" class="fs-7 text-delete">/ {{ page.totalPage }} 頁</label>
      </div>
      <div class="col-auto page-item" 
          :class="{'disabled':!page.hasNextPage}"
          v-if="page.totalPage > 0">
        <a class="page-link" href="#" 
          @click.prevent="page.currentPage += 1">
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePaginationStore } from '@/stores/paginationStore'
import { useFilterStore } from '@/stores/filterStore'

// 初始化 stores
const paginationStore = usePaginationStore()
const filterStore = useFilterStore()

// 解構需要的狀態和方法
const { page } = storeToRefs(paginationStore)
const { filterData } = storeToRefs(filterStore)

// 解構需要的方法
const { pagination } = paginationStore

// 如果需要在組件掛載時執行某些操作，可以使用 onMounted 鉤子
import { onMounted } from 'vue'

onMounted(() => {
  // 在這裡添加需要在 mounted 鉤子中執行的代碼
})

// 如果需要定義其他的響應式數據或方法，可以在這裡添加
// const someMethod = () => {
//   // 方法實現
// }

// 所有需要在模板中使用的變量和方法都會自動暴露給模板
</script>

<style lang="scss" scoped>

</style>