interface IComparable { 
  hashCode: () => number; 
} 
 
interface IBinaryTree<IComparable> {  
  value: IComparable | null; 
  left: IBinaryTree<IComparable> | null;  
  right: IBinaryTree<IComparable> | null;  
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
 
  insert(value: T, node?: IBinaryTree<T>): IBinaryTree<T> | T {  
      node = node || this;  
      if (node.value === null) {  
        node.value = value;  
        return value;
      }  
      if (value.hashCode() < node.value.hashCode()) {  
        if (node.left === null) {  
          node.left = new BinaryTree<T>();  
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
 
  search(value: T, node?: IBinaryTree<T>): boolean {  
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
