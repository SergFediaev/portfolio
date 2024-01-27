import React from 'react';
import {S} from "./Contacts_Styles";
import {Link} from "../../../components/Link";

const links = [
    {
        id: 1,
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/sergfediaev",
        link: "linkedin.com/in/SergFediaev",
    },
    {
        id: 2,
        title: "GitHub",
        url: "https://github.com/SergFediaev",
        link: "github.com/SergFediaev",
    },
    {
        id: 3,
        title: "VK",
        url: "https://vk.com/sergfediaev",
        link: "vk.com/SergFediaev",
    },
    {
        id: 4,
        title: "Telegram",
        url: "https://t.me/SergFediaev",
        link: "@SergFediaev",
    },
    {
        id: 5,
        title: "Email",
        url: "mailto:sergfediaev@gmail.com",
        link: "SergFediaev@gmail.com",
    },
]

export const Links: React.FC = () => {
    return <nav>
        <S.Links>
            {links.map((link) => {
                return <li key={link.id}>
                    <p>{link.title}:</p>
                    <Link href={link.url}>{link.link}</Link>
                </li>
            })}
        </S.Links>
    </nav>
};