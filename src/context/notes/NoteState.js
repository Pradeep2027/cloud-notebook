import { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props)    {
    const [notes, setNotes] = useState([
      {
        "_id": "69ea05e53bb636e0cb012f88",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Wake Up Early",
        "description": "Wake up early in the morning by 7 AM everyday.",
        "tag": "personal",
        "date": "2026-04-23T11:43:33.160Z",
        "__v": 0
      },
      {
        "_id": "69ea06053bb636e0cb012f89",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Sleep Early",
        "description": "Sleep early in the night by 11 AM everyday.",
        "tag": "personal",
        "date": "2026-04-23T11:44:05.784Z",
        "__v": 0
      },
      {
        "_id": "69ea06533bb636e0cb012f8a",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Keep hydrated",
        "description": "Drink atleast 3 liters water everyday to stay hydrated.",
        "tag": "personal",
        "date": "2026-04-23T11:45:23.772Z",
        "__v": 0
      },
      {
        "_id": "69ea06533bb636e0cb012f8b",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Do Meditation",
        "description": "Perform meditation for about 30 mins daily to stay positive.",
        "tag": "personal",
        "date": "2026-04-23T11:45:23.772Z",
        "__v": 0
      },
      {
        "_id": "69ea05e53bb636e0cb012f88",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Wake Up Early",
        "description": "Wake up early in the morning by 7 AM everyday.",
        "tag": "personal",
        "date": "2026-04-23T11:43:33.160Z",
        "__v": 0
      },
      {
        "_id": "69ea06053bb636e0cb012f89",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Sleep Early",
        "description": "Sleep early in the night by 11 AM everyday.",
        "tag": "personal",
        "date": "2026-04-23T11:44:05.784Z",
        "__v": 0
      },
      {
        "_id": "69ea06533bb636e0cb012f8a",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Keep hydrated",
        "description": "Drink atleast 3 liters water everyday to stay hydrated.",
        "tag": "personal",
        "date": "2026-04-23T11:45:23.772Z",
        "__v": 0
      },
      {
        "_id": "69ea06533bb636e0cb012f8b",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Do Meditation",
        "description": "Perform meditation for about 30 mins daily to stay positive.",
        "tag": "personal",
        "date": "2026-04-23T11:45:23.772Z",
        "__v": 0
      },
      {
        "_id": "69ea05e53bb636e0cb012f88",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Wake Up Early",
        "description": "Wake up early in the morning by 7 AM everyday.",
        "tag": "personal",
        "date": "2026-04-23T11:43:33.160Z",
        "__v": 0
      },
      {
        "_id": "69ea06053bb636e0cb012f89",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Sleep Early",
        "description": "Sleep early in the night by 11 AM everyday.",
        "tag": "personal",
        "date": "2026-04-23T11:44:05.784Z",
        "__v": 0
      },
      {
        "_id": "69ea06533bb636e0cb012f8a",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Keep hydrated",
        "description": "Drink atleast 3 liters water everyday to stay hydrated.",
        "tag": "personal",
        "date": "2026-04-23T11:45:23.772Z",
        "__v": 0
      },
      {
        "_id": "69ea06533bb636e0cb012f8b",
        "user": "69e861e7190ac47dd0d31d62",
        "title": "Do Meditation",
        "description": "Perform meditation for about 30 mins daily to stay positive.",
        "tag": "personal",
        "date": "2026-04-23T11:45:23.772Z",
        "__v": 0
      }
    ]);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
};