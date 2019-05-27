import React, { Component } from 'react';
import Plyr from 'react-plyr';


export default class CustomPlyr extends Component {      

    render() {
        return (
            <video ref={this.props.reference} id="video1" width="320" height="240" playsinline controls src="https://storage.yandexcloud.net/polyhack/polytech-philosophy.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7e1ddb4a0d04ef744eae3886b2affd811de5e60e41f992a91880a71bcd8897ae&X-Amz-Date=20190526T083957Z&X-Amz-Credential=I89EjR7hpjWoYGE7xm7A%2F20190526%2Fus-east-1%2Fs3%2Faws4_request">
            </video>
        )
    }
}
