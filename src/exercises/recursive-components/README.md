# Recursive Filetree Exercise

## Introduction

When building React applications, we often encounter recursive data structures of arbitrary depth that require traversing and rendering nested components. In this exercise, we will be creating a file tree component that recursively renders directories and files, similar to what you'd see in a file explorer. While rendering nested structures is a common pattern, it's important to handle recursive components efficiently to prevent performance issues.

## Problem

The current implementation only displays a static folder icon with no support for nested directories or files. We need a component that can handle a tree-like data structure of arbitrary depth and display it as an interactive file system interface.

## Goal

Create a recursive React component that:

1. Renders a hierarchical view of files and directories
2. Supports expanding/collapsing directories
3. Visually distinguishes between files and directories
4. Handles data of arbitrary depth

## Success Criteria

- Component correctly renders the provided tree data structure. You can use the `data` object in `src/exercises/recursive-components/data.ts` for testing and validation.
- Directories can be expanded/collapsed
- Files and directories have distinct icons
- Empty directories are visually distinct
- Indentation clearly shows the hierarchy
- Component handles deeply nested structures without breaking

## Hints

1. Think about what makes a component recursive - it should be able to render itself
2. Consider when to use state for tracking expanded/collapsed directories
3. The presence of `nodes` in an item can indicate whether it's a directory
4. Use CSS transforms for smooth chevron rotation animation
5. Leverage margin and padding for proper indentation

## Key Changes

1. Create a recursive `FilesystemItem` component that:
   - Accepts a node object as a prop
   - Renders either a file or directory based on the node structure
   - Recursively renders child nodes when present
2. Implement expand/collapse functionality using `useState`
3. Add conditional rendering for chevron icons
4. Apply proper spacing and indentation using Tailwind classes

## Extra Challenges

1. Add file/directory deletion functionality
   - Consider state management carefully
   - Avoid deeply nested state updates
   - Use a flat structure for the file system data
   - Implement using a parent state and ID-based lookups
2. Add support for file/directory creation
3. Implement drag-and-drop for moving files between directories
4. Add file type icons based on file extensions
5. Implement file/directory renaming

## Tips for Delete Implementation

- Instead of storing the tree structure directly, consider using a flat map of IDs to items
- Store parent-child relationships using IDs
- This makes updates simpler and avoids deep state mutations
- Example structure:

  ```typescript
  type FlatNode = {
    id: number;
    name: string;
    nodeIds?: number[]; // Child directory or file IDs
  };
  ```

## References

- [How to Build a Recursive React Component](https://www.youtube.com/watch?v=6UU2Ey4KZr8)
- [Avoid Deeply Nested State](https://react.dev/learn/choosing-the-state-structure#avoid-deeply-nested-state)
