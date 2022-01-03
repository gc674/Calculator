function erase(){
    document.getElementById("numar").value = '';
}

function display(str) {
        document.getElementById("numar").value += str;
}

function calcul() {
    let stringT = document.getElementById("numar").value;
    if (!isNaN(stringT[0]) || stringT[0] == '-') {
        if (stringT.includes('+') || 
        stringT.includes('-') || stringT.includes('/') || 
        stringT.includes('*')) {
            rezultat = eval(`${stringT}`);
            document.getElementById("numar").value = rezultat;
        }
    } else {
        alert(`Nu se poate face operația: ${stringT}`);
    }
  }

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }