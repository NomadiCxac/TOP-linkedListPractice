class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingelyLinkedList  {
    constructor() {
        this.head = null;
    }

    getHead() {
        return this.head;
    }

    setHead(node) {
        node.next = this.head;
        this.head = node;
    }

    
    getTail() {
        if (!this.head) {
            return null;
        } else {
            let currentPointer = this.head;
            while (currentPointer.next) {
                currentPointer = currentPointer.next;
            }
            return currentPointer;
        }
    }

    appendToEnd(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let currentPointer = this.head;
            while (currentPointer.next) {
                currentPointer = currentPointer.next;
            }
            // if currentPointer.next = null ... append the new node to the end of the list.
            currentPointer.next = node;
        }
    }

    sizeOfList() {
        let count = 0;

        if (!this.head) {
            return 0;
        } else {
            // There is a node at the head of the list, therefore increment size count by 1;
            count += 1;
            let currentPointer = this.head;
            while (currentPointer.next != null) {
                count += 1;
                currentPointer = currentPointer.next;
            }
            return count;
        }
    }


    nodeAtIndex(index) {
        if (index >= this.sizeOfList()) {
            console.log("Invalid Index")
            return false;
        } else {
            let currentPointer = this.head;
            for (let i = 0; i < index; i++ ) {
                currentPointer = currentPointer.next;
            }
            return currentPointer;
        }
    }

    pop() {
        let currentPointer = this.head;
        let checkIfLastElement = currentPointer.next;

        // If the list only has a single element
        if (currentPointer && checkIfLastElement == null) {
            this.head = null;
            return;
        }

        // Continue to traverse the list with two pointers, one that points to the nth element and one that checks the nth + 1 element. If the next value of the nth + 1 element is null...
        while (checkIfLastElement.next != null) {
            currentPointer = currentPointer.next;
            checkIfLastElement = currentPointer.next;
        }

        // Remove the last element by setting the nth element.next to null;
        currentPointer.next = null;

    }

    contains(value) {

        if (!this.head) {
            return false;
        } else {

            let currentPointer = this.head;

            // Check for all elements of list length - 1;
            while (currentPointer.next) {

                if (currentPointer.value == value) {
                    return true;
                }

                currentPointer = currentPointer.next;
            }

            // Checks for the final value in the list
            if (this.getTail().value == value) {
                return true;
            } else {
                return false;
            }

        }
    }

    find(value) {

        if (!this.head) {
            return null;
        } else {
            let counter = 0;
            let currentPointer = this.head;

            while (currentPointer.next) {

                if (currentPointer.value != value) {
                    counter += 1;
                }

                if (currentPointer.value == value) {
                    return counter;
                }

                currentPointer = currentPointer.next
            }

            if (currentPointer.next == null) {

                if (currentPointer.value == value) {
                    return counter;
                } else {
                    return null;
                }

            }
        }
    }

    toString() {

        if (!this.head) {
            return false;
        }

        let loopValue = this.sizeOfList();
        let listText = "";
        let currentPointer = this.head;

        for (let i = 0; i < loopValue; i++) {
            listText += `(${currentPointer.value}) --> `
            currentPointer = currentPointer.next;
            if (currentPointer == null) {
                listText += "null";
            }
        }

        return listText;
    }

    insertAt(value, index) {
        let insertionNode = new Node(value);

        if (index >= this.sizeOfList()) {
            return false;
        }

        if (index == 0) {
            setHead(insertionNode);
            return;
        }

        let targetNode = this.nodeAtIndex(index);
        let priorToTargetNode = this.nodeAtIndex(index - 1);

        insertionNode.next = targetNode;
        priorToTargetNode.next = insertionNode;

        return;

        // Optimal Solution without calling nodeAtIndex.
        // if (index < 0) {
        //     return false; // Can't insert at a negative index
        // }
    
        // if (index == 0) {
        //     insertionNode.next = this.head;
        //     this.head = insertionNode;
        //     return;
        // }
    
        // let currentNode = this.head;
        // let currentIndex = 0;
    
        // while (currentNode !== null && currentIndex < index - 1) {
        //     currentNode = currentNode.next;
        //     currentIndex++;
        // }
    
        // // At this point, currentNode points to the (index - 1)th node, or it's null
        // if (currentNode === null) {
        //     return false; // Index out of bounds
        // }
    
        // insertionNode.next = currentNode.next;
        // currentNode.next = insertionNode;

    }

    removeAt(index) {

        // let currentPointer = this.head;

        if (!this.head) {
            return false;
        }

        if (index == 0 && this.head.next != null) {
            this.head = (this.head.next);
            return;
        } 

        // If index given is the last element of the list OR if the index is the first element, where the list is of size 1
        else if (index == (this.sizeOfList() - 1) || (index == 0 && this.head.next == null)) {
            this.pop();
            return;
        }

        else {
            let removalNode = this.nodeAtIndex(index);
            let previousNode = this.nodeAtIndex(index - 1);
            let nextNode = this.nodeAtIndex(index + 1);
    
            previousNode.next = nextNode;
            removalNode.next = null;
        }

        return;

        // Below is an optimization that doesnt require calling the nodeAtIndex function.
        // let prevNode = null;
        // let currentNode = this.head;
        // let currentIndex = 0;
    
        // while (currentNode !== null && currentIndex !== index) {
        //     prevNode = currentNode;
        //     currentNode = currentNode.next;
        //     currentIndex++;
        // }
    
        // // If we found a node to remove
        // if (currentNode !== null) {
        //     prevNode.next = currentNode.next;
        // }

    }

}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node27 = new Node(27);

let newList = new SingelyLinkedList();

newList.setHead(node2);
newList.appendToEnd(node1);
newList.appendToEnd(node27);
newList.setHead(node3);

// console.log(newList.getHead())
// console.log(newList);
// console.log(newList.getTail());
// console.log(newList.nodeAtIndex(4));
// console.log(newList.pop());
// console.log(newList.contains(27));
// console.log(newList.find(27));
// console.log(newList.insertAt(5, 3));
console.log(newList.removeAt(0));
console.log(newList.toString());
// console.log(newList.sizeOfList());
