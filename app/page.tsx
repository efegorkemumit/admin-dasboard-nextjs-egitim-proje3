'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const authData = localStorage.getItem("pocketbase_auth");
      if (authData) {
        const { token, model } = JSON.parse(authData);
        setUser(model)
      }
    }
    fetchUser();
  }, [])


  const handleLogout=()=>{
    localStorage.removeItem("pocketbase_auth");
    setUser(null);
    router.refresh();
    router.push("/")

  }

  return (
   
    <div>
      {user ?(
        <div className="flex flex-col ">
         <h1> {user.username}</h1>
         <h1>  {user.email}</h1>
         <h1> {user.id}</h1>

         <Button
          onClick={handleLogout}
          >Logout</Button>
        </div>
      ):(
        <div>user not login

         
        </div>
      )}


    </div>
  );
}
