import { useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import './SingleUserPage.css'

export const SingleUserPage = () => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [todos, setTodos] = useState([])
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const tab = searchParams.get('tab')

  useEffect(() => {
    const url = `https://dummyjson.com/users/${id}`
    axios.get(url)
      .then(response => setUser(response.data))
      .catch(error => console.error("Error fetching user data:", error))
  }, [id])

  useEffect(() => {
    if (tab === 'posts') {
      axios.get(`https://dummyjson.com/users/${id}/${tab}`)
        .then(response => setPosts(response.data.posts))
        .catch(error => console.log("Error fetching user posts data:", error))
    } else {
      setPosts([])
    }
  }, [id, tab])

  useEffect(() => { 
    if (tab === 'todos') {
      axios.get(`https://dummyjson.com/users/${id}/${tab}`)
        .then(response => setTodos(response.data.todos))
        .catch(error => console.log("Error fetching user todos data:", error))
    } else {
      setTodos([]) 
    }
  }, [id, tab])

  return (
    <div className={'cont'}>
      <div className="userInfo">
        <div>ID: {user.id}</div>
        <div>
          NAME & SURNAME:
          <br/>
          {user.firstName} {user.lastName}
        </div>
        <div>AGE: {user.age}</div>
      </div>

      <div className="buttons">
        <button onClick={() => setSearchParams({ tab: 'posts' })}>user POSTS</button>
        <button onClick={() => setSearchParams({ tab: 'todos' })}>user TODOS</button>
      </div>

      {tab === 'posts' && posts.length > 0 && (
        <div className="posts-container">
          {posts.map(post => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div>Tags: {post.tags.join(", ")}</div>
              <div>Reactions: {post.reactions}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'todos' && todos.length > 0 && (
        <div className="todos-container">
          {todos.map(todo => (
            <div key={todo.id} className="todo">
              <h3>{todo.todo}</h3>
              <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
