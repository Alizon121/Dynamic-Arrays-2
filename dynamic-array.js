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

// Returns 0 at line 57
// this.data[this.data.length] = val
// return this.data.length



for (let i = 0; i < this.data.length; i++) {
  this.data[i] = this.data[i+1]
  // console.log(this.data[i])
}
// this.length++
// this.data[this.data.length -1] = val




// Returns 2 at line 62
// if (this.data.length === 1) {
// this.length++
// this.data[0] = val
// } 
// else {
//   this.data[this.data.length - 1] = val
//   this.length++
// }
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
