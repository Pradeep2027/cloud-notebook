// import { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props)    {
    // const [state, setState] = useState({
    //     "name": "Pradeep",
    //     "email": "pradeep@gmail.com"
    // });

    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             "name": "Pradeep S",
    //             "email": "spradeep@gmail.com"
    //         })
    //     }, 5000);
    // }

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
};