#!/bin/bash

# Function to run Spring Boot application
run_backend() {
    echo "Starting backend..."
    cd backend
    ./mvnw spring-boot:run
}

# Function to run frontend application
run_frontend() {
    echo "Starting frontend..."
    cd frontend
    npm run dev
}

# Start the backend and frontend in parallel
run_backend &
run_frontend &

# Wait for all background processes to finish
wait

echo "All processes done!"
