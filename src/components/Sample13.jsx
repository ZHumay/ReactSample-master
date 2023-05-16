import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Input } from 'reactstrap';
import axios from 'axios';

function UserCard() {
  const [users, setUsers] = useState([]);

  // API'den kullanıcıları çekmek için useEffect hook'u kullanılır
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, []);

  // Kullanıcıyı silmek için bir fonksiyon oluşturulur
  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        // Silinen kullanıcı, listeden de kaldırılır
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => console.log(error));
  }

  // Kullanıcıyı düzenlemek için bir fonksiyon oluşturulur
  const handleEdit = (id, name, email, city) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: name,
          email: email,
          address: {
            ...user.address,
            city: city
          }
        }
      } else {
        return user;
      }
    });
    setUsers(updatedUsers);
  }

  const editUser = (id) => {
    // Kullanıcı düzenleme işlemi için uygun bir yol olmadığından, burada sadece bir mesaj gösteriyoruz
    alert(`Edit user with id ${id}`);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="row">
      {users.map(user => (
        <div className="col-sm-4 mb-3" key={user.id}>
          <Card>
            <CardBody>
              <CardTitle>{user.name}</CardTitle>
              <CardSubtitle>{user.email}</CardSubtitle>
              <p>{user.address.city}</p>
              <Button color="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
              <Button color="primary" onClick={() => editUser(user.id)}>Edit</Button>
              <div className="mt-3">
                <Input type="text" defaultValue={user.name} onChange={e => setName(e.target.value)} />
                <Input type="email" defaultValue={user.email} onChange={e => setEmail(e.target.value)} />
                <Input type="text" defaultValue={user.address.city} onChange={e => setCity(e.target.value)} />
                <Button color="primary" onClick={() => handleEdit(user.id, name, email, city)}>Save</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
