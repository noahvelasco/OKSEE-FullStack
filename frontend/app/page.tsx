"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";

// Define an interface for the object shape
interface est {
  id: number;
  category: string;
  associatedFilter: string;
  title: string;
  serviceOptions: string;
  rating: string;
  hours: string;
  address: string;
  thumbnail: string;
  latitude: number;
  longitude: number;
}

export default function Home() {
  const [establishments, setEstablishments] = useState<est[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  // This request should be refetched on every request.
  useEffect(() => {
    fetch("http://localhost:8080/api/est")
      .then((res) => res.json())
      .then((data) => {
        setEstablishments(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!establishments) return <p>No profile data</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-white">
      <div className="text-4xl font-bold">
        {establishments.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>Category: {item.category}</p>
            <p>Service Options: {item.serviceOptions}</p>
            <p>Rating: {item.rating}</p>
            <p>Hours: {item.hours}</p>
            <p>Address: {item.address}</p>
            <p> Thumbnail {item.thumbnail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
