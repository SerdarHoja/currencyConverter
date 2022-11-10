<template>
  <div
    class="rounded-medium bg-desert-storm wide:pl-30px desktop:pl-30px pl-25px wide:pt-[38px] wide:pb-[48px] desktop:pt-[38px] desktop:pb-[48px] laptop:pt-[38px] laptop:pb-[48px] tablet:pt-[38px] tablet:pb-[48px] pt-[25px] pb-[33px]"
  >
    <img v-if="isEven" src="../assets/img/icons/money-blue.svg" alt="" />
    <img v-else src="../assets/img/icons/money-red.svg" alt="" />
    <h3 class="text-dark-cerulean font-bold text-xl leading-140% mt-[38px]">
      {{ currency.CharCode }}
    </h3>
    <p class="mt-[30px] mb-[40px] text-[#111111] text-base leading-140%">
      {{ currency.Name }}
    </p>
    <ul class="currencyData">
      <li class="flex text-base font-medium leading-5">
        <span class="text-[#1c1c1c]">Номинал: {{ currency.Nominal }}</span>
      </li>
      <li class="flex text-base font-medium leading-5 mt-25px">
        <span class="text-[#1c1c1c]"
          >Курс:
          <!-- {{ Math.round((currency.Nominal / currency.Value) * 10000) / 10000 }} -->
          {{ currency.Value }}</span
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    currency: {
      type: Object,
      required: true,
    },
    isEven: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.currencyData {
  list-style: none;
}
.currencyData li::before {
  content: '\25CB';
  color: red;
  margin-right: 10px;
}
</style>
