export default function constructNote(message: string, charList: string ): boolean {
  const counter:{ [key: string]: number } = {}

  for (const char of charList) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }

  for (const char of message) {
    if (!counter[char]) return false;

    counter[char] = counter[char] - 1;
  }

  return true;
}