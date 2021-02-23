// HW 1

var name = prompt('Your name?');
console.log('Your name is ' + name + '!');

var age = +prompt('Your age?');
console.log('Your age is ' + age + '!');

var first1 = +prompt('10+10=?');
console.log('10 + 10 = ' + (10 + 10) + ' Your answer: ' + first1);

var second2 = +prompt('10-10=?');
console.log('10 - 10 = ' + (10 - 10) + ' Your answer: ' + second2);

var third3 = +prompt('10*10=?');
console.log('10 * 10 = ' + (10 * 10) + ' Your answer: ' + third3);

var fourth4 = +prompt('10/10=?');
console.log('10 / 10 = ' + (10 / 10) + ' Your answer: ' + fourth4);


// HW 2

var days = +prompt('Type hours');
switch (days) {
    case 00:
        alert('midnight')
        break;
    case 1:
        alert('1 AM')
        break;
    case 2:
        alert('2 AM')
        break;
    case 3:
        alert('3 AM')
        break;
    case 4:
        alert('4 AM')
        break;
    case 5:
        alert('5 AM')
        break;
    case 6:
        alert('6 AM')
        break;
    case 7:
        alert('7 AM')
        break;
    case 8:
        alert('8 AM')
        break;
    case 9:
        alert('9 AM')
        break;
    case 10:
        alert('10 AM')
        break;
    case 11:
        alert('11 AM')
        break;
    case 12:
        alert('midday')
        break;
    case 13:
        alert('1 PM')
        break;
    case 14:
        alert('2 PM')
        break;
    case 15:
        alert('3 PM')
        break;
    case 16:
        alert('4 PM')
        break;
    case 17:
        alert('5 PM')
        break;
    case 18:
        alert('6 PM')
        break;
    case 19:
        alert('7 PM')
        break;
    case 20:
        alert('8 PM')
        break;
    case 21:
        alert('9 PM')
        break;
    case 22:
        alert('10 PM')
        break;
    case 23:
        alert('11 PM')
        break;
    default:
        alert('Noooooooooo');
        break;
}


// HW 3

var first = +prompt('First num');
var second = +prompt('Second num');
var third = +prompt('Third num');
if (first < second && second > third && !isNaN(first) && !isNaN(second) && !isNaN(third)) {
    alert('second');
} else if (second < first > third && !isNaN(first) && !isNaN(second) && !isNaN(third)) {
    alert('first');
} else if (second < third > first && !isNaN(first) && !isNaN(second) && !isNaN(third)) {
    alert('third');
} else {
    (isNaN(first) && isNaN(second) && isNaN(third))
        alert('All is wrong');
}


// HW 4

var old = +prompt('How old are you?');
if (0 < old && 18 > old) {
    alert('You are too young. You have to learn.');
} else if (18 < old && 50 > old) {
    alert('You must work.');
} else if (50 < old && 59 > old) {
    alert('You will retire soon.');
} else if (59 < old && 150 > old) {
    alert('You are a pensioner.');
} else {
    (151 < old)
    alert('Smth gone wrong.');
}
