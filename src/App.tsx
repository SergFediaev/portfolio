import React from 'react';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {Contacts} from "./layout/sections/contacts/Contacts";

export function App() {
    return <>
        <Header/>
        <Main/>
        <Projects/>
        <Skills/>
        <Contacts/>
    </>
}

export default App;