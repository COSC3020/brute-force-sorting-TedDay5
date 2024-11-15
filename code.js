function permutationSort(a) {
    var iterations = 0;
    if (a.length == 0) {
        return iterations;
    }
    function permutation(a, firstE) {
        if (check(a) == true) {
            return iterations;
        }
        else {
            for (var secondE = firstE; secondE < a.length; secondE++) {
                iterations++;
                [a[firstE], a[secondE]] = [a[secondE], a[firstE]];
                permutation(a, firstE + 1);
                if (check(a) == true) {
                    return iterations;
                }
                [a[secondE], a[firstE]] = [a[firstE], a[secondE]];
            }
        }
    }
    permutation(a, 0);
    return iterations;
}

function check(a) {
    for (var n = 0; n < a.length; n++) {
        if (a[n] < a[n - 1]) {
            return false;
        }
    }
    return true;
}
