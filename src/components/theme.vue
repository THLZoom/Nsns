<template>
    <div class="theme">
        <ul class="theme_header">
            <li>
                <router-link class="router_a" to='/mine'></router-link>
            </li>
            <li>{{header_name}}</li>
            <li>
                <router-link class="router_a" to='/home'></router-link>
            </li>
        </ul>
        <ul class="theme_colorList">
            <li v-for="(value,keys) in colorList" @click="sendMsg(value)" :key="keys"><div :style="{background:value}">{{keys}}</div></li>
        </ul>
    </div>
</template>
<script>

    export default{
        name:'theme',
        data(){
            return{
                header_name:'更换主题',
                colorList:{
                    科技蓝:'blue',
                    欢乐橙:'orange',
                    魅惑紫:'red',
                    默认:''
                }
            }
        },
        methods:{
            sendMsg:function(value){
                this.$store.commit('changeColor',value);
            }
        }
    }
</script>
<style>
.theme {
    width: 100%;
}
/* theme 顶部 */
.theme_header {
    width: 100%;
    background: #fff;
}

.theme_header li {
    width: 33.3%;
    float: left;
    font-size: 1.3rem;
    text-align: center;
    line-height: 3.5rem;
    
}


.theme_header li:nth-child(3) a {
    display: block;
    width: 43%;
    margin-left: 50%;
}


.theme_header li:nth-child(1) a {
    display: block;
    width: 43%;
    margin-left: 10%;
}

.theme_colorList{
    width: 100%;
}
.theme_colorList li{
    width: 100%;
}
.theme_colorList li div{
    width:100%;
    height: 5rem;
}
</style>
