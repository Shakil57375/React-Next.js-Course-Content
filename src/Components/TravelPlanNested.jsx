import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import PlaceTreeNested from "./PlaceTreeNested";
const TravelPlanNested = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <div>
      <p>Places visit</p>
      <ol>
        {planets.map((place) => (
          <PlaceTreeNested key={place.id} place={place} />
        ))}
      </ol>
    </div>
  );
};

export default TravelPlanNested;
