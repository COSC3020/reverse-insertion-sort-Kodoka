function insertionSortReverse(array)
{
    // Start at second to last elemtnt of array, move towards front. Last element should be trivially sorted.
    for(var i = array.length - 2; i >= 0; i--) {
        // Assign last element of unsorted portion of array to val.
        var val = array[i];
        // Compare the element, val, to the next element. If the element to the right is lesser, shift it left. Also
        // checks we aren't at end of array.
        for (var j = i; j < array.length - 1 && array[j + 1] < val; j++)
        {
            // Shift element from right to left.
            array[j] = array[j + 1];
        }
        // Shift val left.
        array[j] = val;
    }
    return array;
}
