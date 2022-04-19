const getCoordinates = (e) => {
  const xCoordinate = Math.round(
    (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
  );
  const yCoordinate = Math.round(
    (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
  );
  const coordinates = { x: xCoordinate, y: yCoordinate };
  return coordinates;
};
const getLocationImageClick = (e) => {
  const xCoordinate = Math.round(e.nativeEvent.offsetX);
  const yCoordinate = Math.round(e.nativeEvent.offsetY);
  const coordinates = { xCoordinate, yCoordinate };
  return coordinates;
};
export { getCoordinates, getLocationImageClick };
