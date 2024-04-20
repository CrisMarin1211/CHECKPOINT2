export const getDataCat = async (text: any) => {
    try{
        const dataCat = await fetch ('https://cataas.com/cat/says/'+ text).then((res)=> res.json());
        console.log (dataCat);
        return dataCat;
    }

    catch (error){
        console.log('error', error)
        return error;
    }
}