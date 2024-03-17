# Weather App

This web app allows user to search for weather of different cities. The application featches data from OpenWeather API.

## The application  uses:
-   Vite
-   React and TypeScript
-   OpenWeather API
-   axios
-   luxon
-   tailwind
-   shadcn/ui
-   lucid-react

## Installation

Follow the steps below to install and run this web application on your local machine:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/michaeltrinh7/weather-app.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd weather app
    ```

3. **Install Dependencies**

    Use npm to install the project dependencies.

    ```bash
    npm install
    ```

4. **Get Your OpenWeather API Key**

    To use this application, you need to obtain an API key from Edamam. Follow these steps:

    - Visit the [OpenWeather Website](https://openweathermap.org/).
    - Sign in or create an account if you don't have one.
    - Once logged in, head to [API Keys](https://home.openweathermap.org/api_keys) page.
    - Copy the API key and API id for later use.

5. **Add Your API Key to the Application**

    In the root folder make an `.env` file and add your OpenWeather API key as follows:

    ```.env
      VITE_WEATHER_APP_URL=https://api.openweathermap.org/data/2.5
      VITE_WEATHER_APP_WEATHER_IMAGE_URL=https://openweathermap.org/img
      VITE_WEATHER_API_KEY=
    ```

6. **Start the Application**

    Now, you can start the application:

    ```bash
    npm run dev
    ```

7. **Access the Application**

    Open your web browser and go to [http://localhost:5173/](http://localhost:5173/) to access the Weather Web Application.


## Demo: https://michaeltrinh7.github.io/weather-app/

## More details about this project at https://michaeltrinh7.wordpress.com/2024/03/17/introducing-the-weather-application-your-ultimate-weather-companion-%f0%9f%8c%a6%ef%b8%8f%e2%98%80%ef%b8%8f%f0%9f%8c%a7%ef%b8%8f/