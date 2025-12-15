async function consultarIA() {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwSZrAcTeZ1JATX6YnGyhF4nmco4q1B5tvFIi0v8TfqYJrPr_VIq0402vZWjECXZN0x/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: "Explica brevemente el concepto de aprendizaje basado en problemas."
      })
    }
  );

  const data = await response.json();

  document.getElementById("ai-response").innerText = data.reply;
}
