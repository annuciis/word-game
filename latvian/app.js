function makeStory() {
  // iegūstam vērtības no teksta laukiem
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let value3 = document.getElementById("value3").value;
  let value4 = document.getElementById("value4").value;

  //definējam tekstu
  let text = `
    Reiz dzīvoja cilvēks vārdā ${value4}, kam ļoti garšoja ${value3}.
    Viņš katru dienu varēja domāt tikai ${value3}, ${value3} un vēlreiz ${value3}.
    Taču tikpat ļoti viņam patika ${value2}. Viņš to varēja darīt katru dienu - no rīta līdz vakaram.
    Reiz viņam gadījās ${value1} diena un viņam vairs nepatika ${value2}, jo diena bija sabojāta.
`;

  // pārbaudam vai visas vērtības ir aizpildītas
  if (value1 == "" || value2 == "" || value3 == "" || value4 == "") {
    // ja nav, tad izmetam kļūdas ziņojumu un nerādam tekstu
    alert("Ir nepieciešams aizpildīt visus laukus. Pārskati lūdzu vēlreiz!");
    document.getElementById("text").style.display = "none";
  } else {
    // ja ir, tad parādam tekstu
    document.getElementById("text").innerText = text;
    document.getElementById("text").style.display = "block";
  }
}

function reset() {
  // notīram vērtības
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("value3").value = "";
  document.getElementById("value4").value = "";

  // paslēpjam tekstu
  document.getElementById("text").style.display = "none";
}
