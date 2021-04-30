

const ListComp = ({data,className})=>{

    return(
        <ul className={`list-none mt-6 ${className}`}>
           

           {data?.map((value,key)=>
           {
               return (
                <li className="py-2" key={key}>
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className={value.icon} /></span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                    {value.text}
                    </h4>
                  </div>
                </div>
              </li>
               )
           }
           )}
           
          </ul>
    )
}

export default ListComp