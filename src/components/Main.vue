<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteUpdate'
]);

// router
@Component
export default class Main extends Vue {

    mounted() {
    }

    created() {
    }

}
</script>


<style lang="scss">
// Global CSS
@import '../style/_TUD-CD-definitions.scss';
@import '../style/_TUD-CD.scss';
@import '../style/_vars.scss';

* {
    box-sizing: border-box;
}

html, body { 
    height: 100%;
}

body {
    margin: 0;
    overflow: hidden;
}
.buttonBar {
    display:flex;
}
</style>
