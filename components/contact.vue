<template>
	<div class="contact bg-light">
		<div class="flex flex-col lg:flex-row constrain px-0 w-full">
			<div
				class="contact-dark bg-primary-200 text-light px-6 py-12 md:p-40 md:pl-8 lg:pr-24"
			>
				<h3>Contact ValKon Group</h3>
				<h2 class="mt-12 lg:mt-24">
					How can we help build your legacy?
				</h2>
				<div class="flex mt-24 lg:mt-64">
					<div class="w-5/12 lg:w-1/2">
						<p class="font-medium">Via Post</p>
						<p class="text-sm">
							Valkon Enterprises Limited
							<br />
							<br />
							<br />
							<br />
							167-169, Great Portland Street, 5th Floor<br />
							London, England, W1W 5PF<br />
							United Kingdom
						</p>
					</div>
					<div class="w-1/2 ml-auto lg:ml-0">
						<p class="font-medium">Via Email</p>
						<p class="text-sm">
							<a href="mailto:hello@valkon.group"
								>hello@valkon.group</a
							>
						</p>
						<p class="font-medium mt-16">Via Telephone</p>
						<p class="text-sm">
							+44 20 8638 6123
							<span class="block pt-2">(WhatsApp + Signal)</span>
						</p>
					</div>
				</div>
				<!-- <div class="mt-16"></div> -->
			</div>
			<div class="py-12 lg:py-40 px-4 lg:px-32 w-full">
				<h3>Hello! Let’s get in touch –</h3>
				<form
					class="mt-12 lg:mt-24"
					action="/success"
					@submit.prevent="submitForm"
					method="POST"
					name="contact"
					netlify-honeypot="dontfill"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<span class="hidden"><input name="dontfill" /></span>
					<div class="input-row">
						<div class="input-wrapper">
							<input
								type="textbox"
								name="name"
								v-model="form.name"
								placeholder="Your Full Name"
							/>
						</div>
					</div>
					<div class="input-row">
						<div class="input-wrapper">
							<input
								type="textbox"
								name="email"
								v-model="form.email"
								placeholder="Your Email"
							/>
						</div>
					</div>
					<div class="input-row">
						<div class="input-wrapper">
							<input
								type="textbox"
								name="company"
								v-model="form.company"
								placeholder="Your Company"
							/>
						</div>
					</div>
					<div class="input-row">
						<div class="input-wrapper">
							<input
								type="textbox"
								name="phone"
								v-model="form.phone"
								placeholder="Your Phone Number"
							/>
						</div>
					</div>
					<div class="input-row noflex">
						<div class="input-wrapper noborder">
							<p class="label">How can we help?</p>
							<textarea
								name="notes"
								v-model="form.notes"
							></textarea>
						</div>
					</div>
					<div class="submit-wrapper">
						<!-- <s-button
							class="w-full max-w-none"
							text="Submit"
							type="outline"
							v-track:click="{
								category: 'contact',
								label: 'submit',
							}"
						/> -->
						<input
							class="button button--outline w-full max-w-none"
							type="submit"
							id="submitFormButton"
							name="submit"
							:value="form.submitting ? 'Sending ...' : 'Submit'"
							v-track:click="{
								category: 'contact',
								label: 'submit',
							}"
						/>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	components: {},
	data: () => ({
		form: { submitting: false },
	}),
	methods: {
		encode(data) {
			return Object.keys(data)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							data[key]
						)}`
				)
				.join('&')
		},

		// eslint-disable-next-line
		submitForm() {
			this.form.submitting = true
			if (!this.form.name) {
				this.$store.dispatch('addNotification', {
					type: 'error',
					text:
						'Please fill out your name so we know who to contact.',
				})
				this.$ga.event({
					eventCategory: 'contact',
					eventLabel: 'missing name',
					eventAction: 'error notification',
				})
				this.form.submitting = false
				return false
			} else if (!this.form.email) {
				this.$store.dispatch('addNotification', {
					type: 'error',
					text:
						'Please fill out your email address so we can get back to you.',
				})
				this.$ga.event({
					eventCategory: 'contact',
					eventLabel: 'missing email',
					eventAction: 'error notification',
				})
				this.form.submitting = false
				return false
				// } else if (!this.form.company) {
				// this.$store.dispatch('addNotification', { 'type' : 'error', 'text' : 'Please fill out your email address so we can get back to you.' })
				// } else if (!this.form.phone) {
				// 	this.$store.dispatch('addNotification', {
				// 		type: 'error',
				// 		text:
				// 			'Please fill out your phone number so we can get back to you.',
				// 	})
				// 	this.$ga.event({
				// 		eventCategory: 'contact',
				// 		eventLabel: 'missing phone',
				// 		eventAction: 'error notification',
				// 	})
				// 	this.form.submitting = false
				// 	return false
			} else if (!this.form.notes) {
				this.$store.dispatch('addNotification', {
					type: 'error',
					text: 'Please let us know how best to help you.',
				})
				this.$ga.event({
					eventCategory: 'contact',
					eventLabel: 'missing notes',
					eventAction: 'error notification',
				})
				this.form.submitting = false
				return false
			}

			const axiosConfig = {
				header: { 'Content-Type': 'application/x-www-form-urlencoded' },
			}
			axios
				.post(
					'/',
					this.encode({
						'form-name': 'contact',
						...this.form,
					}),
					axiosConfig
				)
				.then(() => {
					this.$ga.event({
						eventCategory: 'contact',
						eventLabel: 'contact success',
						eventAction: 'success',
					})
					this.$router.push('/contact-success')
				})
				.finally(() => {
					this.form.submitting = false
				})
		},
	},
}
</script>

<style lang="scss">
.contact-dark {
	@apply relative;

	@screen lg {
		min-width: 520px;
	}

	&::after {
		@apply absolute top-0 bg-primary-200 h-full;
		content: ' ';

		right: 100%;
		width: 160px;
	}
}

input,
textarea {
	@apply block border px-6 py-4 mb-4 w-full bg-transparent font-body tracking-wide;

	&::placeholder {
		@apply text-primary-100;
	}
}

textarea {
	min-height: 300px;
}
</style>
