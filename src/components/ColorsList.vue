<template>
	<div class="row no-gutters justify-content-center">
		<div class="col">
			<draggable v-model="colorsList"
			           draggable=".color-row"
			           handle=".drag-handle"
			           ghostClass="drag-ghost"
			           chosenClass="drag-chosen"
			           animation="250"
			           removeCloneOnHide="false"
			           direction="vertical"

			>
				<ColorRow v-for="(color, index) in colors"
				          :key="index"
				          :index="index"
				          :color="color"
				/>
				<div slot="footer" class="row no-gutters mt-1">
					<div class="btn-group btn-block">
						<button type="button" title="add new color"
						        class="btn btn-primary border-light col"
						        @click="addColor">
							<font-awesome-icon icon="plus" :fixed-width="true" />
						</button>
						<button type="button" title="reset user colors"
						        class="btn btn-danger border-light col-auto"
						        @click="resetColors">
							<font-awesome-icon icon="trash-alt" :fixed-width="true" />
						</button>

					</div>
				</div>
			</draggable>
		</div>
	</div>

</template>

<script>
	import ColorRow from '@/components/ColorRow';
	import _ from 'lodash';
	import draggable from 'vuedraggable'


	export default {
		name: 'ColorsList',
		components: {
			ColorRow,
			draggable
		},
		computed: {
			colors() { return this.$store.getters['colors']; },
			colorsList: {
				get() { return this.$store.getters['colors']; },
				set(value) { this.$store.commit('colors', value); }
			}
		},
		methods: {
			addColor() { this.$store.commit('addColor') },
			resetColors(){ this.$store.commit('resetColors') },
		}
	}
</script>