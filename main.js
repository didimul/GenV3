class GenV3 {
    #letters = '0123456789abcdefghijklmnopqrstuvwxyz';
    #numbers = '0123456789';
    #onlyLetters = 'abcdefghijklmnopqrstuvwxyz';

    #generate(type, howManySymbols) {
        let result = '';

        for(let i = 0; i < howManySymbols; i++) {
            const randomNumber = Math.floor(Math.random() * type.length);
            result += type[randomNumber];
        }

        return result;
    }

    genAll(howMany) {
        return this.#generate(this.#letters, howMany);
    }

    genOnlyNumber(howMany) {
        return this.#generate(this.#numbers, howMany);
    }

    genOnlyLetters(howMany) {
        return this.#generate(this.#onlyLetters, howMany);
    }
}

module.exports = new GenV3;