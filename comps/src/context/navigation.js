import {createContext, useState, useEffect} from 'react';

const NavigationContext = createContext();


function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        // 因為我們都用 pushState 更新 url, 每當使用者按 back/ forward 時, 都會有 popstate event
        // 當發出 popstate event 時, 確保更新 currentPath state 確保更新到最新的 url
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        // to === '/dropDown'
        window.history.pushState({},'', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;