<template>
        
    <div>

        <svg id="resonatorSVG"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 3000">

        <ellipse class="cls-1" cx="1968.5" cy="2758.5" rx="1311" ry="365"/>
        <rect class="cls-1" x="657.5" y="1722.5" width="2622" height="1036"/>
        <ellipse class="cls-2" cx="1968.5" cy="1722.5" rx="1311" ry="365"/>
        <rect class="cls-1" x="1495" y="670" width="947" height="1053"/>
        <rect class="cls-3 move" x="1495" y="988" width="947" height="753"/>
        <path class="cls-2" d="M1968,2088c724.05,0,1311-163.42,1311-365H657C657,1924.58,1244,2088,1968,2088Z"/>
        <path class="cls-3" d="M1495.52,1723c1.57,72.36,212.72,130.88,473,130.88s471.41-58.52,473-130.88Z"/>
        <ellipse class="cls-4 move" cx="1968.5" cy="988.19" rx="473" ry="131.69"/> 
        <ellipse class="cls-1" cx="1968.5" cy="670.19" rx="473" ry="131.69"/>
        <path class="cls-2" d="M2347.29,2340.71h38.2l-60.67,178.47h-41.26L2223,2340.71h38.21l33.56,106.2q2.82,9.4,5.8,21.92t3.73,17.39q1.33-11.23,9.15-39.31Z"/>
        <path class="cls-1 move" d="M1927.73,1065.18l-12.94-42.48h-65.06l-12.94,42.48H1796L1859,886h46.26l63.23,179.2Zm-22-74.22q-17.94-57.74-20.2-65.31t-3.24-12q-4,15.63-23.07,77.27Z"/>
        <path class="cls-1" d="M2708.48,1226.18V1047.71h37.84v147.22h72.39v31.25Z"/>
        <line class="cls-5" x1="2626.05" y1="685.63" x2="2631.76" y2="1707.37"/>
        <path class="cls-6" d="M2564.15,774.83a6.49,6.49,0,0,0,9-2.06l53-84.17L2680,772.18a6.5,6.5,0,1,0,10.93-7L2631.46,673a6.5,6.5,0,0,0-11,.06l-58.38,92.81a6.52,6.52,0,0,0,2,9Z"/>
        <path class="cls-6" d="M2568.86,1618.87a6.5,6.5,0,0,1,9,2l53.89,83.58,53-84.17a6.5,6.5,0,1,1,11,6.92L2637.31,1720a6.5,6.5,0,0,1-11,.06l-59.42-92.15a6.54,6.54,0,0,1,1.94-9Z"/>
        
        </svg>
        
    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";


@Component
export default class ResonatorSVG extends Vue {

}
</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';

    .cls-1{fill:#b1b1b1;}
    .cls-2{fill:#dadada;}
    .cls-3{fill:#c7c7c7;}
    .cls-4{fill:#ececec;}
    .cls-5{fill:none;stroke:#b2b1b1;stroke-miterlimit:10;stroke-width:13px;}
    .cls-6{fill:#b2b1b1;}

    @keyframes move {
        0%    { transform: translateY(0px) }
        50%   { transform: translateY(320px) }
        100%  { transform: translateY(0px) }
    }

    .move { animation: move 5s linear infinite; }

    svg {
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:0;
    }

</style>
