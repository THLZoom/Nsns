<template>
    <div class="goodsList">
        <ul class="gl_header">
            <li><a @click="changeColor(0)" class="active">最新</a></li>
            <li><a @click="changeColor(1)">销量</a></li>
            <li><a @click="changeColor(2)">价格</a></li>
        </ul>
        <ul class="gl_content" @touchmove='loadMore'>
             <li v-for="(item,index) in goods" :key="index">
                <a>
                    <img :src="item.img"/>
                    <p>{{item.title}}</p>
                    <span>{{item.price+' '+index}}</span>
                </a>
             </li>
        </ul>
        <transition name='fade'>
            <div class="backTop" v-show="backTop" @click='top'><span class="iconfont icon-fanhuidingbu"></span></div>
        </transition>
    </div>
</template>
<script>
    export default{
        name:'goodsList',
        data(){
            return{
                goods:[
                    {
                        img:'http://s3.mogucdn.com/p2/170725/upload_5i6fcddj6deai4fl11f1eck8fh5ff_640x900.jpg_320x999.webp',
                        title:'露肩雪纺衫女2017新款韩版袖口百褶印花套头显瘦打底上衣潮',
                        price:'￥47.50'
                    },
                    {
                        img:'http://s3.mogucdn.com/p2/170725/upload_711hh6hafc50kk8d86jj3053k7e6k_640x900.jpg_320x999.webp',
                        title:'盛夏必败2017修身吊带裙A字裙礼服裙沙滩裙连衣裙露肩短裙',
                        price:'￥82.50'
                    },
                    {
                        img:'http://s3.mogucdn.com/p2/170725/upload_5i6fcddj6deai4fl11f1eck8fh5ff_640x900.jpg_320x999.webp',
                        title:'露肩雪纺衫女2017新款韩版袖口百褶印花套头显瘦打底上衣潮',
                        price:'￥47.50'
                    },
                    {
                        img:'http://s3.mogucdn.com/p2/170725/upload_711hh6hafc50kk8d86jj3053k7e6k_640x900.jpg_320x999.webp',
                        title:'盛夏必败2017修身吊带裙A字裙礼服裙沙滩裙连衣裙露肩短裙',
                        price:'￥82.50'
                    },
                    {
                        img:'http://s3.mogucdn.com/p2/170725/upload_5i6fcddj6deai4fl11f1eck8fh5ff_640x900.jpg_320x999.webp',
                        title:'露肩雪纺衫女2017新款韩版袖口百褶印花套头显瘦打底上衣潮',
                        price:'￥47.50'
                    },
                    {
                        img:'http://s3.mogucdn.com/p2/170725/upload_711hh6hafc50kk8d86jj3053k7e6k_640x900.jpg_320x999.webp',
                        title:'盛夏必败2017修身吊带裙A字裙礼服裙沙滩裙连衣裙露肩短裙',
                        price:'￥82.50'
                    }
                ],
                backTop:false
            }
        },
        methods:{
            changeColor:function(num){
                $('.gl_header li a').removeClass('active');
                $('.gl_header li').eq(num).find('a').addClass('active');
            },
            loadMore:function(){
                var critical=$('.gl_content').height()-$(window).scrollTop()-554;
                if(critical<200){
                    for(let i=0;i<10;i++){
                        this.goods.push(this.goods[i]);
                    }
                }
                
                $(window).scrollTop()>1000?this.backTop=true:this.backTop=false;
            },
            top:function(){
                $(window).scrollTop('0');
                this.loadMore();
            }
        }
    }
</script>
<style>
.goodsList{
    width: 100%;
}
.gl_header{
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0;
}
.gl_header li{
    display: inline-block;
    width: 32.6%;
    text-align: center;
} 
.gl_header li a{
    display: block;
    line-height: 4rem;
    font-size: 1.2rem;
    color: #666;
}
.gl_header li .active{
    color: #ef4562;
}



/* 列表内容 */
.gl_content{
    width: 100%;
    padding-bottom: 5rem;
    margin-top: 4rem;
    font-family: Arial, Helvetica, sans-serif;
     font-size: 0;
    -webkit-text-size-adjust:none; 
}
.gl_content li{
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    height: 23rem;
    background: #fff;
     font-size: 1rem; 
}
.gl_content li a{
    display: block;
    width: 100%;
}
.gl_content li img{
    width: 94%;
    margin:0.3rem 0 0 0.5rem;
}
.gl_content li p{
    width: 95%;
    margin-left: 0.5rem;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}
.gl_content li span{
    color: #FF3366;
    margin-left: 5rem;;
}
.backTop{
    background: #FFF;
    position: fixed;
    right: 1rem;
    bottom: 7rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    line-height: 2rem;
    
}
.icon-fanhuidingbu{
    color: red;
    font-size: 1.7rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>