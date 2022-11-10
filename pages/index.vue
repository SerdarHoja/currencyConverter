<template>
  <div>
    <div class="wrapper">
      <div class="mt-30px mb-10">
        <h3
          class="text-dark-cerulean sh1 font-medium wide:text-[34px] desktop:text-[26px] laptop:text-[26px] tablet:text-[26px] text-xl leading-140%"
        >
          Валютный калькулятор
        </h3>
      </div>
      <div
        class="wide:flex desktop:flex laptop:flex tablet:flex justify-between"
      >
        <div
          class="wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full wide:mr-5 desktop:mr-5 laptop:mr-5 tablet:mr-5"
        >
          <autoComplete
            valuteText="Валюта 1"
            @response="form.currency1 = $event"
          />
          <autoComplete
            valuteText="Валюта 2"
            @response="form.currency2 = $event"
          />
          <label
            class="font-medium wide:text-base text-sm text-dark-blue-grey"
            for="value"
            >Количество</label
          >
          <input
            id="value"
            v-model.number="form.value"
            class="w-full border-manual rounded-small p-5 mt-4 mb-30px"
            type="text"
            name="value"
            placeholder="Введите число"
          />
          <div
            class="bg-catskill-white pl-8 pt-9 pb-10 rounded-medium flex items-center"
          >
            <img class="mr-8" src="../assets/img/icons/icon-red.svg" alt="" />
            <p
              v-if="calculate"
              class="text-dark-cerulean text-2xl leading-[140%] font-medium"
            >
              Итого: {{ calculate }}
            </p>
            <p
              v-else
              class="text-dark-cerulean text-2xl leading-[140%] font-medium"
            >
              Итого: ...
            </p>
          </div>
        </div>
        <div
          class="wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full wide:ml-5 desktop:ml-5 laptop:ml-5 tablet:ml-5 mobile:mt-4"
        >
          <div
            class="w-full py-10 wide:px-30px px-15px bg-catskill-white rounded-medium shadow1"
          >
            <h3
              class="text-dark-cerulean uppercase font-medium wide:text-lg desktop:text-15px laptop:text-15px tablet:text-13px text-13px mb-50px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor:
            </h3>
            <div
              class="wide:flex desktop:flex laptop:flex tablet:flex justify-between"
            >
              <div
                class="wide:mr-15px desktop:mr-15px laptop:mr-15px tablet:mr-15px wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full"
              >
                <ul class="list">
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>incididunt ut labore et dolore magna aliqua</span>
                  </li>
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>incididunt ut labore et</span>
                  </li>
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>incididunt ut labore et dolore</span>
                  </li>
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>labore et dolore</span>
                  </li>
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>incididunt ut</span>
                  </li>
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>incididunt ut labore et dolore</span>
                  </li>
                  <li
                    class="wide:text-18px desktop:text-18px laptop:text-14px tablet:13px-15px text-14px !font-normal mb-25px"
                  >
                    <span>incididunt ut labore</span>
                  </li>
                </ul>
              </div>
              <div
                class="desktop:ml-15px laptop:ml-15px tablet:ml-15px mobile:mt-4 gallery wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full"
              >
                <img src="../assets/img/img1.png" alt="" />
                <img src="../assets/img/img2.png" alt="" />
                <img src="../assets/img/img3.png" alt="" />
                <img src="../assets/img/img4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div
        class="w-full justify-between pt-10 pb-8 mt-6 mb-[140px] wide:px-[50px] desktop:px-[50px] laptop:px-[30px] tablet:px-[20px] px-[15px] bg-catskill-white rounded-xsmall shadow1 wide:flex desktop:flex laptop:flex tablet:flex"
      >
        <div class="wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full">
          <h3
            class="text-center leading-46px wide:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl text-base font-medium text-catalina-blue"
          >
            Нужна помощь?
          </h3>
          <h3
            class="text-center leading-46px wide:text-4xl desktop:text-4xl laptop:text-4xl tablet:text-4xl text-base font-medium text-catalina-blue mb-30px"
          >
            Мы поможем! Просто свяжитесь с нами.
          </h3>
          <p
            class="text-xs wide:text-base desktop:text-base laptop:text-base tablet:text-base text-center text-gun-powder"
          >
            Наши специалисты с радостью ответят на все ваши вопросы и дадут
            профессиональную консультацию по товарам.
          </p>
        </div>
        <div class="wide:w-1/2 desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full">
          <h3
            class="wide:text-[50px] desktop:text-[50px] laptop:text-[40px] tablet:text-[20px] text-[26px] leading-46px font-medium text-catalina-blue text-center"
          >
            8 (800) 888-90-28
          </h3>
          <p class="text-2xl leading-7 text-gun-powder text-center">или</p>
          <p
            class="text-catalina-blue wide:text-[34px] desktop:text-[34px] laptop:text-[24px] tablet:text-[20px] text-lg leading-10 text-center tracking-[1px]"
          >
            info@example.ru
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import autoComplete from '../components/autoComplete.vue'
export default {
  name: 'CalculatorPage',
  components: {
    autoComplete,
  },
  layout: 'mainLayout',

  data() {
    return {
      form: {
        currency1: '',
        currency2: '',
        value: 0,
      },
      currencyArray: [],
    }
  },
  computed: {
    calculate() {
      if (
        typeof this.form.currency1 == 'object' &&
        typeof this.form.currency2 == 'object' &&
        this.form.value > 0
      ) {
        return (
          Math.round(
            ((this.form.value *
              (Math.round(
                (this.form.currency1.Value / this.form.currency1.Nominal) *
                  10000
              ) /
                10000)) /
              (Math.round(
                (this.form.currency2.Value / this.form.currency2.Nominal) *
                  10000
              ) /
                10000)) *
              10000
          ) / 10000
        )
      }
      return 0
    },
  },
}
</script>
