import React, { useState, useEffect } from 'react';

function Amount() {
    const [amount, setAmount] = useState(0); 

    const handleFocus = (e) => e.target.select();
    const handleInputChange = (e) => {
        const newAmount = e.target.value;
        setAmount(newAmount);
        console.log ("New amount: " + newAmount);
    }

    return (
        <div className="amount">
            <label htmlFor="amount">Amount:</label>
            <input type="text" name="amount" defaultValue={amount} 
                autoFocus 
                onFocus={handleFocus}
                onChange={handleInputChange} />
        </div>
    );
}

export default Amount;