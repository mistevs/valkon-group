<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-12 lg:mt-20 max-w-full pb-24 lg:pb-40">Contact Us</h2>
		</section>
		<section class="bg-secondary-200 constrain--large p-12 lg:p-40">
			<!--<div class="map mb-12 lg:mb-40"></div>-->
			<div class="flex flex-col lg:flex-row lg:px-40">
				<div class="lg:w-1/2">
					<h3 class="tall">
						ValKon Group<br />World Headquarters <br /><br />
						London,UK
					</h3>
				</div>
				<div class="lg:ml-auto lg:w-1/2">
					<p class="font-body">
						Valkon Enterprises Limited<br />
						167-169, Great Portland Street<br />
						London, England, W1W 5PF<br />
						United Kingdom<br /><br />
						hello@valkon.group<br /><br />
						+44 20 8638 6123
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
	background: url('/images/pages/contact-bg.jpg') no-repeat center top;
}

.map {
	@apply w-full bg-secondary-300;
	height: 600px;
}
</style>
