<template>
	<div class="res">
		<p>res</p>
		<router-view></router-view>		
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		mounted () {
			setTimeout(()=> {
				this.setTitle = '资源'
			},20)
		},
		methods: {
			...mapMutations ({
				setTitle: 'SET_TITLE'
			})
		}
	}
</script>