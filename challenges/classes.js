// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CuboidMaker {
    constructor(length, width, height){
        this.length = length;
        this.height = height;
        this.width = width;
        };   
    
volume() {
    return this.length * this.height * this.width;
};

surfaceArea() {
    2 * (this.length * this.width + this.length * this.height + this.width * this.height)
}
}; 