function myFunction() {
    document.getElementById("randomQuote").innerHTML = "... BET NAV! Tomēr JavaScript funkcionē!!!";

}

var sakumaFrazes = Array("Kad dzīvē iet grūti un pa ielu iet",
                  "Ja pa ielu iet ",
                  "Tikko kā redzi - ",
                  "Ja tur ir",
                  "Nē... ",
                  "Uzreiz kā redzi - ",
                  "Ja tavā priekšā ir",
                  "Ko? Tur ",
                  );


var lietvardi = Array("noziedznieki, ",
                        "dīvaini dzīvnieki, ",
                        "ļoti kurls suns, ",
                        "mīļš sunītis, ",
                        "kaķis, ",
                        "cilvēki, ",
                        "soma, ",
                        "Pēteris, "
                     );


var talakasDarbibas = Array("tad ",
                        "uzreiz ",
                        "zibenīgi ",
                        "nekavējoties ",
                        "tad uzreiz ",
                        "saprotot, kas ir noticis,",
                        "ilgi nedomājot,",
                        "uzmanīgi",
                        "fiksi,",
                        "a nu ka",
                        "nesteidzoties",
                        "gandrīz paslīdot uz neērti novietotas banāna mizas,"
);


var velTalakasDarbibas = Array(
                        "saproti, ka tava dzīve nemaz nav tik slikta ",
                        " noglāsti ",
                        " jāpārdomā dzīvi ",
                        " jābēg prom ",
                        " veido dīvainas sejas ",
                        "diktē savus noteikumus",
                        " sauc policiju ",
                        " jāpārliecinās, ka nesapņo ",
                        "izsaucies - \"cik tas nežēlīgi!\"",
                        "vispirms aizej uz tualeti",
                        " saki: \"Vai tramvajā dzimis? \" "

);


var ekstraDarbibas = Array("un ātri ",
                        ", kā arī - ",
                        ", un - ",
                        " - ",
                        ", un protams -  ",
                        ", arī - ",
                        ", vienkārši",
                        ", ak, un arī - ",
                        "nu viss - "
);

var papildusDarbibas = Array("ej prom.",
                            "aizver durvis", 
                            "jānožēlo sava rīcība",
                            " piezvani mammai",
                            "jāzvana mammai",
                            "izpildi mājasdarbus",
                            "maksā nodokļus",
                            " pabaro kaķi",
                            "tin makšķeres",
                            "ziņo par noziegumu",
                            "ziņo par nepieņemamo situāciju, kas ir radusies šajā jaukajā, saulainajā dienā.",
                            "hi hi hi, ha ha ha!",
                            "hi hi hi!",
                            "ho ho ho!",
                            "priecīgus Ziemassvētkus!",
                            "APRIL APRIL",
                            "nē - tā nav laba doma, piedod, ka es tev tādu teikumu iedevu."
                            );





function reveal() {
  document.getElementById('sakumaFraze').innerHTML = sakumaFrazes[Math.floor(Math.random() * sakumaFrazes.length)];
  document.getElementById('lietvardi').innerHTML = lietvardi[Math.floor(Math.random() * lietvardi.length)];
  document.getElementById('talakasDarbibas').innerHTML = talakasDarbibas[Math.floor(Math.random() * talakasDarbibas.length)];
  document.getElementById('velTalakasDarbibas').innerHTML = velTalakasDarbibas[Math.floor(Math.random() * velTalakasDarbibas.length)];
  document.getElementById('ekstraDarbibas').innerHTML = ekstraDarbibas[Math.floor(Math.random() * ekstraDarbibas.length)];
  document.getElementById('papildusDarbibas').innerHTML = papildusDarbibas[Math.floor(Math.random() * papildusDarbibas.length)];
}
