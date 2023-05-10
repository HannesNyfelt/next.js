import Container from "@/components/Container";
import Modal from "@/components/Modal";
import React, { FormEvent, useState, useEffect } from "react";

type ContactDefinition = {
  name: string,
  phoneNumber: string
}

export default function HomePage() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [phoneNumberInput, setPhoneNumberInput] = useState('')



  const [contacts, setContacts] = useState<ContactDefinition[]>([])

  useEffect(() => {
    //hämpta localstorage
    setContacts([
      { name: 'Anna Andersson', phoneNumber: '0501234567' },
      { name: 'Peter Petersson', phoneNumber: '0501234568' },
      { name: 'Johan Johansson', phoneNumber: '0501234569' }
    ])
  }, [])


  const onAdd = (e: FormEvent) => {
    e.preventDefault()

    setContacts([
      ...contacts,
      { name: nameInput, phoneNumber: phoneNumberInput }
    ])

    setNameInput('')
    setPhoneNumberInput('')
    setIsAddModalOpen(false)

    //spara till localstorage
  }

  const onRemove = (index: number) => {
    const newContacts = [...contacts]
    newContacts.splice(index, 1)
    setContacts(newContacts)

    //spara till localstorage
  }

  return (
    <Container>
      <h1>Contacts</h1>
      <button onClick={() => setIsAddModalOpen(true)}>Add contacts</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phonenumber</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact, i) => (
            <tr key={contact.name + contact.phoneNumber}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td><button onClick={() => onRemove(i)}>X</button></td>
            </tr>
          ))}

        </tbody>
      </table>
      <Modal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <form onSubmit={onAdd}>
          <label>
            <span>Name</span>
            <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} />
          </label>
          <label>
            <span>Phonenumber</span>
            <input type="text" value={phoneNumberInput} onChange={e => setPhoneNumberInput(e.target.value)} />
          </label>
          <button>Submit</button>
        </form>
      </Modal>
    </Container>
  )
}