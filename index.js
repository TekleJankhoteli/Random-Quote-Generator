const quoteText=document.querySelector(".quote");
let authorName=document.querySelector(".author");
let quoteBtn=document.querySelector("button");
let soundBtn=document.querySelector(".sound");
let copyBtn=document.querySelector(".copy");


function randomeQuote(){


 quoteBtn.innerText="Loading Quote...";
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result=>{
       
console.log(result)
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
    

    })
}

soundBtn.addEventListener("click", ()=>{
    let utterance=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${ authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
})


quoteBtn.addEventListener("click", randomeQuote);