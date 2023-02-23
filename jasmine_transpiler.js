function transpile(code) {
    const describeName = "test my code"; // customize your describe block name here
    const expectationPrefix = "expect";
    const itBlockPrefix = "it";
    const beforeEachBlockPrefix = "beforeEach";
    const afterEachBlockPrefix = "afterEach";
    const beforeAllBlockPrefix = "beforeAll";
    const afterAllBlockPrefix = "afterAll";
  
    // Split the code into individual test functions
    const testFunctions = code.split(/function\s+\w+\s*\(\s*\)\s*\{/);
  
    // Initialize the transpiled code with the outer describe block
    let transpiledCode = `describe("${describeName}", function() {`;
  
    // Loop through each test function and add an it block to the transpiled code
    for (let i = 1; i < testFunctions.length; i++) {
      // Get the function name and code block
      const functionName = testFunctions[i].match(/^\s*(\w+)\s*/)[1];
      const codeBlock = testFunctions[i].substring(
        testFunctions[i].indexOf("{") + 1,
        testFunctions[i].lastIndexOf("}")
      );
  
      // Add an it block with the function name and the code block wrapped in an expectation
      transpiledCode += `${itBlockPrefix}("${functionName}", function() { ${expectationPrefix}(${codeBlock}); });`;
    }
  
    // Add any beforeEach blocks to the transpiled code
    const beforeEachMatches = code.match(/beforeEach\s*\(\s*function\s*\(\s*\)\s*\{/g) || [];
    for (let i = 0; i < beforeEachMatches.length; i++) {
      const codeBlock = code.substring(
        code.indexOf(beforeEachMatches[i]) + beforeEachMatches[i].length,
        code.indexOf("})", code.indexOf(beforeEachMatches[i])) + 1
      );
      transpiledCode += `${beforeEachBlockPrefix}(function() { ${codeBlock} });`;
    }
  
    // Add any afterEach blocks to the transpiled code
    const afterEachMatches = code.match(/afterEach\s*\(\s*function\s*\(\s*\)\s*\{/g) || [];
    for (let i = 0; i < afterEachMatches.length; i++) {
      const codeBlock = code.substring(
        code.indexOf(afterEachMatches[i]) + afterEachMatches[i].length,
        code.indexOf("})", code.indexOf(afterEachMatches[i])) + 1
      );
      transpiledCode += `${afterEachBlockPrefix}(function() { ${codeBlock} });`;
    }
  
    // Add any afterAll blocks to the transpiled code
    const afterAllMatches = code.match(/afterAll\s*\(\s*function\s*\(\s*\)\s*\{/g) || [];
    for (let i = 0; i < afterAllMatches.length; i++) {
      const codeBlock = code.substring(
        code.indexOf(afterAllMatches[i]) + afterAllMatches[i].length,
        code.indexOf("})", code.indexOf(afterAllMatches[i])) + 1
      );
      transpiledCode += `${afterAllBlockPrefix}(function() { ${codeBlock} });`;
    }
  
  // Add any beforeAll blocks to the transpiled code
    const beforeAllMatches = code.match(/beforeAll\s*\(\s*function\s*\(\s*\)\s*\{/g) || [];
    for (let i = 0; i < beforeAllMatches.length; i++) {
      const codeBlock = code.substring(
        code.indexOf(beforeAllMatches[i]) + beforeAllMatches[i].length,
        code.indexOf("})", code.indexOf(beforeAllMatches[i])) + 1
      );
      transpiledCode += `${beforeAllBlockPrefix}(function() { ${codeBlock} });`;
    }
  
    // Close the outer describe block
    transpiledCode += "});";
  
    return transpiledCode;
  }