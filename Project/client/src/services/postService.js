import React, { useState, useEffect } from 'react';

const App = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [users, setUsers] = useState([]);

   // GET with fetch API
   useEffect(() => {
      const fetchUser = async () => {
         const response = await fetch(
            'https://group13api.vercel.app/'
         );
         const data = await response.json();
         console.log(data);
         setUsers(data);
      };
      fetchUser();
   }, []);

   // Delete with fetchAPI
   const deleteUser = async (id) => {
      let response = await fetch(
         `https://group13api.vercel.app/${id}`,
         {
            method: 'DELETE',
         }
      );
      if (response.status === 200) {
         setUsers(
            users.filter((user) => {
               return user.id !== id;
            })
         );
      } else {
         return;
      }
   };

   // Post with fetchAPI
   const addUsers = async (name, netid, major, minor, year, pronouns, location) => {
      let response = await fetch('https://group13api.vercel.app/students', {
         method: 'POST',
         body: JSON.stringify({
            "name": name,
            "netid": netid,
            "major": major,
            "minor": minor,
            "year": year,
            "pronouns": pronouns,
            "location": location
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      let data = await response.json();
      setUsers((users) => [data, ...users]);
      setTitle('');
      setBody('');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addUsers(name, netid, major, minor, year, pronouns, location);
   };

   return (
      <div className="users-container">
      {users.map((user) => {
         return (
            <div className="post-card" key={user.id}>
               <h2 className="post-title">{user.name}</h2>
               <p className="post-body">{user.netid}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}
   </div>
   );
   return (
      <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea>
            <button type="submit">Add Post</button>
         </form>
      </div>
      {/* ... */}
   </div>
   );
   return (
   <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               {/* ... */}
               <div className="button">
                  <div className="delete-btn" onClick={() => deletePost(post.id)}>
                     Delete
                  </div>
               </div>    
            </div>
         );
      })}
   </div>
   );
};

export default App;