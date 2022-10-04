if (window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add("dark");
let toggle = 1;
function toggleTheme() {
    if (toggle == 1)  {
    document.body.classList.remove("dark");
    let theme = "light";
    localStorage.setItem("theme", theme);
    toggle = 0;
    document.getElementById('theme').classList.add('showLight');
    document.getElementById('themeIcon').innerHTML = "dark_mode";
    }
    else if (toggle == 0) {
        document.body.classList.add("dark");
        let theme = "dark";
        localStorage.setItem("theme", theme);
        toggle = 1;
        document.getElementById('theme').classList.remove('showLight');
        document.getElementById('themeIcon').innerHTML = "light_mode";
    }
}
function getTheme() {
    let currentTheme = localStorage.getItem("theme");
    if(currentTheme == "light") {
    document.body.classList.remove("dark");
    //themeBtn.classList.add("light");
    document.getElementById('themeIcon').innerHTML = "dark_mode";
    }
    else {   
    document.body.classList.add("dark");
    document.getElementById('themeIcon').innerHTML = "light_mode";
    }
    //console.log(currentTheme);
}