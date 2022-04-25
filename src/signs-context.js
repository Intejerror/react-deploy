import { createContext } from 'react'

export const signsList = [
    {
        name: 'Стандартные дорожные знаки'
    },
    {
        name: 'Светодиодные дорожные знаки'
    },
    {
        name: 'Заградительные светодиодные знаки'
    },
    {
        name: 'Временные дорожные знаки'
    },
    {
        name: 'Знаки пожарной безопасности'
    },
]

export const SignsContext = createContext(signsList);