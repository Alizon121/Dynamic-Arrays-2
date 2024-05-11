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

    this.data[this.length] = val;
    this.length++;
    return this.length
  }


  pop() {




    
  }

  shift() {

    // Your code here 
  }

  unshift(val) {

    // Your code here 
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;
