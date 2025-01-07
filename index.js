import {midiToNote, chords} from "./notes.js"
import {makeRadomChord} from "./makerandomChord.js"
import {checkChord} from "./checkChord.js"
console.log(navigator)
//her henter jeg mine htmlElemeter

const notesElement = document.querySelector("#note")
let playedNotes = []
//denne function kører hver gang der skal spilles en ny akkord
let randomChord =makeRadomChord()

if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(succes, faliure)
}

function succes(midiAcces){
    
    //onstatechange sker hver gang der unplugges eller plugges ind
    midiAcces.addEventListener("statechange", upadteDevice)
    const input = midiAcces.inputs
    console.log(input)
    //denne sørger for at køre igennem alle midi inputs, min har dog kun 1, men jeg bliver stadig nødt til at lave en foreach, for at få specifikt fat i den item
    input.forEach(element => {
      //dette kører midiInput funktionen når inputtet modtager input
       element.addEventListener("midimessage", midiInput)
    
    });
    

    
    
}

function upadteDevice(event){
   
    
}
function faliure(){
    console.log("no device connecteds")
}
console.log("werwewe")

function midiInput(input){
    //her indeler jeg de forskllige ting
    const command = input.data[0]
    const note  = input.data[1]
    const velocity  = input.data[2]
    
    const randomchordsTones = randomChord

    //her adder jeg tonen til akkorden
   
   

   


    if(command == 144){
        if(velocity > 0){
            //hvis tone spilles

            
            playedNotes.push(midiToNote[note])
        } else if(velocity == 0){
            resetNotes()
           
        } 
    }

    //det er foeskelligt fra keyboard til keobard om den ændrer command eller sæætter velocity til nul
    else if(command == 128){
        resetNotes()
        
    }
    notesElement.textContent = playedNotes
    
    //denne checker at du spiller de rigtige antal toner, som akkorder skal bruge
    if(playedNotes.length >= randomchordsTones.length ){
        // nu kører vi så checker funktionen
      if(checkChord(randomchordsTones,playedNotes )){
        randomChord =makeRadomChord()

      }
    }
}
//denne fuktion reseter akkorden
function resetNotes(){
   
    
    playedNotes = []
}
//middle c == 60