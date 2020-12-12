<template>
	<div class="notification-list" v-show="notifications.length > 0">
		<div
			class="notification"
			@click="removeNotification(notification.text)"
			:class="notification.type"
			v-for="notification in notifications"
			:key="notification.text"
		>
			<p>{{ notification.text }}</p>
			<i class="ico ico-close"></i>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	methods: {
		removeNotification(text) {
			// console.log('removing');

			this.$store.dispatch('removeNotification', text)
		},
	},

	computed: {
		...mapGetters(['notifications']),
	},
}
</script>

<style lang="scss">
@import 'notifications';
</style>
