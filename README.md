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

## Average-Case Time Complexity and Reasoning

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

So we have a best case, a worst case, a secret third case: average. What you're  
likely to see when you're not dealing with perfectly sorted/reverse sorted arrays.
This looks something like [4, 1, 3, 5, 2].


