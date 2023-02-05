import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  // const renderPeople = () => {
  //   return (users.map((user) => (
  //     <tr key={user._id}>
  //       <td>{user.name}</td>
  //       <td>{user.qualities.map((q) => {
  //         return <span key={q._id}
  //           className={`badge bg-${q.color}`}>{q.name} </span>
  //       })}</td>
  //       <td>{user.profession.name}</td>
  //       <td>{user.completedMeetings}</td>
  //       <td>{user.rate}</td>
  //       <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button></td>
  //     </tr>
  //   )))
  // }

  const renderPhrase = (number) => {
    if (number) {
      let z = number % 100 / 10
      let x = number % 10
      z >= 1.1 && z <= 1.4 ? number += ' человек' :
        x === 2 || x === 3 || x === 4 ? number += ' человека' :
          number += ' человек'
      return <h1><span className='badge bg-primary'>{number} тусанёт с тобой сегодня</span></h1>
    } else return <h1><span className='badge bg-danger'>Никто с тобой не тусанет</span></h1>
  }

  if (users.length === 0) {
    return renderPhrase(users.length)
  }

  return (
    <>
      {renderPhrase(users.length)}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {(users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.qualities.map((q) => {
                return <span key={q._id}
                  className={`badge bg-${q.color}`}>{q.name} </span>
              })}</td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td><button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button></td>
            </tr>
          )))}
        </tbody>
      </table>
    </>
  )
}






export default Users