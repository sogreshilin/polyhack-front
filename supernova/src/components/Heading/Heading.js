import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <input 
                    placeholder='Type desired phrase'
                    onChange={props.onChange}/>
                <button>Find videos</button>
            </form>
        </div>
    )
}

export default Heading;

