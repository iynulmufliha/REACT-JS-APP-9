import React from 'react';
function App() {
    const primes = [];
    for (let num = 2; num <= 100; num++) {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;}
        if (count === 2) primes.push(num); }
    return (
        <div>
            <h1>Prime Numbers Between 1 and 100</h1>
            <p>{primes.join(' ')}</p></div>);}
export default App;

