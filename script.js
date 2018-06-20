$(function (){
    // console.log($)
    $.ajax({
        url : 'http://localhost:3222/meteo/Reunion',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('#r1').append('La température du jour à la Réunion:' +' '+ donnees.main.temp +'°C'+'</br>')
            // console.log(donnees);
            console.log(data.body);            // $('.met').append('<div> </div>')
      
        },     
           error: function () {
            console.log('La requête n\'a pas abouti');
        }

        
    })

    $.ajax({
        url : 'http://localhost:3222/meteo/Paris',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('#r2').append('La température du jour à Paris:' +' '+ donnees.main.temp + '°C' +'</br>')
            // console.log(donnees);
            console.log(data.body);            // $('.met').append('<div> </div>')
      
        },     
           error: function () {
            console.log('La requête n\'a pas abouti');
        }

        
    })
    $.ajax({
        url : 'http://localhost:3222/meteo/Marseille',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('#r3').append('La température du jour à Marseille :' +' '+ donnees.main.temp +'°C'+'</br>')
            // console.log(donnees);
            console.log(data.body);            // $('.met').append('<div> </div>')
      
        },     
           error: function () {
            console.log('La requête n\'a pas abouti');
        }

        
    })

    $.ajax({
        url : 'http://localhost:3222/meteo/Moscou',
        type : 'GET',
        dataType: 'json' ,
        success: function(data) {
            var  donnees = JSON.parse(data.body)
            $('#r4').append('La température du jour à Moscou:' +' '+ donnees.main.temp +'°C'+'</br>')
            // console.log(donnees);
            console.log(data.body);            // $('.met').append('<div> </div>')
      
        },     
           error: function () {
            console.log('La requête n\'a pas abouti');
        }

        
    })

})





    
        
        