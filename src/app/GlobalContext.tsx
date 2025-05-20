"use client"
import { createContext} from 'react';

let globalState = {}

const GlobalContext = createContext(globalState)

export default GlobalContext

