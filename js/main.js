function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);let braum = document.querySelector(".dive"),
    spaaan = document.querySelector("#spaaan");

let speed = 20,
    startValue = 0,
    endValue = 90;

    let mybest = setInterval(() => {
        startValue++
        braum.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #fff 0deg)`
        spaaan.innerText = `${startValue}%`
        // braum.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #fff 0deg)` 
        if(endValue == startValue){
            clearInterval(mybest)
        }

    }, speed);

// let circularProgress = document.querySelector(".dive"),
//     progresValue = document.querySelector("#spaaan");

// let progressStartValue = 0,
//     progressEndValue = 90,
//     speed = 50;

// let progress = setInterval(() => {
//     progressStartValue++

//     progresValue.textContent = `${progressStartValue}%`;
//     circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #fff 0deg)` 

//     if(progressEndValue == progressStartValue){
//         clearInterval(progress)
//     }
// }, speed);