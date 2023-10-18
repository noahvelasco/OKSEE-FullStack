<p align="center">
<img src="./images/logo_land.png" alt="Alternative text" title="App Splash Logo" height="250"/>
</p>

OKSee is a modern and simple full stack web app showcasing the best parts of Oklahoma City, Oklahoma. The main staple of this mobile app is the attempt for a modern, sleek, and simple UI/UX. All images, color-schemes, and software engineering was done and maintained by Noah Velasco.

<h3 align="center">Technologies Used</h3>
<p align="center">
<a href="https://nextjs.org" target="_blank" rel="noreferrer"><img src="https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg" alt="nextjs"  width="60"/></a>
<a href="https://tailwindcss.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind"  height="40"/></a>
<a href="https://spring.io" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" alt="java spring boot"  height="50"/></a>
<a href="https://www.google.com/maps" target="_blank" rel="noreferrer"> 
<img src="https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg" alt="googlemaps"  height="40"/></a>
<a href="https://openweathermap.org/api" target="_blank" rel="noreferrer"> <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="openweather"  height="40"/></a>

</p>


---
### Preview

 <p align="center">
<img src=".\images\AppScreenshots\1.png" alt="" height="500"/>
<img src=".\images\AppScreenshots\2.png" alt="" height="500"/>
<img src=".\images\AppScreenshots\3.png" alt="" height="500"/>
</p> 

---
### Live Demo
<p align =center>
<a href="https://youtu.be/hGwb33RieqY?si=LlrL-RlK0M3lEeMM" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" alt="dart" width="40" height="40"/>
<h3 align = center><a href = "https://youtu.be/hGwb33RieqY?si=LlrL-RlK0M3lEeMM">Demo Link (Youtube)</a></h3>

</p>

---
### Features / Todo's
- [x] Branding
- [x] Landing Screen <=> Map Screen
- [x] Custom Google Map
- [x] Side Nav Bar (locations)
- [x] Weather Forecast Overlay
- [x] Locations Overlay Button + Pins
- [x] Establishments list search bar
- [x] Establishments filter chips
- [x] Selected Location Birds Eye View
- [x] Comment cleanup
- [x] Documentation

---
### Running the application
Prerequisites
* Java 20 installed and configured
* NodeJS installed
* Create a .env folder inside the `./frontend` folder and add the Google Maps API and the Open Weather Maps API keys
```
GOOGLE_MAPS_API_KEY=<YOUR GOOGLE MAPS API KEY>
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<YOUR GOOGLE MAPS API KEY>
OWM_API_KEY=<YOUR OPEN WEATHER MAP API KEY>
NEXT_PUBLIC_OWM_API_KEY=<YOUR OPEN WEATHER MAP API KEY>
```


1. Run `start.sh` script (initializes the backend and frontend)
```
$ ./OKSEE-FullStack
./start.sh
```

2. Open a new browser window and go to http://localhost:3000

3. *(OPTIONAL)* View Backend Data - Open a new browser and go to http://localhost:8080/api/est

3. *(OPTIONAL)* View Backend H2 Database - Open a new browser and go to http://localhost:8080/h2-console and click 'connect'  - **NO PASSWORD NECESSARY**


### Terminating the backend
* `Ctrl+C` in the backend terminal
* Terminate Process Directly
    1. Run `jps` in any terminal
    2. Locate process ID (e.g `<PID> OkseeWebApplication`)
    3. Terminate process `kill <PID>`