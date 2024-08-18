import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
   const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Raheemullah8")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className="flex flex-wrap justify-around items-center h-auto w-screen bg-slate-700">
        <div>
          <img className="w-80 rounded-full" src={data.avatar_url} alt="" />
        </div>
        <div>
          <p className="text-white text-2xl">UserName : <span className="text-green-600 font-bold"  >{data.name}</span></p>
        </div>
        <div>
          <p className="text-white text-2xl">Github-Follower :  <span className="text-green-600 font-bold" >{data.followers}</span></p>
        </div>
        <div>
          <p className="text-white text-2xl">Github-Following : <span className="text-green-600 font-bold"  >{data.following}</span></p>
        </div>
      </div>
    </>
  );
}

export default Github;


export  const githubInfoLoder = async()=>{
   const response = await fetch("https://api.github.com/users/Raheemullah8")
   return response.json();

}
