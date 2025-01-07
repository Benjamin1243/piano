import playNote from "../Playnote.js"
import { makeRadomChord } from "./makerandomChord.js"
import { midiToNote } from "../notes.js"
import {checkChord} from "../checkChord.js"
let tochords = midiToNote
//therandomChord er en variabel, der indholder random chord
let theRandomChord
let playedNotesInTones = []
const piano = document.querySelector(".piano-container")
const middlec= 60
const midi_values_whites = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84]
const midi_values_black = [61, 63, 66, 68, 70, 73, 75, 78, 80, 82]
let tjek =0

    
    //først laver jeg de hvide tangenter
    for(let i = 0; i<= 15;i++){
        //grunden til at jeg pluser alle mine toner med en er fordi at ikke kan starte på nul i min grid column 
        let div = document.createElement("div")
        //her stoopper jeg function når den rammer 15, da jeg kun skal bruge 14 hvide tagnener
        if(i +1 == 16){
           
        }else{
            div.classList.add("key", "white-key")
            div.style.gridColumnStart = i +1
            div.style.gridAutoColumnEnd = i +2
            div.setAttribute("id", midi_values_whites[i])
            piano.appendChild(div)
        }
        
    }
    let divGridColumn = 0
    for(let i = 0; i<= 10;i++){
        if(i !==0){ 
            divGridColumn++
         
            let div = document.createElement("div")
            div.classList.add("key", "black-key")
            div.setAttribute("id", midi_values_black[i-1] )
            if(i== 3 || i == 6 || i == 8 ){
                div.style.gridColumnStart = divGridColumn +1
            div.style.gridColumnEnd = divGridColumn +3
            piano.appendChild(div)
            divGridColumn++
            }else{
                //elsen, gør at element bliver sat ind på siden
                
                
                
                console.log(i)
                div.classList.add("key", "black-key")
            div.style.gridColumnStart = divGridColumn
            div.style.gridColumnEnd = divGridColumn +2
            piano.appendChild(div)
            div.setAttribute("id", midi_values_black[i-1] )
            }
            
        }
        
        
        
    }
     tjek = 1

    //hernede giver  jeg midi værdierne til mit keybaord
   
    
    const keys = document.querySelectorAll(".key")
keys.forEach( key=>{
    key.addEventListener("click", playNote)
   
})

 export function TjekNotes(randomChord){
    //dette resetter akkorderne, så den ikke gemmer tonerne fra den tidligere akkord
    playedNotesInTones = []
    theRandomChord = randomChord
    console.log("kører tjekNotes")
    //først skal vi også lige have lavet klavernoderne til toner og ikke midi tal
    console.log(randomChord)
   let  piano = document.querySelectorAll(".key")
   console.log(piano)
   let tonesShallPlay = [] 
   //
   console.log(tochords)
   piano.forEach(element =>{
   
   let toneInNote = tochords[element.getAttribute("id")]
   tonesShallPlay.push(toneInNote)
  
   })
//denne kode er måske lidt rodet, men det den basiclly gør, er at få tonerne skrevet i toner i stedet for midital, og derefter samligner den
//og adder en class

   
   randomChord.forEach( element => {
   
playedNotesInTones.push(tochords[element])
   })
   //nu laver jeg så de toner der er spile
   
        console.log(randomChord)
   tonesShallPlay.forEach((element, index) => {
  
   console.log(playedNotesInTones +" "+ playedNotesInTones.includes(element) + " "+ element)
               
            if(playedNotesInTones.includes(element)){
                
                piano[index].classList.add("right--key")
                piano[index].classList.remove("wrong--key")
            }else{
                piano[index].classList.add("wrong--key")
                piano[index].classList.remove("right--key")
            }
        });}

//hernede er min funktion der ska tilkalde min tjekker chord,
export function toTjekkerChord(playedNotes ){
    console.log("dette er den akkord der bliver sendt" + playedNotes+ "denne akkor skal spilles " + theRandomChord)
    
{checkChord(playedNotesInTones, playedNotes) && makeRadomChord()}
}







