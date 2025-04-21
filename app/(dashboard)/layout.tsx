import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
    return (
        <>
        <h1>Custom Element.</h1>
        {children}
        </>
    )
}

export default RootLayout;