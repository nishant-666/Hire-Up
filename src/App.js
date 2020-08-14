import React, { useState } from 'react';
import useFetchJobs from './UseFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import logo from './hireup.png'
import Loader from './loader'
import './App.css'
import Errormessage from './errormessage'
function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <img src={logo} style={{width:220,height:100,marginBottom:20}} />
     
     
      <SearchForm params={params} onParamChange={handleParamChange} />
     
      {loading &&  <Loader />}
      {error && <Errormessage/>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination centered page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  )
}

export default App;
