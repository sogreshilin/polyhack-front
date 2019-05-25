import React, { Component } from 'react';
import { connect } from 'react-redux';

class Extractor extends Component {
    render() {
        return (
            <div>
                <h2>Extractor page {this.props.phrase}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    phrase: state.extractor.phrase,
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Extractor);