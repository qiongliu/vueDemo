<template>
	<div class="m_header">
		<div class="back" v-if="showBack" @click="back"></div>
		<h1>{{title}}</h1>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import {mapMutations} from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'title',
				'showBack'
			])
		},
		methods: {
			back () {
				this.$router.back();
				this.setShowBack(false);
			},
			...mapMutations ({
				setShowBack: 'SET_SHOWBACK'
			})
		}
	}
</script>

<style lang="scss">
	@import '../common/css/variable';
	@import '../common/css/mixin';
	.m_header {
		.back {
			position: absolute;
			height: $h-hd;
			width: 1.333333rem;
			top: 0;
			left: 0;
			background: url(../common/images/back.png)center 0.893333rem no-repeat;
			background-size: 0.48rem 0.48rem;
		}
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


