const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructiveRemoveLastCat() {
    cats.pop()
}

function destructiveRemoveFirstCat() {
    cats.shift()
}

destructivelyPrependCat ("Bob");

cats.length = 0;

    cats.push("Milo", "Otis", "Garfield")

    function destructivelyRemoveLastCat () {
        cats.pop();
    }

cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat () {
    cats.shift();
}

cats.length = 0;

    cats.push("Milo", "Otis", "Garfield"); 

function appendCat(name) {
let copyCats = [...cats];
    return copyCats, name;
}
appendCat ("Broom")

cats.length = 0;

    cats.push("Milo", "Otis", "Garfield")

function prependCat (name) {
    let copyCats = [name, ...cats];
    return copyCats;
}

prependCat ("Arnold")

cats.length = 0;

    cats.push("Milo", "Otis", "Garfield")

function removeLastCat() {
    let copyCats = [...cats];
    let copyCats2 = [copyCats.pop()];
    return copyCats2;
}