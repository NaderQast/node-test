const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=df123ff3e9f77fd87a1473f61eb8a6fe&units=metric'
  
    request({url:url,json:true},(error,response) => {
        if(error){
            callback('unable to connect to weather service!',undefined)
        }else if(response.sys.error) {
            callback('unable to find address',undefined)

        }else{
            callback(undefined ,response.main[0]+' it is currently' + response.main[1]+' degree out. humadity is' +response.main[5]+'%')
        }
    })
}




module.exports = forecast 