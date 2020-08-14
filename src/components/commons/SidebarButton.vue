<template>
    <router-link v-bind:to="path">
        <button v-bind:id="buttonDirection" v-bind:class="[children === 1 ? 'child-11': 'child-' + child + children, 'navi']"><span class="title">{{title}}</span></button>
    </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component

export default class Button extends Vue {
    @Prop() path!:string;
    @Prop() direction!:string;
    @Prop() title!:string
    @Prop({default: 1}) children!: 1 | 2 ;
    @Prop({default: 1}) child!: 1 | 2; 

   
    get buttonDirection(){
        if(this.direction == "left")
            return "goLeft";
        else
            return "goRight";
    }

}
</script>

<style lang="scss" scoped>
// Global CSS
@import '../style/_TUD-CD-definitions.scss';
@import '../style/_TUD-CD.scss';
@import '../style/_vars.scss';

.navi {
    display:flex;
    justify-content: center ;
    position: absolute;
    background-color: $TUD-Rot-90;
    color: #fff;
    border: none;
    vertical-align: middle;
    max-width: 50px;
    z-index: 30;
    transition: margin .3s, height .3s;
    cursor: pointer;

    &.child-11 {
        height: 50vh;
        margin-top: 25vh;
        &:hover {
            margin-top: 20vh;
            height: 60vh;
            z-index: 35;
        }
    }

    &.child-12 {
        height: 30vh;
        margin-top: 15vh;
        &:hover {
            margin-top: 0;
            height: 50vh;
            z-index: 35;
        }    
    }
    &.child-22 {
        height: 30vh;
        margin-top: 55vh;
        &:hover {
            margin-top: 50vh;
            height: 50vh;
            z-index: 35;
        }
    }

    
    &#goLeft {
        left: 0;
        border-radius: 0 4px 4px 0;
    }
    &#goRight {
        right: 0;
        border-radius:  4px 0 0 4px;
    }
    &#goLeft .title{
        display: inline-block;
        -webkit-transform: rotate(-90deg);   
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }

        &#goRight .title{
        display: inline-block;
        -webkit-transform: rotate(90deg);   
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
}
</style>
