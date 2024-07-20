'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    let x;
    x = -b / (2 * a)
    arr.push(x)
  } else if (d > 0) {
    let x1, x2;
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let totalPercent;

  if (typeof percent !== "number") {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  if (typeof contribution !== "number") {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }
  if (typeof amount !== "number") {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let year = date.getFullYear();
  let mounth = (year - currentYear) * 12;

  totalPercent = (percent /100) / 12;
  let body = amount - contribution;
  let monthlyPay = body * (totalPercent + totalPercent / (((1 + totalPercent) ** mounth) - 1));
  totalAmount = monthlyPay * mounth;

  return Number(totalAmount.toFixed(2));
}