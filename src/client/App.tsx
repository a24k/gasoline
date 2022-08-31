import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <div class="m-0 w-screen h-screen flex flex-col justify-center items-center gap-4">
      <button class="p-4 bg-slate-500 rounded-xl font-mono text-4xl" onclick={increment}>+</button>
      <div class="p-8 font-mono text-9xl text-center">{count()}</div>
      <button class="p-4 bg-slate-500 rounded-xl font-mono text-4xl" onclick={decrement}>-</button>
    </div>
  );
};

export default App;
