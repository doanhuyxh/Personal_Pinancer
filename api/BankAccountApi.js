import ApiManager from "./ApiManager";
import async from "async";

async function getAllBankAccount () {
    try {
        const result = await ApiManager("/account/getdata",{
            header:{
                method:"GET"
            }
        });
        return result.data;
    }catch (err) {
        return err;
    }
}

export {getAllBankAccount}