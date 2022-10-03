import { useRef } from 'react';
import { useReducer } from 'react';
import { setJob, addJob, removeJob } from './actions';
import reducer, { initState } from './reducer';

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initState);

    const { job, jobs } = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    };

    return (
        <>
            <h2>TodoList</h2>
            <input
                type="text"
                placeholder="Enter todo..."
                ref={inputRef}
                value={job}
                onChange={(ev) => dispatch(setJob(ev.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => dispatch(removeJob(index))}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoApp;

/* 
import { useEffect, useState } from 'react';

const tabs = ['posts', 'photos', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
        console.log('re-render');
    }, [type]);
    return (
        <div>
            <input value={title} onChange={(ev) => setTitle(ev.target.value)} />
            {tabs.map((tab, index) => (
                <button
                    style={
                        type === tab
                            ? {
                                  color: '#fff',
                                  backgroundColor: '#000',
                              }
                            : {}
                    }
                    onClick={() => setType(tab)}
                    key={index}
                >
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Content;

*/
