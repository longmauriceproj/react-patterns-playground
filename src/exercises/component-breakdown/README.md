# Component Breakdown Exercise

## Introduction

In this exercise, you will refactor a monolithic component into smaller, reusable pieces. This exercise will help you understand the benefits of component composition and how to break down complex components into smaller, manageable pieces.

A single React component with 800+ lines may be considered too big, and refactoring it into smaller components around 100 to 500 line mark might be necessary. The ideal size of a React component is not strictly about line count, but rather about the component having a single specific task and reducing complexity.

A common scenario where big components are created is when developers are handed a large block of HTML from a designer or template and implement it as a single component instead of factoring it into smaller components. Implementing a large block of HTML as a single component may seem like a quick solution, but it can lead to performance issues, code maintainability problems, and difficulty in debugging.

This problem will use an example `ProductOverview` component to illustrate how to create well-performing and properly sized React components.

## Problem

The `ProductOverview` component is doing too much. It handles:

- Breadcrumb navigation
- Product information and pricing
- Image gallery
- Color and size selection
- Product details and policies

This makes the component difficult to maintain and reuse.

If you bring up the react developer tool and have 'Highlight updates when components render.' enabled, you will notice that the entire component re-renders when you interact with the color or size selection. This is because we have a single component and all the state is managed in the `ProductOverview` component. Whenever the state changes, the entire component re-renders.

## Goal

Break down this monolithic component into smaller, reusable pieces while:

- Maintaining existing functionality
- Adding proper TypeScript types
- Improving component reusability
- Managing state effectively
- Preserving accessibility features

## Success Criteria

1. Create standalone components for each logical section
2. Handle state management appropriately
3. Keep components independently reusable
4. Maintain existing styling and layout

## Hints

- Consider which state should be lifted up
- Look for repeated UI patterns
- Think about component boundaries
- Pay attention to prop drilling
- Use the react developer tool to identify unnecessary re-renders

## Solution

To see the solution, add `/solution` to the URL path.

The provided solution is a reasonable way to refactor the `ProductOverview` component. Notice how the pertinent states are defined locally in the color picker and size picker components which allows for more efficient and fine-grain updates.

If you bring up the react developer tool and have 'Highlight updates when components render.' enabled, you will notice that only the color picker or size picker component re-renders when you interact with them.

However, there are still room for improvement. Note that when you add the item to cart or when you open and close the menu, the entire `ProductOverview` component re-renders. This is because the `ProductOverview` component is still managing the cart and menu states. As an additional exercise, consider how you can further refactor the `ProductOverview` component to fix this issue.

Consider the following improvements:

- Look into using an external state management library like Zustand to create external global stores for the menu and cart states. Doing so will support fine-grained updating, where only the relevant components are updated when an action is performed, such as adding to cart.
- Break out each component into its own file for more organized and maintainable codebase.

## References

[Are Your React Components Too BIG?](https://www.youtube.com/watch?v=NsFmOttIW9Y)
