let speech=new SpeechSynthesisUtterance();

let voices=[];
let voiceselect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(voiceselect.options[i] =new Option(voice.name,i)));
}
voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value];
})

document.querySelector("#playbtn").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value; 
    window.speechSynthesis.speak(speech);
})

function voicer() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function(event) {
        console.log("najam")
        document.querySelector("textarea").value = event.results[0][0].transcript;
    }
    recognition.start();
}
