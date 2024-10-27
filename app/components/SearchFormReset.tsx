"use client"


import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if (form) form.reset();
    }


    return (
        <button type='reset' onClick={reset} className='search-btn'>
            <Link href="/" className='search-btn text-white'>X</Link>
        </button>
    )
}

export default SearchFormReset
