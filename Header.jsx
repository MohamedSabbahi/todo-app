import React from 'react'

function Header(props) {
    const {todos} = props
    const todoslength = todos.length

    const isTasksPlural = todoslength > 1? 'tasks' : 'task'

  return (
    <header>
        <h1 className = 'text-gradient'>
            Yous have {todoslength} open {isTasksPlural}.
        </h1>
    </header>
  )
}

export default Header