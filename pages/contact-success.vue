<template>
	<div class="content">
		<section class="constrain text-light">
			<div
				class="flex flex-col lg:flex-row constrain items-center px-0 w-full justify-center pt-12 pb-24 lg:pt-32 lg:pb-64"
			>
				<div
					class="self-center bg-primary-200 text-light px-6 py-12 pb-8 lg:p-40 lg:pb-32 lg:px-24"
				>
					<h3>
						We've successfully received your enquiry and will be in
						touch shortly.
					</h3>
					<p class="text-center mt-10 underline">
						<nuxt-link to="/">Go back to home</nuxt-link>
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: url('/images/pages/swiss-bg.jpg') no-repeat center top;
}
</style>
