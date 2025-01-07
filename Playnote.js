import showPlayedChord from "./freemode/ShowPlayedChord.js"

const playedNotes = []

export default function playNote(note){
    //IIdenne if kører hvis man trykker på sit keyboard og ikke det virtuelle
    let noteElement
    if(this == undefined){
        midiTone = note
        console.log(note)
        //dette sørger for at hvis man spiller unde middle c, bliver den registreret op
        while(midiTone < 60){
            midiTone = midiTone +12
        }
        while(midiTone > 84){
            midiTone = midiTone -12
        }
        noteElement = document.getElementById(midiTone)
        
    }else{
        noteElement = this
        var midiTone =this.getAttribute("id")
    }
   
    
   noteElement.classList.toggle("key--down")
    if(noteElement.classList.contains("key--down")){
        playedNotes.push(midiTone)
        
    }else{
        let indexOfNote = playedNotes.indexOf(midiTone)
        playedNotes.splice(indexOfNote, 1)
       
    }
  

    showPlayedChord(playedNotes)
    
}