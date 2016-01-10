'use strict';

module.exports = function() {
	var items = [
		{
		    title: '',
		    text: 'På dette billede ses tyske kampvogne køre ind i Aabenraa, 9. april 1940. Foto: Frihedsmuseet',
		    path: '1-Tyske-kampvogne.jpg'
		},
		{
		    title: '',
		    text: 'Tyske bombemaskiner over København 9. april 1940. På gaden ligger nedkastede flyveblade ”OPROP”. I baggrunden ses Paladsbiografen. Foto: Frihedsmuseet',
		    path: '2-Tyske-bombemaskiner.jpg'
		},
		{
		    title: '',
		    text: 'Tyske kampvogne foran Jørgensens Hotel i Horsens. Billedet er taget i dagene omkring 9. april 1940. Foto: Frihedsmuseet',
		    path: '3-Tyske-kampvogne-foran-Hotel-i-Horsens.jpg'
		},
		{
		    title: '',
		    text: 'Tyske Junkers 52 transportmaskiner over Limfjordsbroen i Ålborg. Foto: Frihedsmuseet',
		    path: '4-Tyske Junkers Ju 52 transportmaskiner.jpg'
		},
		{
		    title: '',
		    text: 'Tyske soldater på motorcykel foran Hotel d&#8217;Angleterre, hvor den tyske øverstkommanderende indrettede hovedkvarter d. 9. april 1940. Foto: Frihedsmuseet',
		    path: '5-Tyske soldater paa motorcykel.jpg'
		},
		{
		    title: '',
		    text: 'På dette billede ses Horsens Forsørgelsesanstalt. Billedet er taget i 1910. Foto: www.horsensbilleder.dk',
		    path: '6-Horsens-forsørgelsesanstalt.jpg'
		},
		{
		    title: '',
		    text: 'Et af gårdarealerne i Horsens Tvangsarbejdsanstalt. Muren til venstre i billedet adskilte mændenes gård fra kvindernes gård. Samkvem mellem mænd og kvinder var strengt forbudt på alle danske arbejdsanstalter. Billedet er taget i 1950. Foto: www.horsensbilleder.dk',
		    path: '7-Fussingsvej-1950.jpg'
		},
		{
		    title: '',
		    text: 'Indgangen til Arbejdsanstalten Sundholm. En lille flok af anstaltens godt 1000 grise kan skimtes i forgrunden til venstre. Grisene blev passet af de indlagte. Foto: Det Kongelige Bibliotek  ',
		    path: '8-Indgang-til-Sundholm.jpg'
		},
		{
		    title: '',
		    text: 'Svendborg Fattiggård set fra Ovinehøj, tidligere galgebakken, ca. 1910. Foto: Svendborg Byhistoriske Arkiv',
		    path: '9-historisk_billede.jpg'
		},
		{
		    title: '',
		    text: 'Kø ved et folkekøkken i Ålborg i 1943. Foto: Frihedsmuseet',
		    path: '10-Kø-ved-et-folkekøkken.jpg'
		},
		{
		    title: '',
		    text: 'Storebælt helt tilfrosset af is, så man kunne gå over bæltet. Foto: Frihedsmuseet',
		    path: '11-Storebælt-helt-tilfrosset-af-is.jpg'
		},
		{
		    title: '',
		    text: 'Seks indlagte mænd fotograferet på Svendborg Fattiggård af opsynsmand Frederik Andersen 6. juni 1936. Man kan ane opsynsmandens skygge i bunden af billedet. Foto: Svendborg Byhistoriske Arkiv',
		    path: '12-Indlagte-mænd.jpg'
		},
		{
		    title: '',
		    text: 'Indlagte mænd slår skærver på Arbejdsanstalten Sundholm. Foto: Det Kongelige Bibliotek',
		    path: '13-Sundholm-indlagte.jpg'
		},
		{
		    title: '',
		    text: 'En af Sundholms opsynsmænd sammen med en chauffør foran Arbejdsanstalten Sundholms lastvogn. Foto: Det Kongelige Bibliotek ',
		    path: '14-Arbejde-Sundholm.jpg'
		},
		{
		    title: '',
		    text: 'Fem indlagte på Svendborg Fattiggård foran skærvebunken i mændenes arbejdsgård. Knusning af skærver til sten var en vigtig arbejdsopgave på Fattiggården frem til 1942. I baggrunden ses tydeligt pigtråden på muren.  Billedet er taget af daværende opsynsmand Frederik Andersen. Svendborg Byhistoriske Arkiv.',
		    path: '15-Foranskærverne.jpg'
		},
		{
		    title: '',
		    text: 'På dette billede ses opsynsmand Frederik Andersen foran fattiggården 1936. Bemærk kasketten med forbogstaverne for Svendborg Arbejdsanstalt, S.A. Foto: Svendborg Byhistoriske Arkiv',
		    path: '16-Opsynsmand-Svendborg-1936.jpg'
		},
		{
		    title: '',
		    text: 'Opsynsmand, Sundholm ca. 1940. Nørre Sundby Lokalhistoriske Forening',
		    path: '17-Opsynsmand-Sundholm.jpg'
		},
		{
		    title: '',
		    text: 'Danske arbejdere på vej til Tyskland. Billedet er taget ved Københavns Hovedbanegård i 1940. Foto: Frihedsmuseet',
		    path: '18-Tysklandsarbejdere-hovedbanen.jpg'
		},
		{
		    title: '',
		    text: 'To tysklandsarbejdere på vej til Tyskland i 1942. Mændene medbringer deres egne arbejdsredskaber. Foto: Frihedsmuseet',
		    path: '19-Paa-vej-til-Tyskland.jpg'
		},
		{
		    title: '',
		    text: 'Sovesal for danske arbejdere i Tyskland. Bemærk de nazistiske faner i baggrunden. Foto: Frihedsmuseet.',
		    path: '20-sovesal-for-danske-arbejdere-i-Tyskland.jpg'
		},
		{
		    title: '',
		    text: 'Slagtere er ved at gøre klar til slagtningen af kvæg på Schlachthof Flensburg. Danske arbejdere arbejdede på dette slagteri under krigen. Foto: Slesvig Bibliotek',
		    path: '21-slagteri-i-Flensborg.jpg'
		},
		{
		    title: '',
		    text: 'Slagtere er i gang med at slagte kvæg på Schlachthof Flensburg. Foto: Slesvig Bibliotek ',
		    path: '22-slagteri-i-Flensborg-inde.jpg'
		},
		{
		    title: '',
		    text: 'En gruppe mænd foran en bus i Hamborg, formodentlig danske tysklandsarbejdere. I midten ses en tysk officer. Foto: Frihedsmuseet',
		    path: '23-Tysklandsarbejdere-foran-bus-i-Tyskland.jpg'
		}
		
	];

	this.getItems = function() {
		return items;
	};
};
