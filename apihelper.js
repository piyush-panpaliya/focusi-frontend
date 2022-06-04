import axios from "axios";

const POST=async(body,url,method)=>{
  const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliNTQ4NzFmMDZhYjJkMjhlNDc0MDYiLCJpYXQiOjE2NTQzNDY4ODgsImV4cCI6MTY2MjEyMjg4OH0.lsYdiE9GTUGkrHXabstEH6mCwl523TSOB7re9hW4Q6M"
  const res = await axios({
    medthod:method,
    url:`sight-day.codedamn.app:1338/api/${url}`, 
    data:body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return res;
}

const GET=async(url)=>{
  const auth="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjliNTQ4NzFmMDZhYjJkMjhlNDc0MDYiLCJpYXQiOjE2NTQzNDY4ODgsImV4cCI6MTY2MjEyMjg4OH0.lsYdiE9GTUGkrHXabstEH6mCwl523TSOB7re9hW4Q6M"
  const res = await axios({
    medthod:"get",
    url:`sight-day.codedamn.app:1338/api/${url}`, 
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  return res;
}
export {POST,GET}