<template>
<div class ="main">
  <div class="row">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-80 -150 600 600" width="700" height="700">
        <g id="Ebene_2" data-name="Ebene 2">
          <g id="Ebene_2-2" data-name="Ebene 2">
            <polygon class="cls-1" points="20.76 13.17 201.52 281.35 375.2 281.35 375.2 13.59 20.76 13.17"/>
            <line class="cls-1" x1="198.66" y1="14.01" x2="289.84" y2="281.35"/>
            <line class="cls-1" x1="78.2" y1="98.52" x2="375.2" y2="98.52"/>
            <line class="cls-1" x1="138.17" y1="188.01" x2="375.2" y2="188.01"/>
            <path  class="cls-2" d="M176.11,289.3c0-3.18,2.74-4.76,8.95-5.44,0-1.88-.62-3.68-3-3.68a8.05,8.05,0,0,0-4.34,1.56l-1-1.69a10.71,10.71,0,0,1,5.73-1.91c3.56,0,5.06,2.37,5.06,6v8.95h-2l-.21-1.75h-.08a7.73,7.73,0,0,1-4.82,2.11A4,4,0,0,1,176.11,289.3Zm8.95.23v-4c-4.88.59-6.53,1.78-6.53,3.65,0,1.65,1.12,2.33,2.55,2.33S183.65,290.77,185.06,289.53Z" transform="translate(-2.01 -4.13)"/>
            <path  class="cls-2" d="M52.32,103c0-4.75,3.2-7.67,6.55-7.67,3.72,0,5.82,2.67,5.82,6.84a8,8,0,0,1-.11,1.4H54.76c.17,3.09,2.06,5.1,4.84,5.1a6.41,6.41,0,0,0,3.63-1.17l.89,1.62a8.57,8.57,0,0,1-4.82,1.51C55.41,110.61,52.32,107.77,52.32,103Zm10.19-1.19c0-2.93-1.31-4.51-3.59-4.51-2.05,0-3.88,1.64-4.18,4.51Z" transform="translate(-2.01 -4.13)"/>
            <path  class="cls-2" d="M2,5.73a1.59,1.59,0,0,1,1.7-1.6,1.6,1.6,0,1,1,0,3.19A1.6,1.6,0,0,1,2,5.73Zm.45,4.59H4.93V24.9H2.46Z" transform="translate(-2.01 -4.13)"/>
            <path  class="cls-2" d="M392.33,104.91V95.67h2.47v8.92c0,2.72.82,3.88,2.75,3.88,1.49,0,2.53-.74,3.91-2.46V95.67h2.47v14.58h-2l-.21-2.28h-.08c-1.35,1.59-2.81,2.64-4.81,2.64C393.71,110.61,392.33,108.63,392.33,104.91Z" transform="translate(-2.01 -4.13)"/>
            <path  class="cls-2" d="M391.8,18.05c0-4.87,3.18-7.67,6.76-7.67s6.75,2.8,6.75,7.67-3.18,7.63-6.75,7.63S391.8,22.88,391.8,18.05Zm11,0c0-3.34-1.7-5.62-4.2-5.62s-4.21,2.28-4.21,5.62,1.7,5.58,4.21,5.58S402.76,21.39,402.76,18.05Z" transform="translate(-2.01 -4.13)"/>
            <circle ref="o" class="cls-2 circle" :class = "{'active':selectedVowel === 'o' }" cx="375.2" cy="13.59" r="10"/>
            <circle ref="u" class="cls-2 circle" :class = "{'active':selectedVowel === 'u' }" cx="375.2" cy="98.52" r="10"/>
            <circle ref="i" class="cls-2 circle " :class = "{'active':selectedVowel === 'i' }" cx="20.76" cy="13.17" r="10"/>
            <circle ref="e" class="cls-2 circle" :class = "{'active':selectedVowel === 'e' }" cx="78.2" cy="98.52" r="10"/>
            <circle ref="a" class="cls-2 circle" :class = "{'active':selectedVowel === 'a' }" cx="201.52" cy="281.35" r="10"/>
            <line class="cls-3" x1="389.69" y1="2.07" x2="389.69" y2="119.76"/>
          </g>
        </g>
      </svg>
    <div class="column padding-top">
      <div class="row width_100">
        <p>Spektren der links ausgewählten ausgewählten Vokale. Formantbereiche sind grau markiert.</p>
        <transition name ="fade">
          <div v-if="clicked">
            <button v-on:click="mute">
              <font-awesome-icon icon="times"  size="lg"></font-awesome-icon>
            </button>
          </div>
        </transition>
      </div>
        <div id = "graph" ref = "graph"></div>
        <p id="graph_title">Frequenz</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound.min';

@Component
export default class VowelGraph extends Vue {

formant1 = 0;
formant2 = 0;
clicked = false;
destroyP5 = false;
selectedVowel = "default";


mute(){
  this.clicked = false;
  this.selectedVowel = "default";
}
mounted(){
  const graph = this.$refs.graph as HTMLElement;
  new P5(this.sketch,graph);

  const a = this.$refs.a as HTMLElement;
  const e = this.$refs.e as HTMLElement;
  const i = this.$refs.i as HTMLElement;
  const o = this.$refs.o as HTMLElement;
  const u = this.$refs.u as HTMLElement;

  a.addEventListener("click",()=>{
    this.formant1 = 694;
    this.formant2 = 1372;  
    this.clicked = true;
    this.selectedVowel = "a";
  })
  e.addEventListener("click",()=>{
    this.formant1 = 348;
    this.formant2 = 2126;
    this.clicked = true;
    this.selectedVowel = "e";
  })
  i.addEventListener("click",()=>{
    this.formant1 = 263;
    this.formant2 = 2170;
    this.clicked = true;
    this.selectedVowel = "i";
  })
  o.addEventListener("click",()=>{
    this.formant1 = 383;
    this.formant2 = 841;
    this.clicked = true;
    this.selectedVowel = "o";
  })
  u.addEventListener("click",()=>{
    this.formant1 = 310;
    this.formant2 = 854;
    this.clicked = true;
    this.selectedVowel = "u";
  })

}
beforeDestroy(){
    this.destroyP5 = true;
}
sketch(p5:p5){
  let glottis:P5.Oscillator;
  let fft:P5.FFT;

  let filter1:P5.Filter;
  let filter2:P5.Filter;
  let filter3:P5.Filter;

  let gain1:P5.Gain;
  let gain2:P5.Gain;
  let gain3:P5.Gain;

  let filterWidth = 200;


  p5.setup = () => {
    p5.createCanvas(710, 400);
    p5.fill(255, 40, 255);

    filter1 = new P5.BandPass();
    filter2 = new P5.BandPass();
    filter3 = new P5.BandPass();

    gain1 = new P5.Gain();
    gain2 = new P5.Gain();
    gain3 = new P5.Gain();

    gain1.connect(p5.soundOut);

    gain2.setInput(filter1);
    gain2.connect(gain1);

    gain3.setInput(filter2);
    gain3.connect(gain1);

    glottis = new P5.Oscillator(150,"sawtooth");
    glottis.amp(1);
    glottis.disconnect(); // Disconnect soundfile from master output...
    
    glottis.connect(filter1);
    glottis.connect(filter2);
 

    fft = new P5.FFT();
  
  }
  p5.draw = () => {
      p5.background(255);

      if(this.destroyP5){
        glottis.stop(0.1);
        p5.remove();
      }

      p5.fill(235,235,235);
      p5.noStroke();
      p5.rect(0,0,p5.width,p5.height - 20);

      
      p5.noStroke();



    
      if(this.clicked){
        // set filter parameters
        filter1.set(this.formant1, filterWidth);
        filter2.set(this.formant2, filterWidth);
        filter3.set(150,100);

        gain1.amp(7)
        gain2.amp(4);
        gain3.amp(0);
      
        let spectrum = fft.analyze();

        glottis.start();
        
        let formantArray = [this.formant1,this.formant2];
        let formantIndex; 
        let x;
        formantArray.forEach((formant)=>{
          
          p5.fill(200,200,200);
          formantIndex = p5.map(formant,10,22050,0,spectrum.length);
          x = p5.map(((Math.round(formantIndex)) * 4) - 12, 0, spectrum.length, 0, p5.width);
          p5.rect(x, p5.height - 20 , 25, - p5.height);
          p5.fill(0,0,0);
          p5.text(String(formant),x,p5.height - 5);
          
          p5.fill(0,0,0);
        })

        p5.stroke(21,47,80);

         const graphHeight = p5.height - (p5.height * (1/6));
        p5.line(0,graphHeight,p5.width,graphHeight);
        p5.line(0,graphHeight * (5/6) ,p5.width,graphHeight * (5/6));
        p5.line(0,graphHeight  * (4/6),p5.width,graphHeight * (4/6));
        p5.line(0,graphHeight  * (3/6),p5.width,graphHeight  * (3/6));
        p5.line(0,graphHeight * (2/6) ,p5.width,graphHeight  * (2/6));
        p5.line(0,graphHeight  * (1/6),p5.width,graphHeight  * (1/6));

        p5.noStroke();

        for (let i = 0; i< spectrum.length; i++){
            let x;
            x = p5.map(i * 4, 0, spectrum.length, 0, p5.width);
            let h = -(p5.height) + p5.map(spectrum[i], 0, 255, p5.height, 0);

            p5.fill(0,0,0);
            p5.rect(x, p5.height - 20 , p5.width/spectrum.length + 1 , h) ;
        }
      } 
      else{
         p5.stroke(21,47,80);

          const graphHeight = p5.height - (p5.height * (1/6));
          p5.line(0,graphHeight,p5.width,graphHeight);
          p5.line(0,graphHeight * (5/6) ,p5.width,graphHeight * (5/6));
          p5.line(0,graphHeight  * (4/6),p5.width,graphHeight * (4/6));
          p5.line(0,graphHeight  * (3/6),p5.width,graphHeight  * (3/6));
          p5.line(0,graphHeight * (2/6) ,p5.width,graphHeight  * (2/6));
          p5.line(0,graphHeight  * (1/6),p5.width,graphHeight  * (1/6));

          p5.noStroke();
        glottis.stop(0.1);
      }
  }
}
}

</script>

<style lang="scss" scoped>
    @import '../style/_TUD-CD-definitions.scss';
    .cls-1,.cls-3{
      fill:none;
    }
    .cls-1{
      stroke:$TUD-Blau-100;
      stroke-miterlimit:10;
      stroke-width:10px;
    }
    .cls-2{
      fill:$TUD-Blau-100;
    }
    .circle{
      padding:50px;
    }
    .circle:hover{
      fill:$TUD-Rot-90;
    }
    .active{
      fill:$TUD-Rot-90;
    }
    .row{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center ;
    }
    .width_100{
      width:100%;
    }
    .column{
      display:flex;
      flex-direction: column;
      justify-content:space-around;
      align-items:center ;
    }
    button{
      border: none;
      background-color: transparent;
      color: $TUD-Rot-90;
      z-index: 20;
      position: relative;
    }
    .fade-enter-active {
      animation: slide-in 0.2s ease;
    }
    .fade-leave-active{
      animation: slide-out 0.2s ease;
    }

    .main{
      padding: .5rem;
      padding-top: 4rem;
      width:90%;
    }

    .padding-top{
      padding-top: 50px;
    }
    #graph_title{
      margin-top:-10px;
    }
    @keyframes slide-in {
      0% {  
        transform: translateY(100%);
        opacity:0 ;
      }
      100% {  
        transform: translateY(-100);
        opacity: 100%;
      }
    }
    @keyframes slide-out {
       0% {     
        transform: translateY(-100);
        opacity: 100%;
      }
      100% {     
        transform: translateY(100%);
        opacity:0 ;   
      }
    }
</style>
