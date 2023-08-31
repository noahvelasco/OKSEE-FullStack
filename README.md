# OKSEE-FullStack

A fullstack application showing the best places in Oklahoma City, Oklahoma.

## Running the application
Prerequisites
* Java 20 installed and configured
* NodeJS installed


Then you need to open two terminals: terminal `A` and terminal `B`

### Starting backend on terminal A

```
$ ./OKSEE-FullStack/backend
./mvnw spring-boot:run
```

### Starting frontend terminal B

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