import { useState } from 'react';

export default function Form2(){
    const [person, setPerson] = useState({
        name: "Test",
        artwork: {
            title: 'Blue nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    });

    function handleNameChange(e){
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (<section>
        <label>
            Name:
            <input value={person.name} onChange={handleNameChange}/>
        </label>
        <label>
            Title:
            <input value={person.artwork.title} onChange={handleTitleChange}/>
        </label>
        <label>
            City:
            <input value={person.artwork.city} onChange={handleCityChange}/>
        </label>
        <label>
            Image:
            <input value={person.artwork.image} onChange={handleImageChange}/>
        </label>
        <p>
            {person.name + " "} 
            {person.artwork.title + " "} 
            {person.artwork.city + " "}
            <img src={person.artwork.image}/> 
        </p>
    </section>);
}