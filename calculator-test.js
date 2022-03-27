
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 10, "rate": 2.5 })).toEqual('942.70')
  expect(calculateMonthlyPayment({ "amount": 300, "years": 5, "rate": 10 })).toEqual('6.37')
  expect(calculateMonthlyPayment({ "amount": 0, "years": 5, "rate": 10 })).toEqual('0.00')
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 10, "rate": 2.5 })).toBeCloseTo('942.70', 2)
});


it('should return "NaN" in the string', function () {
  expect(calculateMonthlyPayment({ "amount": 0, "years": 0, "rate": 0 })).toEqual("NaN")
})


it("should handle high rates", function () {
  expect(calculateMonthlyPayment({ "amount": 100000, "years": 30, "rate": 87 })).toEqual('7250.00');
});