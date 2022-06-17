let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
    let getDistrictId = async function (req, res) {

    try {
        let id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${id} ${date}`)
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let weather = async function (req, res) {

    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
       
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=adb2a8fad42add0e8e6c6a023ee5517c`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        const tem=data.main["temp"]
        console.log(tem)
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getSortedCities=async function(res , res){
    try{
    let sortedcities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let emptyarray=[]
    for (i=0;i<sortedcities.length;i=i+1){
    let obj={sortedcities:sortedcities[i]}
    let options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${sortedcities[i]}&appid=adb2a8fad42add0e8e6c6a023ee5517c`
        
    }
    let result = await axios(options);
    console.log(result.data.main.temp)

    obj.temp=result.data.main.temp
    emptyarray.push(obj)
}
let sorted=emptyarray.sort(function(a,b){return a.temp-b.temp})
console.log(sorted)
res.status(200).send({status:true, data:sorted})
}
catch(error){
    console.log(error)
    res.status(500).send({status:true})
}}

let getMeme = async function (req, res) {
    try {
        let template = req.body.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        console.log(`query params are: ${template} ${text0} ${text1}`)
       
        // console.log(`body is : ${} `)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text0}& text1=${text1}&username=chewie12345&password=meme@123`,
            data: template
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }}
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictId = getDistrictId
module.exports.weather=weather
module.exports.getSortedCities=getSortedCities
module.exports.getMeme=getMeme