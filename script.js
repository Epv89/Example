
'use script';

  let money = prompt ('Ваш бюджет на месяц?','');
  let time = prompt ('Введите дату в формате YYYY-MM-DD','');

  let appData={
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income:[],
      saving:false,
  };
      
  let firstq = prompt ('Введите обязательную статью расходов в этом месяце','');  
  let secondq = prompt ('Во сколько обойдется?','');  
  let firstq1 = prompt ('Введите обязательную статью расходов в этом месяце','');
  let secondq2 = prompt ('Во сколько обойдется?','');
  
  appData.expenses.firstq = secondq;
  appData.expenses.firstq1 = secondq2;

   alert (appData.budget/30);