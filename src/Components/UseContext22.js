import React from 'react';
import { UserContext } from '../App';
import UseContext1 from './UseContext1';
function UseContext22() {
    return (
        <UserContext.Provider  value="dark">
            <UseContext1/>
        </UserContext.Provider>
    );
}
export default UseContext22;