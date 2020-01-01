 window.context  = new AudioContext();
 var tuna = new Tuna(context);


      window.keyboard = new AudioKeys({
        polyphony: 10,
        rows: 2,
        priority: 'first'
      });
//important variables
//sliders

//overdrive
var dr = document.getElementById("drive").value/100;
var drselect = document.getElementById("type").value;
var ov = document.getElementById("ov").checked;
var ov1 = document.getElementById("ov1").checked;
//delay
var dtime = document.getElementById("dtime").value;
var dfeed =document.getElementById("dfeed").value/100;
var dmount = document.getElementById("dmount").value/100;
//checkboxes

 //pedal changer handlers
 //overdrive
function changeDrive(){
      dr = document.getElementById("drive").value/100; //drive ammount
      drselect = document.getElementById("type").value; //drive version
      ov = document.getElementById("ov").checked; //osc 1
      ov1 = document.getElementById("ov1").checked; //osc 2

      // checker
      if (ov == 1) {
        overdrive.bypass = 0; //overdrive 1
        overdrive.curveAmount = dr;
        overdrive.algorithmIndex = drselect;
    }else{
      overdrive.bypass = 1;
    }
     if (ov1 == 1) {
      overdrive1.bypass = 0;
      overdrive1.curveAmount = dr;
      overdrive.algorithmIndex = drselect; // overdrive 2
     }else{
        overdrive1.bypass = 1;
     }
   }
 function changeDelay(){
    dtime = document.getElementById("dtime").value;
	dfeed =document.getElementById("dfeed").value/100;
	dmount = document.getElementById("dmount").value/100;
      // checker
      delay.feedback =  dfeed;
      delay.delayTime = dtime;
      delay.wetLevel = dmount;
      delay.dryLevel = 1-dmount;
   }
 //pedal on/off general
 $(document).ready(function(){
	$(".pedal").dblclick(function(){
		var pedalId = this.id;
		if (window[pedalId].bypass == 1) {
			window[pedalId].bypass = 0;
			this.style.backgroundColor = "#e5fce8";

	}
		else if (window[pedalId].bypass == 0) {
			window[pedalId].bypass = 1;
			this.style.backgroundColor = "#fff";
		}
	});
});
//effects----------------------------------------------------

  var intervals = [0.25,0.5,1,2,4]; // octave slider values

  var overdrive = new tuna.Overdrive({
    outputGain: 0,         //0 to 1+
    drive: 0,              //0 to 1
    curveAmount: dr,          //0 to 1
    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
    bypass: 0
	});
  var overdrive1 = new tuna.Overdrive({
    outputGain: 0,         //0 to 1+
    drive: 0,              //0 to 1
    curveAmount: dr,          //0 to 1
    algorithmIndex: 2,       //0 to 5, selects one of our drive algorithms
    bypass: 0
  });
  var chorus = new tuna.Chorus({
    rate: 1.5,         //0.01 to 8+
    feedback: 0.2,     //0 to 1+
    delay: 0.0045,     //0 to 1
    bypass: 0          //the value 1 starts the effect as bypassed, 0 or 1
});
  var delay = new tuna.Delay({
    feedback: dfeed,    //0 to 1+
    delayTime: dtime,    //1 to 10000 milliseconds
    wetLevel: dmount,    //0 to 1+
    dryLevel: 1-dmount,       //0 to 1+
    cutoff: 20000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
    bypass: 1
});
  var phaser = new tuna.Phaser({
    rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
    depth: 0.3,                    //0 to 1
    feedback: 0.2,                 //0 to 1+
    stereoPhase: 30,               //0 to 180
    baseModulationFrequency: 700,  //500 to 1500
    bypass: 0
});
var tremolo = new tuna.Tremolo({
    intensity: 0.3,    //0 to 1
    rate: 4,         //0.001 to 8
    stereoPhase: 0,    //0 to 180
    bypass: 0
});
var wahwah = new tuna.WahWah({
    automode: true,                //true/false
    baseFrequency: 0.5,            //0 to 1
    excursionOctaves: 2,           //1 to 6
    sweep: 0.2,                    //0 to 1
    resonance: 10,                 //1 to 100
    sensitivity: 0.5,              //-1 to 1
    bypass: 0
});
var bitcrusher = new tuna.Bitcrusher({
    bits: 4,          //1 to 16
    normfreq: 0.1,    //0 to 1
    bufferSize: 4096  //256 to 16384
});

    //---------------------------------------processes user input

    //wave type osc1, osc2
    function changeWave(){
          wave = document.getElementById("oscillator").value;
        }
    function changeWave1(){
          wave1 = document.getElementById("oscillator1").value;
        }
        //volume/gain osc1, osc2
    function changeVol(){
          vol = document.getElementById("volume").value;
        }
    function changeVol1(){
          vol1 = document.getElementById("volume1").value;
        }




      var oscillators = {};

      //-------------------------------------processes note generation



      keyboard.down( function(note) {
        //keyboard visuals
        var keyNum = String(note.keyCode);
        var key = document.getElementById(keyNum);
        var keyClass =key.className;
        key.style.boxShadow = "0px 0px 0px";

        if (keyClass === "key white") {
        key.style.backgroundColor = "#d1d1d1";
        } else{
        key.style.backgroundColor = "#191919";
        }
        //oscilator 1
        var v = document.getElementById("interval").value
        var interval = intervals[v];
        var o = context.createOscillator();
        var g = context.createGain();
        var wave = document.getElementById("oscillator").value;
        var vol = document.getElementById("volume").value /100;
        o.frequency.value = note.frequency*interval;
        o.type = wave;
        g.gain.value = vol;
        o.connect(g);
        g.connect(overdrive);
        overdrive.connect(delay);//connects volume to note
        delay.connect(context.destination); //connects note to output

        //oscillator 2
        var v1 = document.getElementById("interval1").value
        var interval1 = intervals[v1];
        var o1 = context.createOscillator();
        var g1 = context.createGain();
        var wave1 = document.getElementById("oscillator1").value;
        var vol1 = document.getElementById("volume1").value /100;
        o1.frequency.value = note.frequency*interval1;
        o1.type = wave1;
        g1.gain.value = vol1;
        o1.connect(g1);
        g1.connect(overdrive1);
        overdrive1.connect(delay);//connects volume to note
        delay.connect(context.destination); //connects note to output
 //connects note to output


      // osc1 fadein
      var fin = document.getElementById("fadeIn").value/10;

      g.gain.linearRampToValueAtTime(0, context.currentTime);
      g.gain.linearRampToValueAtTime(vol, context.currentTime + fin);



      // osc2 fadein
      g1.gain.linearRampToValueAtTime(0, context.currentTime);
      g1.gain.linearRampToValueAtTime(vol1, context.currentTime + fin);



      // begin playning

        o.start(0); //the oscillator itself yehaw
        o1.start(0);
        oscillators[note.note] = {
          oscillator: o,
          oscillator1: o1,
          gain: g,
          gain1: g1,

        };
      });



      keyboard.up( function(note) {
        //keyboard visuals
        var keyNum = String(note.keyCode);
        var key = document.getElementById(keyNum);
        var keyClass =key.className;


        if (keyClass === "key white") {
        key.style.backgroundColor = "#fff";
        key.style.boxShadow = "3px 3px 1px #888";
        } else{
        key.style.backgroundColor = "#000";
        key.style.boxShadow = "3px 3px 1px #222";
        }


        var fout = document.getElementById("fadeOut").value/10;
        if(oscillators[note.note]) {
          //osc1 fadeout
          oscillators[note.note].gain.gain.linearRampToValueAtTime(oscillators[note.note].gain.gain.value, context.currentTime);
          oscillators[note.note].gain.gain.linearRampToValueAtTime(0, context.currentTime + fout);
          oscillators[note.note].oscillator.stop(context.currentTime + fout);
           //osc2 fadeout
          oscillators[note.note].gain1.gain.linearRampToValueAtTime(oscillators[note.note].gain.gain.value, context.currentTime);
          oscillators[note.note].gain1.gain.linearRampToValueAtTime(0, context.currentTime + fout);
          oscillators[note.note].oscillator1.stop(context.currentTime + fout);
          delete oscillators[note.note];




        }
      });
