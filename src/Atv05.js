import {Link} from 'react-router-dom';

import FormQuiz from './Atv05/FormQuiz';
import Form from './Atv05/Form';
import Accordion from './Atv05/Acordion';
import Messenger from './Atv05/Messenger';

export default function Atv05(){
    return (<>
        <Link to="/">Voltar</Link>
        <FormQuiz/>
        <Form/>
        <Accordion/>
        <Messenger/>
    </>);
}