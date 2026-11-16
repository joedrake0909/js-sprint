// Store the exchange-rate API URL
const url = "https://open.er-api.com/v6/latest/USD";

// Store the Accra weather API URL
const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=5.56&longitude=-0.20&current_weather=true";

try {
    // Fetch both API responses in parallel
    const [response, weatherResponse] = await Promise.all([
        fetch(url, {
            signal: AbortSignal.timeout(5000)
        }),
        fetch(weatherUrl, {
            signal: AbortSignal.timeout(5000)
        })
    ]);

    // Check whether the currency API request succeeded
    if (!response.ok) {
        throw new Error(`Currency API failed: ${response.status}`);
    }

    // Check whether the weather API request succeeded
    if (!weatherResponse.ok) {
        throw new Error(`Weather API failed: ${weatherResponse.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Parse the weather response body as JSON
    const weatherData = await weatherResponse.json();

    // Extract the GHS rate
    const ghsRate = data.rates.GHS;

    // Extract current weather information
    const temperature = weatherData.current_weather.temperature;
    const windspeed = weatherData.current_weather.windspeed;
    const weatherCode = weatherData.current_weather.weathercode;

    // Print the formatted exchange rate
    console.log(`1 USD = ${ghsRate.toFixed(2)} GHS`);

    // Print Accra's current weather
    console.log(`Accra: ${temperature}°C`);
    console.log(`Wind speed: ${windspeed} km/h`);
    console.log(`Weather code: ${weatherCode}`);

} catch (error) {
    console.error("Something went wrong:", error.message);
}