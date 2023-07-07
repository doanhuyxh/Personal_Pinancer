import ApiManager from "./ApiManager";


async function getTotalTransaction(){
    try {
        const result = await ApiManager("/",{
            method:"GET"
        });
        return result.data;
    }
    catch (err){
        console.log(err)
    }
}