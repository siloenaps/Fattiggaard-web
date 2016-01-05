'use strict';

module.exports = function ($scope, $sce) {
    $scope.getItems = function(){
    	return $scope.items;
    }

    // $scope.items = [
    //     {title: 'Lorem ipsum dolor.', src: '1. Det fortæller jo.mp4'}
    // ];
    $scope.items = [
    	{id: 150761259, title: 'Baggrunden for tysklandsarbejde', text: 'I dette klip kan du se lektor i historie ved Syddansk Universitet Therkel Stræde fortælle om baggrunden for, hvordan danske arbejdere fik arbejde i Nazityskland. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS.'},
    	{id: 150761461, title: 'På hvervekontoret', text: 'I dette klip kan du se tysklandsarbejderen Karl Rasmussen fortælle om, hvordan han oplevede sit første besøg på et tysk hvervekontor. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS.'},
        {id: 150761626, title: 'I kulminen', text: 'I dette klip kan du se Karl Rasmussen og Martin Bagge Jørgensen fortælle om, hvordan det foregik, når de skulle møde på arbejde i minen Essen i Tyskland. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS.'},
        {id: 150762102, title: 'Forholdene i Tyskland', text: 'I dette klip kan du se lektor i historie Therkel Stræde fortælle om, hvordan de danske tysklandsarbejdere blev behandlet i Tyskland samt høre, hvordan Jens Christian Christensen og Martin Bagge Jørgensen oplevede forholdene. Ligeledes hvordan tvangsarbejdere blev behandlet. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS. '},
        {id: 150762315, title: 'Jeg havde ikke noget valg', text: 'I dette klip kan du se tidligere tysklandsarbejder Peter Otkjær fortælle om, hvordan hans familie så på, at han måtte tage til Tyskland for at arbejde og hvilke begrundelser, han havde for at tage af sted. Lektor i historie Therkel Stræde fortæller, at tysklandsarbejde ikke pålægges nogen ved direkte tvang fra danske myndigheders side, men at mange danske tysklandarbejdere oplever et indirekte pres. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS.'},
        {id: 150762393, title: 'Bombeangreb', text: 'I dette klip kan du se Christian Christensen fortælle om, hvordan det var at være med til at rydde op igen umiddelbart efter et bombeangreb i Tyskland under opsyn af en tysk befalingsmand. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS. '},
        {id: 150762511, title: 'Kvindelige tysklandsarbejdere', text: 'I dette klip kan du se lektor i historie Therkel Stræde fortælle om de danske kvinder, der rejste til Tyskland. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS.'},
        {id: 150762560, title: 'På kant med nazisterne', text: 'I dette klip kan du se, hvad der blandt andet kunne ske, hvis en tysklandsarbejder kom på kant med nazisterne. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS. '},
        {id: 150762647, title: 'De asociale', text: 'I dette klip kan du se lektor i historie Therkel Stræde fortælle om, hvordan danske og tyske myndigheder samarbejdede om at sortere i tysklandsarbejderne, så uønskede elementer ikke kom til Tyskland; tidligere straffede, kommunister og jøder eksempelvis. Klippet er fra tv-serien ”Tysklandsarbejderne”. Serien er produceret af Nexus Kommunikation A/S og Cicerone ApS. '},
    ];
};

