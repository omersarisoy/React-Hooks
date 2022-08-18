import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';
import ContextHook from './components/Context/ContextHook';
import ReducerHookwithState from './components/ReducerHookwithState';
import ReducerHook from './components/ReducerHook';
import RefHook from './components/RefHook';
import MemoHooks from './components/MemoHooks';
import CallbackHooks from './components/CallbackHooks';
import CustomHooks from './components/CustomHooks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="state" element={<StateHook />}/>
        <Route path="effect" element={<EffectHook />}/>
        <Route path="context" element={<ContextHook />}/>
        <Route path="reducer-state" element={<ReducerHookwithState />}/>
        <Route path="reducer" element={<ReducerHook />}/>
        <Route path="ref" element={<RefHook />}/>
        <Route path="memo" element={<MemoHooks />}/>
        <Route path="callback" element={<CallbackHooks />}/>
        <Route path="custom" element={<CustomHooks />}/>
      </Routes>
    </div>
  );
}

export default App;
