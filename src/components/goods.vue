<template>
    <div class="goods">
        <header class="goods_header">
            <div class="header_icon"><a></a></div>
            <form action="" method="get">
                <input type="search" />
            </form>
            <i class="cart_header"><router-link class="router_a" to='/cart'><i class="iconfont icon-cart"></i></router-link></i>
        </header> 
        <div class="goods_content">
            <div class="goods_type_one">
                <div class="type_one_header">产品分类</div>
                <ul class="type_one_nav">
                    <li><router-link to='/goodsList'><img :src="img_shuangfu"/>洗面、爽肤水类</router-link></li>
                    <li><a><img :src="img_mianshuang"/>面霜、眼霜、乳类</a></li>
                    <li><a><img :src="img_mianmo"/>精华、面膜类</a></li>
                    <li><a><img :src="img_taozhuang"/>实惠、精品套装</a></li>
                </ul>
            </div>
            <div class="goods_type_two">
                <div class="type_two_header">肤质分类</div>
                <ul class="type_two_nav">
                    <li><a><img :src="img_shuangfu"/>油性皮肤</a></li>
                    <li><a><img :src="img_mianshuang"/>干性皮肤</a></li>
                    <li><a><img :src="img_mianmo"/>中性皮肤</a></li>
                    <li><a><img :src="img_taozhuang"/>混合型皮肤</a></li>
                    <li><a><img :src="img_shuangfu"/>敏感型皮肤</a></li>
                    <li><a><img :src="img_mianshuang"/>任何皮肤</a></li>
                </ul>
            </div>
            <div class="goods_type_three">
                <div class="type_three_header">功效分类</div>
                <ul class="type_three_nav">
                    <li><a><img :src="img_shuangfu"/>面部护理</a></li>
                    <li><a><img :src="img_mianshuang"/>皮肤护理</a></li>
                    <li><a><img :src="img_mianmo"/>眼部护理</a></li>
                    <li><a><img :src="img_taozhuang"/>其他护理</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'goods',
        data(){
            return{
                img_shuangfu:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501929259707&di=a79382015d7a07df1dc2b7694c9577a7&imgtype=0&src=http%3A%2F%2Fimg0.lady8844.com%2Fh046%2Fh21%2Fimg2016052309334905979.jpg',
                img_mianshuang:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501929466329&di=11f276d29fd246614907797dd20fe358&imgtype=0&src=http%3A%2F%2Finfo.moonbasa.com%2Ffiles%2F2014%2F2%2F26%2F28-523995080561.jpg',
                img_mianmo:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501929587173&di=77949f4e35cc0a080220dec42a7f8cea&imgtype=0&src=http%3A%2F%2Finfo.moonbasa.com%2Ffiles%2F2015%2F1%2F27%2F28-741966275138.png',
                img_taozhuang:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501929640241&di=1c11f845caef8ec6f433bb175b1a0aa0&imgtype=0&src=http%3A%2F%2Fcn.made-in-china.com%2Fimage%2F2f0j01kvwaFhurZzblM%2F%25E5%258C%2596%25E5%25A6%2586%25E5%2593%2581%25E5%25A5%2597%25E8%25A3%2585%25E7%2593%25B6.jpg'
            }
        }
    }
</script>
<style>
.goods{
    width:100%;
}

/* goods头部 */
.goods_header{
    background: #fff;
    display: flex;
}
.goods_header .header_icon{
    width: 35%;
}
.goods_header .header_icon a{
    display: block;
    width: 100%;
    height: 3.6rem;
    background: url(http://www.nsnsd.com/images/logo.png) no-repeat .5rem .2rem;
    background-size: contain;  
}
.goods_header form{
    width: 50%;
    height: 3.6rem;
    position: relative;
}
.goods_header input{
    border: none;
    background: #F4F4F4;
    width: 100%;
    height: 2.3rem;
    border-radius: 6%;
    position: absolute;
    top: 20%;
    left: 3%
}
.goods_header .cart_header{
    width: 12%;
    text-align: right;
}
.goods_header .cart_header a{
    width: 100%;
    height: 3.6rem;
    line-height: 3.6rem;
}
.icon-cart{
    font-size: 2rem;
}


/* goods内容 */
.goods_content{
    width: 99%;
    padding-bottom: 4rem;
}
.goods_content div{
    background: #fff;
    padding-left: 1%;
}

/* type_one */
.goods_content .goods_type_one{
    width: 100%;
}
.goods_content .goods_type_one .type_one_header{
    width: 95%;
    background: url(../../assets/goods_type_one.svg) no-repeat 1% 53%; 
    background-size: 10% 42%;
    border-bottom: 1px solid #e0e0e0;
    color: #e19b4a;
    line-height: 4rem;
    font-size: 1.3rem;
    text-indent: 3rem;
}
.goods_content .goods_type_one .type_one_nav{
    width: 97%;
}
.goods_content .goods_type_one .type_one_nav li{
    width: 49%;
    display: inline-block;
    text-indent: .3rem;
}
.goods_content .goods_type_one .type_one_nav li a{
    display: block;
    width: 100%;
    line-height: 5rem;
}
.goods_content .goods_type_one .type_one_nav li a img{
    width: 3rem;
    height: auto;
    vertical-align: middle;
    margin-right: 1rem;
    border-radius: 50%;
    border:none;
}

/* type_two */
.goods_content .goods_type_two{
    width: 100%;
    margin-top: 2%;
}
.goods_content .goods_type_two .type_two_header{
    width: 95%;
    background: url(../../assets/goods_type_two.svg) no-repeat 1% 53%; 
    background-size: 10% 60%;
    border-bottom: 1px solid #e0e0e0;
    color: #d4237a;
    line-height: 4rem;
    font-size: 1.3rem;
    text-indent: 3rem;
}
.goods_content .goods_type_two .type_two_nav{
    width: 97%;
}
.goods_content .goods_type_two .type_two_nav li{
   width: 49%;
    display: inline-block;
    text-indent: .3rem;
}
.goods_content .goods_type_two .type_two_nav li a{
    display: block;
    width: 100%;
    line-height: 5rem;
}
.goods_content .goods_type_two .type_two_nav li a img{
    width: 3rem;
    height: auto;
    vertical-align: middle;
    margin-right: 1rem;
    border-radius: 50%;
    border:none;
}


/* type_three */
.goods_content .goods_type_three{
    width: 100%;
    height: 30%;
    margin-top: 2%;
}
.goods_content .goods_type_three .type_three_header{
    width: 95%;
    background: url(../../assets/goods_type_three.svg) no-repeat 1% 53%; 
    background-size: 10% 60%;
    border-bottom: 1px solid #e0e0e0;
    color: #1296db;
    line-height: 4rem;
    font-size: 1.3rem;
    text-indent: 3rem;
}
.goods_content .goods_type_three .type_three_nav{
    width: 97%;
}
.goods_content .goods_type_three .type_three_nav li{
    width: 49%;
    display: inline-block;
    text-indent: .3rem;
}
.goods_content .goods_type_three .type_three_nav li a{
    display: block;
    width: 100%;
    line-height: 5rem;
}
.goods_content .goods_type_three .type_three_nav li a img{
    width: 3rem;
    height: auto;
    vertical-align: middle;
    margin-right: 1rem;
    border-radius: 50%;
    border:none;
}
</style>