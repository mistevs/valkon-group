<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full pb-40">Social Responsibilities</h2>
		</section>
		<section class="bg-secondary-200 constrain--large p-40">
			<div class="w-8/12 mx-auto">
				<h3 class="wide tall mb-20">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
					tincidunt lobortis arcu, ac molestie massa pretium elementum
					donec fringilla tincidunt justo.
				</h3>
				<div class="font-body">
					<p class="mb-10">
						arcu vel neque commodo commodo. Mauris aliquet tincidunt
						sem, at luctus dolor. Quisque pellentesque sed orci at
						suscipit. Etiam eleifend pellentesque orci quis
						sollicitudin. Aenean a volutpat metus. Suspendisse eu
						feugiat quam. Fusce nec ante consectetur, luctus odio
						non, pellentesque justo.
					</p>
					<p class="mb-10">
						Nulla maximus, quam vel ultrices mattis, dolor odio
						commodo diam, ut feugiat sapien mi in eros. Fusce sit
						amet velit ut lacus pretium vulputate id vehicula
						turpis. Mauris fermentum hendrerit tortor eget suscipit.
						Nullam mollis ex sit amet dui aliquet, accumsan placerat
						nisl lobortis. Morbi feugiat mattis convallis. Nunc
						ligula libero, posuere eget justo id, tempus ultrices
						eros. Donec consectetur massa ut tincidunt feugiat.
						Integer interdum egestas sem, ut lobortis mi pretium a.
						Mauris vestibulum nec ex vel varius. Vestibulum nec
						ligula ornare, mollis orci ut, accumsan ex. Proin eu
						metus iaculis, feugiat mi sit amet, facilisis elit.
					</p>
					<p class="mb-10">
						Nulla maximus, quam vel ultrices mattis, dolor odio
						commodo diam, ut feugiat sapien mi in eros. Fusce sit
						amet velit ut lacus pretium vulputate id vehicula
						turpis. Mauris fermentum hendrerit tortor eget suscipit.
						Nullam mollis ex sit amet dui aliquet, accumsan placerat
						nisl lobortis. Morbi feugiat mattis convallis. Nunc
						ligula libero, posuere eget justo id, tempus ultrices
						eros. Donec consectetur massa ut tincidunt feugiat.
						Integer interdum egestas sem, ut lobortis mi pretium a.
						Mauris vestibulum nec ex vel varius. Vestibulum nec
						ligula ornare, mollis orci ut, accumsan ex. Proin eu
						metus iaculis, feugiat mi sit amet, facilisis elit.
					</p>
					<p class="mb-10">
						Nulla maximus, quam vel ultrices mattis, dolor odio
						commodo diam, ut feugiat sapien mi in eros. Fusce sit
						amet velit ut lacus pretium vulputate id vehicula
						turpis. Mauris fermentum hendrerit tortor eget suscipit.
						Nullam mollis ex sit amet dui aliquet, accumsan placerat
						nisl lobortis. Morbi feugiat mattis convallis. Nunc
						ligula libero, posuere eget justo id, tempus ultrices
						eros. Donec consectetur massa ut tincidunt feugiat.
						Integer interdum egestas sem, ut lobortis mi pretium a.
						Mauris vestibulum nec ex vel varius. Vestibulum nec
						ligula ornare, mollis orci ut, accumsan ex. Proin eu
						metus iaculis, feugiat mi sit amet, facilisis elit.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import SectionHeader from '@/components/section-header'
import Jurisdictions from '@/components/jurisdictions'
import Card from '@/components/card'
export default {
	components: { SectionHeader, Jurisdictions, Card },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
	@apply pb-40;

	background: url('/images/clients-bg.jpg') no-repeat center top;
}
</style>
