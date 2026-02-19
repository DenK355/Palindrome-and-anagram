'use strict';

/**
 *
 * @param {string} str
 * @returns {boolean}
 */

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');

  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) return false;
    left++;
    right--;
  }

  return true;
}

/**
 *
 * @param {string} firstWord
 * @param {string} secondWord
 * @returns {boolean}
 */
 function isAnagrams(firstWord, secondWord) {
    const normalizedFirstString  = firstWord.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    const normalizedSecondString = secondWord.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
  
    if (normalizedFirstString.length !== normalizedSecondString.length) return false;
  
    const counts = Object.create(null);
  

    for (let i = 0; i < normalizedFirstString.length; i++) {
      const symbol = normalizedFirstString[i];
      counts[symbol] = (counts[symbol] || 0) + 1;
    }
  
    for (let i = 0; i < normalizedSecondString.length; i++) {
      const symbol = normalizedSecondString[i];
      if (!counts[symbol]) return false;
      counts[symbol]--;
    }
  
    return true;
  }

console.log('Palindrome:')
console.log(isPalindrome("RaceCar")); // true
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("hello")); // false

console.log('Anagrams:')
console.log(isAnagrams("Топор", "ропот")); // true
console.log(isAnagrams("казан", "наказ")); // true
console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("hello", "olelh!")); // true
console.log(isAnagrams("hello", "world")); // false