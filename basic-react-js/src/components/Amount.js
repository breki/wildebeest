import React, { useState, useEffect } from 'react';

function Amount() {
    const [amount, setAmount] = useState(0); 

    const handleFocus = (e) => e.target.select();

    const handleKeyDown = (e) => {
        const key = e.keyCode || e.which;
        if(key==8 || key==46 || key == 9 || key==17 || key==91 || key==18 || 
            key==116 || key==89 || key==67 || key==88 || key==35 || key==36) //back, delete tab, ctrl, win, alt, f5, paste, copy, cut, home, end
            return true;
        if (key >= '0' && key <= '9')
            return true;
        e.returnValue = false;
        return false;
    }

    const handleKeyPress = (e) => {
        const key = e.key;
        const allowed = key >= '0' && key <= '9' || key == '.' || key == ',';

        if (!allowed)
            e.preventDefault();
    }

    const handleInputChange = (e) => {
        const newAmount = e.target.value.replace(/./, "");
        setAmount(newAmount);
    }

    return (
        <div className="amount">
            <label htmlFor="amount">Amount:</label>
            <input type="text" name="amount" defaultValue={amount}
                onFocus={handleFocus}
                onKeyPress={handleKeyPress}
                // onKeyDown={handleKeyDown}
                onChange={handleInputChange} />
        </div>
    );
}

export default Amount;