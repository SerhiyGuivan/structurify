function recursiveRange (num) {
  if (num <= 1) return num;
  return num + recursiveRange(num - 1);
}

recursiveRange(6) // 21
