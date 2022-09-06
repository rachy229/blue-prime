import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentDashboard from "../AgentDashboard/AgentDashboard";

function AgentLost() {

    const dispatch = useDispatch();

    const clientList = useSelector(store => store.clients.clientList);
    const agentId = useSelector(store => store.user.id)

    const [newStatus, setNewStatus] = useState(4);

    const handleStatusChange = (event) => {
        setNewStatus(event.target.value)
        console.log('newStatus', newStatus)

    }

    const handleStatusUpdate = (newStatus, id) => {
        console.log('newStatus:', newStatus);
        console.log('id to update', id);
        dispatch({type: 'UPDATE_CLIENT_STATUS', payload: {newStatus, id, agentId}})
    }

    const handleDelete = (id) => {
        console.log('id to delete', id)
        dispatch({type: 'DELETE_CLIENT', payload: {id, agentId}})
    }

    // return(
    //     <div>
    //         <AgentDashboard />
            
    //         {clientList.map(client => {
    //             if (client.status === 4) {
    //                 return (
    //                     <div key={client.id}>
    //                         <div
    //                             className="block p-8 m-9 transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10"
    //                         >
    //                             <h5>{client.first_name} {client.last_name}</h5>
    //                             <h6>Matched on: {client.matched_date}</h6>
    //                             <p>{client.email}</p>
    //                             <p>{client.phone_number}</p>
    //                             <p>{client.state} {client.zip_code}</p>

    //                             <div className="mt-8">
    //                                 <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
    //                                         Update Status
    //                                 </label>

    //                                 <select defaultValue={4} onChange={handleStatusChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    //                                     <option key={1} value="1" >Lead</option>
    //                                     <option key={2} value="2" >Potential</option>
    //                                     <option key={3} value="3" >Won</option>
    //                                     <option key={4} value="4" >Lost</option>
    //                                 </select>
    //                                 <button 
    //                                     className='mt-2 inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-center font-medium text-white hover:bg-blue-700'
    //                                     onClick={() => handleStatusUpdate(newStatus, client.client_id)}
    //                                         >Update
    //                                 </button>

    //                                 <button 
    //                                 className='ml-4 mt-2 inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-red-700'
    //                                     onClick={() => handleDelete(client.client_id)}
    //                                         >Delete
    //                                 </button>

                                    
    //                             </div>
    //                         </div>
    //                     </div>
    //                 )  
    //             }
    //     })}

    //     </div>
    // )

    return(
        <>
            <AgentDashboard />
            <section >
                <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
                    <div className='flex-col flex-wrap flex md:flex-row justify-space-between justify-center items-center mt-8'>

                        {clientList.map(client => {
                            if (client.status === 4) {
                                return (
                                    <div key={client.id}>
                                        <div 
                                            className="w-64 md:w-80 h-auto md:h-96 p-8 m-9 transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10"
                                            // onClick={() => handleClientClick(client.id)}
                                        >
                                            <h5 className="mb-4 text-xl text-center font-bold">{client.first_name} {client.last_name}</h5>
                                            <h6>Matched on: {client.matched_date}</h6>
                                            <p>{client.email}</p>
                                            <p>{client.phone_number}</p>
                                            <p>{client.state} {client.zip_code}</p>
                                            <p className="w-full">{client.comments}</p>

                                            <div className="mt-6">
                                                <label for="status" class="block text-sm font-medium text-gray-900 dark:text-gray-400">
                                                    Update Status
                                                </label>

                                                <div className="inline-block justify-center items-center">

                                                <select defaultValue={1} onChange={handleStatusChange} id="status" 
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option key={1} value="1" >Lead</option>
                                                        <option key={2} value="2" >Potential</option>
                                                        <option key={3} value="3" >Won</option>
                                                        <option key={4} value="4" >Lost</option>
                                                </select>
                                                <button 
                                                    className='mt-2 ml-4 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-center font-medium text-white hover:bg-blue-700'
                                                    onClick={() => handleStatusUpdate(newStatus, client.client_id)}>
                                                    Update
                                                </button>

                                                <div className='flex-col flex md:flex-row justify-space-between justify-center items-center mt-4'>
                                                    <button 
                                                        className='justify-center block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-red-700'
                                                        onClick={() => handleDelete(client.client_id)}
                                                            >Delete
                                                    </button>
                                                </div>

                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                )  
                            }
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgentLost;