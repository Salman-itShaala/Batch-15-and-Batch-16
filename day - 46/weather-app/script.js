const city = document.getElementById("city-name")
const cityInput = document.getElementById("city-input");

const apiKey = "65869e92fd0e9d2d5ce23830bf41d52d";

async function getWeatherData() {

    if (!cityInput.value) {
        alert("Enter city");
        return;
    }


    try {

        const res = await fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${cityInput.value}`)

        const data = await res.json();

        console.log(data);

        if (data.success === false) {
            alert("Enter correctr city name")
            return;
        }

        const name = data.location.name;
        const region = data.location.region;
        const country = data.location.country;

        city.innerText = `${name} (${region})  ${country}`;
    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }

}



async function getData() {
    const res = await fetch("https://api.weatherstack.com/current?access_key=44fbe6984578f7d0e631f3c8e5c4c185&query=pune")

    const data = await res.json();

    console.log(data);

    console.log("B")
}


console.log("A");

getData();

console.log("C");
