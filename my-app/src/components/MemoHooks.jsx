import React, { useMemo, useState } from 'react'

const users = [
    { id: 'a', name: 'Robin' },
    { id: 'b', name: 'Dennis' },
    { id: 'c', name: 'Alfa' },
    { id: 'd', name: 'Beta' },
    { id: 'e', name: 'Charlie' },
    { id: 'f', name: 'Delta' },
    { id: 'g', name: 'Echo' },
  ];

const MemoHooks = () => {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    
    const handleText = (event) => {
        setText(event.target.value);
    };
    
    const handleSearch = () => {
        setSearch(text);
    };
    
    const filteredUsers = useMemo(() =>
    users.filter((user) => {
        console.log('Filter function is running ...');
        return user.name.toLowerCase().includes(search.toLowerCase());
    }), [search]) 

    // Now, this function is only executed once the search state changes. 
    // It doesn't run if the text state changes, because that's not a dependency for this filter function and thus not a dependency in the dependency array for the useMemo hook.
    
    return (
      <div>
        <input type="text" value={text} onChange={handleText} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
  
        <List list={filteredUsers} />
      </div>
    );
  };
  
  const List = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  };
  
  const ListItem = ({ item }) => {
    return <li>{item.name}</li>;
  };

export default MemoHooks