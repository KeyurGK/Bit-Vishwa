import { create } from 'zustand';
import axios from 'axios';
import { API_KEY } from './apiKey';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const useAuthStore = create((set)=>({
    responseMessage:null,
    error:null,
    loading:false,
    isAuthenticated:false,


    signUpAccount: async (payload,navigate) => {
        set({ loading: true, responseMessage: null, error: null });
        try {
          const res = await axios.post(`${API_KEY}/bit-vishwa/v1/auth/signup`, payload);
          set({ responseMessage: res.data.message
        });
        navigate("/login")
        toast.success(res.data.message)        
      } catch (error) {
          const message =
            error?.response?.data?.message || "Something went wrong during signup";
          set({ error: message });
          toast.error(message)
        } finally {
          set({ loading: false });
        }
      },

    loginAccount: async(payload,navigate)=>{
        set({loading:true,responseMessage:null,error:null,isAuthenticated:false})
        try{
            const res = await axios.post(`${API_KEY}/bit-vishwa/v1/auth/login`,payload);
          
            set({
                responseMessage :res?.data.message,
                isAuthenticated:true 
            })
             navigate("/home")
             toast.success(res.data.message)
        }catch(error){
          
            set({
                error:error?.response?.data?.message || "Something went wrong"
            })
        }finally{
            set({
                loading:false
            })
        }
    },

    logoutAccount: ()=>{
        set({isAuthenticated:false})
    }
}))



export default useAuthStore;