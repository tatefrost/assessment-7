      Array       | Doubler append runtime | Doubler insert runtime

Extra large array |           4.74 ms      |           945.07 ms

    Large array   |           625.27 μs    |           6.72 ms

    Medium array  |           179.85 μs    |           185. 52 μs

    Small array   |           133.01 μs    |           51.55 μs

    Tiny array    |           104.63 μs    |           75.68 μs



What I observe in these runtimes is that the Doubler append function scales much  more efficiently than the Doubler insert function. Although the Insert function begins quicker on the tiny array, when the array size is scaled up it quickly falls behind in speed once you get to a large sized array and above. The medium arrays are only 6 μs apart, and the large array shows the insert function 10x slower! This is how quick the effects of scaling take place. This is because the Doubler append function has a runtime complexity of O(1) using .push() and the runtime complexity of the Doubler insert function is O(N) using .shift(). The reason for this is because in .push() the value is added to the end of the list as a new iterator, whereas with .shift all values have to be shifted down to a new iterator so that the new value can be placed at the front of the array. 