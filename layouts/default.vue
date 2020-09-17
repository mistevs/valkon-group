<template>
	<div class="site-wrapper">
		<app-header />
		<Nuxt class="content-wrapper" :class="$route.params.pathMatch" />
		<app-footer />
	</div>
</template>

<script>
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'

export default {
	components: { AppHeader, AppFooter },
}
</script>

<style lang="scss">
@import 'default';
</style>
