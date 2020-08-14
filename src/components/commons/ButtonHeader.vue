<template>
    <div class="buttonHeader">
        <Navigation :currentPageName="data.id" class="nav" @clicked ="toggleNav"/>
        <AddInfo  class="info" @clicked ="toggleInfo" :data="data" :pid="pid" :isOpen="infoOpen"/>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Navigation from './Navigation.vue';
import AddInfo from './AddInfo.vue';

@Component({
    components: {Navigation,AddInfo}
})
export default class ButtonHeader extends Vue {
    @Prop() navigation!: object;
    @Prop() data!: object;
    @Prop() pid!: number;
    @Prop({default: false}) infoOpen!: boolean;

    toggleNav(event:any){
        this.$emit("navClicked",event)
    }
    toggleInfo(event:any){
        this.$emit("infoClicked",event);
    }
}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';

    .buttonHeader{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 25px;
        margin-left: 55px;
        margin-right: 55px;
        align-items: center ;
    }
    .mainContentNavOpen{
        margin-left: 50%;
        transition: 0.5s; 
    }
    .mainContentInfoOpen{
        margin-right: 30%;
        transition: 0.5s; 
    }
</style>
