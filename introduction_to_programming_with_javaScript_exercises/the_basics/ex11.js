parseInt('3.1415')

// The above expression evaluates to 3 as parseInt method stops coercing when it encounters a non numeric character which in this example is a period.

// LS explanation:
// It evaluates to 3. parseInt converts strings that begin with a digit to their numeric equivalent. 
// If it encounters a non-digit such as ., it stops converting. Thus, this example converts the 3 at the beginning of the string but ignores everything else.
