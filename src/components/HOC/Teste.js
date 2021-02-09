import React, { Component } from 'react';

export function testeHOC(WrappedComponent, contacts) {
    return class extends Component {
        state = {
            pName: "",
            pPhone: "",
            editing: false,
        }

        setEdit(){
            try{
                const eConatact = contacts.filter((contact) => contact.editing === true)[0];
                this.setState({editing: true});

            }catch{
                this.setState({editing: false});
            }
        }

        render() {
            return <WrappedComponent />
        }
    }
}
