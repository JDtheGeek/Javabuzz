var Javabuzz = function() {};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

Javabuzz.prototype.says = function(number) {
  output = '';

  if (this._isDivisibleBy(number, 3)) {
    output += 'Java';
  }
  if (this._isDivisibleBy(number, 5)) {
    output += 'Buzz';
  }

  if (output === '') {
    return number;
  }

  return output;
};
