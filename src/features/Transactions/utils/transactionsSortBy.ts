import { transaction } from '../types';

export const transactionsSortBy = (
  sortOption: string,
  transactions: transaction[]
): transaction[] => {
  // We clone the array to avoid mutating the original input,
  // because Array.prototype.sort() sorts the array in place.
  let sortedArray = [...transactions];

  switch (sortOption) {
    case 'all':
      // No sorting is applied — we just return the copied array.
      return sortedArray;

    case 'latest':
      // Sort by date from newest to oldest.
      // How: Convert the date strings into Date objects, then to milliseconds with getTime().
      // Subtracting b - a ensures newer dates come first.
      return sortedArray;

    case 'oldest':
      // Sort by date from oldest to newest.
      // How: Same as above, but subtract a - b so that older dates come first.
      return sortedArray;

    case 'az':
      // Sort alphabetically by the `name` property in ascending order (A to Z).
      // How: `localeCompare()` compares UTF-16 string values character by character.
      // It returns:
      // - a negative number if a < b
      // - 0 if equal
      // - a positive number if a > b
      return sortedArray.sort((a, b) => a.name.localeCompare(b.name));

    case 'za':
      // Same as above, but reversed (Z to A).
      // How:
      // 1. Sort with localeCompare (A-Z)
      // 2. Reverse the resulting array using `reverse()` (which mutates the array in place).
      return sortedArray.sort((a, b) => a.name.localeCompare(b.name)).reverse();

    case 'lowest':
      // Sort by `amount` in ascending order (smallest to largest).
      // How: `a.amount - b.amount` works because `.sort()` expects:
      // - negative → a comes before b
      // - positive → b comes before a
      return sortedArray.sort((a, b) => a.amount - b.amount);

    case 'highest':
      // Sort by `amount` in descending order (largest to smallest).
      // How: Just flip the subtraction to `b.amount - a.amount`
      return sortedArray.sort((a, b) => b.amount - a.amount);

    default:
      // If the sort option isn't recognized, return the original transactions unchanged.
      return transactions;
  }
};
