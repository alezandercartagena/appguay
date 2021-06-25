import React, { Component } from 'react'

export default class product extends Component {
    render() {

        let {name,price} =this.props.details

        return (
            <section>
                <h3> OFERTA</h3>
                <p>PRODUCTO {name}</p>
                <P>PRECIO: {price} </P>
                
                
            </section>
        )
    }
}
