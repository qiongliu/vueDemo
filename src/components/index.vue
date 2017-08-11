<template>
	<div class="index">
		<slider>
			<div v-for="item in sliderInfo">
				<a :href="item.linkUrl">
					<img :src="item.imgUrl" alt="">
				</a>
			</div>
		</slider>
	</div>
</template>

<script>
	import Slider from 'base/slider';
	import {getSliderInfo} from 'api/getIndexInfo';
	import {ERR_OK} from 'api/config'
	export default {
		data () {
			return {
				sliderInfo: []
			}
		},
		components: {
			Slider
		},
		created() {
			this._getSliderInfo()
		},
		methods: {
			_getSliderInfo () {
				getSliderInfo().then((res) => {
					if(res.code === ERR_OK) {
						this.sliderInfo = res.data
						console.log(this.sliderInfo)
					}
				},(err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>