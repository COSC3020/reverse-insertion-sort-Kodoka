# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

## TL;DR

$\Theta(n^2)$

## Best, Worst, and Average Overview

As discussed, the best case time complexity of insertion sort will be $\Theta(n)$.  
This occurs when we're working with a fully sorted array like [1, 2, 3, 4, 5].  
Each successive element only requires on comparison to verify that it is in the  
proper location. 1 is less than 2, so it's good. 2 is less than 3, so it's good...  

The worse case time complexity will be $\Theta(n^2)$. This occurs when we're  
working with a an array full sorted in reverse order like [5, 4, 3, 2, 1].  
Each successive element must be compares to every other element in the already  
sorted portion, to get it to the correct position. 5 is greater than 4, so it  
must move right. 5 is greater than 3, so it must move right, then 4 is greater  
than 3, so it must move right as well...  

So we have a best case, a worst case, and a secret third case: average; what you're  
likely to see when you're not dealing with perfectly sorted/reverse sorted arrays.  
This looks something like [4, 1, 3, 5, 2]. During each successive addition of an  
element to the sorted portion of the array, each element will be compared to  
somewhere between one element, verifying that it is in the proper position, or  
every element in the currently sorted portion, indicating it needed to be moved  
from it's initial position, all the way to the start of the array.  

First 4 is trivially sorted. Our sorted portion of the array is [4].  

Then we compare 4 and 1. 1 is smaller, so it gets moved to the left. Our sorted  
portion of the array is [1, 4]. This took 1 comparison.  

Then we compare 3 and 4. 3 is smaller, so it get's moved to the left. Then we  
compare 3 and 1. 1 is smaller, sort 3 and 1 don't swap. Our sorted portion of the  
array is [1, 3, 4].  

This process will continue until the full array is sorted. When dealing with  
randomly ordered elements, every i-th element, those itterated over by the outer  
for loop, should, on average, be located halfway through the sorted portion of the  
array. Any individual element could be located at i-1, i-2, i-3, etc.  

## Average Case Scenario

First element - Trivially sorted, no comparisons necessary.  
Second element - There is 1 element in the sorted portion, at minimum and  
maximum, this requires 1 comparison.  
Third element - There is 2 elements in the sorted portion, at minimum this  
requires 1 comparison, and at maximum this requres 2 comparisons.  
Fourth element - There is 3 elements in the sorted portion, at minimum this  
takes 1 comparison, and at maximum this requires 3 comparisons.  

For the i-th element, the worse case requires i-1 comparisons. When dealing with  
randomly ordered elements, each location is equally likely as the i-th element's  
proper location, requiring as little as 1 comparison, to a maximum of i-1 comparisons  
with each number of comparisons being equally likely, leading the average number of  
comparison necessary to be the sum of possibilities divided by the number of  
possibilities, or: $\frac{(1+2+3+...+(i-1))}{(i-1)}$  
$\frac{(1+2+3+...+(i-1))}{(i-1)}=\frac{i(i-1)}{2(i-1)}=\frac{i}{2}$  
So the average comparisons for the i-th element is $\frac{i}{2}$.  
Next we need the sum of the average comparisons of the entire array. Starting with  
i=2, as the first element is trivally sorted, to n-1, where n-1 represents the length  
of the array. That is $\frac{1}{2}(2+3+4+...+(n-1)=\frac{n(n-1)}{4}=\frac{n^2-n}{4}$.  
For the purpose of asymptotic complexity constants aren't considered. Additionally,  
as $n^2$ is the dominant term in the numerator, we can dismiss $-n$. Giving us an  
average time complexity of $\Theta(n^2)$

## Sources

I used wolframalpha at https://www.wolframalpha.com/ for calculating the sum of the  
average comparisons from the i-th=2 through n-1 elements of an array.

I got the sum of the first (n-1) numbers from:
https://math.stackexchange.com/questions/185728/intuition-on-the-sum-of-first-n-1-numbers-is-equal-to-the-number-of-ways-of-pi

For general information about this problem I read from the following two pages:
https://www.geeksforgeeks.org/time-and-space-complexity-of-insertion-sort-algorithm/
https://www.geeksforgeeks.org/insertion-sort-algorithm/

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

