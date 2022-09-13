/*

#forEach
abstraction: iteration
purpose: perform an operation on each element in an array
returns : undefined

#filter
abstraction: filtering/ selection
purpose: select a subset of elements
returns: new array

#map
abstraction: transformation
purpose: compute a new value from each element
returns: new array

#sort
abstraction: ordering
purpose: rearrange elements by sorting the array in place
returns: sorted array (mutates caller)

#reduce || #reduceRight
abstraction: Reducing/ folding
purpose: iteratively computes a result based on all element values
returns a single value(could be an object)

#every || #some
abstraction: interrogation
purpose: determine whether an array's elemtns meet a condition
returns: boolean value

These all take a function as an argument. The function implements an abstraction
of some sort and the method invokes this function for each element in the Array
THe developer defines how to implement the chosen abstraction

Because the methods 'call back' the function, this function is often
referred to as a callback.


*/