<template>
	<div class="jurisdiction-description constrain p-12 lg:p-40 pb-0 px-0">
		<h3 class="tall wide mb-20" v-if="excerpt" v-html="excerpt"></h3>
		<div class="flex flex-col mb-6 lg:flex-row lg:mb-20">
			<div class="font-body lg:w-5/12" v-html="description"></div>
			<div
				class="booklet-preview self-end bg-secondary-300 lg:w-5/12 lg:ml-auto mt-12 lg:mt-0 p-6 lg:p-12 text-light relative"
			>
				<h3 class="tracking-wide">
					How to set up<br />
					your business <br />
					in {{ title }}
				</h3>

				<div
					class="absolute bottom-0 right-0 pb-8 pr-8 flex items-center"
				>
					<IconValkon width="71" class="mr-2" />
					<IconMark height="48" />
				</div>
			</div>
		</div>
		<div
			class="flex flex-col lg:flex-row border-b-2 border-primary-200 pb-20"
		>
			<p class="lg:w-5/12">
				To request a brochure with the key information about
				<strong class="font-bold">how to set up your business</strong>
				in {{ title }}, please submit your email here.
			</p>
			<div class="booklet-ask lg:ml-auto lg:w-5/12 mt-6 lg:mt-0">
				<form>
					<input
						type="text"
						placeholder="Insert your email address"
					/>
					<s-button
						text="Request a brochure"
						type="outline"
						class="w-full"
					/>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: { title: String, description: String, excerpt: String },
}
</script>

<style lang="scss" scoped>
// .jurisdiction-description {
p,
::v-deep p {
	@apply mb-8;
}

ul {
	@apply ml-12 mb-8 mt-4;
}

li {
	@apply my-2;
	list-style: disc;
}

.booklet-preview,
.booklet-ask {
	@screen lg {
		max-width: 420px;
	}
}

.booklet-preview {
	height: 400px;

	@screen lg {
		height: 630px;
	}
}
// }
</style>
