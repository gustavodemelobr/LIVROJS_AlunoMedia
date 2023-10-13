const frm = document.querySelector("form");
const media = document.querySelector(".outMedia");
const msg = document.querySelector(".outMsg");

frm.addEventListener("submit", (e) => {
    const name = frm.inName.value;
    const nota01 = Number(frm.inNota01.value);
    const nota02 = Number(frm.inNota02.value);

    // processamento dos dados

    const mediaCalc = (nota01 + nota02) / 2;

    // saída dos dados

    if (mediaCalc < 7) {
        media.innerText = `Que pena, ${name}! Sua nota foi ${mediaCalc.toFixed(2)}!`
        msg.innerText = `Você está REPROVADO!`
    }

    else if (mediaCalc >= 7) {
        media.innerText = `Parabéns, ${name}! Sua nota foi ${mediaCalc.toFixed(2)}!`
        msg.innerText = `Você está APROVADO!`
    }
    
    e.preventDefault();
    
})