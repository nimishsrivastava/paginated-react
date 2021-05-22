import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../styles.module.css';

export const Pagination = (props) => {
  const { currentPage, totalPages, onClickPageNumber, disablePageChange } =
    props

  const getPaginationNumbers = () => {
    if (totalPages > 0) {
      if (totalPages <= 6) {
        return Array.from(Array(totalPages).keys()).map((item) => item + 1)
      }
      if (currentPage > 3 && currentPage < totalPages - 3) {
        return [currentPage - 1, currentPage, currentPage + 1]
      }
      if (currentPage <= 3) {
        return [1, 2, 3, 4, 5]
      }
      if (currentPage >= totalPages - 3) {
        return [
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        ]
      }
    }
    return []
  }

  const onChangePage = (pageNumber) => {
    if (!disablePageChange && pageNumber <= totalPages && pageNumber >= 1) {
      onClickPageNumber(pageNumber)
      window.scrollTo({
        top: 0
      })
    }
  }

  return (
    <div>
      <span
        onClick={() => {
          onChangePage(parseInt(currentPage) - 1)
        }}
        className={`${styles.changePage} ${styles.decrement} ${
          currentPage === 1 ? styles.disable : ''
        }`}
      >
        <span>Prev</span>
        {/* <Icon className='icon-chevron left-chevron' /> */}
      </span>

      {currentPage > 3 && totalPages > 6 && (
        <React.Fragment>
          <span
            className={styles.pageNumber}
            onClick={() => {
              onChangePage(1)
            }}
          >
            1
          </span>
          <span className={styles.ellipses}>...</span>
        </React.Fragment>
      )}

      {getPaginationNumbers().map((pageNumber) => (
        <span
          key={pageNumber}
          className={`${styles.pageNumber} ${
            pageNumber === currentPage ? styles.active : ''
          }`}
          onClick={() => {
            onChangePage(pageNumber)
          }}
        >
          {pageNumber}
        </span>
      ))}

      {currentPage < totalPages - 3 && totalPages > 6 && (
        <React.Fragment>
          <span className={styles.ellipses}>...</span>
          <span
            className={styles.pageNumber}
            onClick={() => {
              onChangePage(totalPages)
            }}
          >
            {totalPages}
          </span>
        </React.Fragment>
      )}

      <span
        onClick={() => {
          onChangePage(parseInt(currentPage) + 1)
        }}
        className={`${styles.changePage} ${styles.increment} ${
          currentPage === totalPages ? styles.disable : ''
        }`}
      >
        <span>Next</span>
        {/* <Icon className='icon-chevron' /> */}
      </span>
    </div>
  )
}

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 0,
  onClickPageNumber: () => {},
  disablePageChange: false
}

Pagination.propTypes = {
  onClickPageNumber: PropTypes.func,
  disablePageChange: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number
}
