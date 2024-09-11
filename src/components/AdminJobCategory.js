import React, { useState } from 'react';
import '../css/AdminJobCategory.css'; // Ensure appropriate styles

const AdminJobCategory = ({ jobCategories = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  // Pagination calculations
  const indexOfLastCategory = currentPage * rowsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - rowsPerPage;
  const currentCategories = jobCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  const totalPages = Math.ceil(jobCategories.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="admin-job-category">
      <h2>Job Categories</h2>
      {jobCategories.length === 0 ? (
        <p>No job categories available.</p>
      ) : (
        <>
          <table className="job-category-table">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category) => (
                <tr key={category.id}> {/* Ensure each category has a unique id */}
                  <td>{category.name || 'N/A'}</td>
                  <td>{category.description || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                  aria-label={`Page ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminJobCategory;
