import React from 'react'
import { Redirect, Route, RouterProps } from 'react-router';

interface CustomProps  {
    component: any,
    exact?: true,
    path: string

}

export default function ProtectedRoute({component: Component, ...restOfProps }: CustomProps) {

    // const isAuthenticated = localStorage.getItem("isAuthenticated");
    const isAuthenticated = true;
    console.log("this", isAuthenticated);

    return (
        <div>
            <Route
                {...restOfProps}
                render={(props) => {
                    return isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
                }
                }
                />
        </div>
    )
}
