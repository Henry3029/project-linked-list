import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

// Test 1: Appending
list.append("dog");
list.append("cat");

// Test 2: Prepending (This should put "lion" at the START)
list.prepend("lion"); 
console.log("After Prepend:", list.toString()); 
// Expected: ( lion ) -> ( dog ) -> ( cat ) -> null

// Test 3: Checking Size
console.log("Size is:", list.size()); // Expected: 3

// Test 4: Accessing by Index
console.log("Item at index 1 is:", list.at(1).value); // Expected: "dog"

// Test 5: Popping (Remove the last item)
list.pop();
console.log("After Pop:", list.toString()); 
// Expected: ( lion ) -> ( dog ) -> null