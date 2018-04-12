function tokenOperations(token) {
    return `${token}-${getRandomInt(1000000)}`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = tokenOperations;