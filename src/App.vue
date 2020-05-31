<template>
	<div id="app" class="container p-2">
		<AppHeader />
		<ColorsList />
		<import-export />
	</div>
</template>


<script>
	import AppHeader from '@/components/AppHeader';
	import ColorsList from "@/components/ColorsList";
	import ImportExport from "@/components/ImportExport";

	export default {
		components: {
			AppHeader,
			ColorsList,
			ImportExport
		}
	}
</script>

<style lang="scss">
</style>
