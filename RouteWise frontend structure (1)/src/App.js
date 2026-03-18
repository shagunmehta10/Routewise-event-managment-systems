import { useEffect, useState } from "react";

function App() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/venues")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVenues(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>RouteWise Venues</h1>

      {venues.length === 0 ? (
        <p>No data found</p>
      ) : (
        venues.map((v) => (
          <div key={v.id}>
            <p>
              {v.name} - {v.location}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
