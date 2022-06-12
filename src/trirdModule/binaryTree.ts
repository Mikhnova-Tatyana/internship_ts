interface IComparable {
  hashCode: () => number;
}

class strObject implements IComparable {
  constructor(private value: string) {
    this.value = value;
  }
  hashCode(): number {
    let hash: number = 0;
    let key: string = this.value.toString();
    if (key.length === 0) return hash;  
    for (let i: number = 0; i < key.length; i++) {
      const char: number = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
}

class numObject implements IComparable {
  constructor(private value: number) {
    this.value = value;
  }
  hashCode(): number {
    let hash: number = 0;
    let key: string = this.value.toString();
    if (key.length == 0) return hash;  
    for (let i = 0; i < key.length; i++) {
      const char: number = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
}

interface IBinaryTree<T extends IComparable> { 
  value: T | null;
  left: IBinaryTree<T> | null; 
  right: IBinaryTree<T> | null; 
}
 
class BinaryTree<T extends IComparable> implements IBinaryTree<T> {   
  value: T | null; 
  left: IBinaryTree<T> | null; 
  right: IBinaryTree<T> | null; 
 
  constructor() { 
    this.value = null; 
    this.right = null; 
    this.left = null; 
  }  
 
  insert(value: T, node: IBinaryTree<T>): IBinaryTree<T> | T {  
      node = node || this;  
      if (node.value === null) {  
        node.value = value;  
        return value;
      }  
      if (value.hashCode() < node.value.hashCode()) {  
        if (node.left === null) {  
          node.left = new BinaryTree();  
        }  
        return this.insert(value, node.left);  
      } else {  
        if (node.right === null) {  
          node.right = new BinaryTree();  
        }  
        return this.insert(value, node.right);  
      }  
  } 
   
  findMinElement(node: IBinaryTree<T>): IBinaryTree<T> { 
    node = node || this;  
    if (node.left === null) { 
      return node; 
    } 
    return this.findMinElement(node.left); 
  } 
 
  delete(value: T, node: IBinaryTree<T> | null): IBinaryTree<T> | null { 
    node = node || this;  
    if (node.value !== null && value.hashCode() < node.value.hashCode()) {  
      if (node.left === null) {  
        return null;  
      }  
      node.left = this.delete(value, node.left);  
      return node;  
    } else if (node.value !== null && value.hashCode() > node.value.hashCode()) {  
        if (node.right === null) {  
          return null;  
        }  
        node.right = this.delete(value, node.right);  
        return node;  
    } else { 
        node = node || this;  
        if (node.left === null && node.right === null) { 
        node = null; 
        return node;  
        } else if(node.left === null) { 
          node = node.right; 
          return node;  
        } else if(node.right === null) { 
          node = node.left; 
          return node;   
        } 
          let minElement: IBinaryTree<T> = this.findMinElement(node.right); 
          node.value = minElement.value;  
          node.right = this.delete(minElement.value!, node.right);  
          return node;  
    } 
  } 
 
  search(value: T, node: IBinaryTree<T>): boolean {  
    node = node || this;  
    if (node.value !== null && value.hashCode() < node.value.hashCode()) {  
      if (node.left === null) {  
        return false;  
      }  
      return this.search(value, node.left);  
    } else if (node.value !== null && value.hashCode() > node.value.hashCode()) {  
      if (node.right === null) {  
        return false;  
      }  
      return this.search(value, node.right);  
    } else {  
      return true; 
    }  
  }
}

const a = new strObject('ada');
const b = new numObject(12);
// console.log(strObject.hashCode());
// console.log(numObject.hashCode());