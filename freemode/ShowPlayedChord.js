import { chords, midiToNote } from "../notes.js"
import {toTjekkerChord} from "../trainer/pianoTotrain.js"
const tochords =Object.entries(chords)
const h2ShoplyedChord = document.querySelector("#PlayesChord")


//her opretter jeg et array med alle akkordene, men istedet for midi værdier, med tonevædier
let alleChordsWithNotes = []
tochords.forEach((element, index) =>{ 
 let ChordsWithNotes = []
 element[1].forEach(newTone =>{
    
     ChordsWithNotes.push(midiToNote[newTone])
     
 })
 //element[1], giver os alle midi tonerne
 alleChordsWithNotes.push(ChordsWithNotes)
 //først skal jeg lige lave midi akoderne om til toner


 alleChordsWithNotes
})





export default function showPlayedChord([...notes]){
    //først skal tonerne laves om fra midital til toner
    const tonesArray = []
    let RealChordPlayed = []
    notes.forEach(tone =>{
       tonesArray.push(midiToNote[tone])
       
    })
   
    //nu samligner jeg dem
        
        //nu laver vi også lige akkorden om til de rigtig toner
       alleChordsWithNotes.forEach(element =>{
        let newTonesArray = tonesArray.sort()
        // opretter jeg et nyt array, for at tjekke på hvor mange toner den skal indeholde
        let maxTones
        let thisChord = ""
        // doubleNotesArray, sørger for at man kan dobuble op på noder
        let doubleNotesArray = []
        let CountRightChord = 0
        //her sortere jeg i arrayet og opretter et nyt array, ud fra tonerne så de ikke er doblet
        newTonesArray.forEach(note =>{
            if(!doubleNotesArray.includes(note)){
                doubleNotesArray.push(note)
            }
          })
          newTonesArray = doubleNotesArray.sort()
          maxTones = newTonesArray.length
          console.log( newTonesArray.length)
        if(element.length == maxTones){
        let sortedChord = element.sort()
        
         //før vi begynder at sortere akkorden, skal vi tjekke om på om der bliver dobublet på noder
         console.log( newTonesArray)
          
          
        sortedChord.forEach((element, index) =>{
         if(sortedChord[index] !== newTonesArray[index]){
            console.log(newTonesArray[index])
            return false
         }else{
            CountRightChord++
           
         }
        })
        if(CountRightChord == element.length){
            console.log(element)
            RealChordPlayed.push(tochords[alleChordsWithNotes.indexOf(element)])
            
           
            console.log(RealChordPlayed)
        }
        }

        
       })
      if(RealChordPlayed !== undefined){
        let showedChords =""
        RealChordPlayed.forEach((playedChords,index) => {
            if(index == 0){
                showedChords = showedChords+ playedChords[0]
                //sørger for at der kun vises skråstreg ved flere akkorder

                //dette skal kun virke til ikke freemode deition
            toTjekkerChord(playedChords[0])
            }else{
            showedChords = showedChords+ " / "+ playedChords[0]}

        })
       h2ShoplyedChord.textContent = showedChords}
    

}

