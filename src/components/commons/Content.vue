<template>
    <div class="main">
        <h1 class="main-header">
            {{ data.title + (multipage ? ' - ' + data.pages[pid - 1].title: '') }}
        </h1>
        <div class="main-description">
            {{ data.title + ' - ' + data.pages[pid - 1].description }}
        </div>
        <transition name="fade">
            <div class="kempelen" v-if="data.id === 'kempelen' && kempelenPart > 0" v-bind:key="kempelenPart">
                <strong>{{ data.pages[pid-1].kempelenParts[kempelenPart-1].title}}</strong> <br />
                {{ data.pages[pid-1].kempelenParts[kempelenPart - 1].text }}
            </div>        
        </transition>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Data } from "../../models/data.model";

@Component

export default class Content extends Vue {

@Prop() data!: Data;
@Prop() pid!: number;
@Prop() multipage!: boolean;
@Prop() kempelenPart!: number;
  
}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';

    .main {
        flex-grow: 1;
        position: relative;
    }
    .main-header {
        background-color: $TUD-Blau-100;
        color: $TUD-Weiss;
        display: inline-block;
        padding-left: .5rem;
        padding-right: .5rem;
        z-index: 3;
        position:relative;
        border-radius: 2px;
    }
    .main-description {
        background-color: $TUD-Weiss;
        width: 30%;
        line-height: 125%;
        padding: .5rem;
        z-index: 3;
        position:relative;
        border-radius: 2px;
        
    }
    .kempelen {
        background-color: $TUD-Weiss;
        width: 30%;
        line-height: 125%;
        padding: .5rem;
        z-index: 3;
        position:absolute;
        border-radius: 2px;
        bottom:0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }


</style>