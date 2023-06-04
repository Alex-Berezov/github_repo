import { FC, MouseEventHandler } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 3 && i <= currentPage + 3)
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          style={{ fontWeight: currentPage === i ? 'bold' : 'normal' }}
        >
          {i}
        </button>
      )
    } else if (
      (i === 2 && currentPage > 4) ||
      (i === totalPages - 1 && currentPage < totalPages - 3)
    ) {
      pages.push(<span key={i}>...</span>)
      // Skip next iterations until we reach range around currentPage or last page
      i = i === 2 ? currentPage - 3 : totalPages - 1
    }
  }

  const handlePrevious: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      {pages}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  )
}

export default Pagination
