export const iFetchName = async id => {
    try {
        return await getName(id).catch(err=>err);
    }
    catch(err) {
        throw err;
    }
    
}

// nested function
export const getName = id => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(id%2===0){
            resolve(id+" Ira");
        }
        else reject("Name can't be found")
    },300);
});