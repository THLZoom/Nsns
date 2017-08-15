<template>
    <div class="home">
        <header class="home_header">
            <div class="header_icon"><a></a></div>
            <form action="" method="get">
                <input type="search" />
            </form>
            <i class="cart_header"><router-link class="router_a" to='/cart'></router-link></i>
        </header>

        <Swiper id="banner"></Swiper>

         <!-- 首页导航 -->
        <nav id="home_nav">
            <ul>
                <li><router-link to='goods'><i></i>分类</router-link></li>
                <li><a><i></i>登录/注册</a></li>
                <li><a><i></i>全部商品</a></li>
                <li><router-link to='cart'><i></i>购物车</router-link></li>
                <li><a><i></i>我的订单</a></li>
            </ul>
        </nav>

        <!-- 首页分类 -->
        <nav id="home_type">
            <h3>产品分类</h3>
            <ul>
                <li><router-link to='/goodsList'><img src="http://s2.mogucdn.com/p1/160321/1ei_ie4wkmbxgu3dkzrwg4zdambqgqyde_130x130.jpg_200x9999.v1c7E.70.webp"/>爽肤水</router-link></li>
                <li><a><img src="http://s2.mogucdn.com/p1/160321/1ei_ie3tmnzumvtdozrwg4zdambqgayde_130x130.jpg_200x9999.v1c7E.70.webp"/>乳液</a></li>
                <li><a><img src="http://s2.mogucdn.com/p1/160429/1ei_ifrtgnrygi3ggobthazdambqhayde_120x120.jpg_200x9999.v1c7E.70.webp"/>人气面膜</a></li>
                <li><a><img src="http://s2.mogucdn.com/p1/160321/1ei_ifrgczrxmnqtkzrwg4zdambqmeyde_130x130.jpg_200x9999.v1c7E.70.webp"/>超值套装</a></li>
            </ul>
        </nav>

        <!-- 商品列表 -->
        <div id="home_list">
            <ul class="list_header">
                <li><a @click="change(0)" class="active">人气商品</a></li>
                <li><a @click="change(1)">热卖商品</a></li>
            </ul>
            <ul @touchmove='loadMore' class="list_content">
                <li v-for="(item,index) in goods" :key="index">
                    <a>
                        <img :src="item.img"/>
                        <p>{{item.title}}</p>
                        <span>{{item.price}}</span>
                    </a>
                </li>
            </ul>
            <transition name='fade'>
                <div class="backTop" v-show="backTop" @click='top'><span class="iconfont icon-fanhuidingbu"></span></div>
            </transition>
        </div>
    </section>
    </div>
</template>

<script>
    import Swiper from './swiper' 
    export default{
        name:'home',
        data(){
            return {
                isTrue:true,
                isFalse:false,
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
                    }
                ],
                backTop:false
                
            }
        },
        template:'<Swiper></Swiper>',
        components:{
            Swiper
        },
        methods:{
            change:function(index){
                $('#home_list .list_header a').removeClass('active');
                $('#home_list .list_header a').eq(index).addClass('active');
            },
            loadMore:function(){
                var critical=$('.list_content').height()-$(window).scrollTop()-554;
                if(critical<10){
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
.home{
    width: 100%;
}
 .swiper-container {
    width: 100%;
}

 .swiper-slide {
    background-size: 100% 100%;
}
.swiper-slide img{
    width: 100%;
    height: auto;
}  

/* header */
.home_header{
    width: 100%;
    background: #fff;
}
.home_header .header_icon{
    width: 35%;
    display: inline-block;
}
.home_header .header_icon a{
    display: inline-block;
    width: 100%;
    height: 3.6rem;
    background: url(http://www.nsnsd.com/images/logo.png) no-repeat .5rem .2rem;
    background-size: contain;  
}
.home_header form{
    width: 50%;
    height: 3.6rem;
    display: inline-block;
    position: relative;
}
.home_header input{
    border: none;
    background: #F4F4F4;
    width: 100%;
    height: 2.3rem;
    border-radius: 6%;
    position: absolute;
    top: 20%;
    left: 3%
}
.home_header .cart_header{
    width: 12%;
    display: inline-block;
}
.home_header .cart_header a{
    display: inline-block;
    width: 100%;
    height: 3.6rem;
    background: url(../../assets/cart_header.svg) no-repeat 60% 45%;
    background-size:50% 44%;
}

/* 首页导航 */
 #home_nav{
    width: 100%;
    background: #fff;
}
#home_nav ul{
    width: 100%;
}
#home_nav ul li{
    display: inline-block;
    width: 19%;
}
#home_nav ul li a{
    display: inline-block;
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
}
#home_nav ul li a i{
    display: block;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    margin: 1rem 0 .5rem .7rem;
}

#home_nav ul li:nth-child(1) a i{
    background: #F3CF0B url(http://m.nsnsd.com/images/i_m1.png) no-repeat 50% 50%;
    background-size: 53% 53%;
}
#home_nav ul li:nth-child(2) a i{
    background: #71bdf3 url(http://m.nsnsd.com/images/i_u6.png) no-repeat 50% 50%;
    background-size: 53% 53%;
}
#home_nav ul li:nth-child(3) a i{
    background: #f371ca url(http://m.nsnsd.com/images/i_m7.png) no-repeat 50% 50%;
    background-size: 53% 53%;
}
#home_nav ul li:nth-child(4) a i{
    background: #be65ec url(http://m.nsnsd.com/images/i_m10.png) no-repeat 50% 50%;
    background-size: 53% 53%;
}
#home_nav ul li:nth-child(5) a i{
    background: #F3A231 url(http://m.nsnsd.com/images/i_u1.png) no-repeat 50% 50%;
    background-size: 53% 53%;
}

/* 产品分类 */
#home_type{
    width: 100%;
    background: #fff;
    margin-top: 1rem;
}
#home_type h3{
    text-align: center;
    width: 100%;
    line-height: 3rem;
    background: url(../../assets/home_type.svg) no-repeat 37% 50%;
    background-size: 7% 50%;  
    font-weight: normal;
}
#home_type ul{
    width:100%;
    border-top: 1px solid #E5E5E5;
}
#home_type ul li{
    display: inline-block;
    width: 24%;
    padding-bottom: 1rem;
}
#home_type ul li img{
    width: 100%;
    margin-bottom: .1rem;
}

#home_type ul li a{
    display: block;
    width: 100%;
    text-align: center;
}



/* 商品列表 头部*/
#home_list{
    width: 100%;
    margin-top: 1rem;
    background: #fff;
}
#home_list .list_header{
    width: 100%;
    height: 3.5rem;
    box-shadow: 3px 4px 10px #888888;
} 
#home_list .list_header li{
    display: inline-block;
    width: 49%; 
}
#home_list .list_header li a{
    display: block;
    width: 5rem;
    margin: 0 auto;
    line-height: 3rem; 
    text-align: center;
    font-size: 1.2rem;
}
#home_list .list_header .active{
    color: #FF3366;
    border-bottom: .1rem solid #FF3366;
}

/* 商品列表 内容 */
#home_list .list_content{
    width: 100%;
    padding-bottom: 5rem;
}
#home_list .list_content li{
    margin-top: 1rem;
    display: inline-block;
    vertical-align: middle;
    width: 49%;
    background: #fff;
}
#home_list .list_content li a{
    display: block;
    width: 100%;
}
#home_list .list_content li img{
    width: 94%;
    margin:0.3rem 0 0 0.5rem;
}
#home_list .list_content li p{
    width: 95%;
    margin-left: 0.5rem;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}
#home_list .list_content li span{
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