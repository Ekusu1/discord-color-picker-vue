<template>
	<div id="app" class="container p-2">
		<AppHeader />
		<ColorsList />
	</div>
</template>


<script>
	import AppHeader from '@/components/AppHeader';
	import ColorsList from "@/components/ColorsList";

	export default {
		components: {
			AppHeader,
			ColorsList
		}
	}
</script>

<style lang="scss">
</style>
