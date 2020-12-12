import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default ({ app }) => {
	Vue.use(VueAnalytics, {
		id: 'G-J25FQC3J9L', // mounted in default layout
		autoTracking: {
			exception: true,
		},
		debug: {
			// enabled: process.env.NODE_ENV !== "production",
			// trace: process.env.NODE_ENV !== "production",
			// sendHitTask: process.env.NODE_ENV === "production"
		},
		router: app.router,
	})
}
