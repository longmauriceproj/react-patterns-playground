# Semantic HTML Exercise

## Introduction

Many developers default to using `<div>` elements for everything in their React components. While this works functionally, it reduces accessibility and makes the code harder to understand. This exercise helps you practice using semantic HTML elements and ARIA attributes to create more meaningful and accessible React components.

## Problem

The provided code shows a `BlogPost` component that uses generic `<div>` elements throughout its structure. This creates several issues:

1. Poor accessibility for screen readers
2. Less maintainable code
3. Lack of semantic meaning

## Goal

Transform the component to use appropriate semantic HTML elements and ARIA attributes while maintaining the same visual appearance and functionality.

## Success Criteria

- Replace generic `<div>` elements with appropriate semantic HTML elements
- Add ARIA attributes where necessary
- Maintain the same visual appearance and functionality
- Ensure the component is accessible to screen readers

## Hints

1. Consider which semantic elements would be appropriate for:
   - The overall page structure (`<main>`)
   - Headers (`<header>`, `<h1>`, `<h2>`)
   - Navigation (`<nav>`)
   - Content sections (`<section>`, `<article>`)
   - Lists (`<ul>`, `<li>`)
2. Think about ARIA roles and states for interactive elements
3. Use `<time>` element for dates
4. Add screen reader only text where necessary

## Key Changes

1. Replace the outer container `<div>` with `<main>`
2. Use `<header>` and `<h1>` for the blog title
3. Replace navigation menu `<div>` with `<nav>` and proper list structure
4. Use `<article>` for blog posts
5. Add appropriate ARIA attributes to interactive elements
6. Use semantic elements for dates and metadata

## Extra Challenges

1. Add keyboard navigation support for the menu
2. Implement focus management for the category filters
3. Add more ARIA live regions for dynamic content updates
4. Implement proper heading hierarchy throughout the component
5. Add skip links for keyboard users
