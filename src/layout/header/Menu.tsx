import React from 'react';
import {Link} from "../../components/Link";
import {S} from './Header_Styles';

const links = [
    {
        id: 1,
        title: "Resume ⤓",
        link: "https://hh.ru/resume/20f54a99ff0c4d7b5d0039ed1f435368756765",
    },
    {
        id: 2,
        title: "Projects",
        link: "#projects",
    },
    {
        id: 3,
        title: "Skills",
        link: "#skills",
    },
    {
        id: 4,
        title: "Contacts",
        link: "#contacts",
    },
]

export const Menu: React.FC = () => {
    return <nav>
        <S.Menu>
            {links.map((link) => {
                return <li key={link.id}>
                    <Link href={link.link}>{link.title}</Link>
                </li>
            })}
        </S.Menu>
    </nav>
};