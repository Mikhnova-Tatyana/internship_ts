function checkIsPolindrom(string: string): boolean {
    let semiLength = Math.floor(string.length / 2);
    let index: number = 0;

    while (index < semiLength) {
        if (string[index] !== string[string.length - 1 - index]) {
            return false;
        }
        index++;
    }
    return true;
}