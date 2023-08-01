import Status from "./Status.tsx";
import Person from "./Person.tsx";
import PersonList from "./PersonList.tsx";
import Heading from "./Heading.tsx";
import {Oscar} from "./Oscar.tsx";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import IsLoggedIn from "./IsLoggedIn.tsx";

interface BaseProps  {
    pronounce:string,
    message:string

}

export default function Base(props:BaseProps){
    const personName ={
        first : 'Agent',
        last: 'Wayne',
    }
    const personNamesList =
        [{
            first:'Person1',
            last:'lastPerson1',
        },
        {
            first: 'Person2',
            last: 'lastPerson2',
        },
        {
            first: 'Person3',
            last: 'lastPerson3',
        }

    ]


    return (
        <>
            BASE {props.pronounce} {props.message}
            <Person name={personName} />
            <PersonList names = {personNamesList} />
            <Status message={'404'}/>
            <Oscar>
                <Heading>Heading</Heading>
            </Oscar>
            <Button click={(event) => console.log('clickk',event)}/>
            <Input  handleChange={(event) => console.log(event)}/>
            <IsLoggedIn />
        </>
    )
}