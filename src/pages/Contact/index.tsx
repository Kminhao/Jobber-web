import React, {Fragment} from 'react';
import Header from '../../components/Header';
import Textarea from '../../components/Textarea';
import Pageheader from '../../components/Pageheader'

function Contact() {
    return(      
        <Fragment>
            <Header></Header>
            <Pageheader title="Contato" description="Preencha as informações abaixo para entrarmos em contato!"></Pageheader>
            <Textarea label="Label" name="nome"/>
        </Fragment>
    )
}


export default Contact;