<template>
    <div class="sidenav-container">
        <button v-on:click="toggleNav()" class="info-btn">
            <font-awesome-icon :icon="isOpen ? 'minus' : 'plus'"></font-awesome-icon>
             {{ isOpen ? 'Schliessen' : 'Mehr Informationen'}}
        </button>
        <div class="sidenav" v-bind:class="{infoOpen:isOpen}">
            <div class="nav-content">
                <h1>{{ data.pages[pid - 1].title }}</h1>
                <p>
                    {{ data.pages[pid - 1].infoContent }}
                </p>
                <div v-if="data.pages[pid - 1].webLinks.length > 0">
                    <h2>hilfreiche Links</h2>
                    <ul>
                        <li v-for = "(link, index) in data.pages[pid - 1].webLinks" v-bind:key="index">
                            <a :href="link.url"> {{link.description}}</a>
                        </li>
                    </ul>
                </div>
                <h2></h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import {Page} from '../../models/data.model';

@Component
export default class AddInfo extends Vue {
    @Prop() data!: object;
    @Prop() pid!: number;

    @Prop() isOpen!:boolean;

    toggleNav(){
        this.isOpen = !this.isOpen;
        this.$emit("clicked", this.isOpen)
    }
  
}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';
   
    .sidenav {
        height: 100%; 
        width: 30%; 
        position: fixed; 
        z-index: 15;
        top: 0; 
        left: 100%;
        background-color: $TUD-Weiss;
        overflow: hidden; 
        transition: 0.5s;
        padding: 10px;
        padding-right: 55px;
    }
    .sidenav .closebtn {
        font-weight: bold;
        font-size: 36px;
        margin-left: 10px;
    }
    .infoOpen{
        left:70%;
    }
    .nav-content{
        width: 100%;
        height: 75%;
        overflow-y: auto;
        padding-bottom: 17px;
        padding-left: 17px;
        padding-right: 10px;
        padding-top: 48px;
        color:$TUD-Grau-100;

    }
    .info-btn {
        color: $TUD-Rot-90;
        font-weight: bold;
        z-index: 20;
        background-color: transparent;
        border: none;
        text-align: left;
        position: relative;
    }
</style>
