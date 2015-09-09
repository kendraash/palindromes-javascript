describe("palindrome", function() {
  it("returns true for racecar", function() {
    expect(palindrome("racecar")).to.equal(true);
  });

  it("returns true for a sentence that is a palindrome", function() {
    expect(palindrome("a santa at nasa")).to.equal(true);
  });

  it("returns true for a series of numbers", function() {
    expect(palindrome(120021)).to.equal(true);
  });

  it("returns true for more than one number", function() {
    expect(palindrome(120021, 123321)).to.equal(true);
  });

  it("returns false for a non palindrome word", function() {
    expect(palindrome("dog")).to.equal(false);
  });
});
