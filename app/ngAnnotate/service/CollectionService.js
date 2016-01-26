'use strict';

module.exports = function() {
  
  	// Articles ----------------------------------------------------------------
	var articles = [
		{
			text: [	'<b>Albert</b>',
					'I denne artikel kan du læse om tysklandsarbejderen Albert, der rejste til Tyskland fire gange under 2. verdenskrig. I Tyskland arbejdede han blandt andet på våbenfabrikken J.P. Sauer & Sohn i Suhl og som buschauffør i Berlin. Albert blev gentagne gange indlagt på Svendborg Fattiggård og Horsens Forsørgelsesanstalt under krigen.',],
			files: [
				{
					title:'Albert', 
					path:'./assets/pdf/Albert.pdf'
				}
			]
		},
		{
			text: [	
					'<b>Hvis situationen ændrer sig i morgen – Jødeforfølgelser i 30&rsquo;ernes Nazityskland</b>',
					'I artiklen kan man læse om en række af de uretfærdigheder, som de tyske jøder blev udsat for i 30&rsquo;ernes Tyskland samt om deres reaktioner på disse uretfærdigheder. Læs om den boykot, der kort efter Hitlers udnævnelse til Rigskansler blev udført af SA og SS, om Nürnberglovene og Krystalnatten.',],
			files: [
				{
					title:'Hvis situationen ændrer sig i morgen', 
					path:'./assets/pdf/Hvis-situationen-ændrer-sig-i-morgen_Jødeforfølgelser-i-30ernes-Nazityskland.pdf'
				}
			]
		},
		{
			text: [	
					'<b>Tysklandsarbejde</b>',
					'I denne artikel kan du bl.a. læse om baggrunden for tysklandsarbejde, hvorfor mange danskere lod sig hverve til arbejdet, om forholdende i Tyskland og om hvorfor mange tysklandsarbejdere helst ikke talte om, at de havde været afsted.'],
			files: [
				{
					title:'Tysklandsarbejde', 
					path:'./assets/pdf/Tysklandsarbejde.pdf'
				}
			]
		},
		{
			text: [	
					'<b>Fattigdomssyn i besættelsestidens Danmark</b>',
					'I denne artikel kan du læse lidt om den sociallovgivning, der var gældende i Danmark under besættelsen, hvilket fattigdomssyn den var udtryk for og om hvilke konsekvenser det havde at blive indlagt på en fattiggård eller arbejdsanstalt på denne tid.'],
			files: [
				{
					title:'Fattigdomssyn i besættelsestidens Danmark', 
					path:'./assets/pdf/Fattigdomssyn-i-besættelsestidens-Danmark.pdf'
				}
			]
		},
	];

	this.getArticles = function() {
		return articles;
	};

	// Texts/Sources -------------------------------------------------------------
	var texts = [
		{
			text: [	'<b>Reglementer for Svendborg Fattiggård, Horsens Forsørgelsesanstalt og Arbejdsanstalten Sundholm</b>',
					'Reglementerne for Svendborg Fattiggård, Horsens Forsørgelsesanstalt og Arbejdsanstalten Sundholm giver et indblik i, hvordan man ønskede at dagene skulle forløbe på anstalterne bl.a. hvilke regler man ønskede overholdt, dagens tidsinddeling og straffe for overtrædelse af reglementernes paragrafer. Udvalgte paragrafer i reglementerne blev ophængt på anstalterne på steder, hvor de indlagte kunne se dem.'],
			files: [
				{
					title:'Reglement, Svendborg', 
					path:'./assets/pdf/Reglement_Svendborg.pdf'
				},
				{
					title:'Reglement, Horsens', 
					path:'./assets/pdf/Reglement_Horsens.pdf'
				},
				{
					title:'Reglement, Sundholm', 
					path:'./assets/pdf/Reglement_Sundholm.pdf'
				}]
		},
		{
			text: [	'<b>Steinckes Socialreform 1933</b>',
					'Udvalgte paragrafer fra Steinckes socialreform fra 1933. Paragrafferne giver, udover kendskab til datidens sociallovgivning, et godt billede af synet på de mennesker, som havde brug for hjælp fra det offentlige.'],
			files: [
				{
					title:'Lov Nr. 181 af 20. Maj 1933', 
					path:'./assets/pdf/LovNr181af20.Maj1933.pdf'
				}]
		},
		{
			text: [	'<b>Afhøringsskemaer</b>',
					'Når man blev indlagt på en fattiggård eller arbejdsanstalt, blev man som noget af det allerførste afhørt af stedets forvalter. De oplysninger, som blev givet under en sådan afhøring, noterede forvalteren ned i et afhøringsskema. Flere af de spørgsmål, som den afhørte blev afkrævet svar på, var meget personlige. Oplysningerne blev bl.a. brugt til at afgøre, i hvilken afdeling af anstalten den afhørte skulle indlægges. Afhøringsskemaerne blev udfyldt i forbindelse med indlæggelsen af Georg Emil Madsen d. 10. oktober 1939 og Georg Jensenius Johannes Andersen d. 8. juli 1940.'],
			files: [
				{
					title:'Afhøringsskema 8. juli 1940 - Georg Jensenius Johannes Andersen', 
					path:'./assets/pdf/Afhøringsskema8.juli1940-GeorgJenseniusJohannesAndersen.pdf'
				},
				{
					title: 'Afhøringsskema 10. oktober 1939 - Georg Emil Madsen',
					path: './assets/pdf/Afhøringsskema10.oktober1939-GeorgEmilMadsen.pdf'
				}]
		},
		{
			text: [	'<b>Annonce, Svendborg Avis</b>',
					'Jobannonce indrykket af det tyske hvervekontor - Svendborg Avis d. 16. april 1942.'],
			files: [
				{
					title:'Annonce i Svendborg avis', 
					path:'./assets/pdf/AnnonceiSvendborgavisd.torsdagd.16.april1942.jpg'
				}]
		},
		{
			text: [	'<b>Materiale om Peter Charles Sander</b>',
					'en mand, der gentagne gange blev indlagt på Svendborg Fattiggård. Kildematerialet er et eksempel på, hvordan eksempelvis en anholdelse for offentlig beruselse kunne medføre indlæggelse på en fattiggård. Sander forsøgte gentagne gange at få tilladelse til at forlade anstalten, men igen og igen fik han afslag. Sander var indespærret på Svendborg Fattiggård i otte måneder i 1940, besættelsestidens første år.',
					'<br/><br/>',
					'<b>Politirapporter</b>',
					'To politirapporter, der omhandler anholdelsen af Peter Charles Sander, der var indlagt på Svendborg Fattiggård flere gange. I begge tilfælde blev han anholdt for offentlig beruselse og indlagt på Svendborg Fattiggård efter afsoning af sin beruselsesdom. Tiggeri medførte også anholdelse og ofte indlæggelse på fattiggård eller arbejdsanstalt.'],
			files: [
				{
					title:'Politirapporter, Peter Sander', 
					path:'./assets/pdf/Politirapporter_PeterSander.pdf'
				}]
		},
		{
			text: [	'<b>Tre breve fra Peter Charles Sander til Svendborg socialudvalg </b>',
					'Hvordan kommer man ud af anstalten? I brevene kan man læse Peter Charles Sanders breve til Svendborg kommunes socialudvalg. I brevene beder Sander om tilladelse til at dimittere fra anstalten, men hver gang får han afslag.'],
			files: [
				{
					title:'Breve, Peter Sander', 
					path:'./assets/pdf/Breve_PeterSander.pdf'
				}]
		},
		{
			text: [	'<b>Afslag</b>',
					'Afslag fra Socialudvalget på Peter Charles Sanders anmodning inkl. begrundelse for afslaget. '],
			files: [
				{
					title:'Afslag, Peter Sander', 
					path:'./assets/pdf/Afslag_PeterSander.pdf'
				}]
		},
		{
			text: [	'<b>Kronik</b>',
					'I kronikken ”Skal Carina og Robert på fattiggården” fra 2013, sammenligner museumsinspektør Nils Valdersdorf Jensen synet på fattigdom før og nu.'],
			files: [
				{
					title:'Skal Carina og Robert på fattiggården - kronik i Information 13. april 2013', 
					path:'./assets/pdf/Carina-Robert-kronik-Information13.april2013.pdf'
				}]
		},
		{
			text: 	[	
						'<b>Skønlitteratur</b>',
						'&#34;Frydenholm&#34; af Hans Scherfig er en delvist dokumentarisk roman om Danmark under besættelsen 1940-45. Romanuddraget handler om tysklandsarbejde, og er et eksempel på, hvordan tysklandsarbejde og dem der hvervede sig til det, blev opfattet i lokalsamfundene. Frydenholm er udgivet af Gyldendal, første gang i 1962.'
					],
			files: 	[
						{
							title:'Hans Scherfig, Frydenholm', 
							path:'./assets/pdf/Hans-Scherfig_Frydenholm.pdf'
						}
					]
		},
		{
			text: 	[	
						'&#34;Planen&#34; af Morten Pape er en delvist dokumentarisk roman baseret på forfatterens egen opvækst i Urbanplanen på Amager. en handler, blandt meget andet, om at have store drømme og ambitioner under svære vilkår. I uddraget diskuterer romanens hovedperson 2. verdenskrig med en nær ven med somaliske rødder. ”Planen” er udgivet af Politikens Forlag i 2015.'
					],
			files: 	[
						{
							title:'Morten Pape, Planen', 
							path:'./assets/pdf/Morten-Pape_Planen.pdf'
						}
					]
		},
	];

	this.getTexts = function() {
		return texts;
	};
};
