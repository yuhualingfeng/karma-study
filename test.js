describe('A suite',function(){
	it("contains spec with expectation",function(){
		console.log("this is msg from log ...");
		expect(true).toBe(true);
	});
});

describe('A suite of basic functions',function(){
	it("reverse word",function(){
		expect('DCBA').toEqual('DCBA');
	});
})