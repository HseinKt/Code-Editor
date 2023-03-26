
const UseHttp =  async (url, method = "GET", body = "", header = {}) => {
    let data;
    try {
        const Response = await fetch(url,{
            method : method,
            headers: header,
            body: !!body ? body : null  
        }) || null;
        data = await Response.json();
        if (!Response.ok){
          throw new Error(data.message)
        }
    } catch (err) {

      console.log(err.message);
    }
    
    return data;
  };

export default UseHttp;
