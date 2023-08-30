//اسامة محمد صالح الهرش

function fibonacci(n) {
    let sequence = [0, 1];  // Initialize the sequence with the first two numbers
    
    if (n <= 1) {
      return sequence.slice(0, n + 1);  // Return the sequence up to the nth number
    }
    
    while (sequence.length <= n) {
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];  // Calculate the next number
      sequence.push(nextNumber);  // Add the next number to the sequence
    }
    
    return sequence;
  }
  
  // Example usage
  let n = parseInt(prompt("Enter the number of Fibonacci numbers to generate: "));
  let fibSequence = fibonacci(n);
  console.log("Fibonacci sequence:", fibSequence);
