# State Synchronization with useEffect Exercise

## Introduction

The `useEffect` hook in React is used to synchronize a component with an external system. Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page. These systems aren’t controlled by React, so they are called _external_. However, the hook is commonly misused for state synchronization within components. This exercise demonstrates common anti-patterns and their solutions.

## Problem

The `ShoppingCartManager` component uses multiple `useEffect` hooks to manage derived state, creating unnecessary complexity and potential performance issues.

Key anti-patterns demonstrated:

1. Using `useEffect` to calculate values that could be derived directly
2. Chaining effects to update dependent states
3. Using effects for state updates that could be handled in event handlers
4. Using effects for simple validations
5. Over-reliance on state for values that could be constants

## Goal

Refactor the `ShoppingCartManager` component to follow React best practices by:

- Removing unnecessary `useEffect` hooks
- Using derived state calculations directly
- Implementing proper event handlers
- Using `useMemo` for expensive calculations
- Utilizing constants for static values

## Success Criteria

- All cart calculations work correctly
- No unnecessary re-renders
- No `useEffect` hooks used for state synchronization
- Clear and maintainable code structure
- Preserved component functionality

## Hints

1. Consider whether each state really needs to be in `useState`
2. Look for opportunities to calculate values directly instead of using effects
3. Think about where validations should really happen
4. Consider using TypeScript constants for static values
5. Use `useMemo` only when calculations are expensive

## Solution

The `useEffect` hook usage in this exercise might seem a bit contrived, but it's a common anti-pattern that can make components harder to understand, maintain, and debug. This is especially true when states are updated in multiple effects across multiple components. By refactoring the component to use `useMemo` and event handlers, we can simplify the code and make it easier to follow.

## Key Changes

1. Replace subtotal `useEffect` with `useMemo`
2. Calculate tax and shipping cost directly
3. Move shipping method logic to event handler
4. Create constants for shipping costs

## Extra Challenges

1. Add a discount code order summary item
2. Calculate discount directly
3. Create a constant for the discount code
4. Create an event handler for the discount code validation or implement a custom hook for discount code validation
5. Add loading states for async operations
6. Add unit tests to verify calculations

## References

[You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
