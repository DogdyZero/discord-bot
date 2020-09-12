const { DataResolver } = require('discord.js')
const { google } = require('googleapis')
const key = require('./credentials.json')

async function initApi() {
    const client = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    )
    let token = client.authorize();
    // client.authorize(function (err, token) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log('connected')
    //         gsrun(client)
    //     }
    // })
    if(token)
        return client;
    return false;
}

async function gsrun(cl) {
    const gsapi = google.sheets({ version: 'v4', auth: cl })
    const opt = {
        spreadsheetId: '1FJo4EHFqJZ5wglQaGo1V_lh21wooP_08b53oS4Rhv_c',
        range: 'A:E'
    }

    let dataSheet = await gsapi.spreadsheets.values.get(opt)
    return dataSheet.data.values;

}
exports.init = async function () {
    let client = await initApi();
    if(client){
        return await gsrun(client)
    }else{
        throw new Error("Erro ao acessar API")
    } 
}



