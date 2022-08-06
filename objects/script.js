/**
 * Creating objects- Practice
 * Written by Ziad Attiya on Aug 5, 2022
 */

const phone = {
  name: "new phone",
  price: 600,
  color: "white",
  serialNumber: 15,
  dimensions: {
    width: 16,
    length: 26,
  },
  locked: false,
  toggleLock: function (lockStatus) {
    this.locked = lockStatus;
  },
  newDimension: function (girth, height) {
    this.dimensions.width = girth;
    this.dimensions.length = height;
  },
  case: { //nested object
  name: "new phone case",
  price: 15,
  color:  "black",
  dimensions:{
    length :20,
    width : 9,
  },
  newDimens :function (length, width){
    this.dimensions.length = length;
    this.dimension.width = width;
  }
}
};

console.log(phone.case["name"]); //bracket notation 






