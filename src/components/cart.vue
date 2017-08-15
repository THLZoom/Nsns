<template>
    <div class="cart">
        <ul class="cart_header">
            <li>
                <router-link class="router_a" to='/goods'></router-link>
            </li>
            <li>{{header_name}}</li>
            <li>
                <router-link class="router_a" to='/home'></router-link>
            </li>
        </ul>
        <div class="cart_empty" v-if="isEmpty">
            <p>亲，购物车都快睡着了呢</p>
            <p>美美的那么多，快去逛逛吧~</p>
            <p><router-link to='/home'>去逛逛</router-link></p>
        </div>
        <div class="cart_content" v-else>
            <ul>
                <li>dasd</li>
                <li>dasdas</li>
                <li>asdasdasd</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name:'cart',
        data() {
        return {
            header_name:'购物车',
            isEmpty:true
        }
    }
}
</script>
<style>
.cart{
    width: 100%;
    background: #f4f4f4;
}
.cart_header {
    width: 100%;
    background: #fff;
}

.cart_header li {
    width: 32%;
    display: inline-block;
    font-size: 1.3rem;
    text-align: center;
    line-height: 3.5rem;
    vertical-align: middle;
}
.cart_header li:nth-child(3) {
    background: url(../../assets/mine_home.svg) no-repeat 100% 50%;
    background-size: 32% 60%;
}

.cart_header li:nth-child(3) a {
    display: block;
    width: 43%;
    height: 3.5rem;
    margin-left: 63%;
}

.cart_header li:nth-child(1) {
    background: url(../../assets/back.svg) no-repeat 1% 57%;
    background-size: 32% 60%;
}

.cart_header li:nth-child(1) a {
    display: block;
    width: 43%;
    height: 3.5rem;
}

.cart_empty{
    width: 100%;
    background: url(../../assets/emptyCart.svg) no-repeat 50% 20%;
    background-size: 30% 38%;
    padding-top: 10rem;
}
.cart_empty p{
    text-align: center;
    color: #999;
}
.cart_empty p:nth-child(3){
    margin-top: 2rem;
}
.cart_empty a{
    display: block;
    width: 20%;
    background: #f66;
    color: #fff;
    border-radius: 6%;
    line-height: 2rem;
    margin-left: 40%;    
}
</style>