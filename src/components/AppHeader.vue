<template>
	<header class="row no-gutters justify-content-center">
		<div class="card col bg-dark text-light mb-2">
			<div class="card-header p-1">
				<div class="row no-gutters align-items-center">
					<div class="col h h3-sm h2-md pr-2">
						Discord Role Color Picker
					</div>
					<div class="col-auto align-self-start">
						<button title="show/hide instructions" type="button" class="btn btn-sm btn-square border-light text-info"
						        @click="toggleInstructions" >
							<font-awesome-icon icon="info" :fixed-width="true" />
						</button>
					</div>
				</div>
			</div>
			<div id="instructions" class="card-body p-1" v-show="showInstructions">
				<div>
					<p>
						This is supposed to help you pick the best role colors, it also shows a preview for the light, dark and AMOLED themes of Discord.<br>
						The only thing difference is the font, the one Discord uses is called "Whitney",<br>
						it will be used if you have it installed but I don't bundle it with this app.<br>
						The main reason I don't have it is because it costs money, and it's expensive (like really expensive)... <br>
						the second reason is because it's weird, some specific colors really bleed over into the background -_-
					</p>
					<p>Its pretty self explanatory but anyway^^</p>
					<ul>
						<li class="mb-2">
							Click on the username to change it, both in the row will be changed. <br>
							(That on isn't as obvious as the others...)
						</li>
						<li class="mb-2">
							Click
							<input id="spectrum-example" type="text" class="btn btn-square btn-sm border-light btn-dark" />
							to change the color...</li>
						<li class="mb-2">
							Click
							<button type="button" class="btn btn-square btn-sm border-light btn-info" title="copy color in HEX">
								<font-awesome-icon icon="copy" :fixed-width="true" />
							</button>
							to copy the color to your clipboard. <br>
							Format will be in hexadecimal aka "#FFFFFF".
						</li>
						<li class="mb-2">
							Click
							<button class="btn btn-square btn-sm border-light btn-success" title="clone color">
								<font-awesome-icon icon="clone" :fixed-width="true" />
							</button>
							to duplicated the row.
						</li>
						<li class="mb-2">
							Click
							<button class="btn btn-square btn-sm border-light btn-danger" title="remove color">
								<font-awesome-icon icon="times" :fixed-width="true" />
							</button>
							to delete the row. You can't delete the last one.
						</li>
						<li class="mb-2">
							Click
							<button class="btn btn-square border-light btn-primary btn-sm" title="add new color">
								<font-awesome-icon icon="plus" :fixed-width="true" />
							</button>
							(the big one... kinda hard to miss) to add a new row.
						</li>
						<li>
							Click
							<button type="button" class="btn btn-square border-light text-info btn-sm" data-toggle="collapse" data-target="#instructions" title="show/hide instructions">
								<font-awesome-icon icon="info" :fixed-width="true" />
							</button>
							at the top right to hide/show the instructions (the ones you are reading right now).
						</li>
					</ul>
					<p>BTW this site remembers your changes if you want to reset use those buttons:</p>
				</div>
				<div>
					<button type="button" class="btn btn-sm btn-danger mr-1 mb-1" @reset="resetPallet">reset color palette</button>
					<button type="button" class="btn btn-sm btn-danger mr-1 mb-1" @reset="resetColors">reset user colors</button>
					<button type="button" class="btn btn-sm btn-danger mr-1 mb-1" @reset="resetAll">reset all</button>
				</div>
				<div>
					<label class="form-check">
						<input type="checkbox" class="form-check-input" v-model="showAmoled">&nbsp;
						<span class="form-check-label">show AMOLED preview</span>
					</label>
				</div>
				<div>
					<label class="form-check">
						<input type="checkbox" class="form-check-input" v-model="hideInstructionsInitial">&nbsp;
						<span class="form-check-label">hide the instructions next time?</span>
					</label>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: "AppHeader",
		data() {
			return {
				showInstructions: !this.$store.getters['hideInstructionsInitial'],
				showAmoled: this.$store.getters['showAmoled'],
				hideInstructionsInitial: this.$store.getters['hideInstructionsInitial']
			}
		},
		watch: {
			showAmoled(newValue, oldValue) { this.$store.commit('showAmoled', newValue); },
			hideInstructionsInitial(newValue, oldValue) { this.$store.commit('hideInstructionsInitial', newValue); }
		},
		methods: {
			toggleInstructions() {
				this.showInstructions = !this.showInstructions;
			},
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