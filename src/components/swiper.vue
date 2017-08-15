<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503299615&di=b7ff1c7667a466225c5f2f6773fc4e93&imgtype=jpg&er=1&src=http%3A%2F%2Fd7.yihaodianimg.com%2FN10%2FM05%2F3A%2FAE%2FChEi3FXMXreAV29CAAL2-L144aQ17100.jpg"/></swiper-slide>
    <swiper-slide><img src="http://d6.yihaodianimg.com/N02/M0B/8B/6D/CgQCslPDWrKAMyCcAAK_Gp2MSAE45700.jpg"/></swiper-slide>
    <swiper-slide><img src="http://d6.yihaodianimg.com/N07/M00/36/3F/ChEbvFV_1bWAGIPNAALVqoO4_wo12800.jpg"/></swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
 
<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 4000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          speed:1000,
          loop:true,
          fade:true,
          autoplayDisableOnInteraction : false,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    //   this.swiper.slideTo(3, 1000, false)
    }
  }
</script>