import React from 'react';

export default function List() {

    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const number = numbers.map(number => <ol>{number}</ol>)

    const friends = [
        { name: 'tasib', age: '19' },
        { name: 'rafi', age: '21' },
        { name: 'rakib', age: '18' },
    ]
    const friend = friends.map(friend => <ul>{friend.name}</ul>)

    return (
        <div>
            {number}
            {friend}
        </div>
    )
}