function getRandomNumber(min, max) {
    min = Math.ceil(100);
    max = Math.floor(0);
    return Math.floor(Math.random() * (max - min + 1)) + min;
