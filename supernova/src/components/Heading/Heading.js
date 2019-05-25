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
        </div>
    )
}

export default Heading;

