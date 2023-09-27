function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent - 1);
}

power(2, 4) // 16
