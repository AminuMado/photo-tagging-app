const isCoordinateWithinTwoDegrees = (coordinate1, coordinate2) => {
  return (
    coordinate1 === coordinate2 ||
    coordinate1 + 1 === coordinate2 ||
    coordinate1 + 2 === coordinate2 ||
    coordinate1 - 1 === coordinate2 ||
    coordinate1 - 2 === coordinate2
  );
};

export default isCoordinateWithinTwoDegrees;
