const iFetchName = async id => {
    try {
        return await getName(id);
    }
    catch(err) {
        throw err;
    }
    
}

// nested function
const getName = id => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(id%2===0){
            resolve(id+" Ira");
        }
        else reject("Name can't be found")
    },300);
});

exports.Utils = { iFetchName: iFetchName, getName : getName};