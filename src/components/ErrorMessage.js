import React from "react";

const ErrorMessage = ({countries}) => {

    if(countries.length === 0) {
        return (
            <>
                <p>No results</p>
            </>
        )
    }

    return (
        <>
            <p>Too many results</p>
        </>
    )
}

export default ErrorMessage