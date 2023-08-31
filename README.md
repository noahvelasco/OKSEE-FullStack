<p align="center">
<img src="./images/logo_land.png" alt="Alternative text" title="App Splash Logo" height="250"/>
</p>

OKSee is a modern and simple full stack web app showcasing the best parts of Oklahoma City, Oklahoma. The main staple of this mobile app is the modern, sleek, and simple UI/UX. All images, color-schemes, and software engineering was done and maintained by Noah Velasco.

<h3 align="center">Technologies Used</h3>
<p align="center">
<a href="https://reactnative.dev/docs/getting-started?guide=android" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="react"  height="40"/></a>
<a href="https://nextjs.org" target="_blank" rel="noreferrer"><img src="https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg" alt="nextjs"  width="60"/></a>
<a href="https://spring.io" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" alt="java spring boot"  height="50"/></a>
<a href="https://www.google.com/maps" target="_blank" rel="noreferrer"> 
<img src="https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg" alt="googlemaps"  height="40"/></a>
<a href="https://openweathermap.org/api" target="_blank" rel="noreferrer"> <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="openweather"  height="40"/></a>

</p>


---
### Preview
TBA
 <!-- <p align="center">
<img src=".\AppScreenshots\1.png" alt="" height="500"/>
<img src=".\AppScreenshots\2.png" alt="" height="500"/>
<img src=".\AppScreenshots\3.png" alt="" height="500"/>
<img src=".\AppScreenshots\4.png" alt="" height="500"/>
<img src=".\AppScreenshots\5.png" alt="" height="500"/>
</p> -->

---
### Live Demo
TBA
<!-- <p align =center>
<a href="" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" alt="dart" width="40" height="40"/>
<h3 align = center><a href = "">Demo Link (Youtube)</a></h3> -->

</p>

---
### Features / Todo's
- [x] Branding
- [ ] Landing Screen <=> Map Screen
- [ ] Custom Google Map
- [ ] Side Nav Bar (locations)
- [ ] Animated Expanding Locations Button
- [ ] Weather Forecast Overlay
- [ ] Locations Overlay Button + Pins
- [ ] Establishments list search bar
- [ ] Establishments filter chips
- [ ] Selected Location Birds Eye View
- [ ] Comment cleanup
- [ ] Documentation

---
### Running the application
Prerequisites
* Java 20 installed and configured
* NodeJS installed


Then you need to open two terminals: terminal `A` and terminal `B`

#### Starting backend on terminal A

```
$ ./OKSEE-FullStack/backend
./mvnw spring-boot:run
```

#### Starting frontend terminal B

```
$ ./OKSEE-FullStack/frontend
npm run dev
```



### Terminating the backend
* `Ctrl+C` in the backend terminal
* Terminate Process Directly
    1. Run `jps` in any terminal
    2. Locate process ID (e.g `<PID> OkseeWebApplication`)
    3. Terminate process `kill <PID>`