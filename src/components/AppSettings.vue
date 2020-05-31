<template>
	<div>
		<hr class="border-light">
		<div>
			<button type="button" class="btn btn-sm btn-danger mr-1 mb-1" @reset="resetPallet">reset color palette</button>
			<button type="button" class="btn btn-sm btn-danger mr-1 mb-1" @reset="resetColors">reset user colors</button>
			<button type="button" class="btn btn-sm btn-danger mr-1 mb-1" @reset="resetAll">reset all</button>
		</div>
		<div>
			<label class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" v-model="showAmoled">&nbsp;
				<span class="custom-control-label">show AMOLED preview</span>
			</label>
		</div>
		<div>
			<label class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" v-model="useWhitneyFont">&nbsp;
				<span class="custom-control-label">use Whitney Font in preview</span>
			</label>
		</div>
		<div>
			<label class="custom-control custom-checkbox">
				<input type="checkbox" class="custom-control-input" v-model="hideInstructionsInitial">&nbsp;
				<span class="custom-control-label">hide the instructions next time?</span>
			</label>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AppSettings",
		data() {
			return {
				useWhitneyFont: this.$store.getters['useWhitneyFont'],
				showAmoled: this.$store.getters['showAmoled'],
				hideInstructionsInitial: this.$store.getters['hideInstructionsInitial']
			}
		},
		watch: {
			useWhitneyFont(newValue, oldValue) { this.$store.commit('useWhitneyFont', newValue); },
			showAmoled(newValue, oldValue) { this.$store.commit('showAmoled', newValue); },
			hideInstructionsInitial(newValue, oldValue) { this.$store.commit('hideInstructionsInitial', newValue); }
		},
		methods: {
			resetPallet(){
				this.$store.commit('resetPallet')
			},
			resetColors(){
				this.$store.commit('resetColors')
			},
			resetAll(){
				this.resetPallet();
				this.resetColors();
			}
		}
	}
</script>

<style scoped>

</style>