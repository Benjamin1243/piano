import { midiToNote } from "../notes.js"
import playNote from "./Playnote.js"

console.log(navigator)
//her henter jeg mine htmlElemeter

const notesElement = document.querySelector("#note")
let playedNotes = []
//denne function kører hver gang der skal spilles en ny akkord


if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(succes, faliure)
}

function succes(midiAcces){
    
    //onstatechange sker hver gang der unplugges eller plugges ind
    midiAcces.addEventListener("statechange", upadteDevice)
    const input = midiAcces.inputs
  
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
    
    // denne kode ligner til en forslignign index.js , men denne er anderledes på den måde at den ikke skal tjekke for akkorder g heller ikke oversættes toil toner men stadgi forblive midi
    

    //her adder jeg tonen til akkorden
   
   

   


    if(command == 144){
        if(velocity > 0){
            //hvis tone spilles
            console.log("nu er den sendt")
            playNote(note)
           
            playedNotes.push(midiToNote[note])
        } else if(velocity == 0){
            playNote(note)
           
        } 
    }

    //det er foeskelligt fra keyboard til keobard om den ændrer command eller sæætter velocity til nul
    else if(command == 128){
        playNote(note)
        
    }
   
    
    //denne checker at du spiller de rigtige antal toner, som akkorder skal bruge
    
}
//denne fuktion reseter akkorden
function resetNotes(){
   
    
    playedNotes = []
}
//middle c == 60