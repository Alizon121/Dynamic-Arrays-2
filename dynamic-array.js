class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(defaultSize)

  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    // Add val to end of array (this.data)
    // increase the capacity! Increase by one from the defaultSize
    //      if length >= current capacity, then resize the capacity
    // Make the storage array with the specified cap
    // set our data = to the copy data
    if (this.length >= this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
    return this.length
  }


  pop() {
    //if array has elements remove last element and return it
    //if array is empty return undefined
    if (this.length > 0) {
      this.length --;
      return this.data[this.length];
    } else {
      return undefined;
    }
  }

  unshift(val) {
    if (this.length >= this.capacity) {
      this.resize();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.length++;
    this.data[0] = val;
  }


  shift() {
    if (this.length > 0) {
      let result = this.data[0];;
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1]
      }
      this.length--;
      return result;
    } else {
      return undefined;
    }
 }


  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }


  resize() {
    if (this.length >= this.capacity) {
      this.capacity *= 2;
      let result =  Array(this.capacity);
      for (let i = 0; i < this.length; i++) {
        result[i] = this.data[i]
      }
      this.data = result;
    }
  }

}


module.exports = DynamicArray;
