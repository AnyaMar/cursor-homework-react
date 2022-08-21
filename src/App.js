import React from 'react';
import PostComponent from './PostComponent';
import './App.css';


function App() {
  const photo = 'https://www.gannett-cdn.com/-mm-/974bcdb2ceb8ff8c15db75a5dfab567633383a34/c=0-93-3068-1826/local/-/media/2017/03/01/USATODAY/USATODAY/636239782868557609-MAG-HAYDEN-7730471.JPG';
  const image = 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';
  const posts = [{
  id: 1,
  user: {
    name: "Anakin skywalker",
    photo: photo,
    nickname: "@dart_vader"
  },
  content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
  image: image,
  date: "28 лютого",
  }
]
  return (
    <div className="App">
      <div className='container'>
        {posts.map(post => <PostComponent data={post} key={post.id}></PostComponent>)}
      </div>
    </div>
  );
}
export default App;
