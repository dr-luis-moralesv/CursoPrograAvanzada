async function consultarIA() {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby3y446NKLPaetfIEet8deUOaxwC_TQCaZREULL3as2fUSn38pjt1Ve5oJc4QXIVwfs9g/exec",
    {
      method: "POST",
      body: JSON.stringify({
        prompt: "Explica este concepto"
      })
    }
  );

  const data = await response.json();

  document.getElementById("ai-response").innerText = data.reply;
}
