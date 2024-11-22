# Hoisting State to the URL Exercise

## Introduction

In this exercise, you will convert a table component's sorting state from local memory to URL state. This will allow the sorting state to be shareable and persistent across page refreshes. The exercise aims to demonstrate how to manage state using URL parameters and React Router, and address common problems that arise during this process.

## Problem

The data table component currently manages sorting state using local useState. Key issues:

- Sort preferences are lost on page refresh
- Using imperative event handlers with `onClick`
- State management is isolated to component memory
- No URL integration for shareable sorting state

Current implementation uses:

```tsx
const [sort, setSort] = useState(null);
const [sortProp, desc] = sort?.split(':') || [];
```

## Goal

Convert the table's sorting mechanism to use URL state while:

- Replacing `onClick` handlers with React Router's `Link` components
- Using URL search parameters for sort state
- Maintaining the same sorting functionality
- Enabling shareable URLs
- Making sort state persistent across refreshes

The goal is to avoid using React state whenever possible, especially when the state can be derived from the URL, as it reduces duplicate state and makes the application easier to manage. By hoisting the state to the URL, which is the single source of truth, the application becomes more predictable and easier to maintain. The URL is often seen as an afterthought in client-side application development, but it's a crucial part of writing these apps, as every new URL exposes a new path through the application. Deriving as much as possible from the URL is desirable, as it helps to avoid duplication and synchronization issues, and makes development more efficient.

## Success Criteria

1. Replace Button with Link:

   - Change from `onClick` handlers to declarative `Link` components
   - Generate proper URLs for sort states
   - Handle empty sort state correctly

2. URL Integration:

   - No sort: `/users`
   - Sort by name: `/users?sort=name`
   - Sort by name desc: `/users?sort=name:desc`

3. Search Params Usage:

   - Correctly read sort state from URL
   - Update sort state through navigation
   - Handle URL parameters properly

4. Component Changes:

   - Remove local state management
   - Use `useSearchParams` for reading sort state
   - Use `useLocation` for building new URLs
   - Maintain existing UI behavior

5. Maintain Functionality:
   - Clicking column cycles through: ascending → descending → no sort
   - Sort indicators show correct state
   - Table data sorts correctly

## Hints

- React Router provides three key hooks:

  ```typescript
  import { useSearchParams, useLocation, Link } from 'react-router-dom';
  ```

- Search params can be accessed like this:

  ```typescript
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  ```

- To build new URLs, combine location with search params:

  ```typescript
  const location = useLocation();
  const newSearchParams = new URLSearchParams({ sort: newSort });
  const newUrl = `${location.pathname}?${newSearchParams}`;
  ```

- For the Link component:

  ```typescript
  <Link
    to={newSort ? `${location.pathname}?${newSearchParams}` : location.pathname}
  >
  ```

- Remember to:
  - Handle null/undefined cases with nullish coalescing
  - Maintain the same sort cycling logic
  - Keep UI indicators in sync with URL state

## Key Changes

1. Remove useState in favor of useSearchParams
2. Replace button onClick with Link component
3. Use URLSearchParams for parameter management
4. Utilize location.pathname for base URL
5. Handle parameter presence/absence correctly

## Extra Challenges

1. Add multiple column sorting
2. Implement sort persistence across routes
3. Add type safety for sort parameters
4. Create a URL copy button for sharing
5. Add default sort parameters

## References

[Why you should lift component state up to the URL](https://www.youtube.com/watch?v=sFTGEs2WXQ4)
