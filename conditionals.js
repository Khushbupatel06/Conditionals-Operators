let random = Math.random();
if (random < 0.6) {
    console.log("Your number is less than 0.6!")
} else {
    console.log("Your number is greater than 0.6!")
}
console.log(random);


const dayOfWeek = prompt('Enter a Day').toLocaleLowerCase();
if (dayOfWeek === 'monday') {
    console.log("I love it. it's school day!")
} else if (dayOfWeek === 'saturday') {
    console.log("It's movie day.")
} else if (dayOfWeek === 'thursday') {
    console.log("It's Swimming Day")
} else if (dayOfWeek === 'sunday') {
    console.log("It's last day of weekend")
} else if (dayOfWeek === 'friday') {
    console.log("Yay almost Weekend")
} else {
    console.log("Normal day")
}


// 0 - 5 FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 9;

if (age < 5) {
    console.log("Your are a baby. You get free entary!")
} else if (age < 11) {
    console.log("You are a child. You pay $10.")
} else if (age < 64) {
    console.log("You are a adult. You pay $20")
} else {
    console.log("You are senior. You pay $10")
}

const password = prompt("Please enter a new password");

//password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("password is too short! Must be 6+ characters")
}

const num = 102;

if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}