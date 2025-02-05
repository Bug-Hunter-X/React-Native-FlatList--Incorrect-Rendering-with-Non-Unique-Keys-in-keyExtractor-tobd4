# React Native FlatList: Non-Unique Keys in keyExtractor

This repository demonstrates a common error in React Native's FlatList component: using a `keyExtractor` function that doesn't provide unique keys for each item.  This leads to incorrect rendering and performance issues.

## Bug

The `bug.js` file shows how non-unique keys in the `keyExtractor` cause the FlatList to render incorrectly.  The `id` field is not unique, leading to unpredictable behavior.

## Solution

The `bugSolution.js` file demonstrates the solution: ensuring that the `keyExtractor` function always returns unique keys for each item in the data array.  The solution uses the `item.id` field, but adds a check to ensure uniqueness if needed. If not unique, create unique id with index.