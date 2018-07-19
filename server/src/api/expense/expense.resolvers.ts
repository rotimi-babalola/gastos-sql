const getExpense = async (_, { input }, ctx) => {
  const expense = await ctx.models.expense.findOne(input.id);
  if (!expense) {
    throw new Error('Expense does not exist');
  }
  return expense;
};

const createExpense = async (_, { input }, ctx) => {
  const expense = new ctx.models.expense();
  expense.name = input.name;
  expense.category = input.category;
  expense.amount = input.amount;
  expense.expenseInfo = input.expenseInfo;
  expense.user = input.userId;

  try {
    const newExpense = await expense.save();
    return newExpense;
  } catch (error) {
    return error;
  }
};

// get expenses for a user
const getUserExpenses = async (_, { input }, ctx) => {
  try {
    const userExpenses = await ctx.models.expense.find({
      user: input.id,
    });
    if (!userExpenses.length) {
      throw new Error('Expenses for user not found');
    }
    return userExpenses;
  } catch (error) {
    return error;
  }
};

module.exports = {
  Query: {
    getExpense,
    getUserExpenses,
  },
  Mutation: {
    createExpense,
  },
  Expense: {
    user: async (expense, _, ctx) => {
      const expenseOwner = ctx.models.user.findOne(expense.userId);
      return expenseOwner;
    },
  },
};
