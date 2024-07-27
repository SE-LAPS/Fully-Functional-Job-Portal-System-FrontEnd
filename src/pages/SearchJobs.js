import React, { useState, useEffect } from 'react';
import JobList from '../components/JobList';

function SearchJobs() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    return(
        <div>
            <header>
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
                <form>
                    <input
                        style={{width: '200px', margin: '0 10px', padding: '10px'}}
                        type="text"
                        placeholder="Keywords"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        style={{width: '200px', margin: '0 10px', padding: '10px'}}
                        type="text"
                        placeholder="Location"
                    />
                    <input
                        style={{width: '200px', margin: '0 10px', padding: '10px'}}
                        type="number"
                        placeholder="Distance"
                    />
                    <button style={{margin: '0 10px', padding:'10px, 20px'}} type="submit">Find Jobs</button>
                </form>
            </div>
        </header>
        <main>
            <JobList jobs={jobs} searchTerm={searchTerm} />
        </main>
        </div>
        
        
    )
}

export default SearchJobs;  