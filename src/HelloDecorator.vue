<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;

    enthusiasm = this.initialEnthusiasm;

    increment() {
        this.initialEnthusiasm++;
    }
    decrement() {
        if (this.initialEnthusiasm > 1) {
            this.initialEnthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.initialEnthusiasm + 1).join('!');
    }
}
</script>

<style lang="scss">
@import "vars";

.greeting {
    font-size: 20px;
    color: $primaryColor;
}
</style>
