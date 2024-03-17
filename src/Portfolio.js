import { useState, useEffect } from 'react';

function Portfolio(){

    const loadingText = {name:"Loading... Please wait"};

    const [posts, setPosts]= useState([loadingText]);
    useEffect(()=>{

        //const fetchData = () => {

        fetch('https://api.github.com/users/DanielJohansson1989/repos')
        .then(response=>response.json())
        .then(data=>setPosts(data))
        .catch(error=>console.error('Error fetching data: ' + error));
    //};

    //const delay = 5000;
    //const timeOutId = setTimeout(fetchData, delay);
    
    }, []);

    return(
        <main>
            <div className='myProjects'>
                <h2>My Projects</h2>
                <ul>
                    {
                        posts.map(post=>(
                            <li key={post.id}>
                                <h3>{post.name}</h3>
                                <p>{post.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    );
}

export default Portfolio