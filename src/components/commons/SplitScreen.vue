<template>
    <div class="row">
        <div class="leftSide">
            <div v-if="pageName === 'resonator' && pid === 2" class="w-100 resonator-pic">
                <img src="/www/assets/helmholtz.png" alt="Helmholz Resonator">
            </div>
            <div v-if="pageName === 'resonator' && pid === 3" class="w-100 resonator-pic">
                <img src="/www/assets/schaefer.png" alt="Schaefer Resonator">
            </div>
        </div>
        <div class="rightSide">
            <div v-if="pageName === 'resonator' && pid === 2" class="w-100">
                <ResonatorGraph type = "helmholtz"/>
            </div>
            <div v-if="pageName === 'resonator' && pid === 3" class="w-100">
                <ResonatorGraph type = "schaefer"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ResonatorSVG from "../svg/ResonatorSVG.vue";
import ResonatorGraph from '../p5/Resonator.graph.vue';

@Component({
    components: { ResonatorSVG, ResonatorGraph }
})
export default class SplitScreen extends Vue {

    @Prop() pageName!: string;
    @Prop() pid!: number;

}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';

    .row {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        position: fixed;
        z-index: 1;
    }
    .leftSide, .rightSide {
        position: absolute;
        display: flex;
        width: 50%;
        max-width: 50%;
        padding: 25px;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .leftSide {
        left: 0;
        padding:0;
        .resonator-pic {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            height: 100%;
            img {
                width: 100%;
                height: auto;
                // height: 50%;
            }
        } 
    }
    .rightSide {
        right: 0;
    }
    .w-100 {
        width: 100%;
    }
</style>
