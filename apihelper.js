import axios from "axios";
const URL="wherever-unknown.codedamn.app:1338"
const POST=async(body,url)=>{
  const auth=JSON.parse(localStorage.getItem("data")).jwt
  const res = await axios.post(
    `https://${URL}/api/${url}`, 
    body,
    {headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return res;
}

const GET=async(url)=>{
  const auth=localStorage.getItem("jwt")
  const res = await axios({
    medthod:"get",
    url:`https://${URL}/api/${url}`, 
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return res;
}
const PUT=async(url)=>{
  const auth=localStorage.getItem("jwt")
  const res = await axios.put(
    `https://${URL}/api/${url}`, null,
    { headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  return res;
}
const DEL=async(url)=>{
  const auth=localStorage.getItem("jwt")
  const res = await axios.delete(
    `https://${URL}/api/${url}`,
    { headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  return res;
}
export {POST,GET,PUT,DEL}