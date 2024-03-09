/*
  Implement a function calculateTotalSpentByCategory which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
 }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((acc, transaction) => {
      const { category, price } = transaction;

      // Check if the category already exists in the accumulator
      const existingCategory = acc.find(item => item.category === category);

      if (existingCategory) {
          // If the category exists, update the total spent
          existingCategory.totalSpent += price;
      } else {
          // If the category doesn't exist, add a new entry
          acc.push({ category, totalSpent: price });
      }

      return acc;
  }, []);
}


module.exports = calculateTotalSpentByCategory;