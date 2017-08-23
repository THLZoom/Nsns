<template>
  <div id="app">
    <section id="wrap">
      <router-view></router-view>
    </section>
    <footer class="home_nav">
        <ul>
            <li><router-link class="router_a" to='/home'><i class="iconfont icon-home"></i>首页</router-link></li>
            <li><router-link class="router_a" to='/goods'><i class="iconfont icon-shangpingouwudai-copy"></i>商品</router-link></li>
            <li><router-link class="router_a" to='/cart'><i class="iconfont icon-gouwuche"></i>购物车</router-link></li>
            <li><router-link class="router_a" to='/mine'><i class="iconfont icon-wode"></i>我的</router-link></li>
        </ul>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'app',
    data:function(){
        return{
        }
    },
    methods:{
    
    }
}
</script>

<style>
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
pre, /* text formatting elements 文本格式元素 */
fieldset, lengend, button, input, textarea, /* form elements 表单元素 */
th, td { /* table elements 表格元素 */
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box;
}

/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
    /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
    font: 1rem Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
}

h1 { font-size: 1.44rem; /* 18px / 12px = 1.5 */ }
h2 { font-size: 1.28rem; }
h3 { font-size: 1.12rem; }
h4, h5, h6 { font-size: 100%; }

address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */
code, kbd, pre, samp, tt { font-family: "Courier New", Courier, monospace; } /* 统一等宽字体 */
small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

/* 重置列表元素 */
ul, ol { list-style: none; }

/* 重置文本格式元素 */
a { text-decoration: none; color:#999}

abbr[title], acronym[title] { /* 注：1.ie6 不支持 abbr; 2.这里用了属性选择符，ie6 下无效果 */
    border-bottom: 1px dotted;
    cursor: help;
}

q:before, q:after { content: ''; }

/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; } /* img 搭车：让链接里的 img 无边框 */
/* 注：optgroup 无法扶正 */
button, input, select, textarea {
    font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}

/* 重置表格元素 */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* 重置 hr */
hr {
    border: none;
     height: 1px; 
}

/* 让非ie浏览器默认也显示垂直滚动条，防止因滚动条引起的闪烁 */
html { overflow-y: scroll; }

html,body{
  width: 100%;
  background: #f4f4f4;
}
#app{
  width: 100%;
}
#wrap{
  width: 100%;
  overflow-y: scroll; 
}

.home_nav{
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;
    background: #fafafa;
    color: #999;
    font-size: 1rem;
}
.home_nav ul{
    width: 100%;
}
.home_nav li{
    display: inline-block;
    width: 24%;
}
.home_nav li .router_a{
    display: block;
    text-align: center;
    width: 100%;
    height: 4rem;
} 
.home_nav .router-link-active{
    color: #ff3366;
}
.home_nav li i{
    display: block;
    font-size: 2rem;
    line-height: 2.5rem;
}

</style>
