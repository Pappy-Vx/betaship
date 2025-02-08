import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {router}  from './Route/router';

function App() {
  return (
    <Provider store={store}>
      <div className='mx-auto bg-white'>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
