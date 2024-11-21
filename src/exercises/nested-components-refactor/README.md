# Nested Components Refactor Exercise

## Introduction

A common mistake when trying to fix large React components is to declare smaller components inside the main component, which is considered a bad practice. [The react documentation specifically calls out this anti-pattern.](https://react.dev/learn/your-first-component#nesting-and-organizing-components). Components can render other components, but you must never nest their definitions.

```jsx
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
```

The snippet above is [very slow and causes bugs.](https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state) Instead, define every component at the top level:

```jsx
export default function Gallery() {
  // ...
}

// ✅ Declare components at the top level
function Profile() {
  // ...
}
```

When a child component needs some data from a parent, pass it by props instead of nesting definitions.

This problem will use the example `ProductOverview` component from the `component-breakdown` exercise. If you already completed that exercise, it is not required that you refactor the `ProductOverview` component as part of this exercise. The purpose of this exercise is to understand why you should not nest a component definition inside another component.

## Problem

Take a look at the `ProductOverview` component. There are two issues to note:

- the child components are defined inside the `ProductOverview` component,
- all the states are managed in the `ProductOverview` component.

If you bring up the react developer tool and have 'Highlight updates when components render.' enabled, you will notice that nesting component definitions inside another component causes the entire page to get rebuilt every time the state changes, resulting in performance issues and a "flicker" effect. Every time the state changes, `ProductOverview` component re-renders, and all the nested components are re-created for every render. You're rendering a _different_ component in the same position. This leads to bugs and performance problems.

## Goal

Understand why you should not nest component definitions inside another component and (optionally) refactor the `ProductOverview` component to declare every component at the top level. Also, make sure that states are localized in the components that need them.

## Success Criteria

1. Understand why you should not nest component definitions inside another component.
2. Refactor the `ProductOverview` component to declare every component at the top level. (Optional)

## Solution

To see the solution, add `/solution` to the URL path.

## References

[Are Your React Components Too BIG?](https://www.youtube.com/watch?v=NsFmOttIW9Y)
