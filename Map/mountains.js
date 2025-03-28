function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let mountains = []

let ranges = [
    [68, 190],
    [363, 498],
    [674, 868],
    [1300, 1500]

];

function isInRange(x, ranges) {
    for (let i = 0; i < ranges.length; i++) {
        if (x >= ranges[i][0] && x <= ranges[i][1]) {
            return true
        }
    }
    return false
}

function createMountains() {
    let lastX = 0;
    let lastX2 = 0;

    for (let i = 0; i < 10; i++) {
        let spacing, x
        spacing = getRandomInt(200, 300)
        x = spacing + lastX
        lastX = x
        mountains.push(x)

        let spacing2, x2
        spacing2 = getRandomInt(200, 300)
        x2 = spacing2 + lastX2
        lastX2 = x2
        mountains.push(x2)
    }
    return mountains
};

export const loadMountains = (scene) => {
    mountains = []
    createMountains()

    for (let i = 0; i < 14; i += 2) {

        if (!isInRange(mountains[i], ranges)) {
        scene.add.image(mountains[i], 192, 'mountain1')
            .setOrigin(0.5, 0)
            .setScale(.5)
            .setDepth(2);
        }

        if (!isInRange(mountains[i + 1], ranges)) {
        scene.add.image(mountains[i + 1], 175, 'mountain2')
            .setOrigin(0.5, 0)
            .setScale(.5)
            .setDepth(1);
        }
    }
}