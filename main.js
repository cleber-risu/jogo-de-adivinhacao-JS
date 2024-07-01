(() => {
  const screen1 = document.querySelector(".screen1");
  const screen2 = document.querySelector(".screen2");
  const btnTry = document.querySelector("#btnTry");
  const btnAgain = document.querySelector("#btnAgain");
  let xAttempts = 1;

  btnTry.addEventListener("click", handleStartGame);
  btnAgain.addEventListener("click", handleResetGame);
  document.addEventListener("keydown", handleKeyPress);

  const randomNumber = () => Math.round(Math.random() * 10);

  let newRandomNumber = randomNumber();

  function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
  }

  function handleStartGame(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) === newRandomNumber) {
      toggleScreen();

      screen2.querySelector(
        "h2"
      ).innerText = `Você acertou em ${xAttempts} tentativas!`;
    }

    xAttempts++;
    inputNumber.value = "";
  }

  function handleResetGame() {
    toggleScreen();
    newRandomNumber = randomNumber();
    xAttempts = 1;
  }

  function handleKeyPress(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
      handleResetGame();
    }
  }
})();
