import { useEffect } from 'react'
import * as React from 'react'
import io from 'socket.io-client'

const useChatService = (initialMessage) => {
  const [messages, setMessages] = React.useState([initialMessage])

  const socketRef = React.useRef()

  useEffect(() => {
    socketRef.current = io('http://localhost:3001')
    socketRef.current.on('broadcast', (payload) => {
      setMessages((prevMessages) => [...prevMessages, payload])
    })
    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const sendMessage = (name, text) => {
    const newMessage = {
      name: name,
      text: text,
    }
    socketRef.current.emit('send', newMessage)
    setMessages((prevMessages) => [...prevMessages, newMessage])
  }

  return [messages, sendMessage]
}

const SocketIO: React.FC = () => {
  const [name, setName] = React.useState('noname')
  const [messages, sendMessage] = useChatService({
    name: name,
    text: `Hello, ${name}!`,
  })
  const [text, setText] = React.useState('')

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const handleButtonClick = () => {
    sendMessage(name, text)
    setText('')
  }

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <input
          type="text"
          placeholder="message"
          value={text}
          onChange={handleOnChange}
        />
        <button disabled={!text} onClick={handleButtonClick}>
          Send
        </button>
      </div>
      <ul>
        {messages.map((message, index) => {
          return (
            <li key={index}>
              {message.name}: {message.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SocketIO
