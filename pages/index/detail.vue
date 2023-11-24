<template>
	<view class="detail">
		<uni-title type="h1" :title="info.title" align="center"></uni-title>
		<uni-title type="h6" :title="info.time" align="center"></uni-title>
		<view class="content" v-html="info.desc">
			
		</view>
	</view>
</template>

<script setup>

import { onMounted, ref } from 'vue'

const info = ref({})

onMounted(() => {
  info.value = uni.getStorageSync('indexdetail')
})
	
</script>

<style lang="less">
.detail{
	overflow: auto;
	height:100%;
	background: #ffffff;
	.content{
		padding: 20px;
		line-height: 25px;
	}
}
</style>
