import {chords, midiToNote} from "../notes.js"
import {TjekNotes } from "./pianoTotrain.js"

const chosenSettings =JSON.parse(localStorage.getItem("banned"))
console.log(chosenSettings)
const tochords =Object.entries(chords)
const playChord = document.querySelector("#playChords")
console.log(playChord)
makeRadomChord()

//deler mit objekt ind i et array så jeg kan spliite randomisere den
export  function makeRadomChord(){
    let randomChord= []
  
    //her tager jeg fat i document og outputter noder der spilles i en html document
    
    //her sætter vi den første akkord man skal spille
    
    //Tjekker om man har slået nogle bestemte akkord typer fra
    if(chosenSettings.length == 0 || chosenSettings == null){
     
    
     randomChord =tochords[(Math.floor(Math.random() * tochords.length))]
    } else if(chosenSettings.length > 0){
        randomChord = makeComplexChordOutOfSettings()
        
    }
    
   
    //normalt for vi outputtet det hele med midi tal istedet for toner men her laver jeg den om til toner igen
    const tonesArray = randomChord[1].map( tone=> midiToNote[tone])
    
    //hvis det en dag skal sendes som tal kan det altid bare laves om
    playChord.textContent = randomChord[0]
    //hernede  tager jeg og outliner alle tagenenter/toner der er i akkorden
    setTimeout(function(){
        //grunden til at jeg delayed function, er fordi at piano skal have lov at blive indlæst før jeg bruger den
        TjekNotes(randomChord[1])
    }, 100)
    return tonesArray
   
}


function makeComplexChordOutOfSettings(){
    let tryRight = tochords.filter(chord => {
        const onlytypeChord = chord[0].split("_")[1]
        //.some, går igennem alle elementer og tjekkerom bare EN af dem passer med udsagnet, og hvis det gør
        //returnere true
        if(!chosenSettings.some(element => onlytypeChord.includes(element))){
            return chord
        }
        
        
       
    }
        
        )
       
        return tryRight[(Math.floor(Math.random() * tryRight.length))]
        
}


