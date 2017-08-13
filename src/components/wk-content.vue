<template>
	<div class="wk-content">
		<div class="item" v-for="item in data">
			<a :href="item.linkUrl"><img :src="item.imgUrl"></a>
			<p class="name">{{item.author}}</p>
			<p class="info">
				<span class="time">{{item.time}}</span> | <span>{{item.people}}人观看</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang="scss">
	.wk-content {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		.item {
			margin: 0 0.2rem;
			flex: 1 0 4.6rem;
			a {
				display: block;
			}
			img {
				display: block;
				width: 100%;
			}
			p {
				line-height: 0.48rem;
			}
		}
	}
</style>