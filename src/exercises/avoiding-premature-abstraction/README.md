# Creating the Right Component Abstraction

## Introduction

When building React applications, we often encounter repeated UI patterns that seem like good candidates for reusable components. In this exercise, we have two forms with loading buttons that handle their loading states differently. While abstracting shared code is important, it's crucial to create the right abstraction that balances reusability, maintainability, and developer experience.

## Problem

In the application:

- The Newsletter component has a button with a centered loading spinner that overlays the content without causing layout shifts
- The Invoice component has a button that replaces its text with a spinner during loading, causing visible layout shifts
- Both buttons share similar styling patterns but implement loading states differently

The challenge is to create an appropriate abstraction that solves these inconsistencies without creating a component that's either too rigid or too abstract.

## Goal

Create a LoadingButton component that:

- Provides consistent loading behavior across the application
- Maintains flexibility for styling
- Has an intuitive API
- Properly handles all button functionality
- Prevents layout shifts during loading states

## Success Criteria

- Buttons maintain their individual styles while sharing loading behavior
- Loading states are visually consistent across the application
- No layout shifts occur during state changes
- The component API is intuitive and type-safe
- All standard button functionality (disabled states, events, etc.) works as expected
- Component is easy to use with Tailwind CSS classes

## Initial Code

```tsx
// Current Newsletter Implementation
function Newsletter() {
  return (
    <button className="... relative">
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}
      <span className={isLoading ? 'invisible' : ''}>Sign up</span>
    </button>
  );
}

// Current Invoice Implementation
function Invoice() {
  return (
    <button className="..." disabled={isLoading}>
      {isLoading ? <Spinner /> : 'Send now'}
    </button>
  );
}
```

## Hints

1. Consider using utility functions like `clsx` or `tailwind-merge` for class name composition
2. Think about what props the component needs to handle all use cases
3. Don't forget about accessibility considerations
4. Remember that buttons often need to handle more than just clicks and loading states
5. Consider how the component will be used with form submissions

## Solution & Key Concepts

1. **Appropriate Abstraction Level**: While we could create a more generic LoadingOverlay component, a LoadingButton is more appropriate here because:

   - It's specifically used for buttons throughout the application
   - It provides better semantics and type safety
   - It offers a more intuitive API for the specific use case
   - It can handle button-specific concerns (disabled states, form submission, etc.)

2. **Style Composition**: Instead of building in specific styles, we:

   - Accept className prop for custom styles
   - Use utility functions to merge classNames properly
   - Maintain only the essential styles for loading behavior

3. **Component API**: The component should:
   - Extend all standard button props
   - Add minimal additional props (just isLoading)
   - Handle disabled states automatically
   - Maintain proper typing

## Extra Challenges

1. Add support for different spinner sizes based on button size
2. Implement different spinner variants (colors, animations)
3. Add support for loading placement (left, right, or center)
4. Create a compound component version with more flexibility:
   ```tsx
   <LoadingButton>
     <LoadingButton.Spinner />
     <LoadingButton.Content>Click Me</LoadingButton.Content>
   </LoadingButton>
   ```
5. Add support for loading progress indication

## Common Pitfalls to Avoid

1. Adding too many props for different style variations
2. Building in specific visual styles that should be customizable
3. Not handling all native button functionality
4. Creating overly complex APIs for simple use cases
5. Not considering accessibility in loading states

Remember: The goal is to create an abstraction that makes the code more maintainable and developer-friendly while solving the specific problems at hand. Don't try to anticipate every possible future use case - instead, create something that solves the current problems well and can be extended if needed.

## Reference

[Avoid premature abstractions with unstyled components](https://www.youtube.com/watch?v=9iJK-Vl6PhE)
