import React from 'react'

function MenuReviver() {
    return (
        <>
            <input id='menu-reviver' type="checkbox" />
            <label htmlFor="menu-reviver">
                <div className="stripes">
                    <div className="stripe stripe-1"></div>
                    <div className="stripe stripe-2"></div>
                    <div className="stripe stripe-3"></div>
                </div>
            </label>
        </>
    )
}

export default MenuReviver