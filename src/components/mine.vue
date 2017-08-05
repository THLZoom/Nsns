<template>
    <div class="mine">
        <ul class="mine_header">
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
        <ul class="mine_order">
            <li><a><p>{{num_pay}}</p>待付款</a></li>
            <li><a><p>{{num_dispatch}}</p>待发货</a></li>
            <li><a><p>{{num_confirm}}</p>待确认</a></li>
            <li><a><p>{{num_review}}</p>待评价</a></li>
        </ul>
        <div class="mine_account">
            <p>账户余额 :
                <span> {{balance}}</span>
            </p>
            <p>积分 :
                <span> {{jf}}</span>
            </p>
        </div>
        <ul class="mine_nav">
            <li><a>我的订单</a></li>
            <li><a>我的资料</a></li>
            <li><a>我的积分</a></li>
            <li><a>修改密码</a></li>
        </ul>
        <ul class="mine_item">
            <li><a>会员特权</a></li>
            <li><a>积分商城</a></li>
            <li><a>收货地址</a></li>
            <li><a>在线客服</a></li>
            <li><a>罗莎简介</a></li>
            <li><a>罗莎资讯</a></li>
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
    }
}
</script>
<style>
.mine {
    width: 100%;
    height: 100%;
}
/* mine 顶部 */
.mine_header {
    width: 100%;
    height: 7%;
    background: #fff;
}

.mine_header li {
    width: 33.3%;
    height: 100%;
    float: left;
    font-size: 1.6rem;
    text-align: center;
    line-height: 3.5rem;
    
}
.mine_header li:nth-child(3) {
    background: url(../../assets/mine_home.svg) no-repeat 80% 50%;
    background-size: 32% 60%;
}

.mine_header li:nth-child(3) a {
    display: block;
    width: 43%;
    height: 100%;
    margin-left: 50%;
}

.mine_header li:nth-child(1) {
    background: url(../../assets/back.svg) no-repeat 20% 57%;
    background-size: 32% 60%;
}

.mine_header li:nth-child(1) a {
    display: block;
    width: 43%;
    height: 100%;
    margin-left: 10%;
}


/* 用户信息部分 */
.mine_info {
    width: 100%;
    height: 21%;
    background: -webkit-linear-gradient(right, #71bdf3, #C9F);
    background: -moz-linear-gradient(right, #71bdf3, #C9F);
    background: -o-linear-gradient(right, #71bdf3, #C9F);
    background: linear-gradient(to right, #71bdf3, #C9F);
}

.mine_info div {
    float: left;
    height: 100%;
    width: 33.3%;
}
.mine_info div:nth-child(2){
    width: 53%;
}
.mine_info div:nth-child(3){
    width: 13%;
}

.mine_info .persion_img {
    margin: 3rem 0 0 2rem;
    width: 55%;
    height: 53%;
    border-radius: 50%;
}

.mine_info .persion_name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
    width: 100%;
    height: 25%;
    margin-top: 25%;
    color: #fff;
}

.mine_info .persion_grade {
    height: 15%;
    width: 60%;
    line-height: 160%;
    color: #fff;
}

.mine_info div:nth-child(3) {
    background: url(../../assets/go.svg) no-repeat 70% 46%;
    background-size: 27% 20%;
}


/* 用户余额，积分部分 */
.mine_account {
    width: 100%;
    height: 7%;
    background: linear-gradient(to right, #71A0EE, #C9E);
    color: #fff;
}

.mine_account p {
    display: inline-block;
    width: 49.4%;
    height: 100%;
    text-align: center;
    padding-top: 4%;
    padding-left: 10%;
}

.mine_account p:nth-child(1) {
    background: url(../../assets/balance.svg) no-repeat 22% 55%;
    background-size: 12% 45%;
}

.mine_account p:nth-child(2) {
    background: url(../../assets/integral.svg) no-repeat 23% 51%;
    background-size: 23% 63%;
}
.mine_order{
    width: 100%;
    height: 12%;
    background: linear-gradient(to right, #71bdf3, #C9F);
    border-top: 1px solid rgba(255,255,255,.5);
}
.mine_order li{
    float: left;
    width: 25%;
    height: 100%;
}
.mine_order li a{
    display: block;
    color: #fff;
    width: 100%;
    height: 60%;
    margin-top: 20%;
    text-align: center;

}
.mine_order li:nth-child(2) a{
    border-right: 0.5px solid rgba(255,255,255,.5);
}

/* 用户订单选项 */
.mine_nav{
    width: 100%;
    height:14%;
    margin-top: 4%;
    background: #fff;
}
.mine_nav li{
    float: left;
    width: 25%;
    height: 100%;
    text-align: center;
}
.mine_nav li a{
    display: block;
    width: 100%;
    height: 33%;
    color: #333;
    padding-top: 61%;
}
.mine_nav li:nth-child(1){
    background: url(../../assets/order.svg) no-repeat 50% 36%;
    background-size: 28% 40%;
}
.mine_nav li:nth-child(2){
    background: url(../../assets/message.svg) no-repeat 50% 36%;
    background-size: 30% 40%;
}
.mine_nav li:nth-child(3){
    background: url(../../assets/jf.svg) no-repeat 50% 36%;
    background-size: 30% 40%;
}
.mine_nav li:nth-child(4){
    background: url(../../assets/password.svg) no-repeat 50% 36%;
    background-size: 25% 40%;
}

/* 用户选项 */
.mine_item{
    width: 100%;
    height: 34%;
    margin-top: 4%;
    background: #fff;
}
.mine_item li{
    width: 25%;
    height: 50%;
    float: left;
    text-align: center;
    border-bottom: 1px solid #EFEFEF;
}
.mine_item li a{
    display: block;
    width: 100%;
    height: 30%;
    padding-top: 70%;
    color: #333;
}
.mine_item li:nth-child(1){
    background: url(../../assets/vip.svg) no-repeat 50% 28%;
    background-size: 30% 26%;
}
.mine_item li:nth-child(2){
    background: url(../../assets/store.svg) no-repeat 50% 28%;
    background-size: 38% 26%;
}
.mine_item li:nth-child(3){
    background: url(../../assets/address.svg) no-repeat 50% 28%;
    background-size: 38% 26%;
}
.mine_item li:nth-child(4){
    background: url(../../assets/service.svg) no-repeat 50% 28%;
    background-size: 38% 26%;
}
.mine_item li:nth-child(5){
    background: url(../../assets/introduces.svg) no-repeat 50% 28%;
    background-size: 38% 26%;
}
.mine_item li:nth-child(6){
    background: url(../../assets/news.svg) no-repeat 50% 28%;
    background-size: 38% 26%;
}
</style>