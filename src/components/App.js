import React from 'react'
import EmplList from './EmplList'
import users from '../users.json'



// function Count (arr) {
//     arr.forEach (empl => {

//     })
// }

function App() {
    return (
        <EmplList props={users}/>
    )
}

export default App