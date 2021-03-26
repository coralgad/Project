import React, { useState } from 'react';

const storeObject = {
    userName: 'user',
    email: 'user123@gmail.com',
    cart:[]
};
export const StoreContext = React.createContext(storeObject)
 const Store = ({ children }) => {
    const [store, updateStore] = useState(storeObject);
     return (<StoreContext.Provider value={[store, updateStore]}>
         {children}
    </StoreContext.Provider>)
}
export default Store;