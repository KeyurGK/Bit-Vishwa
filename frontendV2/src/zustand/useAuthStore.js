import { create } from 'zustand';
import axios from 'axios';
import { API_KEY } from './apiKey';

const useAuthStore = create((set)=>({
    responseMessage:null,
    error:null,
    loading:false,



    signUpAccount: async (payload) => {
        set({ loading: true, responseMessage: null, error: null });
        try {
          const res = await axios.post(`${API_KEY}/bit-vishwa/v1/auth/signup`, payload);
          set({ responseMessage: res.data.message });
        } catch (error) {
          const message =
            error?.response?.data?.message || "Something went wrong during signup";
          set({ error: message });
        } finally {
          set({ loading: false });
        }
      },

    loginAccount: async(payload)=>{
        set({loading:true,responseMessage:null,error:null})
        try{
            const res = await axios.post(`${API_KEY}/bit-vishwa/v1/auth/login`,payload);
            console.log(res.data.message)
            set({
                responseMessage :res?.data.message
            })
             
        }catch(error){
          
            set({
                error:error?.response?.data?.message || "Something went wrong"
            })
        }finally{
            set({
                loading:false
            })
        }
    }
}))



export default useAuthStore;