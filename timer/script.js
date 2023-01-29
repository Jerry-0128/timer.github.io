window.onload = () => {

    var play = document.getElementById("play");
        var reset = document.getElementById("reset");
        var time = 0;
        var showText = document.getElementById("timeTxt");
        var reciprocal = null;

        play.addEventListener("click", playFn);
        // reset.addEventListener("click", resetFn);


        function playFn () {
            removeActive ();
            play.classList.add("active");
            run();
            play.removeEventListener("click", playFn);
            play.addEventListener("click", ps);
            reset.addEventListener("click", resetFn);

            function ps () {
                play.innerText = "繼續";
                clearInterval(reciprocal);
                showText.innerText = time;
                play.removeEventListener("click", ps);
                play.addEventListener("click", playFn);
            }
        }

        function resetFn () {
            removeActive ();
            reset.classList.add("active");
            reset.removeEventListener("click", resetFn);
            play.innerText = "開始";
            clearInterval(reciprocal);
            time = 0;
            showText.innerText = time;
            play.addEventListener("click", playFn);
            setTimeout(function () {
                reset.classList.remove("active");
            }, 300)
        }

        function run () {
                play.innerText = "暫停"
                reciprocal = setInterval(function () {
                time++;
                showText.innerText = time;
            }, 1000)
        }

        function removeActive () {
            play.classList.remove("active");
            reset.classList.remove("active");
        }
        
}