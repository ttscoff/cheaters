### JavaScript Strings

| Method | Summary |
|:--------|:---------|
|**charAt**(x)						| Returns the character at the "x" position within the string.|
|**charCodeAt**(x)					| Returns the Unicode value of the character at position "x" within the string. |
|**concat**(v1, v2,...)				| Combines one or more strings (arguments v1, v2 etc) into the existing one and returns the combined string. Original string is not modified. |
|**fromCharCode**(c1, c2,...)		| Returns a string created by using the specified sequence of Unicode values (arguments c1, c2 etc). Method of String object, not String instance. For example: String.fromCharCode(). |
|**indexOf**(substr, [start]) 		| Searches and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned. "Start" is an optional argument specifying the position within string to begin the search. Default is 0.|
|**lastIndexOf**(substr, [start])	| Searches and (if found) returns the index number of the searched character or substring within the string. Searches the string from end to beginning. If not found, -1 is returned. "Start" is an optional argument specifying the position within string to begin the search. Default is string.length-1. |
|**match**(regexp)					| Executes a search for a match within a string based on a regular expression. It returns an array of information or null if no match is found. |
|**replace**( regexp, replacetext)	| Searches and replaces the regular expression portion (match) with the replaced text instead. |
|**search**(regexp)					| Tests for a match in a string. It returns the index of the match, or -1 if not found. |
|**slice**(start, [end])				| Returns a substring of the string based on the "start" and "end" index arguments, NOT including the "end" index itself. "End" is optional, and if none is specified, the slice includes all characters from "start" to end of string. |
|**split**(delimiter, [limit])		| Splits a string into many according to the specified delimiter, and returns an array containing each element. The optional "limit" is an integer that lets you specify the maximum number of elements to return. |
|**substr**(start, [length])			| Returns the characters in a string beginning at "start" and through the specified number of characters, "length". "Length" is optional, and if omitted, up to the end of the string is assumed.|
|**substring**(from, [to])			| Returns the characters in a string between "from" and "to" indexes, NOT including "to" inself. "To" is optional, and if omitted, up to the end of the string is assumed.|
|**toLowerCase**()					| Returns the string with all of its characters converted to lowercase. |
|**toUpperCase**()					| Returns the string with all of its characters converted to uppercase.|

