let score = JSON.parse(localStorage.getItem("score"));
console.log(JSON.parse(localStorage.getItem("score")));

function slumpaVal() {
  let randomSlump = Math.random();

  let showResult = "";

  if (randomSlump >= 0 && randomSlump < 1 / 3) {
    showResult = "Sten";
  } else if (randomSlump >= 1 / 3 && randomSlump < 2 / 3) {
    showResult = "Sax";
  } else if (randomSlump >= 2 / 3 && randomSlump < 1) {
    showResult = "Påse";
  }
  return showResult;
}

function writeOut(bigName) {
  let showResult = slumpaVal();

  let theName = "";

  if (bigName === "Sten") {
    if (showResult === "Sten") {
      theName = "Lika.";
    } else if (showResult === "Sax") {
      theName = "Du vann.";
    } else if (showResult === "Påse") {
      theName = "Du förlorade.";
    }
    if (theName === "Lika.") {
      score.lika += 1;
    } else if (theName === "Du vann.") {
      score.vinnst += 1;
    } else if (theName === "Du förlorade.") {
      score.förlust += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    alert(
      `Du valde ${bigName}. Datan valde ${showResult}. ${theName} 
      Vinnst: ${score.vinnst} Förlust: ${score.förlust} Lika: ${score.lika}`
    );
  }

  if (bigName === "Sax") {
    if (showResult === "Sten") {
      theName = "Du förlorade.";
    } else if (showResult === "Sax") {
      theName = "Lika.";
    } else if (showResult === "Påse") {
      theName = "Du vann.";
    }
    if (theName === "Lika.") {
      score.lika += 1;
    } else if (theName === "Du vann.") {
      score.vinnst += 1;
    } else if (theName === "Du förlorade.") {
      score.förlust += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    alert(
      `Du valde ${bigName}. Datan valde ${showResult}. ${theName} 
      Vinnst: ${score.vinnst} Förlust: ${score.förlust} Lika: ${score.lika}`
    );
  }

  if (bigName === "Påse") {
    if (showResult === "Sten") {
      theName = "Du vann.";
    } else if (showResult === "Sax") {
      theName = "Du förlorade.";
    } else if (showResult === "Påse") {
      theName = "Lika.";
    }
    if (theName === "Lika.") {
      score.lika += 1;
    } else if (theName === "Du vann.") {
      score.vinnst += 1;
    } else if (theName === "Du förlorade.") {
      score.förlust += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    alert(
      `Du valde ${bigName}. Datan valde ${showResult}. ${theName} 
      Vinnst: ${score.vinnst} Förlust: ${score.förlust} Lika: ${score.lika}`
    );
  }
}
