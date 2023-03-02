/**
 * Find Qitaf points using Price value the fleet
 * @param {number} price
 * @returns {number}
 */
function findQitafPoints(price: number): number {
  return Number((`${price / 10}`));
}

export default findQitafPoints;
