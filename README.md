# LAB - CLASS 31 - 34

## Project: ToDo List Manager -- Context API

## Author: Kenny W. Lino

## Problem Domain

In this lab, we begin working with React's Context API in order to store global state information in a ToDo List Manager app, given to us as starter code. With the Context API, we store state data about the total number of ToDos to show per page, whether to show completed items, and a value to use as a sort key. After setting up the Context API and wrapping our complete application with its Provider in the index, we use the context data within the List component to control the aforementioned settings.

We also take a look at the Mantine component library and use the Pagination component to render only the total number of ToDos per page using the Context state data. We also can load new data as we change pages.

The starter code also comes with convenient code, including a custom hook, `useForm()`. This custom hook serves as a general hook into our form to interact with our ToDo data. It takes a callback function and any items in state for the default values of a ToDo, which is currently only 'difficulty: 4'. It returns handler functions that can control a submit and a change in a property of the ToDo, which in this case refers to the 'difficulty'. However, with this custom hook, we can add new properties to all ToDo items such as 'category' or 'priority' and still be able to update these properties in state without defining new hooks to maintain state for them. 

Similarly, the `useForm()` call currently in the starter code inside the TodDo component is using the `AddItem()` function as a callback, but should we choose to later add other functionalities like a 'modify' option, we could adapt this `useForm()` hook.

In CLASS-32, we expose the state data within the Context API to the users in the SettingsForm component to allow them to adjust it. This allows them to set the number of ToDos to show per page, as well as to decide whether to show or hide all completed items and update the sort key.

## Links and Resources

* [CLASS-31: CodeSandbox Link](https://fekf9z-3000.preview.csb.app/)
* [CLASS-32: CodeSandbox Link](https://e60piy-3000.preview.csb.app/)

## UML

![CLASS-31 UML](./assets/CLASS-31_%20Context%20API.jpeg)