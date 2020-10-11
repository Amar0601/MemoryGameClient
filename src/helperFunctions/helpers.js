import {easy, medium, hard} from '../constants/levelConstants';

export const shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array.map(e => ({"data": e, "visibility": false}));
}

export const generateSuite = (level) => {    
    let length = 0;
    switch(level) {
        case "easy":
            length = easy;
            break;
        case "medium":
            length = medium;
            break;
        case "hard":
            length = hard;
            break;
        default:
            break;

    }
    const newArray = Array.from({length}, (_, index) =>  index + 1);
    
    return shuffleArray(newArray);
}