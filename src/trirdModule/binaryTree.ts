interface IComparable<T> {
  hashCode: (value: T) => number;
}

interface IBinaryTree<T> { 
  value: T | null;
  left: IBinaryTree<T> | null; 
  right: IBinaryTree<T> | null; 
}
 
class BinaryTree<T> implements IBinaryTree<T>, IComparable<T> {   
  value: T | null; 
  left: IBinaryTree<T> | null; 
  right: IBinaryTree<T> | null; 
 
  constructor() { 
    this.value = null; 
    this.right = null; 
    this.left = null; 
  }  

  hashCode(value: T): number {
    let hash: number = 0;
    let key: string = String(value);
    if (key.length === 0) return hash;  
    for (let i: number = 0; i < key.length; i++) {
      const char: number = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  }
 
  insert(value: T, node?: IBinaryTree<T>): IBinaryTree<T> | T {  
      node = node || this;  
      if (node.value === null) {  
        node.value = value;  
        return value;
      }  
      if (this.hashCode(value) < this.hashCode(node.value)) {  
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
 
  delete(value: T, node?: IBinaryTree<T> | null): IBinaryTree<T> | null { 
    node = node || this;  
    if (node.value !== null && this.hashCode(value) < this.hashCode(node.value)) {  
      if (node.left === null) {  
        return null;  
      }  
      node.left = this.delete(value, node.left);  
      return node;  
    } else if (node.value !== null && this.hashCode(value) > this.hashCode(node.value)) {  
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
 
  search(value: T, node?: IBinaryTree<T>): boolean {  
    node = node || this;  
    if (node.value !== null && this.hashCode(value) < this.hashCode(node.value)) {  
      if (node.left === null) {  
        return false;  
      }  
      return this.search(value, node.left);  
    } else if (node.value !== null && this.hashCode(value) > this.hashCode(node.value)) {  
      if (node.right === null) {  
        return false;  
      }  
      return this.search(value, node.right);  
    } else {  
      return true; 
    }  
  }
}