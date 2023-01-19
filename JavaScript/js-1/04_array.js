// Array + const
 
//  Using const on simple strings or variable means we cant change the 
//  value of it.

//  But in Array, We can add or remove some values using push, pop, manually, etc.
//  as long as the reference of that Array won't change
//  Also we can't change the whole array within 

const gullyBoys = ['Sahil', 'Om', 'Bhavesh', 'Labhesh', 'Ujwal', 'Naresh'];

gullyBoys.push('Pratik');
['Sahil', 'Om', 'Bhavesh', 'Labhesh', 'Ujwal', 'Naresh', 'Pratik']

// Note : Arrays can store anything including other arrays

// -->  Multi Dimensional Array ..

const gameBoard = [['X', 'O', 'X'], ['X', null, 'X'], ['O', 'O', 'X']];

gameBoard
(3) [Array(3), Array(3), Array(3)]

(3) ['X', 'O', 'X']
(3) ['X', null, 'X']
(3) ['O', 'O', 'X']
