<template>
    <div class="home">
        <header class="home_header">
            <div class="header_icon"><a></a></div>
            <form action="" method="get">
                <input type="search" />
            </form>
            <i class="cart_header"><router-link class="router_a" to='/cart'></router-link></i>
        </header>

        <Carrousel id="banner"></Carrousel>

         <!-- 首页导航 -->
        <nav id="home_nav">
            <ul>
                <li><a><i></i>分类</a></li>
                <li><a><i></i>登录/注册</a></li>
                <li><a><i></i>全部商品</a></li>
                <li><a><i></i>购物车</a></li>
                <li><a><i></i>我的订单</a></li>
            </ul>
        </nav>

        <!-- 首页分类 -->
        <nav id="home_type">
            <h3>产品分类</h3>
            <ul>
                <li><a><img src="http://www.nsnsd.com/Upfiles/ProPic/2013-8/201381711204882227.jpg"/>爽肤水类</a></li>
                <li><a><img src="http://www.nsnsd.com/Upfiles/ProPic/2013-8/201381710322292993.jpg"/>乳类</a></li>
                <li><a><img src="http://www.nsnsd.com/Upfiles/ProPic/2013-9/2013928944393557.jpg"/>面膜类</a></li>
                <li><a><img src="http://www.nsnsd.com/Upfiles/ProPic/2013-8/201381712204278308.jpg"/>套装类</a></li>
            </ul>
        </nav>

        <!-- 商品列表 -->
        <div id="home_list">
            <ul class="list_header">
                <li><a @click="change(0)" class="active">人气商品</a></li>
                <li><a @click="change(1)">热卖商品</a></li>
            </ul>
            <ul class="list_content">
                <li>
                    <a>
                        <img src="http://s3.mogucdn.com/p2/170725/upload_5i6fcddj6deai4fl11f1eck8fh5ff_640x900.jpg_320x999.webp"/>
                        <p> 露肩雪纺衫女2017新款韩版袖口百褶印花套头显瘦打底上衣潮 </p>
                        <span>￥47.50</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="http://s3.mogucdn.com/p2/170725/upload_711hh6hafc50kk8d86jj3053k7e6k_640x900.jpg_320x999.webp"/>
                        <p> 盛夏必败2017修身吊带裙A字裙礼服裙沙滩裙连衣裙露肩短裙 </p>
                        <span>￥82.50</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="http://s3.mogucdn.com/p2/170728/upload_29833ddhlbf60k8ike6kgf6lhg31e_640x900.jpg_320x999.webp"/>
                        <p> 盛夏必败2017修身吊带裙A字裙礼服裙沙滩裙连衣裙露肩短裙 </p>
                        <span>￥110.50</span>
                    </a>
                </li>
                <li>
                    <a>
                        <img src="http://www.nsnsd.com/Upfiles/ProPic/2013-8/201381711315629082.jpg"/>
                        <p>美白祛斑日霜、夜霜组合</p>
                        <span>￥262.00</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    </div>
</template>

<script>
    import Carrousel from './swiper' 
    export default{
        name:'home',
        data(){
            return {
                isTrue:true,
                isFalse:false
            }
        },
        template:'<Carrousel></Carrousel>',
        components:{
            Carrousel
        },
        methods:{
            change:function(index){
                $('#home_list .list_header a').removeClass('active');
                $('#home_list .list_header a').eq(index).addClass('active');
            }
        }
    }
    
</script>
<style>
.home{
    width: 100%;
    height: 100%;
}
.swiper-container {
    width: 100%;
     height: 32%; 
}

.swiper-slide {
    background-size: 100% 100%;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
}

/* header */
.home_header{
    height: 7%;
    background: #fff;
}
.home_header .header_icon{
    width: 35%;
    height: 100%;
    float: left;
}
.home_header .header_icon a{
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(http://www.nsnsd.com/images/logo.png) no-repeat 1%;
    background-size: contain; 
}
.home_header form{
    width: 50%;
    height: 100%;
    float: left;
    position: relative;
}
.home_header input{
    border: none;
    background: #F4F4F4;
    width: 100%;
    height: 60%;
    border-radius: 6%;
    position: absolute;
    top: 20%;
    left: 3%
}
.home_header .cart_header{
    width: 15%;
    height: 100%;
    float: left;
}
.home_header .cart_header a{
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(../../assets/cart_header.svg) no-repeat 60% 45%;
    background-size:50% 44%;
}

/* 首页导航 */
 #home_nav{
    width: 100%;
    height:20%;
    background: #fff;
}
#home_nav ul{
    width: 100%;
    height: 100%;
}
#home_nav ul li{
    float: left;
    width: 20%;
    height: 100%;
}
#home_nav ul li a{
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
}
#home_nav ul li a i{
    display: block;
    border-radius: 50%;
    width: 77%;
    height: 50%;
    margin: 15% 0 10% 13% ;
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

/* 首页分类 */
#home_type{
    width: 100%;
    height:28%;
    background: #fff;
    margin-top: 3%;
}
#home_type h3{
    text-align: center;
    width: 100%;
    height: 20%;
    padding-top: 2%;
    background: url(../../assets/home_type.svg) no-repeat 36% 59%;
    background-size: 7% 60%;  
}
#home_type ul{
    width:100%;
    height: 82%;
    border-top: 1px solid #E5E5E5;
}
#home_type ul li{
    float: left;
    width: 25%;
    height: 100%;
    border-right: 1px solid #E5E5E5;
}
#home_type ul li img{
    width: 100%;
    height: 70%;
    margin-bottom: 10%;
}

#home_type ul li a{
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
}



/* 商品列表 头部*/
#home_list{
    width: 100%;
    margin-top: 3%;
    background: #fff;
}
#home_list .list_header{
    width: 100%;
    height: 3.5rem;
    box-shadow: 3px 4px 10px #888888;
} 
#home_list .list_header li{
    float: left;
     width: 50%; 
     height: 100%; 
}
#home_list .list_header li a{
    display: block;
    width: 5rem;
    margin: 0 auto;
    height: 85%;
    line-height: 3.5rem; 
    text-align: center;
    font-size: 1.2rem;
}
#home_list .list_header .active{
    color: #FF3366;
    border-bottom: 2px solid #FF3366;
}

/* 商品列表 内容 */
#home_list .list_content{
    width: 100%;
    height: 100%;
}
#home_list .list_content li{
    margin: 3% 0 2% 0;
    float: left;
    width: 46%;
    height: 19rem;
    background: #fff;
    margin-left: 0.8rem;
    box-shadow: 4px 3px 18px #888888;
}
#home_list .list_content li a{
    display: block;
    width: 100%;
    height: 100%;
}
#home_list .list_content li img{
    width: 94%;
    height: 82%;
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
</style>