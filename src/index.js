const button = document.getElementById("button-showModal");
const result = document.getElementById("result");

function awaitAfter3Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("<h2>Voçê conseguiu!</h2>");
    }, 3000);
  });
}

async function showResult() {
  const func = await awaitAfter3Seconds();
  result.innerHTML = func;
}

button.addEventListener("click", () => showResult());
