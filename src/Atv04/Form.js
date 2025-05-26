import { useState } from 'react';


export default function Form(){
    const [person, setPerson] = useState(
        {
            firstName: 'Gloudas',
            lastName: "Zorla",
            email: "bhepworth@gmail.com"
        }
    );

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return (<section>
        <label>
            First Name:
            <input value={person.firstName} onChange={handleFirstNameChange}/>
        </label>
        <label>
            Last Name:
            <input value={person.lastName} onChange={handleLastNameChange}/>
        </label>
        <label>
            Email:
            <input value={person.email} onChange={handleEmailChange}/>
        </label>
        <p>
            {person.firstName + " "} 
            {person.lastName + " "} 
            {person.email} 
        </p>
    </section>);
}