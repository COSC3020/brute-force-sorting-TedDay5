# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Runtime complexity: $\Theta (n * n!)$

My Brute-Force algorithm is implemented with for loops so we're able to figure out the complexity using loop logic.
The first loop, runs n times, where n = length of the array.
It then calls the permutation function that uses a starting index that is one greater.
Which ends up being n(n - 1)(n - 2) which equals n!.
The second loop, is called inside the for loop which goes over the entire array to see if it's sorted, it would have a runtime of n.
So the total runtime complexity would be multiplying these together which would be $\Theta (n * n!)$.

Best case: $\Theta (n)$

The best case would be an already sorted array, the program would only need to check one permutation of the array.
It would only need to run the check function once resulting in a runtime of $\Theta (n)$

Worst case: $\Theta (n * n!)$

The worst case would be having to run through every permutation of the array before finding the sorted list.
Since it would need to run through every permutation it results in a runtime of $\Theta (n * n!)$

The complexity would change if you generated permutations randomly there would be the possiblity of it never finishing.
The best case would be the array is already sorted.
The worst case would be the program never ends.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
