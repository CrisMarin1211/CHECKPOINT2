export const getDataC = async () => {
    try{
        const dataC = await fetch ('https://catfact.ninja/fact').then((res)=> res.json());
        console.log (dataC);
        return dataC;
    }

    catch (error){
        console.log('error', error)
        return error;
    }
}