<template>
	<div class="m_header">
		<div class="back" v-if="isBack"></div>
		<h1>{{title}}</h1>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		props: {
			isBack: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			...mapGetters([
				'title'
			])
		}
	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.m_header {
		h1 {
			@include px2rem (height,128);
			@include px2rem (line-height,170);
			@include px2px (font-size,38);
			background-color: $c-topft-bg;
			color: #fff;
			text-align: center;
		}
	}
</style>


