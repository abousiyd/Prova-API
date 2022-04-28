import { sleep } from "sleepjs"

export const getStock = async (data: any): Promise<any> => {
    return await new Promise(async (res, rej) => {
        try {
            let parsedData = JSON.parse(data);
            if (!parsedData.Company) {
                rej(new Error('Falta especificar Company!'));
            }else if (parsedData.Company != process.env.COMPANY) {
                rej(new Error('Company no coincide con ningún valor conocido!'));
            }else if(!parsedData.Location_Filter) {
                rej(new Error('Falta especificar Location_Filter!'));
            }else if (parsedData.Location_Filter != process.env.LOCATION) {
                rej(new Error('Location_Filter no coincide con ningún valor conocido!'));
            }
            
            await sleep(200);
            switch (parsedData.ItemNo) {
                case '14715':
                    res([
                        {
                            Stock: 13
                        }
                    ]);
                    break;
                case 'AV0010C':
                    res([
                        {
                            Stock: 5
                        }
                    ]);
                    break;
                case 'AV0476C':
                    res([
                        {
                            Stock: 22
                        }
                    ]);
                    break;
                case 'AV0478C':
                    res([
                        {
                            Stock: 45
                        }
                    ]);
                    break;
                default:
                    res([]);
                    break;
            }
        } catch (e) {
            rej(e);
        }
    });
};