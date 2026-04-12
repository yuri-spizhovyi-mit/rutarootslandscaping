import { nanoid as createId } from "nanoid";

export const NAVIGATION_ITEMS = [
    {
        name:"Home",
        scrollTo:"hero",
        id:createId(),
    },
    {
        name:"About",
        scrollTo:"about",
        id:createId(),
    },
    {
        name:"Gallery",
        scrollTo:"gallery",
        id:createId(),
    },
    {
        name:"Services",
        scrollTo:"services",
        id:createId(),
    },
    {
        name:"Contacts",
        scrollTo:"contacts",
        id:createId(),
    },
];