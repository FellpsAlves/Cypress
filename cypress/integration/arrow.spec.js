it('nada agora', function(){})

// function soma(a, b){
//     return a + b;
// }

// const soma = function (a,b){
//     return a + b
// }

//arrow function mais basico
const soma = (a , b) => a + b;
console.log(soma(2,4))

it('a function test...', function(){
    console.log('function', this)
}) 

it('an arrow test...', () => {
    console.log('arrow', this)
}) 