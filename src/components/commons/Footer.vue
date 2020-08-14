<template>
    <div class="footer">
        <div class="left-footer">

        </div>
        <div class="right-footer">
            <a href="">
                Impressum
            </a>
            <a href="">
                Datenschutz
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import {Page} from '../../models/data.model';

@Component
export default class Footer extends Vue {
    @Prop() data!: object;
    @Prop() pid!: number;

    isOpen:boolean = false;

    toggleNav(){
        this.isOpen = !this.isOpen;
        this.$emit("clicked", this.isOpen)
    }
  
}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 25px;
        margin-left: 55px;
        margin-right: 55px;
        align-items: center;
        position: relative;
        z-index: 10;

        .right-footer a {
            text-decoration: none;
            margin-left: 1rem;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
