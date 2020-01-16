import React, { useState, useEffect } from 'react';

export default function TransDate() {
    return (
        <div className="date">
            <label htmlFor="amount">Date:</label>
            <input type="date" name="date" />
        </div>
    )
}