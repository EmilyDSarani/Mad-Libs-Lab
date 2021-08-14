// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  const verbEl = document.getElementById("verb-element");
  const numEl = document.getElementById("number-element");
  const nounEl = document.getElementById("noun-element");

  const changeEl = document.getElementById("change-lyrics");

  const smokeA = document.getElementById("smoke-element-a");
  const smokeB = document.getElementById("smoke-element2");
  const smokeC = document.getElementById("smoke-element3");
  const smokeD = document.getElementById("smoke-element4");
  const smokeE = document.getElementById("smoke-element5");
  const smokeF = document.getElementById("smoke-element6");
  const smokeG = document.getElementById("smoke-element7");

  const twoA = document.getElementById("two-element1");
  const twoB = document.getElementById("two-element2");
  const twoC = document.getElementById("two-element3");
  const twoD = document.getElementById("two-element4");
  const twoE = document.getElementById("two-element5");
  const twoF = document.getElementById("two-element6");
  const twoG = document.getElementById("two-element7");
  const twoH = document.getElementById("two-element8");
  
  const jointA = document.getElementById("joints-elements1");
  const jointB = document.getElementById("joints-elements2");
  const jointC = document.getElementById("joints-elements3");
  const jointD = document.getElementById("joints-elements4");
  const jointE = document.getElementById("joints-elements5");
  const jointF = document.getElementById("joints-elements6");

  changeEl.addEventListener("click", () => {
    smokeA.textContent = verbEl.value;
    smokeB.textContent = verbEl.value;
    smokeC.textContent = verbEl.value;
    smokeD.textContent = verbEl.value;
    smokeE.textContent = verbEl.value;
    smokeF.textContent = verbEl.value;
    smokeG.textContent = verbEl.value;

    twoA.textContent = numEl.value;
    twoB.textContent = numEl.value;
    twoC.textContent = numEl.value;
    twoD.textContent = numEl.value;
    twoE.textContent = numEl.value;
    twoF.textContent = numEl.value;
    twoG.textContent = numEl.value;
    twoH.textContent = numEl.value;

    jointA.textContent = nounEl.value;
    jointB.textContent = nounEl.value;
    jointC.textContent = nounEl.value;
    jointD.textContent = nounEl.value;
    jointE.textContent = nounEl.value;
    jointF.textContent = nounEl.value;
  });

