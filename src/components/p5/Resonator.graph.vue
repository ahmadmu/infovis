<template>
  <div class="column margin">
    <div class="column align-left">
        <div>
          <p>Slider verschieben um Resonatoren zu simulieren.</p>
        </div>
        <div class="row">
          <p id="graph_title_ver">Filterbreite</p>
          <div id ="graph" ref="graph"></div>
        </div>
        
          <p id="graph_title_hor">Frequenz</p>
        
        <div class="row" v-if = "type === 'helmholtz'">
          <svg id ="helmholtz1" witdh = "90" height="90" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -30 200 200">
            <g id="group3" data-name="Ebene 2">
                <path :class = "{'redStroke':(frequency >= (resonantFrequency1 - 200) && frequency <= (resonantFrequency1 + 200))}" class="cls-1" d="M119.39,74.72A59.44,59.44,0,0,0,63.17,15.36V2.05A1.56,1.56,0,0,0,61.62.5H58.27a1.56,1.56,0,0,0-1.55,1.55V15.36A59.45,59.45,0,0,0,42.06,131.42,6.09,6.09,0,0,0,48,136.19H71.91a6.07,6.07,0,0,0,5.91-4.77A59.47,59.47,0,0,0,119.39,74.72Z"/>
              </g>
          </svg>
          <svg id ="helmholtz2" witdh = "80" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -30 200 200">
            <g id="group3" data-name="Ebene 2">
                <path :class = "{'redStroke':(frequency >= (resonantFrequency2 - 200) && frequency <= (resonantFrequency2 + 200))}" class="cls-1" d="M119.39,74.72A59.44,59.44,0,0,0,63.17,15.36V2.05A1.56,1.56,0,0,0,61.62.5H58.27a1.56,1.56,0,0,0-1.55,1.55V15.36A59.45,59.45,0,0,0,42.06,131.42,6.09,6.09,0,0,0,48,136.19H71.91a6.07,6.07,0,0,0,5.91-4.77A59.47,59.47,0,0,0,119.39,74.72Z"/>
              </g>
          </svg>
           <svg id ="helmholtz3" witdh = "70" height="70" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -30 200 200">
            <g id="group3" data-name="Ebene 2">
                <path :class = "{'redStroke':(frequency >= (resonantFrequency3 - 200) && frequency <= (resonantFrequency3 + 200))}" class="cls-1" d="M119.39,74.72A59.44,59.44,0,0,0,63.17,15.36V2.05A1.56,1.56,0,0,0,61.62.5H58.27a1.56,1.56,0,0,0-1.55,1.55V15.36A59.45,59.45,0,0,0,42.06,131.42,6.09,6.09,0,0,0,48,136.19H71.91a6.07,6.07,0,0,0,5.91-4.77A59.47,59.47,0,0,0,119.39,74.72Z"/>
              </g>
          </svg>
          <svg id ="helmholtz4" witdh = "60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -30 200 200">
            <g id="group2" data-name="Ebene 2">
                <path :class = "{'redStroke':(frequency >= (resonantFrequency4 - 200) && frequency <= (resonantFrequency4 + 200))}" class="cls-1" d="M119.39,74.72A59.44,59.44,0,0,0,63.17,15.36V2.05A1.56,1.56,0,0,0,61.62.5H58.27a1.56,1.56,0,0,0-1.55,1.55V15.36A59.45,59.45,0,0,0,42.06,131.42,6.09,6.09,0,0,0,48,136.19H71.91a6.07,6.07,0,0,0,5.91-4.77A59.47,59.47,0,0,0,119.39,74.72Z"/>
              </g>
          </svg>
         <svg id ="helmholtz5" witdh = "50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -30 200 200">
            <g id="group1" data-name="Ebene 2">
                <path :class = "{'redStroke':(frequency >= (resonantFrequency5 - 200) && frequency <= (resonantFrequency5 + 200) )}" class="cls-1" d="M119.39,74.72A59.44,59.44,0,0,0,63.17,15.36V2.05A1.56,1.56,0,0,0,61.62.5H58.27a1.56,1.56,0,0,0-1.55,1.55V15.36A59.45,59.45,0,0,0,42.06,131.42,6.09,6.09,0,0,0,48,136.19H71.91a6.07,6.07,0,0,0,5.91-4.77A59.47,59.47,0,0,0,119.39,74.72Z"/>
              </g>
          </svg>
        </div>
        <div class ="column" v-if = "type === 'scheafer'">
          <div id="schaefer1"></div>
          <div id="schaefer2"></div>
          <div id="schaefer3"></div>
        </div>
       
        <!-- <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 60 110">
          <g id="Ebene_2" data-name="Ebene 2"><g id="Ebene_1-2" data-name="Ebene 1">
            <rect class="cls-1" x="0" y="0" width="10" height="50" rx="5.07"/>
            <rect class="cls-1" x="0" y="0" width="200" height="40"/>
            <path class="cls-1" d="M47.43,23.63,10.64,16.35V5.57A5.07,5.07,0,0,0,.5,5.57V56.25a5.07,5.07,0,0,0,10.14,0V45.47l36.79-7.28,36.79-7.28Z"/>
          </g>
          </g>
        </svg> -->
       
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as P5 from 'p5';
import 'p5/lib/addons/p5.sound.min';
import 'p5/lib/addons/p5.dom.min';

@Component
export default class ResonatorGraph extends Vue {

@Prop() type!:any;

frequency = 2500;

resonantFrequency5 = 5200;
resonantFrequency4 = 4000;
resonantFrequency3 = 2800;
resonantFrequency2 = 1600;
resonantFrequency1 = 400;

destroyP5 = false;


mounted(){
  const graph = this.$refs.graph as HTMLElement;
  new P5(this.sketch,graph);
  }

beforeDestroy(){
  this.destroyP5 = true;
}

sketch(p5:p5){

  let filter: P5.Filter;  

  let glottis = new P5.Oscillator(150,"sawtooth");
  glottis.amp(1);
  
  let fft: P5.FFT;

  const canvasWidth = 600;
  const canvasHeight = 580;

  const defaultFilterFreq = 2500;
  const defaultFilterWidth = 500;

  let isSliding = false;

  p5.setup = () => {
    
    p5.createCanvas(canvasWidth, canvasHeight);
    p5.fill(255, 40, 255);
    p5.frameRate(60);

    glottis = new P5.Noise('white');
    glottis.disconnect(); 
    filter = new P5.BandPass();
    filter.process(glottis);

    fft = new P5.FFT();
    filter.set(400,100);
    filter.setType('bandpass')

    }
   
    p5.draw = () => {

      if(this.destroyP5){
        p5.remove();
      }

      p5.background(0,0,0,0);
      p5.fill(255,255,255);
      p5.rect(0,0,p5.width,p5.height);
      p5.fill(235,235,235);
      p5.noStroke();
      p5.rect(0,0,p5.width,p5.height-200);
      p5.fill(0,0,0);
      
     // p5.text('Frequenz',p5.width/2 - 25,p5.height - 60,50,20)
      let spectrum = fft.analyze();
      let x;
      let i = 0;


      //draw bars 
      for (let i = 0; i< spectrum.length; i++){
        let x;
        x = p5.map(i * 4, 0, spectrum.length, 0, p5.width);
        let h = -p5.height + p5.map(spectrum[i], 0, 255, p5.height, 0);
        p5.fill(0,0,0);
        p5.rect(x, p5.height - 200, p5.width/spectrum.length + 1 , h) ;
      }
       //schaefer

      let offsetX = 50;
      let offsetY = p5.height - 150;
      let length3 = p5.width * (2/5);
      let length2 = p5.width * (3/5);
      let length1 = p5.width * (4/5);

      if(p5.mouseX >= 0 && p5.mouseX <= canvasWidth && p5.mouseY >= 0 && p5.mouseY <= canvasHeight - 210 && p5.mouseIsPressed){
        isSliding = true;
      }
      else{
        isSliding = false;
      }

      if(isSliding){
          p5.noStroke();
          p5.fill(221,39,39);
          this.frequency = p5.map(p5.mouseX, 0, p5.width, 40, 22500/4);
          let filterWidth = p5.map(p5.mouseY,0,p5.height,100,1000);
          filter.set(this.frequency, filterWidth);

          //slider
          p5.rect(p5.mouseX,p5.height - 200,2,-p5.height+70);
          p5.triangle(p5.mouseX,p5.mouseY-5,p5.mouseX + 10,p5.mouseY +5, p5.mouseX,p5.mouseY + 15)
          p5.triangle(p5.mouseX,p5.mouseY-5,p5.mouseX - 10,p5.mouseY +5, p5.mouseX,p5.mouseY + 15)

          length = p5.map(p5.mouseX,0,p5.width,p5.width - 200,100);
          glottis.start();

      }
      else{
          p5.noStroke();
          p5.fill(221,39,39);
          this.frequency = defaultFilterFreq;
          filter.set(this.frequency, defaultFilterWidth);
          let index = p5.map(defaultFilterFreq,10,22050,0,spectrum.length);
          x = p5.map(((Math.round(index)) * 4), 0, spectrum.length, 0, p5.width);

          //slider
          p5.rect(x - 1,p5.height-200,2,-p5.height);
          p5.triangle(x,p5.height/2,x + 10,p5.height/2 +10, x,p5.height/2 + 20)
          p5.triangle(x,p5.height/2,x - 10,p5.height/2 +10, x,p5.height/2 + 20)

    
          glottis.stop(1000);

      }

        //schaefer
      if(this.type === 'schaefer'){
      
        p5.stroke(221,39,39);
        p5.strokeWeight(2);
        p5.noFill();

        if(p5.mouseX >= 0 && p5.mouseX <= p5.width * (1/3) && isSliding ){
          p5.fill(221,39,39);
          length1 = p5.map(p5.mouseX,0,p5.width * (1/3),p5.width * (4/5),p5.width * (3/5));
        }

        p5.rect(offsetX + 10,offsetY + 3,length1,24,2,2,2,2);
       
        p5.fill(221,39,39);
        p5.noStroke();
        p5.rect(offsetX,offsetY,10,30,2,2,2,2);
        p5.rect(length1 + offsetX,offsetY,10,30,2,2,2,2);
        p5.triangle(length1 + offsetX,offsetY + 3,length1 + offsetX + 25,offsetY +15 ,length1 + offsetX,offsetY + 27);
      

        offsetY += 40;
     
        p5.stroke(221,39,39);
        p5.strokeWeight(2);
        p5.noFill();
        
        if(p5.mouseX >= p5.width * (1/3) && p5.mouseX < p5.width * (2/3) && isSliding) {
          p5.fill(221,39,39);
          length2 = p5.map(p5.mouseX,p5.width * (1/3),p5.width * (2/3),p5.width * (3/5),p5.width * (2/5));
        }

        p5.rect(offsetX + 10,offsetY + 3,length2,24,2,2,2,2);
        p5.fill(221,39,39);
        p5.noStroke();
        p5.rect(offsetX,offsetY,10,30,2,2,2,2);
        p5.rect(length2 + offsetX,offsetY,10,30,2,2,2,2);
        p5.triangle(length2 + offsetX,offsetY + 3,length2 + offsetX + 25,offsetY +15 ,length2 + offsetX,offsetY + 27);
        
        offsetY += 40;

       
        p5.stroke(221,39,39);
        p5.strokeWeight(2);
        p5.noFill();

        if(p5.mouseX >= p5.width * (2/3) && p5.mouseX <= p5.width && isSliding){
          p5.fill(221,39,39);
          length3 = p5.map(p5.mouseX,p5.width * (2/3),p5.width * (3/3),p5.width * (2/5),p5.width * (1/5));
        }

        p5.rect(offsetX + 10,offsetY + 3,length3,24,2,2,2,2);
        p5.fill(221,39,39);
        p5.noStroke();
        p5.rect(offsetX,offsetY,10,30,2,2,2,2);
        p5.rect(length3 + offsetX,offsetY,10,30,2,2,2,2);
        p5.triangle(length3 + offsetX,offsetY + 3,length3 + offsetX + 25,offsetY +15 ,length3 + offsetX,offsetY + 27);
      
      }
        
      p5.stroke(21,47,80);

      const graphHeight = p5.height -  200;
        p5.line(0,graphHeight,p5.width,graphHeight);
        p5.line(0,graphHeight * (5/6) ,p5.width,graphHeight * (5/6));
        p5.line(0,graphHeight  * (4/6),p5.width,graphHeight * (4/6));
        p5.line(0,graphHeight  * (3/6),p5.width,graphHeight  * (3/6));
        p5.line(0,graphHeight * (2/6) ,p5.width,graphHeight  * (2/6));
        p5.line(0,graphHeight  * (1/6),p5.width,graphHeight  * (1/6));

      p5.noStroke();
    }
}

}
</script>

<style lang="scss" scoped>
    @import '../style/_vars.scss';
   .column{
      justify-content: flex-start;
      width:90%;
      display:flex;
      flex-direction: column;
      justify-content:space-around;
      align-items:center ;
    }
    .align-left{
      align-items: flex-start;
    }
    .row{
      width:90%;
      display:flex;
      flex-direction: row;
      justify-content:center;
      align-items:center ;
    }
   #main{
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    align-items:center ;
   }
  
   .cls-1{
    fill:none;
    stroke:$highlightColor;
    stroke-width: 10px;
    stroke-miterlimit:10;
    
    }
    .redStroke{
      fill:$highlightColor;
    }
     .row #graph_title_hor{
      margin-top:-200px;
      text-align: center;
      width:100%;
    }
    #graph_title_ver{
        display: inline-block;
        -webkit-transform: rotate(-90deg);   
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: rotate(-90deg);
     
        margin-right:-20px;
        margin-top:-200px;

    }
    .margin{
     margin:20px;
    }
    svg{
      z-index: 10;
    }
</style>
