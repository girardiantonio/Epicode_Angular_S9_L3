const choseLabel = document.getElementById("inputGroupSelect01") as HTMLSelectElement;
const redLordo = document.getElementById("inputfield") as HTMLInputElement;
const redNumber = document.getElementById("rednum") as HTMLSpanElement;
const inpsNumber = document.getElementById("inpsnum") as HTMLSpanElement;
const irpefNumber = document.getElementById("irpefnum") as HTMLSpanElement;
const formReference = document.getElementById("form") as HTMLFormElement;
const resultReference = document.getElementById("result") as HTMLSpanElement

class Lavoratore {
  constructor(
    public codRedd: number,
    public tasseInps: number,
    public tasseIrpef: number
  ) {}
}

class Artigiano extends Lavoratore {
  constructor() {
    super(10, 23, 32);
  }
}

class Informatico extends Lavoratore {
  constructor() {
    super(20, 25, 35);
  }
}

class Autonomo extends Lavoratore {
  constructor() {
    super(26, 30, 40);
  }
}

function updateInfo(lavoratore: Lavoratore) {
  redNumber.innerText = lavoratore.codRedd.toString();
  inpsNumber.innerText = lavoratore.tasseInps.toString();
  irpefNumber.innerText = lavoratore.tasseIrpef.toString();
}

function calculateTasse(lavoratore: Lavoratore, redditoLordoValue: number) {
  const redditoValue = lavoratore.codRedd;
  const inpsValue = lavoratore.tasseInps;
  const irpefValue = lavoratore.tasseIrpef;

  const utiletasse = (redditoLordoValue * redditoValue) / 100;
  const tasseInps = (utiletasse * inpsValue) / 100;
  const tasseIrpef = (utiletasse * irpefValue) / 100;

  const redditoAnnuoNetto = redditoLordoValue - (tasseInps + tasseIrpef);

  resultReference.textContent = redditoAnnuoNetto.toString();
}

choseLabel.addEventListener("change", function () {
  const selectedValue = choseLabel.value;

  if (selectedValue === "1") {
    const artigiano = new Artigiano();
    updateInfo(artigiano);
  } else if (selectedValue === "2") {
    const informatico = new Informatico();
    updateInfo(informatico);
  } else if (selectedValue === "3") {
    const autonomo = new Autonomo();
    updateInfo(autonomo);
  }
});

formReference.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedValue = choseLabel.value;
  const redditoLordoValue = parseFloat(redLordo.value);

  if (selectedValue === "1") {
    const artigiano = new Artigiano();
    updateInfo(artigiano);
    calculateTasse(artigiano, redditoLordoValue);
  } else if (selectedValue === "2") {
    const informatico = new Informatico();
    updateInfo(informatico);
    calculateTasse(informatico, redditoLordoValue);
  } else if (selectedValue === "3") {
    const autonomo = new Autonomo();
    updateInfo(autonomo);
    calculateTasse(autonomo, redditoLordoValue);
  }
});
