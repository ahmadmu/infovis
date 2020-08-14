<template>
    <div id="main">
        <router-link v-bind:to="path">
            <i v-bind:id="buttonDirection" class="arrow"></i>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component

export default class Button extends Vue {
    @Prop() direction!:string;
    @Prop() path!:string;

   
    get buttonDirection(){
        if(this.direction == "up")
            return "goUp";
        else
            return "goDown";
    }

}
</script>

<style lang="scss" scoped>
// Global CSS
@import '../style/_TUD-CD-definitions.scss';
@import '../style/_TUD-CD.scss';
@import '../style/_vars.scss';

#main{
    position:fixed;
    left: 50%;
    z-index: 30;
}
.arrow {
    display:inline-block;
    position: fixed; 
    border: solid $TUD-Rot-90; 
    border-width: 0 4px 4px 0 ;
    cursor: pointer;
    padding:14px;
    border-radius: 4px;
    // margin:15px ;

        // &:hover {
         
        // }
        &#goUp {
            top: 20px;
            transform: rotate(-135deg);
        }
        &#goDown {
            bottom: 20px;
            transform: rotate(45deg);
        }
}
</style>
