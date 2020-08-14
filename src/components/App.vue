<template>
    <transition :name="transitionName" mode="out-in">
        <div v-if="navigation.length > 0" class="mainContent" v-bind:key="pageName+pid">
            <!-- Background -->
            <template v-if="!isSplitScreen">
                <Background :pageName="pageName" :pid="pid" @kempelenPart="setKempelenPart"/>
            </template>
            <template v-else>
                <SplitScreen :pageName="pageName" :pid="pid" />
            </template>

            <!-- Navigation & Sidebars-->
            <NavButtons :currentNav="currentNav" :multipage="multipage" @direction="setTransitionName"/>
            <ButtonHeader :data="data" :navigation="navigation" :pid="pid" :infoOpen="infoOpen" @infoClicked="infoClicked"/>

            <!-- Content -->
            <Content :data="data" :pid="pid" :multipage="multipage" :kempelenPart="kempelenPart"/>

            <!-- Footer -->
            <Footer />
        </div>
    </transition>   
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
    import NavButtons from './commons/NavButtons.vue';
    import ButtonHeader from './commons/ButtonHeader.vue';
    import dataService from '../data.service';
    import Background from './commons/Background.vue';
    import SplitScreen from './commons/SplitScreen.vue';
    import Content from './commons/Content.vue';
    import Footer from './commons/Footer.vue';
    import { Data } from '../models/data.model';
    import { Navigation } from '../models/navigation.model';

    // router
    @Component({
        components: {NavButtons,ButtonHeader,Background, Content, SplitScreen, Footer}
    })
    export default class App extends Vue {
        navOpen:boolean = false;
        infoOpen:boolean = false;

        navigation: Navigation[] = [];
        data!: Data;
        pid: number = 1; // page id
        pageName!: string;
        multipage: boolean = true;
        kempelenPart = 0;
        
        isSplitScreen!: boolean;
        transitionName = 'fade';

        currentNav!: Navigation; // navigation of the current page

        // Called when a new route is entered
        // Vue Component hasn't been initialized yet 
        beforeRouteEnter (to:any, from:any, next:any) {
            Promise.all([
                dataService.getNavigation(to.name),
                dataService.getData(to.name)
            ]).then(res => {
                // Set the data when the vue component gets initialized
                next((vm:any) => vm.setData(res[0], res[1].data, to));
            })
        }

        // Called when the page changes
        beforeRouteUpdate(to:any, from:any, next:any) {
            if (to.name !== from.name) {
                Promise.all([
                    dataService.getNavigation(to.name),
                    dataService.getData(to.name)
                ]).then(res => {
                    this.setData(res[0], res[1].data, to);
                    next();
                })
            } else {
                if(to.name === 'resonator') {
                    this.pid = this.setPageId(to.params.page);
                } else {
                    this.pid = this.multipage ? Number(to.params.page) : 1;
                }
                this.currentNav = this.navigation[this.pid - 1];
                this.isSplitScreen = (this.pageName === 'resonator' && this.pid > 1) || this.pageName === 'synthesis';
                next();
            }
        }

        mounted() {
            document.addEventListener('keyup', this.navigate);
        }

        setData(navigation: Navigation[], dataObject: Data, newRoute:any) {
            this.multipage = Object.keys(newRoute.params).length > 0;
            this.navigation = navigation;
            this.data = dataObject;
            if(newRoute.name === 'resonator') {
                this.pid = this.setPageId(newRoute.params.page);
            } else {
                this.pid = this.multipage ? Number(newRoute.params.page) : 1;
            }
            this.currentNav = this.multipage ? this.navigation[this.pid - 1] : this.navigation[0];
            this.pageName = newRoute.name;
            this.isSplitScreen = this.pageName === 'resonator' && this.pid > 1;
        }

        setPageId(str: string) {
            if (str === 'helmholz') { return 2; }
            else if (str === 'schaefer') { return 3; }
            else { return 1; }
        }

        setTransitionName(e:string) {
            this.transitionName = 'fade-' + e;
        }

        infoClicked(e:any) {
            this.infoOpen = e;
        }

        setKempelenPart(e:number) {
            this.kempelenPart = e;
        }

        navigate(e:any) {
            const nav = this.currentNav;
            switch(e.key) {
                case 'ArrowDown': {
                    if(nav.down) {
                        if(nav.down.length > 0) {
                            this.$router.push(nav.down[0].path);
                            this.setTransitionName('down');
                        }
                    }
                    break;
                }
                case 'ArrowUp': {
                    if(nav.up) {
                        if(nav.up.length > 0) {
                            this.$router.push(nav.up[0].path);
                            this.setTransitionName('up');
                        }
                    }
                    break;
                }
                case 'ArrowLeft': {
                    if(nav.left.length > 0) {
                        this.$router.push(nav.left[0].path);
                        this.setTransitionName('left');
                    }
                    break;
                }
                case 'ArrowRight': {
                    if(nav.right.length > 0) {
                        this.$router.push(nav.right[0].path);
                        this.setTransitionName('right');
                    }
                    break;
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    $transition-time: 0.3s;

    .mainContent {
        position: relative;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-content: stretch;
    }

    .main{
        padding:10px 100px;
        transition:0.5s;
    }
    .mainContentNavOpen{
        margin-left: 50%;
        transition: 0.5s; 
    }
    .mainContentInfoOpen{
        margin-right: 30%;
        transition: 0.5s;   
    }

    .mainContent {
        transition: all $transition-time;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fade-left-enter, .fade-right-leave-to {
        transform: translateX(-100px);
        opacity: 0;
    }
    .fade-up-enter, .fade-down-leave-to {
        transform: translateY(-50px);
        opacity: 0;
    }
    .fade-down-enter, .fade-up-leave-to {
        transform: translateY(50px);
        opacity: 0;
    }
    .fade-left-leave-to,
    .fade-right-enter {
        transform: translateX(100px);
        opacity: 0;
    }
</style>
