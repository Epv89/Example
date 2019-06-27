
'use script';

  let money = prompt ('Ваш бюджет на месяц?','');
  let time = prompt ('Введите дату в формате YYYY-MM-DD','');

  let appData={
      budget: money,
      timeData: time,
      optionalExpenses: {},
      income:[],
      saving:false,
  }
      
  let firstq = prompt ('Введите обязательную статью расходов в этом месяце','');  
  let secondq = prompt ('Во сколько обойдется?','');  
  let firstq1 = prompt ('Введите обязательную статью расходов в этом месяце','');
  let firstq2 = prompt ('Во сколько обойдется?','');
  expenses: {
      кефир:20 
  }

   alert (appData.budget/30);