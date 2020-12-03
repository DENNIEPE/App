import bcrpyt from "bcrypt-nodejs";
const salts = bcrpyt.genSaltSync(10);

const hashpass = {
    hash_password : function(password){
     return bcrpyt.hashSync(password,salts);   
    },
    compare_password : function(confirm_password,h_password){
     return bcrpyt.compareSync(confirm_password,h_password);
    }
}

export default hashpass