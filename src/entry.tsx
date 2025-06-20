import React, { useEffect, useState } from 'react';
import './index.less'
import Layout from '@/layouts'
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/global.css'
import { WINDOWS_EVENT_NAMES } from 'shared/constants/events';

const App: React.FC = () => {

  const [files, setFiles] = useState([])

  useEffect(() => {
    window.electronAPI && window.electronAPI[WINDOWS_EVENT_NAMES.GET_D_FILES_BY_PY]().then(setFiles);
  }, []);

  return (
    <ErrorBoundary>
      <div>
        {
          files.map(item => item)
        }
        <p className='text-6xl'>dsdsdsddssd-----------------</p>
        <Layout></Layout>
      </div>
    </ErrorBoundary>
  )
};

export default App