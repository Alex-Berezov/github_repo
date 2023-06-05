import { FC, MouseEventHandler } from 'react'
import * as Styled from './styles'

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
        <Styled.Button
          key={i}
          onClick={() => onPageChange(i)}
          active={currentPage === i}
        >
          {i}
        </Styled.Button>
      )
    } else if (
      (i === 2 && currentPage > 4) ||
      (i === totalPages - 1 && currentPage < totalPages - 3)
    ) {
      pages.push(<Styled.Dots key={i}>...</Styled.Dots>)
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
    <Styled.Root>
      <Styled.NextPrevButton
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </Styled.NextPrevButton>
      {pages}
      <Styled.NextPrevButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </Styled.NextPrevButton>
    </Styled.Root>
  )
}

export default Pagination
