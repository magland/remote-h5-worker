import { useEffect, useState } from 'react'
import './App.css'
import { RemoteH5File, RemoteH5Group, getRemoteH5File } from './RemoteH5File/RemoteH5File'

function App() {
  const [file, setFile] = useState<RemoteH5File>()
  useEffect(() => {
    getRemoteH5File('https://dandiarchive.s3.amazonaws.com/blobs/c86/cdf/c86cdfba-e1af-45a7-8dfd-d243adc20ced', '').then(f => {
      setFile(f)
    })
  }, [])

  const [rootGroup, setRootGroup] = useState<RemoteH5Group>()
  useEffect(() => {
    if (!file) return
    file.getGroup('/').then(g => {
      setRootGroup(g)
    })
  }, [file])

  return (
    <div>
      <p>
        This is a dummy project that generates the RemoteH5Worker.js file.
      </p>
      {
        file ? (
          <div>
            <div>Loaded file</div>
            <div>
              {
                rootGroup ? (
                  <pre>{JSON.stringify(rootGroup.attrs, null, 4)}</pre>
                ) : (
                  <div>Loading root group</div>
                )
              }
            </div>
          </div>
        ) : (
          <div>Loading file</div>
        )
      }
    </div>
  )
}

export default App
