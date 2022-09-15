function leadingSubstrings(string) {
  return string.split('').map((char, index) => string.slice(0, index + 1));
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]