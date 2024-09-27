<script setup lang="ts">
import { useMemberStore } from '@/stores'
// import { http } from '@/utils/http'
import  '@/utils/http'
const memberStore = useMemberStore()

// 测试请求
const getData = async() => {
  uni.request
  // const res = await http
  ({
    method: 'GET',
    url: '/home/banner',
  })
  // console.log('请求成果的结果',res);
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '测试数据持久化',
          token:'12345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>

    <button @tap="memberStore.clearProfile()"
    size="mini"
    plain
    type="warn">清理用户信息</button>

    <button @tap="getData"
    size="mini"
    plain
    type="warn">测试请求</button>


  </view>
</template>

<style lang="scss">
//
</style>
