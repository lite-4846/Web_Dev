let movieLine = ['luffy', 78, 'sanji'];

movieLine.push('nami');



// movieLine
// ['luffy', 'zoro', 'sanji', 'nami', 'ussop', 'chopper']

movieLine.push('carrot');       //   --> It will add nami to the end of movieLine.
// 7

movieLine.pop();                //  -->  It will remove last one.
// 'carrot'

// movieLine
// ['luffy', 'zoro', 'sanji', 'nami', 'ussop', 'chopper']

movieLine.unshift();            //  --> It will add to the front.
// 'jimbie'

// movieLine
// ['jimbie', 'luffy', 'zoro', 'sanji', 'nami', 'ussop', 'chopper']

// movieLine
// ['jimbie', 'luffy', 'zoro', 'sanji', 'nami', 'ussop', 'chopper']

movieLine.shift();              //  --> It will remove first one.
// 'jimbie'

//      <--  Concat  --> 

const strawHat = ['luffy', 'zoro'];

const Death = ['Law', 'Killer'];

const alliance = strawHat.concat(Death);

alliance
['luffy', 'zoro', 'Law', 'Killer']

alliance.includes('luffy')
true

alliance.includes('sanji')
false

alliance.indexOf('Law')
2

alliance.indexOf('law')     // --> L is Capital in alliance so....
-1

alliance.reverse();
['Killer', 'Law', 'zoro', 'luffy']  

alliance                    // It will directly change the original array 
['Killer', 'Law', 'zoro', 'luffy']  

const c = () => console.log(2 + 3); 

c();