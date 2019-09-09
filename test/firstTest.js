const chai = require('chai');
const {assert} = chai;
const myfunction = require('../mytest');

describe('myfunction', ()=>{
    it('factorial of 0 should be 1', ()=>{
        assert.equal(myfunction.factorial(0), 1)

        
    });
    

});

describe('myfunction', ()=>{
    it('addNumber should add numbers', ()=>{
        assert.equal(myfunction.addNumber(1,2),3)

        
    });

    it('addNumber should add numbers', ()=>{
        assert.notEqual(myfunction.addNumber(1,2),7);
    
});
});