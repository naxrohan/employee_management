import React from 'react'

const TablePager = ({totalItems,displaySize, currentPage, pageSize, handleClick}) => {

    /**
     * Cal the range/step of Page items to show.
     * eg: 5, 10, 15
     */
    const displayIndex = Math.floor(parseInt(currentPage)/parseInt(displaySize));
    // Cal max pager iteme to display
    const maxDisplayPages = Math.floor(parseInt(totalItems)/parseInt(pageSize));

    const displayItems = [];
    for(let i= 1; i <= displaySize ;i=i+1){
        /**
         * Cal the items to display in a Page range/step
         * eg: [1,2,3,4,5]
         */
        let displayNos =  parseInt(i) + (displayIndex*displaySize);

        // display if less than max display pages
        if(displayNos <= maxDisplayPages){

            let active = (currentPage == displayNos) ? 'active' : '';
            displayItems.push(
                <li className={`page-item ` + active} key={i}>
                    <a className="page-link" 
                        href={`#`} 
                        onClick={handleClick.bind(i ,displayNos , pageSize)}>{displayNos}</a>
                </li>
            );

        }
    }

    const makePrevNNext = (name) => {
        let displayNos =  0;
        let activeClass = ''
        if(name === 'previous'){
            // disabled for the zero page
            activeClass = (currentPage == 0) ? 'disabled' : '';
            displayNos =  parseInt(currentPage) -    1;
        }
        if(name === 'next'){
            // disabled for the max page
            activeClass = (currentPage == maxDisplayPages) ? 'disabled' : '';
            displayNos =  parseInt(currentPage) + 1;
        }
        
        return [
            <li className={`page-item ` + activeClass} key={name}>
                <a className="page-link" href="#" 
                    aria-label={name}
                    onClick={handleClick.bind(0 , displayNos , pageSize)}>
                    <span className="sr-only">{name}</span>
                </a>
            </li>
        ]
    }

    const displayPrev = makePrevNNext("previous");
    const displayNxt = makePrevNNext("next");

  return (
    <div >
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
            {displayPrev}
            {displayItems}
            {displayNxt}
        </ul>
        </nav>
    </div>
  )
}

export default TablePager
