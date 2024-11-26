const chartInput = document.getElementById("chart-input");
const createButton = document.getElementById("create-chart");
function createChart() {
    const string = chartInput.value;
    const numberArray = string.split(" ").map(item => parseFloat(item));
    
    for(let i = 0; i < numberArray.length; i++) {
        const chartItem = document.createElement("div");
        chartItem.classList.add("bar");
        chartItem.style.height = numberArray[i] + "px";
        chart.appendChild(chartItem);
    }
}