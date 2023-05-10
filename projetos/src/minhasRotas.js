
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Clock from "./Clock";


export default function MinhasRotas () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clock" element={<Clock />} />
            </Routes>
        </BrowserRouter>
    );
}