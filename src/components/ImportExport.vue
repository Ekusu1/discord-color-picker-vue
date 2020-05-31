<template>
	<div id="import-export">
		<div class="row no-gutters my-1">
			<div class="col btn-group btn-block">
				<button type="button" class="col btn btn-light" @click="openModal('import')">
					<font-awesome-icon icon="upload" :fixed-width="true"/>
					Import
				</button>
				<button type="button" class="col btn btn-light" @click="openModal('export')">
					<font-awesome-icon icon="download" :fixed-width="true"/>
					Export
				</button>
			</div>
		</div>

		<div class="modal fade" :class="modalOpenClass" tabindex="-1">
			<div class="modal-backdrop fade show"></div>
			<div class="modal-dialog">
				<div class="modal-content bg-dark">
					<div class="modal-header p-2 justify-content-end">
						<button type="button" class="btn btn-danger" @click="closeModal">
							<font-awesome-icon icon="times" :fixed-width="true"/>
						</button>
					</div>
					<div class="modal-body p-2">
						<textarea ref="textarea" class="form-control" rows="10" :readonly="modeExport"
						          v-model="importExportString"
						/>
						<div class="alert alert-danger mt-1 mb-0" v-if="message">
							{{ message }}
						</div>
					</div>
					<div class="modal-footer p-2">
						<button v-if="modeImport" type="button" class="btn btn-primary" :disabled="disableAction" @click="importData">
							<font-awesome-icon icon="upload" :fixed-width="true"/>
							Import
						</button>
						<button v-if="modeExport" type="button" class="btn btn-primary" :disabled="disableAction" @click="exportData">
							<font-awesome-icon icon="copy" :fixed-width="true"/>
							Copy to clipboard
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { copyToClipboard, isValidJson } from '@/utils'

	export default {
		name: "ImportExport",
		data() {
			return {
				showModal: false,
				modeImport: false,
				modeExport: false,
				importExportString: '',
				message: false
			}
		},
		computed: {
			modalOpenClass() {
				return {
					show: this.showModal,
					'd-block': this.showModal
				};
			},
			disableAction() {
				return !this.importExportString.trim()
			},
		},
		methods: {
			async openModal(mode) {
				const modeAction = {
					'import': async () => {
						this.modeImport = true;
						return this.importExportString
					},
					'export': async () => {
						this.modeExport = true;
						return await this.$store.dispatch('exportColors');
					}
				};
				this.importExportString = await modeAction[mode]();
				this.showModal = true;

				this.$nextTick(() => {
					const area = this.$refs.textarea;
					area.focus();
					this.modeExport && area.select()
				})
			},
			closeModal() {
				this.modeExport && (this.importExportString = '');
				this.showModal
					= this.modeImport
					= this.modeExport
					= this.message = false;
			},
			importData() {
				try {
					const jsonString = this.importExportString.trim();
					jsonString
					&& this.$store.dispatch('importColors', jsonString)
					&& this.closeModal();
				} catch (e) {
					this.message = e;
				}
			},
			exportData() {
				const jsonString = this.importExportString.trim();
				jsonString
				&& copyToClipboard(jsonString)
				&& this.closeModal();
			},
		}
	}
</script>
