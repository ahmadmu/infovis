<template>
    <div v-if="navigation.length > 0">
        <template v-if="pid === 1">
           <NavButtons :currentNav="currentNav" />
           <Background/>
        </template>
        <template v-else-if="pid === 2">
           <NavButtons :currentNav="currentNav" />
        </template>

        <template v-else>
           <NavButtons :currentNav="currentNav" />
        </template>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import dataService from '../data.service';
    import NavButtons from './commons/NavButtons.vue';
    import Background from './commons/Background.vue';
    import ResonatorGraph from './p5/Resonator.graph.vue';

    // router
    @Component({
        components: { NavButtons, Background, ResonatorGraph}
    })
    export default class Resonator extends Vue {
        navigation: any[] = [];
        data:object = {};
        pid: number = 1;

        currentNav = {};

        beforeRouteEnter (to:any, from:any, next:any) {
            Promise.all([
                dataService.getNavigation('resonator'),
                dataService.getData('resonator')
            ]).then(res => {
                next((vm:any) => vm.setData(res, to));
            })
        }

        beforeRouteUpdate(to:any, from:any, next:any) {
            this.pid = this.findPage(to.params.page);
            this.currentNav = this.navigation[this.pid - 1]
            next();
        }

        setData(res: any[], to:any) {
            this.navigation = res[0];
            this.data = res[1].data;
            this.currentNav = this.navigation[this.findPage(to.params.page) - 1]
        }

        findPage(str: string): number {
            if(str === 'helmholz') {
                return 2;
            } else if(str === 'schaefer') {
                return 3;
            } else {
                return 1;
            }
        }
    }
</script>

<style lang="scss">

</style>
