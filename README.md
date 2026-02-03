# 🔗 JavaScript LinkedList Implementation

A custom implementation of a Linear Linked List data structure, designed for efficiency and educational purposes.

## 🚀 Overview
This project replaces the standard JavaScript Array with a manually linked chain of **Nodes**. Each node contains data and a reference to the next node in the sequence.

## 🛠️ Methods Included
| Method | Description |
| :--- | :--- |
| `append(value)` | Adds a new node to the **end** of the list. |
| `prepend(value)` | Adds a new node to the **start** (head) of the list. |
| `size()` | Returns the total number of nodes in the list. |
| `at(index)` | Returns the node at a specific numerical position. |
| `pop()` | Removes the final node from the list. |
| `find(value)` | Returns the index of a node containing a specific value. |
| `toString()` | Represents the entire list as a string for easy debugging. |

## 💻 Usage
```javascript
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();
list.append("dog");
list.prepend("cat");

console.log(list.toString()); 
// Output: ( cat ) -> ( dog ) -> null

🧪 Robustness Check
The implementation uses Optional Chaining and Null Checks to ensure that seeking an index that doesn't exist returns null rather than crashing the program.