//Step 45: writing test case for the sum.js file component
import { sum } from "../sum"
//Format : ""-> takes a string which gives the description of the test case 
// and () -> takes a function
test("Sum function should calculate the sum of two numbers", ()=>{
    const result = sum(3,4);

    //Assertion 
    expect(result).toBe(7);
})