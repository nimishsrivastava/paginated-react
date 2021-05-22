import React from 'react'

import Pagination  from 'paginated-react'
import 'paginated-react/dist/index.css'

const App = () => {
  return <Pagination currentPage={10} totalPages={21} onClickPageNumber={(num)=>console.log(num)} />
}

export default App
