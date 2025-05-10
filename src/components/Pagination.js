const Pagination = ({
  currentPage,
  numOfPages,
  handlePageNumber,
  goToNext,
  goToPrev,
}) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        hidden={currentPage === 0}
        className="underline cursor-pointer"
        onClick={() => goToPrev()}
      >
        prev
      </button>
      {[
        ...Array(numOfPages)
          .keys()
          .map((num) => (
            <button
              className={`p-2 m-2  cursor-pointer"${
                num === currentPage ? " bg-blue-900 text-white" : "no-underline"
              }`}
              onClick={() => handlePageNumber(num)}
            >
              {num + 1}
            </button>
          )),
      ]}
      <button
        hidden={currentPage === numOfPages - 1}
        className="underline cursor-pointer"
        onClick={() => goToNext()}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
