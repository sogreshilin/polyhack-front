import React from 'react';

import Form from '../Form/Form';

const Heading = (props) => {
    return (
        <div>
            <Form 
                title='Find videos related to typed phrase'
                placeholder='Enter phrase'
                onChange={props.onChange}
                onSubmit={props.onSubmitHandler}
                btnText='Find'
            />
            {/* <form onSubmit={props.onSubmitHandler}>
                <input 
                    placeholder='Type desired phrase'
                    onChange={props.onChange}/>
                <button>Find videos</button>
            </form> */}
        </div>
    )
}

export default Heading;

