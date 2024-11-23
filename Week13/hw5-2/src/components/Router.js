import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from "./page/List.js"
import Update from "./page/Update.js"
import Detail from "./page/Detail.js"
import Create from "./page/Create.js"


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='' element={<List />} />
            <Route path='/list' element={<List />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/create' element={<Create />} />
        </Routes>
    </BrowserRouter>
  )
}
