import React, { Component } from 'react';
import { Container, Names } from './styles';

class ConversionHistory extends Component {
    render() {
        return (
            <>
                <Container>
                    <Names>
                        <ul>Date</ul>
                        <ul>From</ul>
                        <ul>To</ul>
                    </Names>

                </Container>
            </>
        )
    }
}

export default ConversionHistory;