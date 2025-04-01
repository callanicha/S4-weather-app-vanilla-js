const API_KEY = "YOUR_API_KEY";
const cityLocation = "Paris";
const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityLocation}&aqi=yes`;

	const fetchWeather = async () => {
		try {
			const response = await fetch(URL);
			if (!response.ok) throw new Error("Network response was not ok.");
			
			const data = await response.json();
			console.log(data);
	
			const {
				location: { name: city },
				current: { temp_c: temp, condition: { icon }, wind_kph: wind, humidity, uv, feelslike_c: feelslike }
			} = data;
	
			document.querySelector(".card-title").textContent = city;
			document.querySelector(".card-img").src = icon;
	
			const weatherDetails = [
				`Temperature: ${temp}°C`,
				`Humidity: ${humidity}%`,
				`Feels like: ${feelslike}°C`,
				`Wind: ${wind} km/h`,
				`UV: ${uv}`
			];
	
			document.querySelectorAll(".list-group-item").forEach((item, index) => {
				item.textContent = weatherDetails[index];
			});
		} catch (error) {
			console.error("Fetch error:", error);
		}
	};
	
	window.onload = fetchWeather;	