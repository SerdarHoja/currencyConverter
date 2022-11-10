<template>
  <div>
    <div class="wrapper">
      <div class="mt-30px mb-10">
        <h3
          class="text-dark-cerulean sh1 font-medium wide:text-[34px] desktop:text-[26px] laptop:text-[26px] tablet:text-[26px] text-xl leading-140%"
        >
          Курс рубля
        </h3>
      </div>
      <div class="flex flex-wrap justify-between">
        <currencyCard
          class="wide:w-[31%] desktop:w-[31%] laptop:w-[30%] tablet:w-[48%] w-full currencyCard mb-[30px]"
          v-for="(currency, index) in currencyMapped"
          :key="currency.ID"
          :currency="currency"
          :isEven="index % 2 == 0"
        />
      </div>
      <div
        class="w-full items-center wide:flex desktop:flex laptop:flex tablet:flex pt-8 pb-8 px-30px mt-6 mb-[140px] wide:px-10 desktop:px-10 laptop:px-10 tablet:px-8 rounded-medium bg-desert-storm"
      >
        <img
          class="mr-30px mobile:mb-30px wide:mb-0 desktop:mb-0 laptop:mb-0 tablet:mb-0"
          src="../assets/img/icons/icon-blue.svg"
          alt=""
        />
        <p
          class="text-dark-cerulean wide:text-xl desktop:text-xl laptop:text-xl tablet:text-xl text-base leading-140% font-bold"
        >
          Телефон: <a href="tel:+8 (800) 888-90-28">8 (800) 888-90-28</a> ,
        </p>
        <p
          href="mailto:info@example.ru"
          class="text-dark-cerulean wide:text-xl desktop:text-xl laptop:text-xl tablet:text-xl text-base leading-140% font-bold"
        >
          email: <a href="mailto:info@example.ru">info@example.ru</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import currencyCard from '../components/currencyCard.vue'
export default {
  name: 'CourseRoublePage',
  layout: 'mainLayout',
  components: {
    currencyCard,
  },
  data() {
    return {
      currencyArray: [],
    }
  },

  computed: {
    currencyList() {
      return this.$store.getters.currencyArray
    },
    currencyMapped() {
      return Object.keys(this.currencyArray).map((key) => {
        return this.currencyArray[key]
      })
    },
    // searchHandle() {
    //   return this.currencyMapped.filter((e) => {
    //     return (
    //       e.NumCode.includes(this.value) ||
    //       e.Name.toLowerCase().includes(this.value.toLowerCase())
    //     )
    //   })
    // },
  },
  watch: {
    '$store.state.currency': function currencySetter(nv) {
      this.currencyArray = nv
    },
  },
  created() {
    this.$store.dispatch('getCurrency')
  },
  methods: {
    // clickBack(currency) {
    //   this.value = currency.Name
    //   this.$emit('response', currency)
    //   this.isShow = false
    // },
  },
}
</script>
<style scoped>
.currencyCard:nth-child(3n-1) {
  margin-right: 30px;
  margin-left: 30px;
}
.currencyCard {
  transition: box-shadow 0.3s;
  cursor: pointer;
}
.currencyCard:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
@media only screen and (max-width: 768px) and (min-width: 361px) {
  .currencyCard:nth-child(2n) {
    margin-left: 20px !important;
    margin-right: 0 !important;
  }
  .currencyCard:nth-child(3n-1) {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
