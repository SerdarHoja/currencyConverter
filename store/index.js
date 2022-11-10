export const state = () => ({
    currency: [],
    error: {},
})

export const mutations = {
    setCurrency(state, currency) {
        state.currency = currency
    },
    setError(state, error) {
        state.error = error
    },
}
export const actions = {
    async getCurrency({ commit }) {
        try {
            await this.$axios
                .get(`https://www.cbr-xml-daily.ru/daily_json.js`)
                .then((response) => {
                    if (response) {
                        commit('setCurrency', response.data.Valute)
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        commit('setError', error.response, { root: true })
                    }
                })
        } catch (e) {
            commit('setError', e, { root: true })
            throw e
        }
    },
}
export const getters = {
    currency: (state) => state.currency,
    error: (state) => state.error,
}