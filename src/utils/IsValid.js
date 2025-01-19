export const isValid = (INemail , UPemail , password , confirmPassword , name , phone , isSignIn) => {

    const isemailvalid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(INemail);
    const isemailvalid2 =/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(UPemail);
    const ispasswordvalid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);
    const isConfirmPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(confirmPassword);
    const isValidName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
    const isValidPhone = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/.test(phone);


    if(isSignIn){
    if(!isemailvalid) return "Email is not valid";
    if(!ispasswordvalid) return "Password is not valid";
    }
    // if(!isConfirmPasswordValid) return "Password does not match";

    if(!isSignIn){
    if(!isemailvalid2) return "Email is not valid";
    if(!isValidName) return "Name is not valid";
    if(!isValidPhone) return "Phone number is not valid";
    if(isConfirmPasswordValid !== ispasswordvalid) return "Password does not match";
    }

    return null;
}