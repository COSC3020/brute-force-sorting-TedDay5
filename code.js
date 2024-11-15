function permutationSort(array) {
    var iterations = 0;
    if (array.length == 0) {
        return iterations;
    }
    function permutation(array, firstE) {
        if (check(array) == true) {
            return iterations;
        }
        else {
            for (var secondE = firstE; secondE < array.length; secondE++) {
                iterations++;
                [array[firstE], array[secondE]] = [array[secondE], array[firstE]];
                permutation(array, firstE + 1);
                if (check(array) == true) {
                    return iterations;
                }
                [array[secondE], array[firstE]] = [array[firstE], array[secondE]];
            }
        }
    }
    permutation(array, 0);
    return iterations;
}

function check(array) {
    for (var n = 0; n < array.length; n++) {
        if (array[n] < array[n - 1]) {
            return false;
        }
    }
    return true;
}
