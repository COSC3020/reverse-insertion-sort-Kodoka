function insertionSortReverse(array)
{
    for(var i = array.length - 1; i > 1; i--) // Start at end of array.
    {
        var val = array[i]; // Assign last element of unsorted to val
        var j;
        for(var j = array.length - 1; j > 0 && array[j-1] > val; j--)
        {
            array[j] = array[j-1];
        }
        array[j] = val;
    }
    return array;
}
