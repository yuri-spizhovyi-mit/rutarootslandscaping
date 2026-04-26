import { nanoid as createId } from "nanoid";

export const NAVIGATION_ITEMS = [
    {
        name: "Home",
        path: "/",
        id: createId(),
    },
    {
        name: "About",
        path: "/about",
        id: createId(),
    },
    {
        name: "Gallery",
        path: "/projects",
        id: createId(),
    },
    {
        name: "Services",
        path: "/services",
        id: createId(),
    },
    {
        name: "Contacts",
        path: "/contact",
        id: createId(),
    },
];