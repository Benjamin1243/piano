const status = document.querySelector("#status")
export  function checkChord(realChord, tones){
    //her tager jeg fat i det html element hvor akkordnavnet er i, og tjekker om det ligner det samme 
    const playChord = document.querySelector("#playChords").textContent
    
    console.log(playChord)
    console.log(tones)
    let fails = 0
    console.log(tones)
    if(playChord == tones){
        console.log("DEN RETURNERE TRUE")
        return true
    }
   console.log(fails)
    if(!fails ==0){
        //kører hvis der er fejl i akkorden
     status.textContent =  `Der fejl i akkorden. Du skal spille ${realChord} og du spillede ${tones} `
    }else if(fails == 0){
        status.textContent =  "rigtigt"
       
    }
    }