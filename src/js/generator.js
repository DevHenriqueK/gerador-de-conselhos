const adviceGenerator = document.getElementById('advice-generator')
const adviceNumber = document.getElementById('advice-id')
const adviceDescription = document.getElementById('advice-text')

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    }

    const adviceContent = await response.json();
    const adviceID = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerText = adviceID;
    adviceDescription.innerText = adviceText;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
  
}

adviceGenerator.addEventListener("click", getAdvice);

getAdvice();