import { TextComponentType } from "../types/componentTypes";

export const firstComponentFixture:TextComponentType[] = [
    {
        id: 1,
        title: "React",
        content: "Programmatic React features:",
        list: [
            { id: 2, firstWord: "Hooks" , link: "/", text: " - Use different React features from your components."},
            { id: 3, firstWord: "Components" , link: "/", text: " - Built-in components that you can use in your JSX."},
            { id: 4, firstWord: "APIs" , link: "/", text: " - APIs that are useful for defining components."},
            { id: 5, firstWord: "Directives" , link: "/", text: " - Provide instructions to bundlers compatible with React Server Components."},
        ],
    },
    {
        id: 2,
        title: "Rules of React",
        content: "React has idioms — or rules — for how to express patterns in a way that is easy to understand and yields high-quality applications:",
        list: [
            { id: 21, firstWord: "Components and Hooks must be pure" , link: "/", text: " – Purity makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly."},
            { id: 31, firstWord: "React calls Components and Hooks" , link: "/", text: " – React is responsible for rendering components and hooks when necessary to optimize the user experience."},
            { id: 41, firstWord: "Rules of Hooks" , link: "/", text: " – Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called."},
        ],
    },
    {
        id: 3,
        title: "Legacy APIs ",
        content: "",
        list: [
            { id: 22, firstWord: "Legacy APIs" , link: "/", text: "Exported from the react package, but not recommended for use in newly written code."},
        ],
    }
];