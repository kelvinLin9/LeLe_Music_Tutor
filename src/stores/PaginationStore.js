import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const usePaginationStore = defineStore('paginationStore', () => {
  const eachPage = ref([])
  const pageSize = ref(12)
  const page = reactive({
    totalPage: 0,
    currentPage: 1,
    pageNumBox: [],
    hasPrevPage: false,
    hasNextPage: false
  })

  function pagination(data) {
    page.totalPage = Math.ceil(data.length / pageSize.value)
    eachPage.value = []
    
    page.currentPage = Math.max(1, Math.min(page.currentPage, page.totalPage))
    page.hasPrevPage = page.currentPage > 1
    page.hasNextPage = page.currentPage < page.totalPage

    const minData = (page.currentPage * pageSize.value) - pageSize.value + 1
    const maxData = page.currentPage * pageSize.value

    eachPage.value = data.filter((_, index) => {
      const num = index + 1
      return num >= minData && num <= maxData
    })

    showPageBox()
  }

  function showPageBox() {
    const pageBox = 5
    let startPage = page.currentPage - Math.floor(pageBox / 2)
    let endPage = page.currentPage + Math.floor(pageBox / 2)

    if (startPage < 1) {
      startPage = 1
      endPage = Math.min(pageBox, page.totalPage)
    }

    if (endPage > page.totalPage) {
      endPage = page.totalPage
      startPage = Math.max(1, page.totalPage - (pageBox - 1))
    }

    page.pageNumBox = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )

    console.log(page.pageNumBox)
  }

  return {
    eachPage,
    pageSize,
    page,
    pagination,
    showPageBox
  }
})