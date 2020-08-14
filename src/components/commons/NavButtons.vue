<template>
    <div>
       <template v-if="currentNav.right.length > 0">
           <template v-for="(nav, index) in currentNav.right">
                <SidebarButton  :path="nav.path" 
                                direction="right" 
                                :title="nav.title"
                                :children="currentNav.right.length"
                                :child="index + 1"
                                v-bind:key="'right' + index"
                                @click.native="emitDirection('right')" />
           </template>
        </template>
        <template v-if="currentNav.left.length > 0">
            <template v-for="(nav, index) in currentNav.left">
                <SidebarButton  :path="nav.path" 
                                direction="left" 
                                :title="nav.title"
                                :children="currentNav.left.length"
                                :child="index + 1"
                                v-bind:key="'left' + index"
                                @click.native="emitDirection('left')"/>
            </template>

        </template>
        <template v-if="multipage">
            <template v-if="currentNav.up.length > 0">
                <VerticalButton :path="currentNav.up[0].path" direction="up" @click.native="emitDirection('up')"/>
            </template>
            <template v-if="currentNav.down.length > 0">
                <VerticalButton :path="currentNav.down[0].path" direction="down" @click.native="emitDirection('down')"/>
            </template> 
        </template>
    </div>

</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
    import SidebarButton from './SidebarButton.vue';
    import VerticalButton from'./VerticalButton.vue';

    // router
    @Component({
        components: {SidebarButton,VerticalButton}
    })
    export default class Button extends Vue {
        @Prop() currentNav!:object;
        @Prop({default: true}) multipage!:boolean;

        emitDirection(direction:string) {
            this.$emit('direction', direction)
        }

    }
</script>

<style lang="scss" scoped>

</style>
