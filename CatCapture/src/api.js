const API_END_PORINT = "https://cat-photos.edu-api.programmers.co.kr"

export const request = async (url) => {
    try{
        const res = await fetch(`${API_END_PORINT}${url}`)

        if(!res.ok){
            throw new Error('API Call Fail')
        }

        return await res.json()
    }catch(e){
        alert(e.message)
    }
}