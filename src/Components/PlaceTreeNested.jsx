const PlaceTreeNested = ({ place }) => {
  const childPlaces = place.childPlaces;
  console.log(childPlaces);
  return (
    <div>
      <p>{place.title}</p>
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTreeNested key={place} place={place} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default PlaceTreeNested;
