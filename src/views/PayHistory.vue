<template>
  <BannerCom/>
  <div class="container my-32">
    <GenerallyLoading v-if="loading" />
    <div class="text-center mt-48"
      v-if="studentData.payHistory.length === 0 && !loading">
      <p class="fs-2 fw-bold">無任何購買紀錄</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-outline-primary mt-16">
          前往購買
        </button>
      </RouterLink>
  </div>

    <div class="card shadow-sm" v-if="studentData.payHistory.length !== 0 && !loading">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead class="border-bottom-3 fw-bold">
              <tr class="align-middle">
                <th class="text-nowrap">購買時間</th>
                <th class="text-nowrap">購買品項</th>
                <th class="text-nowrap">購買金額</th>
                <!-- <th scope="col">付款狀態</th> -->
              </tr>
            </thead>
            <tbody>
              <template v-for=" item in studentData.payHistory" :key="item">
                <tr>
                  <td class="text-nowrap"> {{ this.$moment(item.timestamp).format('YYYY-MM-DD')  }} </td>
                  <td class="text-nowrap">
                    <ul class="list-unstyled">
                      <li v-for="i in item.payData.payData" :key="i">
                        {{ i.courseName }}
                      </li>
                    </ul>
                  </td>
                  <td class="text-nowrap">NT${{ $filters.currency(item.payData.finalTotal)}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- {{ studentData.payHistory }} -->
</template>

<script>
import { mapState, mapActions } from 'pinia'
import BannerCom from '../components/Banner.vue'
import GenerallyLoading from '../components/GenerallyLoading.vue'
import dataStore from '@/stores/dataStore'
import bannerStore from '@/stores/bannerStore'

export default {
  components: { BannerCom, GenerallyLoading },
  computed: {
    ...mapState(dataStore, ['studentData', 'user', 'userCartCourses', 'couponData', 'loading']),
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
    ...mapActions(bannerStore, ['getBannerInfo']),
    ss() {
      console.log(this.studentData.payHistory);
      const names = ['Danny', 'Danny', 'Jack', 'Sam', 'Danny'];
      const total_count = names.reduce((obj, item) => {
        if (item in obj) {
          obj[item]++;
        } else {
          obj[item] = 1;
        }
        return obj;
      }, {});

      console.log(total_count);
    },
  },
  created() {
    this.onAuthStateChanged();
    this.getBannerInfo(
      new URL('../assets/images/banner.jpg', import.meta.url).href,
      '購買紀錄',
      'History',
      '詳盡紀錄，金流一目了然',
    );
    this.ss();
  },
};
</script>

<style lang="scss" scoped>

</style>
