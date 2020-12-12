import Vuex from 'vuex'

// eslint-disable-next-line
const createStore = () => {
	return new Vuex.Store({
		state: {
			notifications: [],
		},

		mutations: {
			setNotification(state, notification) {
				state.notifications.push(notification)
			},

			removeNotification(state, message) {
				const newN = state.notifications.filter(
					(n) => n.text !== message
				)
				state.notifications = newN
			},
		},

		actions: {
			addNotification({ commit }, notification) {
				commit('setNotification', notification)

				setTimeout(() => {
					commit('removeNotification', notification.text)
				}, 2000)
			},

			removeNotification({ commit }, message) {
				commit('removeNotification', message)
			},
		},

		getters: {
			notifications(state) {
				return state.notifications
			},
		},
	})
}

export default createStore
