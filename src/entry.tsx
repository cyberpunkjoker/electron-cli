import React, { useEffect, useState } from 'react';
import './index.less'
import Layout from '@/layouts'
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/global.css'

const App: React.FC = () => {

  const [files, setFiles] = useState([])

  useEffect(() => {
    // window.electronAPI.getDFiles().then(setFiles);
    window.electronAPI.getFilesFromPython().then(setFiles);
  }, []);

  return (
    <ErrorBoundary>
      <div>
        {
          files.map(item => item)
        }
        <p className='text-lg'>dsdsdsddssd-----------------</p>
        <Layout></Layout>
      </div>
    </ErrorBoundary>
  )
};

export default App