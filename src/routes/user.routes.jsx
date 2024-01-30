import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Plate } from '../pages/Plate';
import { Profile } from '../pages/Profile';
import { Preferences } from '../pages/Preferences';
import { RequestPayment } from '../pages/RequestPayment';
import { RequestOrders } from '../pages/RequestOrders';
import { NotFound } from '../pages/NotFound';

export function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/plate/:id" element={<Plate />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/requestpayment" element={<RequestPayment />} />
            <Route path="/requestorders" element={<RequestOrders />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}