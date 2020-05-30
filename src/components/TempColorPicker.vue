<template>
	<div class="btn-group">
		<button type="button" class="btn btn-square btn-light border-light" :style="{background: color}"
		        @click.stop.self="togglePicker"
		/>
		<div class="picker-wrap" v-show="pickerOpen">
			<color-picker
					theme="dark"
					:color="color"
					:sucker-hide="true"
					:colors-default="palette"
					@changeColor="changeColor"
			/>
		</div>
	</div>
</template>

<script>
	import colorPicker from '@caohenghu/vue-colorpicker'

	export default {
		name: "TempColorPicker",
		props: {
			color: String,
		},
		data() {
			return {
				pickerOpen: false
			}
		},
		components: {
			colorPicker
		},
		computed: {
			palette() { return this.$store.getters['palette'] }
		},
		methods: {
			togglePicker() { this.pickerOpen = !this.pickerOpen; },
			changeColor({ hex }) {
				this.$emit('updateColor', hex);
			}
		}
	}
</script>