# rn-toast

A simple toast notification library for React Native and Expo Compactible.

## Installation

```sh
npm install @originaltimi/rn-toast
```
```sh
yarn add @originaltimi/rn-toast
```

## Usage

```js
import toast, { ToastProvider } from '@originaltimi/rn-toast';

// ...

 <ToastProvider
        config={{
          position: 'bottom',
          duration: 5000,
          stack: true,
        }}
      >
        <App />
      </ToastProvider>

// ...
const clickHandler = () =>{
    toast({
    title:'Hello, World!'
    type: 'success'
});
}
```

Displays a toast notification.

- `title` (string): The message to display in the toast.
    - `duration` (number): Duration in milliseconds for which the toast is visible.
    - `position` (string): Position of the toast on the screen (`top`, `bottom`).
    - `type` (string): Type of the toast (`success`, `error`, `info`).
    - `stack - Coming Soon` (boolean)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT