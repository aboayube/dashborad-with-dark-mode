let avatar = document.querySelector('.avatar'),
    notification = document.querySelector('.notification');

dropMenu(avatar);
dropMenu(notification);
function dropMenu(selector) {
    selector.addEventListener("click", () => {
        let dorpmenu = selector.querySelector('.dropdown-menu')
        dorpmenu.classList.contains("active") ?
            dorpmenu.classList.remove("active") :
            dorpmenu.classList.add('active');

    })
}

//  side bar
let sidebar = document.querySelector('.sidebar'),
    bars = document.querySelector('.bars');
bars.addEventListener("click", () => {
    sidebar.classList.contains("active") ?
        sidebar.classList.remove("active") :
        sidebar.classList.add('active');

})
// dark mode
let mode = document.querySelector(".mode");
mode.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {

        document.body.classList.remove('dark')
        mode.querySelector('i').classList.replace('fa-sun', "fa-moon")
    } else {
        document.body.classList.add('dark');
        mode.querySelector('i').classList.replace("fa-moon", 'fa-sun')
    }
});
// لو فتح من جوال يشيل قائمه جانبية عشان مظهر
window.matchMedia("(max-width:768px)").matches ?
    sidebar.classList.remove('active') :
    sidebar.classList.add('active');
// chart js
let Vistors = [400, 500, 1200, 1500, 3000],
    Hired = [5, 60, 100, 140, 1119, 1900],
    years = [2021, 2022, 2023, 2024, 2025, 2026];
var options = {
    chart: {
        type: 'area',
        height: "100%",
        width: "100%",
    },
    series: [{
        type: 'area',
        name: 'vistors',
        data: Vistors
    }, {
        type: 'area',
        name: 'hired',
        data: Hired
    }],
    xaxis: {
        categories: [...years]
    },
    colors: ['#43a047', '#e65245', '#e43a15']
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();