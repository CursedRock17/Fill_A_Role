function usePaginateArray(pageNum:number, perPage:number, listToPaginate:Array<any>){
    if(pageNum && perPage && listToPaginate){
        const indexOfLastDoc = pageNum * perPage;
        const indexOfFirstDoc = indexOfLastDoc - perPage;
        const currentUsers = listToPaginate.slice(indexOfFirstDoc, indexOfLastDoc);
    
        return currentUsers
    }
    return []
}

export default usePaginateArray