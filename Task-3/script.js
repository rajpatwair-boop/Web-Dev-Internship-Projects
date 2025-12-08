function convertTemperature(){
    let temp = parseFloat(document.getElementById("inputTemp").value);
    let unit = document.getElementById("inputUnit").value;

    if(isNaN(temp)){
        document.getElementById("result").innerHTML = "Please enter a valid number ❗";
        return;
    }

    let c, f, k;

    if(unit === "celsius"){
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    }
    else if(unit === "fahrenheit"){
        c = (temp - 32) * 5/9;
        f = temp;
        k = (temp - 32) * 5/9 + 273.15;
    }
    else if(unit === "kelvin"){
        c = temp - 273.15;
        f = (temp - 273.15) * 9/5 + 32;
        k = temp;
    }

    document.getElementById("result").innerHTML =
    `Result:<br>
     🌡 ${c.toFixed(2)} °C<br>
     🔥 ${f.toFixed(2)} °F<br>
     ❄ ${k.toFixed(2)} K`;
}

// Dark mode toggle
function toggleTheme(){
    document.body.classList.toggle("dark");
}

// Scroll button
window.onscroll = () => {
    document.getElementById("scrollTopBtn").style.display =
        window.scrollY > 200 ? "block" : "none";
};

function scrollToTop(){
    window.scrollTo({top:0, behavior:"smooth"});
}
