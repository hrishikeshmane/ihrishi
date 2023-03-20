---
title: ⚛ API calls made easy- React Query!
meta: If you're a React developer, you probably know the pain of fetching and updating data from the server. React Query solves this by letting you fetch, cache, and update server data with just a few lines of code.
slug: api-calls-made-easy
---

If you're a React developer, you probably know the pain of fetching and updating data from the server. You have to write a lot of boilerplate code, handle loading and error states, manage cache invalidation, and deal with stale data. And if you use Redux for this purpose, you have to deal with even more complexity and verbosity.

But what if I told you there's a better way? A way that lets you fetch, cache, and update server data with just a few lines of code. A way that handles loading and error states for you. A way that automatically refetches data when it becomes stale or when the user interacts with your app. A way that works with both REST and GraphQL APIs.

Sounds too good to be true, right? Well, it's not. It's React Query!

React Query is a library that describes itself as "the missing data-fetching library for React". It is a set of custom hooks that makes working with asynchronous or server state in React easy. It is like Apollo Client but without the GraphQL dependency. It is like Redux but without the boilerplate and complexity.

In this blog, I will show you how to use React Query to make your life as a React developer easier and happier. I will cover 2 very fundamental and easy topics- Querring and Mutations!

So buckle up and get ready for some practical React Query magic! Trust me, once you try it, you'll never want to go back to the old ways of fetching data in React.

---

## How to fetch data with useQuery hook

The useQuery hook is a custom hook that allows you to fetch data from a server or any other API endpoint in a React component. It returns an object that contains loading, error, and data properties that you can use to render your UI according to the query's state. To use the useQuery hook, you need to pass it two arguments: a key that identifies your query and a function that fetches the data. For example:

```js
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function Users() {
  const { loading, error, data } = useQuery("users", fetchUsers);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

In this example, we are fetching a list of users from a JSON placeholder API and rendering them in a list. The useQuery hook handles caching, re-fetching, and updating the data for us.

---

## How to update data with useMutation hook

The useMutation hook is a custom hook that allows you to update data on a server or any other API endpoint in a React component. It returns an object that contains a mutate function that you can call at any time to execute the mutation and an object that contains loading, error, and data properties that you can use to track the mutation's state. To use the useMutation hook, you need to pass it a GraphQL string that represents the mutation and optionally some options such as variables, update, refetchQueries, etc. For example:

```js
import { useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function AddTodo() {
  const [todoInput, setTodoInput] = useState("");
  const [addTodo] = useMutation(ADD_TODO);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({ variables: { type: todoInput } });
      }}
    >
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
```

In this example, we are adding a new todo item and updating the cache with the new data.
