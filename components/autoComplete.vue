<template>
  <div class="w-full relative">
    <label class="font-medium wide:text-base text-sm text-dark-blue-grey">{{
      valuteText
    }}</label>
    <input
      v-model="value"
      class="w-full border-manual rounded-small p-5 mt-4 mb-30px"
      type="text"
      placeholder="Введите название или код"
      @focusin="isShow = true"
    />
    <div
      v-if="isShow"
      class="w-full h-44 absolute top-[7rem] shadow-lg z-50 bg-[#fff] overflow-y-auto px-4"
    >
      <ul>
        <li
          v-for="currency in searchHandle"
          :key="currency.ID"
          @click="clickBack(currency)"
          class="py-2 border-b-[#dfdfdf] border-b-[1px] hover:cursor-pointer hover:opacity-50"
        >
          {{ currency.Name }} - {{ currency.NumCode }} - {{ currency.CharCode }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    valuteText: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      currencyArray: [],
      isShow: false,
      value: '',
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
    searchHandle() {
      return this.currencyMapped.filter((e) => {
        return (
          e.NumCode.includes(this.value) ||
          e.Name.toLowerCase().includes(this.value.toLowerCase())
        )
      })
    },
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
    clickBack(currency) {
      this.value = currency.Name
      this.$emit('response', currency)
      this.isShow = false
    },
  },
}
</script>
