<template>
    <div class="detail">
        <ul class="detail_header">
            <li>
                <a @click="back"><i class="iconfont icon-fanhui"></i></a>
            </li>
            <li>{{header_name}}</li>
            <li>
                <router-link class="router_a" to='/home'><i class="iconfont icon-zhuye"></i></router-link>
            </li>
        </ul>
        <div class="detail_body">
            <img class="detail_body_banner" :src="detail_banner"/>
            <div class="detail_body_goodsInfo">
                <p class="detail_body_title">{{detail_title+detail_describe}}</p>
                <p class="detail_body_price">{{'&yen'+detail_price}}<span>{{'&yen'+detail_oldPrice}}</span></p>
                <p class="detail_body_payType"><span>微信支付</span><span>支付宝</span><span>网银在线</span><span>银行汇款</span></p>
            </div>
            <div class="detail_body_goodsParameter">
                <p>商品参数</p>
                <p><span>商品名称 : </span><span>{{detail_goodsName}}</span></p>
                <p><span>商品功效 : </span><span>{{detail_goodsEffect}}</span></p>
                <p><span>商品规格 : </span><span>{{detail_goodsCapacity}}</span></p>
                <p><span>适宜人群 : </span><span>{{detail_goodsPersion}}</span></p>
                <p><span>温馨提示 : </span><span>{{detail_goodsHint}}</span></p>
            </div>
            <div class="detail_body_particulars">
                <p>图文详情</p>
                <ul></ul>
            </div>
        </div>
        <div class="detail_footer">
            <div class="detail_footer_pay"><a>立即购买</a></div>
            <div class="detail_footer_addToCart" @click="addGoods()" v-show="goods_num==0">加入购物车</div>
            <div class="detail_footer_num" v-show="goods_num>0">
            <span class="sub toGrey" @click="subGoods()"></span>
            <span>{{goods_num}}</span>
            <span class="add" @click="addGoods()"></span>
        </div>
            <div class="detail_footer_toCart">
                <span class="detail_footer_numIcon" v-show="goods_num>0">{{goods_num}}</span>
                <router-link to='/cart'></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from './swiper'
    export default{
        name:'detail',
        data(){
            return{
                header_name:'商品详情',
                goods_num:0,
                detail_banner:'http://www.nsnsd.com/Upfiles/ProPic/2013-8/201381715443739977.jpg',
                detail_title:'祛痘精华液',
                detail_describe:'祛痘精华液30ml',
                detail_price:'96.00',
                detail_oldPrice:'121.00',
                detail_goodsName:'祛痘精华液',
                detail_goodsEffect:'面部护理',
                detail_goodsCapacity:'30ml',
                detail_goodsPersion:'油性或者偏油性的痘痘皮肤',
                detail_goodsHint:'请储存在阴凉干燥处，避免阳光直射'
            }
        },
        methods:{
            addGoods:function(){    
                this.goods_num++;
            },
            subGoods:function(){    
                this.goods_num>0?this.goods_num--:this.goods_num=0;
            },
            back:function(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style>
.detail{
    width: 100%;
    background: #f4f4f4;
    font-family:Arial;
}
/* detail 头部 */
.detail_header {
    width: 100%;
    background: #fff;
}

.detail_header li {
    width: 32%;
    display: inline-block;
    font-size: 1.3rem;
    text-align: center;
    line-height: 3.5rem;
    vertical-align: middle;
}


.detail_header li:nth-child(3) a {
    display: block;
    width: 43%;
    height: 3.5rem;
    margin-left: 63%;
}
.icon-fanhui,.icon-zhuye{
    color: black;
    font-size: 2.2rem;
}

.detail_header li:nth-child(1) a {
    display: block;
    width: 43%;
    height: 3.5rem;
}


/* detail 底部 */
.detail_footer{
    width: 100%;
    height: 4rem; 
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index:999;
    border-top:1px solid #e0e0e0; 
    display: flex;
}
/* 商品详情页底部购物车图标 */
.detail_footer .detail_footer_toCart{
    width: 18%;
    border-top: 1px solid #e0e0e0;
    padding: 2%;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: -75%;
    background: #fff;
}
.detail_footer .detail_footer_toCart a{
    display: block;
    width: 100%;
    height: 5.4rem;
    background:#f69 url(../../assets/cart_blank.svg) no-repeat 48% 60%;
    border-radius: 50%;
    background-size:54% 70%; 
}

.detail_footer .detail_footer_toCart .detail_footer_numIcon{
    width: 26%;
    display: block;
    position: absolute;
    top: 14%;
    right: 11%;
    background: #00BFFF;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 1.9rem;
}

/* 商品详情页底部立即购买 */
.detail_footer .detail_footer_pay{
    width: 20%;
    text-align: center;
    line-height: 4rem;
    font-size: 1.2rem;
    background: #f69;
}
.detail_footer .detail_footer_pay a{
    color: #fff;
}
/* 商品详情页底部加入购物车 */
.detail_footer .detail_footer_addToCart{
    width: 66%;
    font-size: 1.3rem;
    line-height: 4rem;
    text-align: center;
    color: #5E5E5E;
    font-weight: bold;
    
}


/* 商品详情页加减 */
.detail_footer .detail_footer_num{
    width: 40%;
    margin-left: 5rem;
    display: flex;
}
.detail_footer .detail_footer_num span{
    width: 33.3%;
    vertical-align: middle;
}
.detail_footer .detail_footer_num .add{
    height: 4rem;
    background: url(../../assets/add.svg) no-repeat 48% 45%;
    background-size: 60% 56%;
}
.detail_footer .detail_footer_num .sub{
    height: 4rem;
    background: url(../../assets/sub.svg) no-repeat 48% 40%;
    background-size: 60% 56%;
}
.detail_footer .detail_footer_num span:nth-child(2){
    text-align: center;
    line-height: 3.8rem;
    width: 15%;
    font-size: 1.5rem;
}


/* 商品详情内容部分 */
.detail_body{
    width:100%;
    height: 93%;
    overflow-y: auto;  
    background: #fff;
}
.detail_body .detail_body_banner{
    width: 100%;
    height: auto;
}
.detail_body .detail_body_goodsInfo{
    padding: 0 4%;
    width: 92%;
    height: 22%;
}

.detail_body .detail_body_title{
    font-size: 1.3rem;
    color: #424242;
    margin-top: 1rem;
}
.detail_body .detail_body_price{
    margin-top:1rem;
    font-size: 2rem;
    color: #f69;
}
.detail_body .detail_body_price span{
    color: #999;
    text-decoration: line-through;
    font-size: 1.2rem;
    margin-left: 1rem;
}

.detail_body .detail_body_payType{
    width: 100%;
    height: 3rem;
    border-top: 1px solid  #eee;
    margin-top: 6%;
    color: #999;
    line-height: 3rem;
}
.detail_body .detail_body_payType span{
    display: inline-block;
    width: 25%;
    background: url(../../assets/gou.svg) no-repeat 1% 50%;
    background-size: 20% 50%;
    text-indent: 1.6rem;
}

.detail_body .detail_body_goodsParameter{
    width: 100%;
    height: 18rem;
    border-top: 1rem solid #f2f5f8;
}
.detail_body .detail_body_goodsParameter p{
    width: 100%;
    line-height: 3rem;
    border-top: 1px solid  #f4f4f4;
    padding: 0 4%;
}
.detail_body .detail_body_goodsParameter p:nth-child(1){
    width: 100%;
    line-height: 3rem;
    text-align: center;
}
.detail_body .detail_body_goodsParameter p span:nth-child(2){
    margin-left: 1rem;
}


/* 图文详情 */
.detail_body .detail_body_particulars{
    border-top: 1rem solid #f2f5f8;
}
.detail_body .detail_body_particulars p{
    width: 100%;
    line-height: 3rem;
    text-align: center;
}
.detail_body .detail_body_particulars ul{
    width: 100%;
}

</style>