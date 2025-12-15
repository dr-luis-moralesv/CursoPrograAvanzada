async function consultarIA() {
  const response = await fetch(
    "https://script.google.com/macros/s/1k47RHCuZn1TgpoZj5gKnMcB-eOO6PW4l6ZlI0n6RmW0lLw0kfcRT2pZc/exec",
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
