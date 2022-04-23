const compare = (a, b) => {
  const score1 = a.time;
  const score2 = b.time;
  let comparison = 0;
  score1 > score2 ? (comparison = 1) : (comparison = -1);
  return comparison;
};
export default compare;
