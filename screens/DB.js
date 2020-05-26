var arrA = [{
    name: 'yann',
    id: '1543'
},{
    name: 'david',
    id: '9475'
},{
    name: 'amir',
    id: '1992'
},{
    name: 'robert',
    id: '9030'
}];

var arrB = [{
    name: 'yann',
    id: '1543'
},{
    name: 'robert',
    id: '9030'
},{
    name: 'daniel',
    id: '4030'
},{
    name: 'jer',
    id: '1277'
}];

let difference = arrA.filter(x => !arrB.includes(x.id));
console.log(difference);