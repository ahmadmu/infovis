<template>
    <div id="background">
        <template v-if="pageName === 'anatomy'">
            <AnatomyA v-if="pid === 1"/>  
            <AnatomyB v-if="pid === 2"/>
            <AnatomyC v-if="pid === 3"/>
            <AnatomyD v-if="pid === 4"/> 
        </template>
        <template v-if="pageName === 'resonator' && pid === 1">
            <div class="w-100">
                <ResonatorSVG />
            </div>
        </template>
        <template v-if="pageName === 'formant'">
            <VowelGraph />
        </template>
        <template v-if="pageName === 'kempelen'">
            <div class="w-100 kempelen" >
                <img src="/www/assets/kempelen.png" alt="">
                <a href="" class="kemp-link-1" @click="setKempelenPart($event, 1)">
                    <span class="pulse inner"></span>
                </a>
                <a href="" class="kemp-link-2" @click="setKempelenPart($event, 2)"><span class="pulse inner"></span></a>
                <a href="" class="kemp-link-3" @click="setKempelenPart($event, 3)"><span class="pulse inner"></span></a>
                <a href="" class="kemp-link-4" @click="setKempelenPart($event, 4)"><span class="pulse inner"></span></a>
            </div>
        </template>
        <template v-if="pageName === 'synthesis'">
            <div class="w-100 synthesis">
                <img src="/www/assets/synthesis.png" >
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AnatomyA from "../svg/AnatomyA.vue";
import AnatomyB from "../svg/AnatomyB.vue";
import AnatomyC from "../svg/AnatomyC.vue";
import AnatomyD from "../svg/AnatomyD.vue";
import ResonatorSVG from "../svg/ResonatorSVG.vue";
import VowelGraph from '../p5/Vowel.graph.vue';


@Component({
    components: { AnatomyA, AnatomyB, VowelGraph, AnatomyC, AnatomyD, ResonatorSVG }
})
export default class Background extends Vue {

    @Prop() pageName!: string;
    @Prop() pid!: number;

    kempelenPart!: number;

    setKempelenPart(e:any, num: number) {
        e.preventDefault();
        if(this.kempelenPart === num) { this.kempelenPart = 0; }
        else { this.kempelenPart = num; }
        this.$emit('kempelenPart', this.kempelenPart)
    }
    
}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';

    #background {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .kempelen {
        position: relative;
        img{
            width: 100%;
            height: auto;
        }
        .kemp-link-1 {
            position: absolute;
            bottom: 46%;
            left: 36%;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: lightcoral;
            opacity: .5;
            animation: pulse 3s infinite;

        }
        .kemp-link-2 {
            position: absolute;
            bottom: 31%;
            left: 48%;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: lightcoral;
            opacity: .5;
            animation: pulse 3s infinite;

        }
        .kemp-link-3 {
            position: absolute;
            bottom: 28.5%;
            left: 57.5%;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: lightcoral;
            opacity: .5;
            animation: pulse 3s infinite;

        }
        .kemp-link-4 {
            position: absolute;
            bottom: 35%;
            left: 54%;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: lightcoral;
            opacity: .5;
            animation: pulse 3s infinite;

        }
        .inner {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            top: 8px;
            left: 8px;
            margin: auto 0;
        }
        .pulse {
            // animation: pulse .9s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(.7);
            }
            100% {
                transform: scale(1);
            }
        }
    } 
    .synthesis {
        img {
            width: 100%;
            height: auto;
        }
    }


</style>
