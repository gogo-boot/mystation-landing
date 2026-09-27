import React from 'react';
import CookieConsent from '@site/src/components/CookieConsent';

// Swizzled Root: wraps the whole app so the cookie consent banner is present
// on every page and persists across client-side navigation.
export default function Root({children}) {
    return (
        <>
            {children}
            <CookieConsent />
        </>
    );
}
