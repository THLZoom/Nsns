<template>
    <div class="mine">
        <ul class="mine_header" :style="{background:anthor}">
            <li>
                <router-link class="router_a" to='/cart'></router-link>
            </li>
            <li>{{header_name}}</li>
            <li>
                <router-link class="router_a" to='/home'></router-link>
            </li>
        </ul>
        <div class="mine_info">
            <div>
                <img class="persion_img" :src="persion_img"/>
            </div>
            <div>
                <p class="persion_name">{{persion_name}}</p>
                <p class="persion_grade">{{persion_grade}}</p>
            </div>
            <div>
            </div>
        </div>
        <div class="mine_account">
            <p>账户余额 :
                <span> {{balance}}</span>
            </p>
            <p>积分 :
                <span> {{jf}}</span>
            </p>
        </div>
        <ul class="mine_order">
            <li><a><p>{{num_pay}}</p>待付款</a></li>
            <li><a><p>{{num_dispatch}}</p>待发货</a></li>
            <li><a><p>{{num_confirm}}</p>待确认</a></li>
            <li><a><p>{{num_review}}</p>待评价</a></li>
        </ul>
        
        <ul class="mine_nav">
            <li><a><i class="iconfont icon-dingdan-copy"></i>我的订单</a></li>
            <li><a><i class="iconfont icon-ziliao"></i>我的资料</a></li>
            <li><a><i class="iconfont icon-icon-copy"></i>我的积分</a></li>
            <li><a><i class="iconfont icon-mima"></i>修改密码</a></li>
        </ul>
        <ul class="mine_item">
            <li><a><i class="iconfont icon-huiyuan"></i>会员特权</a></li>
            <li><a><i class="iconfont icon-shangcheng"></i>积分商城</a></li>
            <li><a><i class="iconfont icon-scdizhi"></i>收货地址</a></li>
            <li><a><i class="iconfont icon-zaixiankefu"></i>在线客服</a></li>
            <li><a><i class="iconfont icon-intro3-copy"></i>罗莎简介</a></li>
            <li><router-link to='/theme'><i class="iconfont icon-msnui-theme"></i>更换主题</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'mine',
    data() {
        return {
            header_name:'个人中心',
            persion_img: 'http://m.nsnsd.com/images/avatar_01.jpg',
            persion_name: '我就想看看这名字能起多长',
            persion_grade: '注册会员',
            balance: '645',
            jf: '2312',
            num_pay:'0',
            num_dispatch:'0',
            num_confirm:'0',
            num_review:'0'
        }
    },
    computed:{
        anthor(){
            return this.$store.state.anthor;
        }
    }
}
</script>
<style>
.mine {
    width: 100%;
    padding-bottom: 5rem;
}
/* mine 顶部 */
.mine_header {
    width: 100%;
    background: #fff;
}

.mine_header li {
    width: 32%;
    display: inline-block;
    font-size: 1.3rem;
    text-align: center;
    line-height: 3.5rem;
    vertical-align: middle;
}
.mine_header li:nth-child(3) {
    background: url(../../assets/mine_home.svg) no-repeat 100% 50%;
    background-size: 32% 60%;
}

.mine_header li:nth-child(3) a {
    display: block;
    width: 43%;
    height: 3.5rem;
    margin-left: 63%;
}

.mine_header li:nth-child(1) {
    background: url(../../assets/back.svg) no-repeat 1% 57%;
    background-size: 32% 60%;
}

.mine_header li:nth-child(1) a {
    display: block;
    width: 43%;
    height: 3.5rem;
}


/* 用户信息部分 */
.mine_info {
    width: 100%;
    padding: 2rem 0;
    background: -webkit-linear-gradient(right, #71bdf3, #C9F);
    background: -moz-linear-gradient(right, #71bdf3, #C9F);
    background: -o-linear-gradient(right, #71bdf3, #C9F);
    background: linear-gradient(to right, #71bdf3, #C9F);
}

.mine_info div {
    display: inline-block;
    width: 31%;
    vertical-align: middle;
}
.mine_info div:nth-child(2){
    width: 53%;
    padding-bottom: 1rem;
}
.mine_info div:nth-child(3){
    width: 13%;
    height: 5rem;
}

.mine_info .persion_img {
    margin-left: 2rem;
    width: 55%;
    border-radius: 50%;
}

.mine_info .persion_name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
    width: 100%;
    line-height: 3.8rem;
    color: #fff;
}

.mine_info .persion_grade {
    width: 60%;
    line-height: 1rem;
    color: #fff;
}

.mine_info div:nth-child(3) {
    background: url(../../assets/go.svg) no-repeat 70% 46%;
    background-size: 27% 20%;
}


/* 用户余额，积分部分 */
.mine_account {
    width: 100%;
    background: linear-gradient(to right, #71bdf3, #C9F);
    line-height: 3rem;
    color: #fff;
}

.mine_account p {
    display: inline-block;
    width: 49%;
    text-align: center;
    padding-top: 1rem;
    padding-left: 10%;
}

.mine_account p:nth-child(1) {
    background: url(../../assets/balance.svg) no-repeat 22% 67%;
    background-size: 12% 45%;
}

.mine_account p:nth-child(2) {
    background: url(../../assets/integral.svg) no-repeat 23% 67%;
    background-size: 23% 63%;
}
.mine_order{
    width: 100%;
    background: linear-gradient(to right, #71A0EE, #C9E);
    border-top: 1px solid rgba(255,255,255,0.2);
}
.mine_order li{
    display: inline-block;
    width: 24%;
}
.mine_order li a{
    display: block;
    color: #fff;
    width: 100%;
    line-height: 2rem;
    text-align: center;

}
.mine_order li:nth-child(2) a{
    border-right: 0.5px solid rgba(255,255,255,.5);
}

/* 用户订单选项 */
.mine_nav{
    width: 100%;
    margin-top: 4%;
    background: #fff;
}
.mine_nav li{
    display: inline-block;
    width: 24%;
    text-align: center;
}
.mine_nav li a{
    display: block;
    width: 100%;
    color: #333;
    padding-bottom: 1rem; 
}
.mine_nav li a i{
    display: block;
    font-size: 2rem;
    line-height: 3.5rem;
}

.mine_nav .icon-dingdan-copy{
    color: #FCE38A;
}
.mine_nav .icon-ziliao{
    color: #3490DE;
}
.mine_nav .icon-icon-copy{
    color: #62D2A2;
}
.mine_nav .icon-mima{
    color: #A82FFC;
}


/* 用户选项 */
.mine_item{
    width: 100%;
    margin-top: 4%;
    background: #fff;
}
.mine_item li{
    width: 24%;
    padding-bottom: 1rem;
    display: inline-block;
    text-align: center;
    border-bottom: 1px solid #EFEFEF;
}
.mine_item li a{
    display: block;
    width: 100%;    
    color: #333;
}
.mine_item li a i{
    display: block;
    font-size: 2.5rem;
    line-height: 4.5rem;
}

.mine_item .icon-huiyuan{
    font-size: 2rem;
    color: #E41655;
}
.mine_item .icon-shangcheng{
    color: #00AD7C;
}
.mine_item .icon-scdizhi{
    color: #F98B60;
}
.mine_item .icon-zaixiankefu{
    color: #FF165D;
}
.mine_item .icon-intro3-copy{
    color: #3490DE;
}
.mine_item .icon-msnui-theme{
    color: #FCE38A;
    font-size: 3rem;
}

</style>