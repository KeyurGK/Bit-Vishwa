export const LoginValidation = (data)=>{
   
    const newErrors = {};
        // Email format check using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.emailId.trim()) {
          newErrors.emailId = "Email is required";
        } else if (!emailRegex.test(data.emailId)) {
          newErrors.emailId = "Invalid email format";
        }
      
        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,12}$/;
        if (!data.password.trim()) {
          newErrors.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) {
          newErrors.password =
            "Password must be 8-12 chars, include 1 uppercase letter, 1 number, and 1 special character";
        }



        return newErrors
}