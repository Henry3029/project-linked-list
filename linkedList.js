// 1. The Node: this is the individual box
class Node {
    constructor(value = null) {
        this.value = value; // stores the Data eg "dog"
        this.next = null; // point to the next box in line
    }
}

// 2. The linkedList: this is the manager
// FIXED: Removed the () after LinkedList
export class LinkedList { 
    constructor() {
        this.head = null; // The list starts empty 
        this.length = 0; //A stat to keep track of the size
    }
    
    // Prepend: Add to the very front
    prepend(value) {
    	const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode; 
    this.length++
    	}
    //size: return total number of node
    size() {
    	return this.length;
    	}
    // At(index) return the node in the specific position 
    at(index) {
    	let tmp = this.head;
    for(let i = 0; i < index; i++) {
    	if(tmp === null) return null //index out of bound
    tmp = tmp.next;
    	}
    return tmp;
    	}
    // pop remove the last element from the list
    pop() {
    	if(!this.head) return null; 
    if(this.head.next === null) {
    	this.head = null; 
    	} else {
    	let tmp = this.head;
    while (tmp.next.next !== null) {
    	tmp = tmp.next;
    	}
    tmp.next = null; 
    	}
    this.length--; 
    	}

    // This method adds a new node to the very end of the chain
    append(value) {
        const newNode = new Node(value);
        
        // if the list is empty make this the head
        if (this.head === null) {
            this.head = newNode; 
            return; 
        }

        // otherwise start at the head and crawl to the end
        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        
        // Link the last node to our newNode
        tmp.next = newNode;
        this.length++;
    }

    // a helper method to print the list
    toString() {
        let tmp = this.head;
        let result = "";
        while (tmp !== null) {
            // Added a space after -> for better readability
            result += `( ${tmp.value} ) -> `;
            tmp = tmp.next;
        }
        return result + "null"; 
    }
}