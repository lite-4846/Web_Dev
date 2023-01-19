 // Slice and Splice

// Slice --> 

alliance.reverse();
['Killer', 'Law', 'zoro', 'luffy']

let newOne = alliance.slice(3);     // --> refer to 02 for history of alliance.

newOne
['luffy']

newOne = alliance.slice(1);

newOne
(3) ['Law', 'zoro', 'luffy']

newOne = alliance.slice(1, 3);

newOne
(2) ['Law', 'zoro']


// Splice --> 

alliance
(4) ['Killer', 'Law', 'zoro', 'luffy']

alliance.splice(2,0,'Kinemon');
[]

alliance
(5) ['Killer', 'Law', 'Kinemon', 'zoro', 'luffy']

alliance.splice(2, 1);
['Kinemon']

alliance
(4) ['Killer', 'Law', 'zoro', 'luffy']


// -->  Something New

[1, 2, 3] = [1, 2, 3]
false

// Javascript doesn't compare what's inside, it compares the reference of memory where it stores the array.

let nums = [1, 2, 3];

let numsCopy = nums;

nums.push(4);

nums
(4) [1, 2, 3, 4]

numsCopy
(4) [1, 2, 3, 4]

nums === numsCopy
true