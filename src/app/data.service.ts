import { EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class DataService{
    database=[
        {
            exchangeName:"NYSE",
            symbol:"IBM",
            logo:"https://www.svgrepo.com/show/306216/ibm.svg",
            Name:"International Business Machines",
            currency:"USD",
            marketCap:"114.54B",
            regularMarketPreviousClose:129.66,
            regularMarketOpen:130.3,
            regularMarketChangePercent:"-1.44%",
            regularMarketChange:-1.87,
            regularMarketTime:1662148802,
            regularMarketPrice:127.79,
            regularMarketDayHigh:130.56,
            regularMarketDayLow:127.24,
            regularMarketVolume:"3.04M",
            currencySymbol:"$",
            marketState:"CLOSED",
            postMarketChangePercent:"0.10%",
            postMarketChange:0.12999725,
            postMarketPrice:127.92,
            address:"One New Orchard Road",
            city:"Armonk",
            state:"NY",
            zip:"10504",
            country:"United States",
            phone:"914 499 1900",
            website:"https://www.ibm.com",
            industry:"Information Technology Services",
            fullTimeEmployees:282100,

        },{
            exchangeName:"NasdaqGS",
            symbol:"TSLA",
            logo:"https://www.svgrepo.com/show/306845/tesla.svg",
            Name:"Tesla, Inc.",
            currency:"USD",
            marketCap:"846.69B",
            regularMarketPreviousClose:277.16,
            regularMarketOpen:281.065,
            regularMarketChangePercent:"-2.51%",
            regularMarketChange:-6.950012,
            regularMarketTime:1662148804,
            regularMarketPrice:270.21,
            regularMarketDayHigh:282.35,
            regularMarketDayLow:269.081,
            regularMarketVolume:"49.86M",
            currencySymbol:"$",
            marketState:"CLOSED",
            postMarketChangePercent:"-0.33%",
            postMarketChange:-0.8800049,
            postMarketPrice:269.33,
            address:"13101 Tesla Road",
            city:"Austin",
            state:"TX",
            zip:"78725",
            country:"United States",
            phone:"(512) 516-8177",
            website:"https://www.tesla.com",
            industry:"Auto Manufacturers",
            fullTimeEmployees:99290
        },{
            exchangeName:"NasdaqGS",
            symbol:"AMZN",
            logo:"https://www.svgrepo.com/show/313461/amazon.svg",
            Name:"Amazon.com, Inc.",
            currency:"USD",
            marketCap:"1.30T",
            regularMarketPreviousClose:127.82,
            regularMarketOpen:129.5,
            regularMarketChangePercent:"-0.24%",
            regularMarketChange:-0.30999756,
            regularMarketTime:1662148804,
            regularMarketPrice:127.51,
            regularMarketDayHigh:131.38,
            regularMarketDayLow:126.39,
            regularMarketVolume:"57.43M",
            currencySymbol:"$",
            marketState:"CLOSED",
            postMarketChangePercent:"0.24%",
            postMarketChange:0.30999756,
            postMarketPrice:127.82,
            address:"410 Terry Avenue North",
            city:"Seattle",
            state:"WA",
            zip:"98109-5210",
            country:"United States",
            phone:"206 266 1000",
            website:"https://www.amazon.com",
            industry:"Internet Retail",
            fullTimeEmployees:1523000
        },{
        exchangeName:"NasdaqGS",
        symbol:"AAPL"  ,
        logo:"https://www.svgrepo.com/show/7385/apple.svg",
        Name:"Apple Inc.",
        currency:"USD",
        marketCap:"2.49T",
        regularMarketPreviousClose:155.81,
        regularMarketOpen:156.47,
        regularMarketChangePercent:"-0.38%",
        regularMarketChange:-0.58999634,
        regularMarketTime:1662482800,
        postMarketChangePercent:"-0.03%",
        postMarketChange:-0.0399933,
        postMarketPrice:154.49,
        preMarketChangePercent:"-0.10%",
        preMarketChange:-0.16000366,
        preMarketTime:1662552865,
        preMarketPrice:154.37,regularMarketPrice:155.22,
        regularMarketDayHigh:157.09,
        regularMarketDayLow:153.73,
        regularMarketVolume:"38.84M",
        currencySymbol:"$",
        marketState:"REGULAR",
        address:"One Apple Park Way",
        city:"Cupertino",
        state:"CA",
        zip:"95014",
        country:"United States",
        phone:"408 996 1010",
        website:"https://www.apple.com",
        industry:"Consumer Electronics",
        fullTimeEmployees:154000,
        
        }
    ]

    news=[
        {
            "slug_name": "08dc-climatetrade",
            "section": "Business",
            "subsection": "Economy",
            "title": "Climate Change Could Worsen Supply Chain Turmoil",
            "abstract": "A drought that has crippled economic activity in southwestern China hints at the kind of disruption that climate change could wreak on global supply chains.",
            "uri": "nyt://article/eaf82976-1bbc-594b-9afb-28fea77f9e6f",
            "url": "https://www.nytimes.com/2022/09/08/business/economy/climate-change-supply-chain.html",
            "byline": "BY ANA SWANSON AND KEITH BRADSHER",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/01/business/00dc-climatetrade01/00dc-climatetrade01-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-08T05:00:16-04:00",
            "created_date": "2022-09-08T05:00:16-04:00",
            "published_date": "2022-09-08T05:00:16-04:00",
            "first_published_date": "2022-09-08T05:00:16-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Supply Chain",
                "Global Warming",
                "Drought",
                "International Trade and World Market",
                "Disasters and Emergencies"
            ],
            "org_facet": [
                "World Trade Organization"
            ],
            "per_facet": [
                "Okonjo-Iweala, Ngozi"
            ],
            "geo_facet": [
                "Chengdu (China)",
                "China",
                "Panama Canal and Canal Zone",
                "Russia",
                "Yangtze River (China)"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/01/business/00dc-climatetrade01/00dc-climatetrade01-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A drought in China has had ripple effects for businesses around the globe.",
                    "copyright": "Thomas Peter/Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/01/business/00dc-climatetrade01/merlin_211875591_59517a51-5e14-40a0-8614-dff1ebcf0fdc-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A drought in China has had ripple effects for businesses around the globe.",
                    "copyright": "Thomas Peter/Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/01/business/00dc-climatetrade01/merlin_211875591_59517a51-5e14-40a0-8614-dff1ebcf0fdc-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A drought in China has had ripple effects for businesses around the globe.",
                    "copyright": "Thomas Peter/Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/01/business/00dc-climatetrade01/00dc-climatetrade01-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A drought in China has had ripple effects for businesses around the globe.",
                    "copyright": "Thomas Peter/Reuters"
                }
            ]
        },
        {
            "slug_name": "08energy-markets",
            "section": "Business",
            "subsection": "",
            "title": "The Days of Energy Deregulation Are Over in Europe",
            "abstract": "As prices soar, Britain is poised on Thursday to join other countries in tightening control of gas and electricity markets, reversing years of free-market policies.",
            "uri": "nyt://article/99c685fc-a99b-5f9b-abcf-27da082a3648",
            "url": "https://www.nytimes.com/2022/09/08/business/energy-regulation-europe-britain.html",
            "byline": "BY STANLEY REED",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/08/business/08energy-markets-1/08energy-markets-1-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-08T05:05:25-04:00",
            "created_date": "2022-09-08T04:58:19-04:00",
            "published_date": "2022-09-08T04:58:19-04:00",
            "first_published_date": "2022-09-08T04:58:19-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Prices (Fares, Fees and Rates)",
                "Regulation and Deregulation of Industry",
                "Electric Light and Power",
                "Economic Conditions and Trends",
                "Russian Invasion of Ukraine (2022)",
                "Natural Gas"
            ],
            "org_facet": [
                "European Union"
            ],
            "per_facet": null,
            "geo_facet": [
                "Europe",
                "Great Britain"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/business/08energy-markets-1/08energy-markets-1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "In Britain, with energy bills scheduled to jump in October, the government is expected to announce a freeze on gas and electric bills.",
                    "copyright": "Alice Zoo for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/business/08energy-markets-1/08energy-markets-1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "In Britain, with energy bills scheduled to jump in October, the government is expected to announce a freeze on gas and electric bills.",
                    "copyright": "Alice Zoo for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/business/08energy-markets-1/08energy-markets-1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "In Britain, with energy bills scheduled to jump in October, the government is expected to announce a freeze on gas and electric bills.",
                    "copyright": "Alice Zoo for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/business/08energy-markets-1/merlin_211647696_678a2f0a-a41a-41c1-97c6-d4957a18519e-articleInline.jpg",
                    "format": "Normal",
                    "height": 152,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "In Britain, with energy bills scheduled to jump in October, the government is expected to announce a freeze on gas and electric bills.",
                    "copyright": "Alice Zoo for The New York Times"
                }
            ]
        },
        {
            "slug_name": "08global-econ",
            "section": "Business",
            "subsection": "Economy",
            "title": "Shock Waves Hit the Global Economy, Posing Grave Risk to Europe",
            "abstract": "The threat to Europe’s industrial might and living standards is particularly acute as policymakers race to decouple the continent from Russia’s power sources.",
            "uri": "nyt://article/e8facb25-2ee8-5d42-ad72-8fd3cd76d57e",
            "url": "https://www.nytimes.com/2022/09/08/business/economy/russia-ukraine-global-economy.html",
            "byline": "BY PATRICIA COHEN",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/business/08global-econ-1/08global-econ-1-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-08T04:31:50-04:00",
            "created_date": "2022-09-08T04:31:50-04:00",
            "published_date": "2022-09-08T04:31:50-04:00",
            "first_published_date": "2022-09-08T04:31:50-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Prices (Fares, Fees and Rates)",
                "War and Armed Conflicts",
                "Coronavirus (2019-nCoV)",
                "Economic Conditions and Trends",
                "United States Economy",
                "Interest Rates",
                "Oil (Petroleum) and Gasoline",
                "Recession and Depression",
                "Embargoes and Sanctions"
            ],
            "org_facet": [
                "European Central Bank",
                "European Commission",
                "Eurozone",
                "Federal Reserve System",
                "People's Bank of China"
            ],
            "per_facet": null,
            "geo_facet": [
                "China",
                "Europe",
                "Germany",
                "Great Britain",
                "United States"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/08global-econ-1/08global-econ-1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The Brandenburg Gate in Berlin last Thursday, the first day a new German energy conservation law went into effect. Under the law, monuments may no longer be illuminated at night.",
                    "copyright": "Carsten Koall/Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/08global-econ-1/merlin_212285793_c5105880-8108-40bb-aeca-196fd1969dbd-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The Brandenburg Gate in Berlin last Thursday, the first day a new German energy conservation law went into effect. Under the law, monuments may no longer be illuminated at night.",
                    "copyright": "Carsten Koall/Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/08global-econ-1/merlin_212285793_c5105880-8108-40bb-aeca-196fd1969dbd-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The Brandenburg Gate in Berlin last Thursday, the first day a new German energy conservation law went into effect. Under the law, monuments may no longer be illuminated at night.",
                    "copyright": "Carsten Koall/Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/08global-econ-1/merlin_212285793_c5105880-8108-40bb-aeca-196fd1969dbd-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The Brandenburg Gate in Berlin last Thursday, the first day a new German energy conservation law went into effect. Under the law, monuments may no longer be illuminated at night.",
                    "copyright": "Carsten Koall/Getty Images"
                }
            ]
        },
        {
            "slug_name": "07garrels",
            "section": "Business",
            "subsection": "Media",
            "title": "Anne Garrels, Fearless NPR Correspondent, Dies at 71",
            "abstract": "She reported on conflicts around the world and for a time was the only American broadcast journalist reporting from Baghdad during the U.S. “shock and awe” bombing campaign in 2003.",
            "uri": "nyt://article/de04dd57-99f4-5025-b5a3-1a6d5ad42ea2",
            "url": "https://www.nytimes.com/2022/09/07/business/media/anne-garrels-dead.html",
            "byline": "BY KATHARINE Q. SEELYE",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/08/obituaries/00Garrels2/00Garrels2-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T18:42:08-04:00",
            "created_date": "2022-09-07T17:59:35-04:00",
            "published_date": "2022-09-07T17:59:35-04:00",
            "first_published_date": "2022-09-07T17:59:35-04:00",
            "material_type_facet": "Obituary (Obit)",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Deaths (Obituaries)",
                "Radio",
                "News and News Media",
                "Iraq War (2003-11)",
                "Afghanistan War (2001- )"
            ],
            "org_facet": [
                "National Public Radio"
            ],
            "per_facet": [
                "Garrels, Anne"
            ],
            "geo_facet": [
                "Baghdad (Iraq)",
                "Iraq",
                "Afghanistan"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/obituaries/00Garrels2/00Garrels2-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The NPR correspondent Anne Garrels in Iraq in 2006. She became known for conveying how momentous events like wars affected the people who lived through them.",
                    "copyright": "Dianna Douglas/NPR"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/obituaries/00Garrels2/00Garrels2-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The NPR correspondent Anne Garrels in Iraq in 2006. She became known for conveying how momentous events like wars affected the people who lived through them.",
                    "copyright": "Dianna Douglas/NPR"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/obituaries/00Garrels2/00Garrels2-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The NPR correspondent Anne Garrels in Iraq in 2006. She became known for conveying how momentous events like wars affected the people who lived through them.",
                    "copyright": "Dianna Douglas/NPR"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/obituaries/00Garrels2/merlin_193641060_ab6aeb0f-4343-48a4-add9-7c0177e5c432-articleInline.jpg",
                    "format": "Normal",
                    "height": 143,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The NPR correspondent Anne Garrels in Iraq in 2006. She became known for conveying how momentous events like wars affected the people who lived through them.",
                    "copyright": "Dianna Douglas/NPR"
                }
            ]
        },
        {
            "slug_name": "07economy-briefing-boston-globe",
            "section": "Business",
            "subsection": "",
            "title": "Boston Globe Editor to Step Down",
            "abstract": "The editor, Brian McGrory, will become the chair of Boston University’s journalism department.",
            "uri": "nyt://article/5db61361-2881-5bf1-9b20-31c8c41445b9",
            "url": "https://www.nytimes.com/2022/09/07/business/boston-globe-brian-mcgrory.html",
            "byline": "BY KATIE ROBERTSON",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/08/multimedia/08brief-globe-mcgrory/08brief-globe-mcgrory-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T17:15:20-04:00",
            "created_date": "2022-09-07T17:07:07-04:00",
            "published_date": "2022-09-07T17:07:07-04:00",
            "first_published_date": "2022-09-07T17:07:07-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Appointments and Executive Changes",
                "News and News Media"
            ],
            "org_facet": [
                "Boston Globe",
                "New York Times Company"
            ],
            "per_facet": [
                "McGrory, Brian",
                "Henry, Linda Pizzuti"
            ],
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/multimedia/08brief-globe-mcgrory/08brief-globe-mcgrory-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Mr. McGrory, center, in the Globe newsroom in 2014 after a Pulitzer win. He will stay on until the end of this year or once a successor is in place.",
                    "copyright": "Suzanne Kreiter/Boston Globe, via Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/multimedia/08brief-globe-mcgrory/08brief-globe-mcgrory-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Mr. McGrory, center, in the Globe newsroom in 2014 after a Pulitzer win. He will stay on until the end of this year or once a successor is in place.",
                    "copyright": "Suzanne Kreiter/Boston Globe, via Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/multimedia/08brief-globe-mcgrory/08brief-globe-mcgrory-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Mr. McGrory, center, in the Globe newsroom in 2014 after a Pulitzer win. He will stay on until the end of this year or once a successor is in place.",
                    "copyright": "Suzanne Kreiter/Boston Globe, via Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/08/multimedia/08brief-globe-mcgrory/08brief-globe-mcgrory-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Mr. McGrory, center, in the Globe newsroom in 2014 after a Pulitzer win. He will stay on until the end of this year or once a successor is in place.",
                    "copyright": "Suzanne Kreiter/Boston Globe, via Reuters"
                }
            ]
        },
        {
            "slug_name": "07cineworld",
            "section": "Business",
            "subsection": "",
            "title": "Regal Cinemas’ parent, crippled by the pandemic, files for bankruptcy.",
            "abstract": "Cineworld, the world’s second-largest theater chain after AMC Theaters, said it would seek to reduce its debt through restructuring.",
            "uri": "nyt://article/ba946df0-f00a-5e4d-ba4f-1cd1f64ab1c8",
            "url": "https://www.nytimes.com/2022/09/07/business/regal-cinemas-cineworld-bankruptcy.html",
            "byline": "BY ISABELLA SIMONETTI AND JOE RENNISON",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/multimedia/07cineworld1/07cineworld1-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T13:33:18-04:00",
            "created_date": "2022-09-07T13:33:18-04:00",
            "published_date": "2022-09-07T13:33:18-04:00",
            "first_published_date": "2022-09-07T13:33:18-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Movies",
                "Company Reports",
                "Bankruptcies",
                "Theaters (Buildings)"
            ],
            "org_facet": [
                "Cineworld Group PLC",
                "Regal Cinemas"
            ],
            "per_facet": null,
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07cineworld1/07cineworld1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Cineworld, which operates the Regal Cinemas chain in the United States, said it had secured financing that would allow it to stay open.",
                    "copyright": "Nathan Bajar for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07cineworld1/07cineworld1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Cineworld, which operates the Regal Cinemas chain in the United States, said it had secured financing that would allow it to stay open.",
                    "copyright": "Nathan Bajar for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07cineworld1/07cineworld1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Cineworld, which operates the Regal Cinemas chain in the United States, said it had secured financing that would allow it to stay open.",
                    "copyright": "Nathan Bajar for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07cineworld1/07cineworld1-articleInline.jpg",
                    "format": "Normal",
                    "height": 136,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Cineworld, which operates the Regal Cinemas chain in the United States, said it had secured financing that would allow it to stay open.",
                    "copyright": "Nathan Bajar for The New York Times"
                }
            ]
        },
        {
            "slug_name": "07vice-saudi",
            "section": "Business",
            "subsection": "Media",
            "title": "Vice, Exploring a Sale, Weighs a Content Deal With a Saudi-Backed Firm",
            "abstract": "The company is in talks to develop a content partnership with MBC, a Saudi Arabian media giant partly owned by the government.",
            "uri": "nyt://article/ab8f8d62-059a-5b67-ae5d-152f3fbdcadd",
            "url": "https://www.nytimes.com/2022/09/07/business/media/vice-saudi-arabia.html",
            "byline": "BY BENJAMIN MULLIN, LAUREN HIRSCH AND BEN HUBBARD",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/business/07vice-saudi-04/07vice-saudi-04-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T14:26:24-04:00",
            "created_date": "2022-09-07T12:26:12-04:00",
            "published_date": "2022-09-07T12:26:12-04:00",
            "first_published_date": "2022-09-07T12:26:12-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Assassinations and Attempted Assassinations",
                "News and News Media",
                "Politics and Government",
                "Murders, Attempted Murders and Homicides",
                "Advertising and Marketing"
            ],
            "org_facet": [
                "Antenna Group Inc",
                "MBC Group",
                "Vice Media Inc"
            ],
            "per_facet": [
                "Dubuc, Nancy"
            ],
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07vice-saudi-04/07vice-saudi-04-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Vice Media Offices in Williamsburg in April, 2020.",
                    "copyright": "Stephen Speranza for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07vice-saudi-04/merlin_171378396_13f96372-127f-45a9-a5b7-1cda8d09dc13-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Vice Media Offices in Williamsburg in April, 2020.",
                    "copyright": "Stephen Speranza for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07vice-saudi-04/merlin_171378396_13f96372-127f-45a9-a5b7-1cda8d09dc13-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Vice Media Offices in Williamsburg in April, 2020.",
                    "copyright": "Stephen Speranza for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07vice-saudi-04/merlin_171378396_13f96372-127f-45a9-a5b7-1cda8d09dc13-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Vice Media Offices in Williamsburg in April, 2020.",
                    "copyright": "Stephen Speranza for The New York Times"
                }
            ]
        },
        {
            "slug_name": "07united-airlines-jfk",
            "section": "Business",
            "subsection": "",
            "title": "United Airlines Plans to Halt J.F.K. Service Unless It Gets More Slots",
            "abstract": "The carrier asked regulators to let it schedule more flights at the New York airport, where it resumed operations only last year.",
            "uri": "nyt://article/31754092-334a-5064-b9c5-d49ee8344fb2",
            "url": "https://www.nytimes.com/2022/09/07/business/united-airlines-jfk-airport.html",
            "byline": "BY NIRAJ CHOKSHI",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/business/07united-airlines-jfk/07united-airlines-jfk-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T15:18:51-04:00",
            "created_date": "2022-09-07T11:49:12-04:00",
            "published_date": "2022-09-07T11:49:12-04:00",
            "first_published_date": "2022-09-07T11:49:12-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Airlines and Airplanes",
                "Regulation and Deregulation of Industry",
                "Airports"
            ],
            "org_facet": [
                "Federal Aviation Administration",
                "United Airlines",
                "Kennedy International Airport (Queens, NY)"
            ],
            "per_facet": null,
            "geo_facet": [
                "New York City"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07united-airlines-jfk/07united-airlines-jfk-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "“If we are not able to get additional allocations for multiple seasons, we will need to suspend service at J.F.K., effective at the end of October,” United Airlines said in a staff memo.",
                    "copyright": "Gabriela Bhaskar/The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07united-airlines-jfk/merlin_195657525_d9cc3dcb-fb3e-4910-b934-3e86bf414e79-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "“If we are not able to get additional allocations for multiple seasons, we will need to suspend service at J.F.K., effective at the end of October,” United Airlines said in a staff memo.",
                    "copyright": "Gabriela Bhaskar/The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07united-airlines-jfk/merlin_195657525_d9cc3dcb-fb3e-4910-b934-3e86bf414e79-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "“If we are not able to get additional allocations for multiple seasons, we will need to suspend service at J.F.K., effective at the end of October,” United Airlines said in a staff memo.",
                    "copyright": "Gabriela Bhaskar/The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/07united-airlines-jfk/07united-airlines-jfk-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "“If we are not able to get additional allocations for multiple seasons, we will need to suspend service at J.F.K., effective at the end of October,” United Airlines said in a staff memo.",
                    "copyright": "Gabriela Bhaskar/The New York Times"
                }
            ]
        },
        {
            "slug_name": "07illumina-grail",
            "section": "Business",
            "subsection": "",
            "title": "Antitrust regulators expand their global reach.",
            "abstract": "The European Union’s competition authority blocked a merger of Illumina and Grail, even though Illumina said Grail had no business in Europe.",
            "uri": "nyt://article/0cf55509-5ebd-5eb1-8c5f-ab6c1603ca33",
            "url": "https://www.nytimes.com/2022/09/07/business/illumina-grail-antitrust.html",
            "byline": "BY EPHRAT LIVNI",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/multimedia/07illumina1/07illumina1-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T14:42:52-04:00",
            "created_date": "2022-09-07T09:58:02-04:00",
            "published_date": "2022-09-07T09:58:02-04:00",
            "first_published_date": "2022-09-07T09:58:02-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Antitrust Laws and Competition Issues",
                "Mergers, Acquisitions and Divestitures",
                "Regulation and Deregulation of Industry"
            ],
            "org_facet": [
                "European Commission",
                "Grail Inc",
                "Illumina and Life Technologies"
            ],
            "per_facet": null,
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07illumina1/07illumina1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Margrethe Vestager, competition commissioner for the European Commission, which blocked the merger of Illumina and Grail.",
                    "copyright": "Olivier Matthys/Associated Press"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07illumina1/07illumina1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Margrethe Vestager, competition commissioner for the European Commission, which blocked the merger of Illumina and Grail.",
                    "copyright": "Olivier Matthys/Associated Press"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07illumina1/07illumina1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Margrethe Vestager, competition commissioner for the European Commission, which blocked the merger of Illumina and Grail.",
                    "copyright": "Olivier Matthys/Associated Press"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07illumina1/07illumina1-articleInline.jpg",
                    "format": "Normal",
                    "height": 119,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Margrethe Vestager, competition commissioner for the European Commission, which blocked the merger of Illumina and Grail.",
                    "copyright": "Olivier Matthys/Associated Press"
                }
            ]
        },
        {
            "slug_name": "07DB-newsletter-web",
            "section": "Business",
            "subsection": "DealBook",
            "title": "Judge Hands Elon Musk a Win in Court",
            "abstract": "The billionaire can amend his lawsuit to include claims from a Twitter whistle-blower, but lost an effort to delay a trial over whether he could drop his bid to buy the company.",
            "uri": "nyt://article/57daf496-dab3-5063-845e-a0eb9ff1e15b",
            "url": "https://www.nytimes.com/2022/09/07/business/dealbook/elon-musk-twitter-dispute-court.html",
            "byline": "BY ANDREW ROSS SORKIN, VIVIAN GIANG, STEPHEN GANDEL, BERNHARD WARNER, MICHAEL J. DE LA MERCED, LAUREN HIRSCH AND EPHRAT LIVNI",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/multimedia/07DB-Musk/07DB-Musk-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T10:30:51-04:00",
            "created_date": "2022-09-07T08:12:51-04:00",
            "published_date": "2022-09-07T08:12:51-04:00",
            "first_published_date": "2022-09-07T08:12:51-04:00",
            "material_type_facet": "News",
            "kicker": "DealBook Newsletter",
            "subheadline": "",
            "des_facet": [
                "Antitrust Laws and Competition Issues"
            ],
            "org_facet": [
                "Apple Inc",
                "Bed Bath & Beyond Inc",
                "European Commission",
                "Illumina Inc",
                "Juul Labs Inc",
                "Twitter"
            ],
            "per_facet": [
                "Arnal, Gustavo (d 2022)",
                "Musk, Elon"
            ],
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07DB-Musk/07DB-Musk-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Early setbacks in court.",
                    "copyright": "Carina Johansen/Agence France-Presse, via Ntb/Afp Via Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07DB-Musk/07DB-Musk-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Early setbacks in court.",
                    "copyright": "Carina Johansen/Agence France-Presse, via Ntb/Afp Via Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07DB-Musk/07DB-Musk-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Early setbacks in court.",
                    "copyright": "Carina Johansen/Agence France-Presse, via Ntb/Afp Via Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07DB-Musk/07DB-Musk-articleInline.jpg",
                    "format": "Normal",
                    "height": 126,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Early setbacks in court.",
                    "copyright": "Carina Johansen/Agence France-Presse, via Ntb/Afp Via Getty Images"
                }
            ]
        },
        {
            "slug_name": "07economy-briefing-cali-bill-roundup",
            "section": "Business",
            "subsection": "",
            "title": "How policy changes in California could influence the nation.",
            "abstract": "The state has recently passed a number of bills that could shape legislation across the United States.",
            "uri": "nyt://article/b06beca6-36f5-5043-bed7-d902d2f669ba",
            "url": "https://www.nytimes.com/2022/09/07/business/california-policy-changes-newsom.html",
            "byline": "BY THOMAS LOTITO",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/multimedia/07catchup1/07catchup1-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T13:57:14-04:00",
            "created_date": "2022-09-07T05:02:04-04:00",
            "published_date": "2022-09-07T05:02:04-04:00",
            "first_published_date": "2022-09-07T05:02:04-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Fuel Emissions (Transportation)",
                "Regulation and Deregulation of Industry",
                "Law and Legislation",
                "Wages and Salaries",
                "Organized Labor"
            ],
            "org_facet": null,
            "per_facet": [
                "Newsom, Gavin"
            ],
            "geo_facet": [
                "California"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07catchup1/07catchup1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Some of the bills Gov. Gavin Newsom of California has signed into law will be felt across several industries.",
                    "copyright": "T.J. Kirkpatrick for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07catchup1/07catchup1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Some of the bills Gov. Gavin Newsom of California has signed into law will be felt across several industries.",
                    "copyright": "T.J. Kirkpatrick for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07catchup1/07catchup1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Some of the bills Gov. Gavin Newsom of California has signed into law will be felt across several industries.",
                    "copyright": "T.J. Kirkpatrick for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/multimedia/07catchup1/07catchup1-articleInline.jpg",
                    "format": "Normal",
                    "height": 131,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Some of the bills Gov. Gavin Newsom of California has signed into law will be felt across several industries.",
                    "copyright": "T.J. Kirkpatrick for The New York Times"
                }
            ]
        },
        {
            "slug_name": "07economy-briefing-india-economy-version",
            "section": "Business",
            "subsection": "",
            "title": "India’s economy bucks the global slowdown.",
            "abstract": "",
            "uri": "nyt://article/a8f8d707-ae8c-50f1-89b3-249a000a17b8",
            "url": "https://www.nytimes.com/live/2022/09/07/business/economy-news-inflation-stocks/indias-economy-bucks-the-global-slowdown",
            "byline": "",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-02/00india-economy-02-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T05:02:00-04:00",
            "created_date": "2022-09-07T05:02:00-04:00",
            "published_date": "2022-09-07T05:02:00-04:00",
            "first_published_date": "2022-09-07T05:02:00-04:00",
            "material_type_facet": "Live Blog Post",
            "kicker": "",
            "subheadline": "",
            "des_facet": null,
            "org_facet": null,
            "per_facet": null,
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-02/00india-economy-02-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "India’s purchases of discounted oil from Russia eased some effects of rising global energy prices.",
                    "copyright": "Rajanish Kakade/Associated Press"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-02/merlin_208481445_a6bd8477-c0ed-4714-9b4f-7ee2560ce8a1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "India’s purchases of discounted oil from Russia eased some effects of rising global energy prices.",
                    "copyright": "Rajanish Kakade/Associated Press"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-02/merlin_208481445_a6bd8477-c0ed-4714-9b4f-7ee2560ce8a1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "India’s purchases of discounted oil from Russia eased some effects of rising global energy prices.",
                    "copyright": "Rajanish Kakade/Associated Press"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-02/merlin_208481445_a6bd8477-c0ed-4714-9b4f-7ee2560ce8a1-articleInline.jpg",
                    "format": "Normal",
                    "height": 129,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "India’s purchases of discounted oil from Russia eased some effects of rising global energy prices.",
                    "copyright": "Rajanish Kakade/Associated Press"
                }
            ]
        },
        {
            "slug_name": "07robots-supply-chain",
            "section": "Business",
            "subsection": "",
            "title": "The Supply Chain Broke. Robots Are Supposed to Help Fix It.",
            "abstract": "The companies behind e-commerce are embracing automation as the means of transcending the limitations of humans.",
            "uri": "nyt://article/921c0888-4c1e-5ee1-9ec7-0f7652366221",
            "url": "https://www.nytimes.com/2022/09/07/business/robots-automation-supply-chain.html",
            "byline": "BY PETER S. GOODMAN",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/06/business/00Robots-Supply-Chain-1/00Robots-Supply-Chain-1-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T13:55:29-04:00",
            "created_date": "2022-09-07T05:00:38-04:00",
            "published_date": "2022-09-07T05:00:38-04:00",
            "first_published_date": "2022-09-07T05:00:38-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Supply Chain",
                "Robots and Robotics",
                "Shortages",
                "Labor and Jobs",
                "Coronavirus (2019-nCoV)"
            ],
            "org_facet": null,
            "per_facet": null,
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/00Robots-Supply-Chain-1/00Robots-Supply-Chain-1-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "LocusBots at Locus Robotics, a Massachusetts company that aims to automate warehouses with robots.",
                    "copyright": "Jessica Rinaldi/The Boston Globe via Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/00Robots-Supply-Chain-1/00Robots-Supply-Chain-1-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "LocusBots at Locus Robotics, a Massachusetts company that aims to automate warehouses with robots.",
                    "copyright": "Jessica Rinaldi/The Boston Globe via Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/00Robots-Supply-Chain-1/00Robots-Supply-Chain-1-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "LocusBots at Locus Robotics, a Massachusetts company that aims to automate warehouses with robots.",
                    "copyright": "Jessica Rinaldi/The Boston Globe via Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/00Robots-Supply-Chain-1/00Robots-Supply-Chain-1-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "LocusBots at Locus Robotics, a Massachusetts company that aims to automate warehouses with robots.",
                    "copyright": "Jessica Rinaldi/The Boston Globe via Getty Images"
                }
            ]
        },
        {
            "slug_name": "07russia-gas",
            "section": "Business",
            "subsection": "",
            "title": "How Russian Gas in Europe Is Dwindling",
            "abstract": "The fuel that once flowed freely has been abruptly reduced, sending prices soaring and forcing European governments to struggle for solutions.",
            "uri": "nyt://article/837b78b6-098b-505f-a68a-c7a0e8d99cb5",
            "url": "https://www.nytimes.com/2022/09/07/business/russia-gas-europe.html",
            "byline": "BY JASON KARAIAN AND KARL RUSSELL",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/06/business/06russia-gas-promo/06russia-gas-promo-thumbStandard.png",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T10:16:00-04:00",
            "created_date": "2022-09-07T05:00:36-04:00",
            "published_date": "2022-09-07T05:00:36-04:00",
            "first_published_date": "2022-09-07T05:00:36-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Natural Gas",
                "Embargoes and Sanctions",
                "Russian Invasion of Ukraine (2022)"
            ],
            "org_facet": [
                "European Union",
                "Gazprom"
            ],
            "per_facet": null,
            "geo_facet": [
                "Germany",
                "Russia"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06russia-gas-promo/06russia-gas-promo-thumbStandard.png",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06russia-gas-promo/06russia-gas-promo-mediumThreeByTwo210.png",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06russia-gas-promo/06russia-gas-promo-mediumThreeByTwo440.png",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06russia-gas-promo/06russia-gas-promo-articleInline.png",
                    "format": "Normal",
                    "height": 129,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "The New York Times"
                }
            ]
        },
        {
            "slug_name": "07india-economy",
            "section": "Business",
            "subsection": "",
            "title": "From the U.S. to China, Major Economies Are Stalling. But Not India.",
            "abstract": "The Indian government expects growth to exceed 7 percent this year, though that pace may be hard to sustain as the global economy continues to slow.",
            "uri": "nyt://article/f7f5e1bd-ffcb-541c-9285-b0a59db62524",
            "url": "https://www.nytimes.com/2022/09/07/business/india-economy.html",
            "byline": "BY MUJIB MASHAL AND SUHASINI RAJ",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-03/00india-economy-03-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T14:32:40-04:00",
            "created_date": "2022-09-07T04:02:33-04:00",
            "published_date": "2022-09-07T04:02:33-04:00",
            "first_published_date": "2022-09-07T04:02:33-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Economic Conditions and Trends",
                "Supply Chain"
            ],
            "org_facet": null,
            "per_facet": null,
            "geo_facet": [
                "India"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-03/00india-economy-03-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric scooter factory in the Indian state of Tamil Nadu last month.",
                    "copyright": "Atul Loke for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-03/merlin_212121243_00cbde46-f92d-4eb0-a572-865f8e0294b3-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric scooter factory in the Indian state of Tamil Nadu last month.",
                    "copyright": "Atul Loke for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-03/merlin_212121243_00cbde46-f92d-4eb0-a572-865f8e0294b3-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric scooter factory in the Indian state of Tamil Nadu last month.",
                    "copyright": "Atul Loke for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/world/00india-economy-03/merlin_212121243_00cbde46-f92d-4eb0-a572-865f8e0294b3-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric scooter factory in the Indian state of Tamil Nadu last month.",
                    "copyright": "Atul Loke for The New York Times"
                }
            ]
        },
        {
            "slug_name": "07energy-invest",
            "section": "Business",
            "subsection": "Energy & Environment ",
            "title": "Clean Energy Projects Surge After Climate Bill Passage",
            "abstract": "Investments in battery factories, solar panel manufacturing and mining will help the Biden administration meet targets for reducing greenhouse gases.",
            "uri": "nyt://article/d589601c-bcc4-5b94-9541-4e339e726e64",
            "url": "https://www.nytimes.com/2022/09/07/business/energy-environment/clean-energy-climate-bill.html",
            "byline": "BY JACK EWING AND IVAN PENN",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/business/00JPenergy-invest-print/00energy-invest01-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-07T15:59:41-04:00",
            "created_date": "2022-09-07T03:00:10-04:00",
            "published_date": "2022-09-07T03:00:10-04:00",
            "first_published_date": "2022-09-07T03:00:10-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Inflation Reduction Act of 2022",
                "Alternative and Renewable Energy",
                "Electric and Hybrid Vehicles",
                "Automobiles",
                "Solar Energy",
                "Batteries",
                "Supply Chain",
                "Lithium (Metal)",
                "United States Politics and Government"
            ],
            "org_facet": [
                "First Solar Inc",
                "Honda Motor Co Ltd",
                "LG Energy Solution",
                "Toyota Motor Corp"
            ],
            "per_facet": [
                "Biden, Joseph R Jr"
            ],
            "geo_facet": [
                "United States"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/00JPenergy-invest-print/00energy-invest01-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric battery plant in Commerce, Ga., operated by SK Battery America. Other companies have announced investments in similar factories in recent weeks.",
                    "copyright": "David Walter Banks for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/00JPenergy-invest-print/00energy-invest01-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric battery plant in Commerce, Ga., operated by SK Battery America. Other companies have announced investments in similar factories in recent weeks.",
                    "copyright": "David Walter Banks for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/00JPenergy-invest-print/00energy-invest01-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric battery plant in Commerce, Ga., operated by SK Battery America. Other companies have announced investments in similar factories in recent weeks.",
                    "copyright": "David Walter Banks for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/00JPenergy-invest-print/00energy-invest01-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "An electric battery plant in Commerce, Ga., operated by SK Battery America. Other companies have announced investments in similar factories in recent weeks.",
                    "copyright": "David Walter Banks for The New York Times"
                }
            ]
        },
        {
            "slug_name": "06nlrb-ruling",
            "section": "Business",
            "subsection": "Economy",
            "title": "Labor Board Proposes to Increase Legal Exposure for Franchised Chains",
            "abstract": "The move would make companies liable for labor law violations by franchise holders, an issue that has shifted with White House control.",
            "uri": "nyt://article/4bd99242-3400-53c2-9f83-4e9662d910f6",
            "url": "https://www.nytimes.com/2022/09/06/business/economy/nlrb-labor-law-fast-food.html",
            "byline": "BY NOAM SCHEIBER",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/07/business/06nlrb-ruling-print/06nlrb-ruling-01-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-06T14:49:55-04:00",
            "created_date": "2022-09-06T14:27:12-04:00",
            "published_date": "2022-09-06T14:27:12-04:00",
            "first_published_date": "2022-09-06T14:27:12-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Fast Food Industry",
                "Labor and Jobs",
                "Organized Labor",
                "Regulation and Deregulation of Industry",
                "Workplace Hazards and Violations",
                "Franchises"
            ],
            "org_facet": [
                "McDonald's Corporation",
                "National Labor Relations Board"
            ],
            "per_facet": null,
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/06nlrb-ruling-print/06nlrb-ruling-01-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Under a proposal, the National Labor Relations Board could hold a company like McDonald’s liable if a franchisee fired workers who tried to unionize, even if the company exercised only indirect control over workers.",
                    "copyright": "Scott McIntyre for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/06nlrb-ruling-print/merlin_208624680_a955ae8e-c501-41e8-9edd-e715925566aa-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Under a proposal, the National Labor Relations Board could hold a company like McDonald’s liable if a franchisee fired workers who tried to unionize, even if the company exercised only indirect control over workers.",
                    "copyright": "Scott McIntyre for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/06nlrb-ruling-print/merlin_208624680_a955ae8e-c501-41e8-9edd-e715925566aa-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Under a proposal, the National Labor Relations Board could hold a company like McDonald’s liable if a franchisee fired workers who tried to unionize, even if the company exercised only indirect control over workers.",
                    "copyright": "Scott McIntyre for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/07/business/06nlrb-ruling-print/06nlrb-ruling-01-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Under a proposal, the National Labor Relations Board could hold a company like McDonald’s liable if a franchisee fired workers who tried to unionize, even if the company exercised only indirect control over workers.",
                    "copyright": "Scott McIntyre for The New York Times"
                }
            ]
        },
        {
            "slug_name": "06trump-spac",
            "section": "Business",
            "subsection": "",
            "title": "Decision on Trump Media Merger Plan Is Deferred",
            "abstract": "The company that hoped to merge with Trump Media is set to hold a shareholder vote Thursday on extending the deadline to complete the deal, and has a backup plan.",
            "uri": "nyt://article/beead798-0b5d-532e-b66a-72e247921141",
            "url": "https://www.nytimes.com/2022/09/06/business/trump-media-merger.html",
            "byline": "BY MATTHEW GOLDSTEIN",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/06/business/06trump-spac/06trump-spac-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-06T23:02:07-04:00",
            "created_date": "2022-09-06T12:37:09-04:00",
            "published_date": "2022-09-06T12:37:09-04:00",
            "first_published_date": "2022-09-06T12:37:09-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Mergers, Acquisitions and Divestitures",
                "Social Media",
                "Initial Public Offerings"
            ],
            "org_facet": [
                "Digital World Acquisition Corp",
                "Truth Social (Social Network)",
                "Twitter",
                "Trump Media & Technology Group"
            ],
            "per_facet": [
                "Trump, Donald J"
            ],
            "geo_facet": null,
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06trump-spac/06trump-spac-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The deal’s potential collapse has raised questions about the future of Trump Media and its flagship social media app, Truth Social.",
                    "copyright": "Hannah Beier for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06trump-spac/06trump-spac-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The deal’s potential collapse has raised questions about the future of Trump Media and its flagship social media app, Truth Social.",
                    "copyright": "Hannah Beier for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06trump-spac/06trump-spac-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The deal’s potential collapse has raised questions about the future of Trump Media and its flagship social media app, Truth Social.",
                    "copyright": "Hannah Beier for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/business/06trump-spac/06trump-spac-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The deal’s potential collapse has raised questions about the future of Trump Media and its flagship social media app, Truth Social.",
                    "copyright": "Hannah Beier for The New York Times"
                }
            ]
        },
        {
            "slug_name": "06uk-pound",
            "section": "Business",
            "subsection": "",
            "title": "Britain’s Pound Wavers on Reports of Relief From Energy Bills",
            "abstract": "But analysts warn that investor confidence in Britain is waning as British assets have slumped.",
            "uri": "nyt://article/a8e8bc14-a22c-563e-bd01-a435dba5983c",
            "url": "https://www.nytimes.com/2022/09/06/business/uk-pound-energy-relief.html",
            "byline": "BY ESHE NELSON",
            "thumbnail_standard": "https://static01.nyt.com/images/2022/09/06/multimedia/06uk-pound/06uk-pound-thumbStandard.jpg",
            "item_type": "Article",
            "source": "New York Times",
            "updated_date": "2022-09-06T15:21:32-04:00",
            "created_date": "2022-09-06T10:46:26-04:00",
            "published_date": "2022-09-06T10:46:26-04:00",
            "first_published_date": "2022-09-06T10:46:26-04:00",
            "material_type_facet": "News",
            "kicker": "",
            "subheadline": "",
            "des_facet": [
                "Prices (Fares, Fees and Rates)",
                "Currency",
                "British Pound (Currency)",
                "Economic Conditions and Trends"
            ],
            "org_facet": null,
            "per_facet": null,
            "geo_facet": [
                "Great Britain"
            ],
            "related_urls": null,
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/multimedia/06uk-pound/06uk-pound-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The value of the British pound rose slightly on Tuesday.",
                    "copyright": "Dado Ruvic/Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/multimedia/06uk-pound/06uk-pound-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The value of the British pound rose slightly on Tuesday.",
                    "copyright": "Dado Ruvic/Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/multimedia/06uk-pound/06uk-pound-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The value of the British pound rose slightly on Tuesday.",
                    "copyright": "Dado Ruvic/Reuters"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/09/06/multimedia/06uk-pound/06uk-pound-articleInline.jpg",
                    "format": "Normal",
                    "height": 127,
                    "width": 190,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The value of the British pound rose slightly on Tuesday.",
                    "copyright": "Dado Ruvic/Reuters"
                }
            ]
        }
    ]


    focus :string;
    watchList=['AAPL','IBM','AMZN','TSLA']
    title = 'mano stock';
    cash_balance : number = localStorage.getItem('cash_balance')==undefined ? 50000 : parseFloat(localStorage.getItem('cash_balance'))
  
    username : string ='Manwil Zaki'
    profile_picture:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT988Z43slUspYNidwpAyclwiZbgH4rncI2yFBjz4jT&s'
    
    own=localStorage.getItem('own')==undefined ? {} : JSON.parse(localStorage.getItem('own'))
  
    total_asset_value : number = Object.keys(this.own).map(x=>this.getVal(x)).reduce(
        (previousValue, currentValue) => previousValue + currentValue,0);
        
    getData(){
        if(this.focus !== undefined){
            console.log(this.database[this.focus])
            return this.database[this.focus]
        }else{
            console.log('returning none')
            return null
        }
    }
    focusUpdate=new EventEmitter<string>()
    transactionUpdate=new EventEmitter<number>()

    setFocus(e:string){
        this.focus=e;
        this.focusUpdate.emit(this.focus)
    }

    getVal(item){
        let no_shares = this.own[item]
        let price_ps = this.database.filter(x=>x.symbol===item)[0].regularMarketPrice
        return no_shares * price_ps
      }

    Buy(ticker:string,no_of_Shares:number){
        console.log(ticker,no_of_Shares ," from service")
        if(Object.keys(this.own).includes(ticker)){
            this.own[ticker]+=no_of_Shares
            this.cash_balance -= this.database.filter(x=>x.symbol===ticker)[0].regularMarketPrice * no_of_Shares
            this.refresh()
            localStorage.setItem('own',JSON.stringify(this.own))
            localStorage.setItem('cash_balance',this.cash_balance.toString())
        }else{
            this.own[ticker]=no_of_Shares
        }
    }

    Sell(ticker : string,no_of_Shares : number){

        console.log(ticker,no_of_Shares ," from service")
        if(Object.keys(this.own).includes(ticker)){
            this.own[ticker]-=no_of_Shares
            this.cash_balance += this.database.filter(x=>x.symbol===ticker)[0].regularMarketPrice * no_of_Shares
            this.refresh()
            localStorage.setItem('own',JSON.stringify(this.own))
            localStorage.setItem('cash_balance',this.cash_balance.toString())

            
        }else{
            alert('You dont own any share to sell')
        }

    }
    
    refresh=()=>{
        let arr=Object.keys(this.own).map(x=>this.getVal(x))
        const initialValue = 0;

        this.total_asset_value = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
        );
        console.log('emitting')
        this.transactionUpdate.emit(this.cash_balance)
    }
}