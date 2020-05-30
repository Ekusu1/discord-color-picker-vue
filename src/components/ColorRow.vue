<template>
	<div class="row no-gutters color-row">
		<input type="text" class="col username discord-theme-light" v-model="color.name" v-bind="textBind"/>
		<input type="text" class="col username discord-theme-dark" v-model="color.name" v-bind="textBind"/>
		<input type="text" class="col username discord-theme-amoled" v-model="color.name" v-bind="textBind"
		       v-if="showAmoled"/>
		<div class="col-auto py-1 pl-1">
			<div class="btn-group btn-group-sm">
				<input type="color" class="btn btn-square btn-light border-light"
				       :style="{background: color.hexColor}"
				       v-model.lazy="color.hexColor"
				/>
				<div class="btn-group d-inline-block d-sm-none">
					<button type="button" class="btn btn-height btn-info border-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span class="sr-only">Toggle Dropdown</span>
					</button>
					<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<a class="dropdown-item" href="#">Dropdown link</a>
						<a class="dropdown-item" href="#">Dropdown link</a>
					</div>
				</div>
				<div class="btn-group d-none d-sm-inline-block">
					<button type="button" class="btn btn-height btn-info border-light" title="copy color in HEX" @click="copy">
						<font-awesome-icon icon="copy" :fixed-width="true"/>
					</button>
					<button type="button" class="btn btn-height btn-success border-light " title="clone color" @click="clone">
						<font-awesome-icon icon="clone" :fixed-width="true"/>
					</button>
					<button type="button" class="btn btn-height btn-danger border-light" title="remove color" @click="remove" :disabled="disableRemove">
						<font-awesome-icon icon="times" :fixed-width="true"/>
					</button>
				</div>
				<div class="btn btn-height btn-light border-light drag-handle" title="drag row">
					<font-awesome-icon icon="sort" :fixed-width="true"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ColorRow",
		props: {
			index: Number,
			color: Object
		},
		computed: {
			useWhitneyFont() { return this.$store.getters['useWhitneyFont'] },
			showAmoled() { return this.$store.getters['showAmoled'] },
			disableRemove() { return this.$store.getters['colors'] < 2; },
			textBind(){
				return {
					style: { color: this.color.hexColor },
					class: { 'use-whitney-font': this.useWhitneyFont }
				}
			},
			hexColor() { return this.color.hexColor; }
		},
		watch: {
			hexColor(newValue, oldValue) {
				this.$store.commit('rowColor', {index: this.index, color: newValue})
			}
		},
		methods: {
			copy() {
				let e = document.createElement('textarea');
				e.value = this.color.hexColor.toUpperCase();
				document.body.appendChild(e);
				e.select();
				document.execCommand('copy');
				document.body.removeChild(e);
			},
			clone() { this.$store.commit('cloneColor', this.index); },
			remove() { this.$store.commit('removeColor', this.index); }
		}
	}
</script>