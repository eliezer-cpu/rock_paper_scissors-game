const gameResult = document.querySelector(".gameResult")
const buttons = document.querySelectorAll(".btn")

buttons.forEach((n) => {
  n.addEventListener("click", () => {
    console.log(n.innerHTML)
    let playerOne = n.innerHTML.trim().toLocaleLowerCase()
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1)
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors"
      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne} <br>Computer: ${computer}
                      <br>Computer Wins`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne : ${playerOne} <br>Computer : ${computer}
                      <br>Computer wins`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne : ${playerOne} <br>Computer : ${computer}
                      <br>Computer wins`
          : `playerOne : ${playerOne} <br>Computer: ${computer}
                       <br>playerOne wins`
      gameResult.innerHTML = result
    }
  })
})
