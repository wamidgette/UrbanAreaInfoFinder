/* INDEX
1."salaries_salariesJSON"
2. "details_categoriesJSON" 
3. "scores_categoriesJSON*/
/* Salaries */
const salaries_salariesJSON = [ /* array of objects */
    {
        "job": {
            "id": "ACCOUNT-MANAGER",
            "title": "Account Manager"
        },
        "salary_percentiles": {
            "percentile_25": 47915.004046350005,
            "percentile_50": 56938.96645080904,
            "percentile_75": 67662.43612022247
        }
    },
    {
        "job": {
            "id": "ACCOUNTANT",
            "title": "Accountant"
        },
        "salary_percentiles": {
            "percentile_25": 42301.25508773947,
            "percentile_50": 51098.24781348516,
            "percentile_75": 61724.66807882299
        }
    },
    {
        "job": {
            "id": "ADMINISTRATIVE-ASSISTANT",
            "title": "Administrative Assistant"
        },
        "salary_percentiles": {
            "percentile_25": 31566.06444856414,
            "percentile_50": 36550.43110763542,
            "percentile_75": 42321.84269695272
        }
    },
    {
        "job": {
            "id": "ARCHITECT",
            "title": "Architect"
        },
        "salary_percentiles": {
            "percentile_25": 36822.75721732488,
            "percentile_50": 44539.87175056646,
            "percentile_75": 53874.29745819096
        }
    },
    {
        "job": {
            "id": "ATTORNEY",
            "title": "Attorney"
        },
        "salary_percentiles": {
            "percentile_25": 44227.971228668226,
            "percentile_50": 56169.12953842418,
            "percentile_75": 71334.29423638697
        }
    },
    {
        "job": {
            "id": "BUSINESS-ANALYST",
            "title": "Business Analyst"
        },
        "salary_percentiles": {
            "percentile_25": 51315.541919301766,
            "percentile_50": 60738.3290896476,
            "percentile_75": 71891.37018963648
        }
    },
    {
        "job": {
            "id": "BUSINESS-DEVELOPMENT",
            "title": "Business Development"
        },
        "salary_percentiles": {
            "percentile_25": 62781.624955734274,
            "percentile_50": 75495.91562687175,
            "percentile_75": 90785.0550277793
        }
    },
    {
        "job": {
            "id": "C-LEVEL-EXECUTIVE",
            "title": "C Level Executive"
        },
        "salary_percentiles": {
            "percentile_25": 105990.19760777101,
            "percentile_50": 141526.50326115717,
            "percentile_75": 188977.39203631587
        }
    },
    {
        "job": {
            "id": "CASHIER",
            "title": "Cashier"
        },
        "salary_percentiles": {
            "percentile_25": 22860.46354228091,
            "percentile_50": 27706.071827537326,
            "percentile_75": 33578.77738099738
        }
    },
    {
        "job": {
            "id": "CHEF",
            "title": "Chef"
        },
        "salary_percentiles": {
            "percentile_25": 33406.595311072575,
            "percentile_50": 40894.81557707275,
            "percentile_75": 50061.54998766014
        }
    },
    {
        "job": {
            "id": "CHEMICAL-ENGINEER",
            "title": "Chemical Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 42361.64455305249,
            "percentile_50": 51667.06420076688,
            "percentile_75": 63016.56961837213
        }
    },
    {
        "job": {
            "id": "CIVIL-ENGINEER",
            "title": "Civil Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 46546.67239451894,
            "percentile_50": 56042.17281145669,
            "percentile_75": 67474.751080144
        }
    },
    {
        "job": {
            "id": "CONTENT-MARKETING",
            "title": "Content Marketing"
        },
        "salary_percentiles": {
            "percentile_25": 42322.92492285467,
            "percentile_50": 51304.3447557612,
            "percentile_75": 62191.72695686329
        }
    },
    {
        "job": {
            "id": "COPYWRITER",
            "title": "Copywriter"
        },
        "salary_percentiles": {
            "percentile_25": 37116.58470900082,
            "percentile_50": 44110.60119846477,
            "percentile_75": 52422.52630043723
        }
    },
    {
        "job": {
            "id": "CUSTOMER-SUPPORT",
            "title": "Customer Support"
        },
        "salary_percentiles": {
            "percentile_25": 34068.956308226996,
            "percentile_50": 38372.05585490427,
            "percentile_75": 43218.66091848353
        }
    },
    {
        "job": {
            "id": "DATA-ANALYST",
            "title": "Data Analyst"
        },
        "salary_percentiles": {
            "percentile_25": 47829.51389636572,
            "percentile_50": 57362.640918381956,
            "percentile_75": 68795.86065333712
        }
    },
    {
        "job": {
            "id": "DATA-SCIENTIST",
            "title": "Data Scientist"
        },
        "salary_percentiles": {
            "percentile_25": 60357.865843211715,
            "percentile_50": 68011.27740716003,
            "percentile_75": 76635.14589083003
        }
    },
    {
        "job": {
            "id": "DENTIST",
            "title": "Dentist"
        },
        "salary_percentiles": {
            "percentile_25": 56699.63649576607,
            "percentile_50": 73483.67239571286,
            "percentile_75": 95236.06221291513
        }
    },
    {
        "job": {
            "id": "ELECTRICAL-ENGINEER",
            "title": "Electrical Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 44934.90558729157,
            "percentile_50": 56074.320499032976,
            "percentile_75": 69975.20921280282
        }
    },
    {
        "job": {
            "id": "EXECUTIVE-ASSISTANT",
            "title": "Executive Assistant"
        },
        "salary_percentiles": {
            "percentile_25": 47088.09388551654,
            "percentile_50": 54159.63854823083,
            "percentile_75": 62293.165971138034
        }
    },
    {
        "job": {
            "id": "FASHION-DESIGNER",
            "title": "Fashion Designer"
        },
        "salary_percentiles": {
            "percentile_25": 33753.728691130666,
            "percentile_50": 42550.16166681461,
            "percentile_75": 53639.00013653312
        }
    },
    {
        "job": {
            "id": "FINANCE-MANAGER",
            "title": "Finance Manager"
        },
        "salary_percentiles": {
            "percentile_25": 52911.86573453394,
            "percentile_50": 64397.694094385,
            "percentile_75": 78376.80541223723
        }
    },
    {
        "job": {
            "id": "FINANCIAL-ANALYST",
            "title": "Financial Analyst"
        },
        "salary_percentiles": {
            "percentile_25": 52167.37646143349,
            "percentile_50": 62944.70768652338,
            "percentile_75": 75948.54283444649
        }
    },
    {
        "job": {
            "id": "GRAPHIC-DESIGNER",
            "title": "Graphic Designer"
        },
        "salary_percentiles": {
            "percentile_25": 32076.795851804927,
            "percentile_50": 36905.16109889642,
            "percentile_75": 42460.316860446634
        }
    },
    {
        "job": {
            "id": "HARDWARE-ENGINEER",
            "title": "Hardware Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 55268.13054052361,
            "percentile_50": 72165.49119622937,
            "percentile_75": 94228.95380502442
        }
    },
    {
        "job": {
            "id": "HUMAN-RESOURCES-MANAGER",
            "title": "Human Resources Manager"
        },
        "salary_percentiles": {
            "percentile_25": 43373.72270280458,
            "percentile_50": 54100.31042447499,
            "percentile_75": 67479.64909720108
        }
    },
    {
        "job": {
            "id": "IT-MANAGER",
            "title": "IT Manager"
        },
        "salary_percentiles": {
            "percentile_25": 68562.2521994947,
            "percentile_50": 83077.36077043308,
            "percentile_75": 100665.41939868711
        }
    },
    {
        "job": {
            "id": "INDUSTRIAL-DESIGNER",
            "title": "Industrial Designer"
        },
        "salary_percentiles": {
            "percentile_25": 37450.52594828059,
            "percentile_50": 43273.8498514911,
            "percentile_75": 50002.66440998731
        }
    },
    {
        "job": {
            "id": "INTERIOR-DESIGNER",
            "title": "Interior Designer"
        },
        "salary_percentiles": {
            "percentile_25": 48420.58540962599,
            "percentile_50": 56511.95217319762,
            "percentile_75": 65955.43427260772
        }
    },
    {
        "job": {
            "id": "LECTURER",
            "title": "Lecturer"
        },
        "salary_percentiles": {
            "percentile_25": 49507.83704434044,
            "percentile_50": 58065.004444533195,
            "percentile_75": 68101.23290427779
        }
    },
    {
        "job": {
            "id": "MARKETING-MANAGER",
            "title": "Marketing Manager"
        },
        "salary_percentiles": {
            "percentile_25": 47175.067428278206,
            "percentile_50": 59267.58393153486,
            "percentile_75": 74459.80888998028
        }
    },
    {
        "job": {
            "id": "MECHANICAL-ENGINEER",
            "title": "Mechanical Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 48436.30849210884,
            "percentile_50": 59137.83949176012,
            "percentile_75": 72203.76962300821
        }
    },
    {
        "job": {
            "id": "MOBILE-DEVELOPER",
            "title": "Mobile Developer"
        },
        "salary_percentiles": {
            "percentile_25": 54373.70059205179,
            "percentile_50": 66678.36886524111,
            "percentile_75": 81767.56090018747
        }
    },
    {
        "job": {
            "id": "NURSE",
            "title": "Nurse"
        },
        "salary_percentiles": {
            "percentile_25": 35905.42110229281,
            "percentile_50": 45492.47008946717,
            "percentile_75": 57639.341673363895
        }
    },
    {
        "job": {
            "id": "OFFICE-MANAGER",
            "title": "Office Manager"
        },
        "salary_percentiles": {
            "percentile_25": 37085.952429494,
            "percentile_50": 42873.02388454068,
            "percentile_75": 49563.13796979852
        }
    },
    {
        "job": {
            "id": "OPERATIONS-MANAGER",
            "title": "Operations Manager"
        },
        "salary_percentiles": {
            "percentile_25": 50767.50949216835,
            "percentile_50": 63379.227270415,
            "percentile_75": 79123.9611628888
        }
    },
    {
        "job": {
            "id": "PHARMACIST",
            "title": "Pharmacist"
        },
        "salary_percentiles": {
            "percentile_25": 39686.10876109721,
            "percentile_50": 50090.75304109966,
            "percentile_75": 63223.218868058815
        }
    },
    {
        "job": {
            "id": "PHYSICIAN",
            "title": "Physician"
        },
        "salary_percentiles": {
            "percentile_25": 57517.111958992726,
            "percentile_50": 81874.54947813803,
            "percentile_75": 116546.91315216493
        }
    },
    {
        "job": {
            "id": "POSTDOCTORAL-RESEARCHER",
            "title": "Postdoctoral Researcher"
        },
        "salary_percentiles": {
            "percentile_25": 51023.21524286854,
            "percentile_50": 56399.77482126237,
            "percentile_75": 62342.88812941275
        }
    },
    {
        "job": {
            "id": "PRODUCT-MANAGER",
            "title": "Product Manager"
        },
        "salary_percentiles": {
            "percentile_25": 58573.511176072745,
            "percentile_50": 69554.51578359894,
            "percentile_75": 82594.1721565629
        }
    },
    {
        "job": {
            "id": "PROJECT-MANAGER",
            "title": "Project Manager"
        },
        "salary_percentiles": {
            "percentile_25": 54825.22153090898,
            "percentile_50": 69022.23496722935,
            "percentile_75": 86895.57081288882
        }
    },
    {
        "job": {
            "id": "QA-ENGINEER",
            "title": "QA Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 41344.39047647068,
            "percentile_50": 48965.734342896874,
            "percentile_75": 57991.98179263672
        }
    },
    {
        "job": {
            "id": "RECEPTIONIST",
            "title": "Receptionist"
        },
        "salary_percentiles": {
            "percentile_25": 27022.56195084841,
            "percentile_50": 31007.22945711957,
            "percentile_75": 35579.46431412576
        }
    },
    {
        "job": {
            "id": "RESEARCH-SCIENTIST",
            "title": "Research Scientist"
        },
        "salary_percentiles": {
            "percentile_25": 42534.591169531435,
            "percentile_50": 49538.58150330056,
            "percentile_75": 57695.88915473256
        }
    },
    {
        "job": {
            "id": "SALES-MANAGER",
            "title": "Sales Manager"
        },
        "salary_percentiles": {
            "percentile_25": 51165.448977747845,
            "percentile_50": 66919.30577682995,
            "percentile_75": 87523.77972096871
        }
    },
    {
        "job": {
            "id": "SOFTWARE-ENGINEER",
            "title": "Software Engineer"
        },
        "salary_percentiles": {
            "percentile_25": 48334.60181461674,
            "percentile_50": 57981.48266977811,
            "percentile_75": 69553.74010279175
        }
    },
    {
        "job": {
            "id": "SYSTEMS-ADMINISTRATOR",
            "title": "Systems Administrator"
        },
        "salary_percentiles": {
            "percentile_25": 43885.25894035738,
            "percentile_50": 52346.59674591904,
            "percentile_75": 62439.33058715473
        }
    },
    {
        "job": {
            "id": "TEACHER",
            "title": "Teacher"
        },
        "salary_percentiles": {
            "percentile_25": 42506.85599632192,
            "percentile_50": 49604.62812908611,
            "percentile_75": 57887.58246523422
        }
    },
    {
        "job": {
            "id": "UX-DESIGNER",
            "title": "UX Designer"
        },
        "salary_percentiles": {
            "percentile_25": 52434.424622430946,
            "percentile_50": 64282.61013694962,
            "percentile_75": 78808.03490787842
        }
    },
    {
        "job": {
            "id": "WAITER",
            "title": "Waiter"
        },
        "salary_percentiles": {
            "percentile_25": 18110.067232764737,
            "percentile_50": 24167.530392770434,
            "percentile_75": 32251.09646356166
        }
    },
    {
        "job": {
            "id": "WEB-DESIGNER",
            "title": "Web Designer"
        },
        "salary_percentiles": {
            "percentile_25": 37598.21987926294,
            "percentile_50": 44548.728333253835,
            "percentile_75": 52784.12654862526
        }
    },
    {
        "job": {
            "id": "WEB-DEVELOPER",
            "title": "Web Developer"
        },
        "salary_percentiles": {
            "percentile_25": 42151.15225636141,
            "percentile_50": 50908.159077957105,
            "percentile_75": 61484.4558683555
        }
    }
]


const details_categoriesJSON = [/* array of objects */
    {
        "data": [
            {
                "float_value": 89.4,
                "id": "BUSINESS-FREEDOM",
                "label": "Business freedom",
                "type": "float"
            },
            {
                "float_value": 0.9589,
                "id": "BUSINESS-FREEDOM-TELESCORE",
                "label": "Business freedom [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 80,
                "id": "CORRUPTION-FREEDOM",
                "label": "Freedom from corruption",
                "type": "float"
            },
            {
                "float_value": 0.873,
                "id": "CORRUPTION-FREEDOM-TELESCORE",
                "label": "Freedom from corruption [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 77.2,
                "id": "LABOR-RESTRICTIONS",
                "label": "Lack of labor restrictions",
                "type": "float"
            },
            {
                "float_value": 0.7511,
                "id": "LABOR-RESTRICTIONS-TELESCORE",
                "label": "Lack of labor restrictions [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 2.5,
                "id": "TIME-TO-OPEN-BUSINESS",
                "label": "Time to open a business",
                "type": "float"
            },
            {
                "float_value": 0.988,
                "id": "TIME-TO-OPEN-BUSINESS-TELESCORE",
                "label": "Time to open a business [Teleport score]",
                "type": "float"
            }
        ],
        "id": "BUSINESS-FREEDOM",
        "label": "Business Freedom"
    },
    {
        "data": [
            {
                "float_value": 8.2237,
                "id": "POPULATION-SIZE",
                "label": "Urban area population (millions)",
                "type": "float"
            },
            {
                "float_value": 1217.079345703125,
                "id": "POPULATION-UA-CENTER-DENSITY",
                "label": "Population density in people/sq km in UA center.",
                "type": "float"
            },
            {
                "float_value": 343.4199527945821,
                "id": "POPULATION-UA-DENSITY",
                "label": "Population density in people/sq km over full UA as defined by bounding box.",
                "type": "float"
            }
        ],
        "id": "CITY-SIZE",
        "label": "City Size"
    },
    {
        "data": [
            {
                "float_value": 12.6,
                "id": "WEATHER-AV-DAY-LENGTH",
                "label": "Average day length (hours)",
                "type": "float"
            },
            {
                "id": "WEATHER-AVERAGE-HIGH",
                "label": "Average high temperature (Celsius)",
                "string_value": "19",
                "type": "string"
            },
            {
                "id": "WEATHER-AVERAGE-LOW",
                "label": "Average low temperature (Celsius)",
                "string_value": "9",
                "type": "string"
            },
            {
                "float_value": "16",
                "id": "WEATHER-SUNSHINE-AMOUNT",
                "label": "Average daily solar radiation (Mj/m²)",
                "type": "float"
            },
            {
                "id": "WEATHER-TYPE",
                "label": "Weather type",
                "string_value": "Marine West Coast Climate",
                "type": "string"
            }
        ],
        "id": "CLIMATE",
        "label": "Climate"
    },
    {
        "data": [
            {
                "float_value": 0.4798,
                "id": "CONSUMER-PRICE-INDEX-TELESCORE",
                "label": "Inflation [Teleport score]",
                "type": "float"
            },
            {
                "currency_dollar_value": 2.9,
                "id": "COST-APPLES",
                "label": "A kilogram of Apples",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 1.6,
                "id": "COST-BREAD",
                "label": "Bread",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 3.1,
                "id": "COST-CAPPUCCINO",
                "label": "A Cappuccino",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 16,
                "id": "COST-CINEMA",
                "label": "Movie ticket",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 62,
                "id": "COST-FITNESS-CLUB",
                "label": "Monthly fitness club membership",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 4,
                "id": "COST-IMPORT-BEER",
                "label": "A beer",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 110,
                "id": "COST-PUBLIC-TRANSPORT",
                "label": "Monthly public transport",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 12,
                "id": "COST-RESTAURANT-MEAL",
                "label": "Lunch",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 8.4,
                "id": "COST-TAXI",
                "label": "5km taxi ride",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 72.8,
                "id": "RESTAURANT-PRICE-INDEX",
                "label": "Price of a meal at a restaurant",
                "type": "currency_dollar"
            }
        ],
        "id": "COST-OF-LIVING",
        "label": "Cost of Living"
    },
    {
        "data": [
            {
                "float_value": 0.7879,
                "id": "CULTURE-ART-GALLERIES-TELESCORE",
                "label": "Art galleries [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-ART-GALLERIES-VENUE-COUNT",
                "int_value": 140,
                "label": "Art galleries",
                "type": "int"
            },
            {
                "float_value": 0.667,
                "id": "CULTURE-CINEMA-TELESCORE",
                "label": "Cinemas [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-CINEMAS-VENUE-COUNT",
                "int_value": 121,
                "label": "Cinemas",
                "type": "int"
            },
            {
                "float_value": 0.9212,
                "id": "CULTURE-COMEDY-CLUBS-TELESCORE",
                "label": "Comedy clubs [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-COMEDY-CLUBS-VENUE-COUNT",
                "int_value": 80,
                "label": "Comedy clubs",
                "type": "int"
            },
            {
                "float_value": 0.7019,
                "id": "CULTURE-CONCERTS-TELESCORE",
                "label": "Concerts [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-CONCERTS-VENUE-COUNT",
                "int_value": 177,
                "label": "Concert venues",
                "type": "int"
            },
            {
                "float_value": 0.6087,
                "id": "CULTURE-HISTORICAL-SITES-TELESCORE",
                "label": "Historical sites [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-HISTORICAL-SITES-VENUE-COUNT",
                "int_value": 93,
                "label": "Historical sites",
                "type": "int"
            },
            {
                "float_value": 0.6835,
                "id": "CULTURE-MUSEUMS-TELESCORE",
                "label": "Museums [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-MUSEUMS-VENUE-COUNT",
                "int_value": 87,
                "label": "Museums",
                "type": "int"
            },
            {
                "float_value": 0.6874,
                "id": "CULTURE-PERFORMING-ARTS-TELESCORE",
                "label": "Performing arts [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-PERFORMING-ARTS-VENUE-COUNT",
                "int_value": 156,
                "label": "Performing art venues",
                "type": "int"
            },
            {
                "float_value": 0.8008,
                "id": "CULTURE-SPORTS-TELESCORE",
                "label": "Sports [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-SPORTS-VENUE-COUNT",
                "int_value": 125,
                "label": "Sport venues",
                "type": "int"
            },
            {
                "float_value": 0.8769,
                "id": "CULTURE-ZOOS-TELESCORE",
                "label": "Zoos [Teleport score]",
                "type": "float"
            },
            {
                "id": "CULTURE-ZOOS-VENUE-COUNT",
                "int_value": 25,
                "label": "Zoos",
                "type": "int"
            }
        ],
        "id": "CULTURE",
        "label": "Leisure & Culture"
    },
    {
        "data": [
            {
                "id": "CURRENCY-URBAN-AREA",
                "label": "Currency for urban area",
                "string_value": "AUD",
                "type": "string"
            },
            {
                "float_value": 1.2617595852,
                "id": "CURRENCY-URBAN-AREA-EXCHANGE-RATE",
                "label": "Currency exchange rate per US dollar for urban area",
                "type": "float"
            },
            {
                "id": "GDP-GROWTH-RATE",
                "label": "GDP growth rate",
                "percent_value": 0.02709,
                "type": "percent"
            },
            {
                "float_value": 0.4709,
                "id": "GDP-GROWTH-RATE-TELESCORE",
                "label": "GDP growth rate [Teleport score]",
                "type": "float"
            },
            {
                "currency_dollar_value": 46433.299,
                "id": "GDP-PER-CAPITA",
                "label": "GDP per capita",
                "type": "currency_dollar"
            },
            {
                "float_value": 0.743,
                "id": "GDP-PER-CAPITA-TELESCORE",
                "label": "GDP per capita [Teleport score]",
                "type": "float"
            }
        ],
        "id": "ECONOMY",
        "label": "Economy"
    },
    {
        "data": [
            {
                "id": "PISA-DETAIL-HAPPINESS",
                "label": "Percent of happy students",
                "percent_value": 0.7833300363071177,
                "type": "percent"
            },
            {
                "id": "PISA-DETAIL-MATH-HIGH-PERFORMERS",
                "label": "Percent of top performers in PISA math test",
                "percent_value": 0.14809721892434197,
                "type": "percent"
            },
            {
                "id": "PISA-DETAIL-MATH-LOW-PERFORMERS",
                "label": "Percent of low performers in PISA math test",
                "percent_value": 0.19667145667681601,
                "type": "percent"
            },
            {
                "float_value": 499.80915498927027,
                "id": "PISA-DETAIL-MATH-MEAN-SCORES",
                "label": "Country mean scores in PISA math test",
                "type": "float"
            },
            {
                "id": "PISA-DETAIL-READING-HIGH-PERFORMERS",
                "label": "Percent of top performers in PISA reading test",
                "percent_value": 0.11747640145946246,
                "type": "percent"
            },
            {
                "id": "PISA-DETAIL-READING-LOW-PERFORMERS",
                "label": "Percent of low performers in PISA reading test",
                "percent_value": 0.1419246388819201,
                "type": "percent"
            },
            {
                "float_value": 511.8039976665101,
                "id": "PISA-DETAIL-READING-MEAN-SCORES",
                "label": "Country mean scores in PISA reading test",
                "type": "float"
            },
            {
                "id": "PISA-DETAIL-SCIENCE-HIGH-PERFORMERS",
                "label": "Percent of top performers in PISA science test",
                "percent_value": 0.1355659397447262,
                "type": "percent"
            },
            {
                "id": "PISA-DETAIL-SCIENCE-LOW-PERFORMERS",
                "label": "Percent of low performers in PISA science test",
                "percent_value": 0.13645793743681844,
                "type": "percent"
            },
            {
                "float_value": 521.4947463153187,
                "id": "PISA-DETAIL-SCIENCE-MEAN-SCORES",
                "label": "Country mean scores in PISA science test",
                "type": "float"
            },
            {
                "id": "PISA-MATHS-RANKING",
                "int_value": 19,
                "label": "PISA math ranking (high school)",
                "type": "int"
            },
            {
                "id": "PISA-RANKING",
                "int_value": 16,
                "label": "PISA ranking",
                "type": "int"
            },
            {
                "float_value": 0.8233,
                "id": "PISA-RANKING-TELESCORE",
                "label": "PISA ranking (high school) [Teleport score]",
                "type": "float"
            },
            {
                "id": "PISA-READING-RANKING",
                "int_value": 12,
                "label": "PISA reading (high school)",
                "type": "int"
            },
            {
                "id": "PISA-SCIENCE-RANKING",
                "int_value": 12,
                "label": "PISA science (high school)",
                "type": "int"
            },
            {
                "float_value": 0.4208,
                "id": "QUALITY-OF-UNIVERSITIES-TELESCORE",
                "label": "University quality [Teleport score]",
                "type": "float"
            },
            {
                "id": "UNIVERSITIES-BEST-RANKED-NAME",
                "label": "Best university in ranking",
                "string_value": "University of Melbourne",
                "type": "string"
            },
            {
                "id": "UNIVERSITIES-BEST-RANKED-RANK",
                "int_value": 33,
                "label": "Best university ranking",
                "type": "int"
            }
        ],
        "id": "EDUCATION",
        "label": "Education"
    },
    {
        "data": [
            {
                "float_value": 0.9337,
                "id": "HEALTHCARE-COST-TELESCORE",
                "label": "Healthcare expenditure [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 82.8448,
                "id": "HEALTHCARE-LIFE-EXPECTANCY",
                "label": "Life expectancy (years)",
                "type": "float"
            },
            {
                "float_value": 0.969,
                "id": "HEALTHCARE-LIFE-EXPECTANCY-TELESCORE",
                "label": "Life expectancy [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.8498,
                "id": "HEALTHCARE-QUALITY-TELESCORE",
                "label": "Healthcare quality [Teleport score]",
                "type": "float"
            }
        ],
        "id": "HEALTHCARE",
        "label": "Healthcare"
    },
    {
        "data": [
            {
                "currency_dollar_value": 1900,
                "id": "APARTMENT-RENT-LARGE",
                "label": "Large apartment",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 1600,
                "id": "APARTMENT-RENT-MEDIUM",
                "label": "Medium apartment",
                "type": "currency_dollar"
            },
            {
                "currency_dollar_value": 1300,
                "id": "APARTMENT-RENT-SMALL",
                "label": "Small apartment",
                "type": "currency_dollar"
            },
            {
                "float_value": 0.4987,
                "id": "RENT-INDEX-TELESCORE",
                "label": "Rent index [Teleport score]",
                "type": "float"
            }
        ],
        "id": "HOUSING",
        "label": "Housing"
    },
    {
        "data": [
            {
                "id": "ELDERLY-PEOPLE",
                "label": "Percent of elderly people (65+ years) in country",
                "percent_value": 0.001582,
                "type": "percent"
            },
            {
                "float_value": 82.2,
                "id": "LIFE-EXPECTANCY",
                "label": "Life expectancy at birth in country",
                "type": "float"
            },
            {
                "float_value": 38.6,
                "id": "MEDIAN-AGE",
                "label": "Median age in country",
                "type": "float"
            },
            {
                "id": "UNEMPLOYMENT-RATE",
                "label": "Unemployment rate in country",
                "percent_value": 0.00058,
                "type": "percent"
            }
        ],
        "id": "INTERNAL",
        "label": "Internal application use"
    },
    {
        "data": [
            {
                "id": "EMPLOYER-SOCIAL-TAXES-SOC-SEC",
                "label": "Employer social security taxes per employee",
                "percent_value": 0.0925,
                "type": "percent"
            },
            {
                "id": "STARTUP-JOBS-AVAILABLE",
                "int_value": 92,
                "label": "Startup jobs available",
                "type": "int"
            },
            {
                "float_value": 0.5943,
                "id": "STARTUP-JOBS-AVAILABLE-TELESCORE",
                "label": "Startup job availability [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.8321,
                "id": "STARTUP-SALARIES",
                "label": "Startup salary [Teleport score]",
                "type": "float"
            },
            {
                "currency_dollar_value": 75568,
                "id": "STARTUP-SALARIES-DETAIL",
                "label": "Startup salary",
                "type": "currency_dollar"
            }
        ],
        "id": "JOB-MARKET",
        "label": "Job Market"
    },
    {
        "data": [
            {
                "id": "ENGLISH-SKILLS-DETAIL",
                "int_value": 100,
                "label": "English skills",
                "type": "int"
            },
            {
                "float_value": 1,
                "id": "ENGLISH-SKILLS-TELESCORE",
                "label": "English skills [Teleport score]",
                "type": "float"
            },
            {
                "id": "SPOKEN-LANGUAGES",
                "label": "Spoken languages",
                "string_value": "English",
                "type": "string"
            }
        ],
        "id": "LANGUAGE",
        "label": "Language"
    },
    {
        "data": [
            {
                "id": "LGBT-DETAIL-ADOPTION",
                "label": "LGBT adoption rights",
                "string_value": "N/A",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-AGE-OF-CONSENT",
                "label": "LGBT age of consent",
                "string_value": "✔ Equal",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-CHANGING-GENDER",
                "label": "LGBT gender changing rights",
                "string_value": "✔ Legal, but requires surgery",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-CONVERSION-THERAPY",
                "label": "LGBT conversion therapy regulations",
                "string_value": "✔ Banned",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-DISCRIMINATION",
                "label": "LGBT discrimination legality",
                "string_value": "✔ Illegal",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-DONATING-BLOOD",
                "label": "LGBT blood donation regulations",
                "string_value": "✖ Banned (1-year deferral)",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-EMPLOYMENT-DISCRIMINATION",
                "label": "LGBT employment discrimination legality",
                "string_value": "✔ Sexual orientation and gender identity",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-HOMOSEXUALITY",
                "label": "LGBT homosexuality rights",
                "string_value": "✔ Legal",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-HOUSING-DISCRIMINATION",
                "label": "LGBT housing discrimination legality",
                "string_value": "✔ Sexual orientation and gender identity",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-MARRIAGE",
                "label": "LGBT marriage rights",
                "string_value": "Varies by Region",
                "type": "string"
            },
            {
                "id": "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR",
                "label": "Homosexuality acceptance (percent of the surveyed population in favor)",
                "percent_value": 0.79,
                "type": "percent"
            },
            {
                "float_value": 85.28,
                "id": "LGBT-INDEX",
                "label": "LGBT Equality Index",
                "type": "float"
            },
            {
                "float_value": 0.8718,
                "id": "LGBT-INDEX-TELESCORE",
                "label": "LGBT Equality Index [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.5283,
                "id": "TOLERANCE-TOWARDS-MINORITIES-TELESCORE",
                "label": "Tolerance towards minorities [Teleport score]",
                "type": "float"
            }
        ],
        "id": "MINORITIES",
        "label": "Tolerance"
    },
    {
        "data": [
            {
                "float_value": 29.56,
                "id": "NETWORK-DOWNLOAD",
                "label": "Download speed (Mbps)",
                "type": "float"
            },
            {
                "float_value": 0.468,
                "id": "NETWORK-DOWNLOAD-TELESCORE",
                "label": "Internet access (download) [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 21.39,
                "id": "NETWORK-UPLOAD",
                "label": "Upload speed (Mbps)",
                "type": "float"
            },
            {
                "float_value": 0.7112,
                "id": "NETWORK-UPLOAD-TELESCORE",
                "label": "Internet access (upload) [Teleport score]",
                "type": "float"
            }
        ],
        "id": "NETWORK",
        "label": "Internet Access"
    },
    {
        "data": [
            {
                "float_value": 31,
                "id": "ELEVATION",
                "label": "Urban area elevation (meters)",
                "type": "float"
            },
            {
                "float_value": 1,
                "id": "ELEVATION-HILLS",
                "label": "Presence of hills in city",
                "type": "float"
            },
            {
                "float_value": 1,
                "id": "ELEVATION-MOUNTAINS",
                "label": "Presence of mountains in city",
                "type": "float"
            },
            {
                "float_value": 574.5,
                "id": "ELEVATION-PEAKS",
                "label": "Median peak in meters",
                "type": "float"
            },
            {
                "float_value": 0.2406,
                "id": "ELEVATION-PEAKS-TELESCORE",
                "label": "Elevation (hills or mountains) [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 1,
                "id": "SEASIDE-ACCESS-TELESCORE",
                "label": "Water access [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 1,
                "id": "SEASIDE-SEASIDE",
                "label": "Seaside access",
                "type": "float"
            }
        ],
        "id": "OUTDOORS",
        "label": "Outdoors"
    },
    {
        "data": [
            {
                "float_value": 0.7747,
                "id": "AIR-POLLUTION-TELESCORE",
                "label": "Air quality [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.7122,
                "id": "CLEANLINESS-TELESCORE",
                "label": "Cleanliness [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.7942,
                "id": "DRINKING-WATER-QUALITY-TELESCORE",
                "label": "Drinking water quality [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.8755,
                "id": "URBAN-GREENERY-TELESCORE",
                "label": "Urban greenery [Teleport score]",
                "type": "float"
            }
        ],
        "id": "POLLUTION",
        "label": "Environmental Quality"
    },
    {
        "data": [
            {
                "float_value": 0.5564,
                "id": "CRIME-RATE-TELESCORE",
                "label": "Crime rate [Teleport score]",
                "type": "float"
            },
            {
                "id": "GUN-DEATH-RATE",
                "int_value": 0.93,
                "label": "Gun-related deaths per 100,000 residents per year",
                "type": "int"
            },
            {
                "float_value": 0.9762,
                "id": "GUN-DEATH-SCORE-TELESCORE",
                "label": "Lack of gun related deaths [Teleport score]",
                "type": "float"
            },
            {
                "id": "GUN-OWNERSHIP",
                "int_value": 24.1,
                "label": "Guns per 100 residents",
                "type": "int"
            },
            {
                "float_value": 0.8701,
                "id": "GUN-OWNERSHIP-SCORE-TELESCORE",
                "label": "Lack of guns [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.9232,
                "id": "GUN-SCORE-TELESCORE",
                "label": "Lack of guns and gun-related deaths [Teleport score]",
                "type": "float"
            }
        ],
        "id": "SAFETY",
        "label": "Safety"
    },
    {
        "data": [
            {
                "float_value": 0.6338,
                "id": "COWORKING-SPACES-TELESCORE",
                "label": "Coworking spaces [Teleport score]",
                "type": "float"
            },
            {
                "id": "EVENTS-COUNT",
                "int_value": 666,
                "label": "Startup events",
                "type": "int"
            },
            {
                "id": "EVENTS-LAST-12-MONTHS",
                "int_value": 2715,
                "label": "Number of startup events in the last 12 months",
                "type": "int"
            },
            {
                "float_value": 0.9599,
                "id": "EVENTS-TELESCORE",
                "label": "Startup events [Teleport score]",
                "type": "float"
            },
            {
                "id": "FUNDERBEAM-TOTAL-STARTUPS",
                "int_value": 1264,
                "label": "Total number of startups",
                "type": "int"
            },
            {
                "id": "MEETUPS-DETAIL-TOTAL-EVENTS",
                "int_value": 197,
                "label": "Number of upcoming meetup events",
                "type": "int"
            },
            {
                "id": "MEETUPS-GROUPS",
                "int_value": 199,
                "label": "Meetups groups",
                "type": "int"
            },
            {
                "id": "MEETUPS-MEMBERS",
                "int_value": 227060,
                "label": "Meetups members",
                "type": "int"
            },
            {
                "float_value": 0.9041,
                "id": "MEETUPS-TELESCORE",
                "label": "Meetups [Teleport score]",
                "type": "float"
            },
            {
                "id": "STARTUP-CLIMATE-INVESTORS",
                "int_value": 146,
                "label": "Number of investors",
                "type": "int"
            },
            {
                "id": "STARTUP-CLIMATE-NEW-STARTUPS",
                "int_value": 30,
                "label": "Average monthly increase in number of startups",
                "type": "int"
            },
            {
                "float_value": 0.7806,
                "id": "STARTUP-CLIMATE-NEW-STARTUPS-TELESCORE",
                "label": "Average monthly increase in number of startups [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.6567,
                "id": "STARTUP-CLIMATE-SCENE-TELESCORE",
                "label": "Startup climate scene [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.8602,
                "id": "STARTUP-CLIMATE-STARTUPS-TELESCORE",
                "label": "Startups [Teleport score]",
                "type": "float"
            },
            {
                "id": "WORKFROM-COWORKING-SPACES-COUNT",
                "int_value": 68,
                "label": "Coworking spaces on WorkFrom.co",
                "type": "int"
            }
        ],
        "id": "STARTUPS",
        "label": "Startups"
    },
    {
        "data": [
            {
                "id": "COMPANY-PROFIT-TAX-RATE",
                "label": "Profit tax (%% of profit)",
                "percent_value": 0.47600000000000003,
                "type": "percent"
            },
            {
                "float_value": 0.477,
                "id": "COMPANY-PROFIT-TAX-RATE-TELESCORE",
                "label": "Effective company profit tax rate on payouts as dividends [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.4407,
                "id": "INCOME-TAX-TELESCORE",
                "label": "Income tax level [Teleport score]",
                "type": "float"
            },
            {
                "id": "TAX-VAT",
                "label": "VAT (Sales Tax)",
                "percent_value": 0.1,
                "type": "percent"
            },
            {
                "id": "TIME-OVERHEAD-COMPANY-TAXES",
                "int_value": 105,
                "label": "Time overhead to file company taxes",
                "type": "int"
            }
        ],
        "id": "TAXATION",
        "label": "Taxation"
    },
    {
        "data": [
            {
                "id": "HUMAN-CITIES-PAGE-URLS",
                "label": "Human city page",
                "type": "url",
                "url_value": "http://cities.human.co/details/Australia/Melbourne"
            },
            {
                "float_value": 0.5862,
                "id": "TRAFFIC-INDEX-TELESCORE",
                "label": "Traffic handling [Teleport score]",
                "type": "float"
            }
        ],
        "id": "TRAFFIC",
        "label": "Commute"
    },
    {
        "data": [
            {
                "id": "AIRPORT-HUB-INDEX-DETAIL",
                "int_value": 56,
                "label": "Airport hub",
                "type": "int"
            },
            {
                "float_value": 0.3024,
                "id": "AIRPORT-HUB-TELESCORE",
                "label": "Airport hub [Teleport score]",
                "type": "float"
            },
            {
                "float_value": 0.2669,
                "id": "TRAIN-TRANSPORT-TELESCORE",
                "label": "Intercity train connectivity [Teleport score]",
                "type": "float"
            }
        ],
        "id": "TRAVEL-CONNECTIVITY",
        "label": "Travel Connectivity"
    },
    {
        "data": [
            {
                "float_value": 0.502,
                "id": "FUNDERBEAM-VENTURE-CAPITAL-TELESCORE",
                "label": "Venture capital [Teleport score]",
                "type": "float"
            },
            {
                "id": "FUNDING-ACCELERATOR-NAMES",
                "label": "Funding accelerator names",
                "string_value": "Melbourne Accelerator Program, angelcube",
                "type": "string"
            },
            {
                "id": "FUNDING-ACCELERATORS-DETAIL",
                "int_value": 2,
                "label": "Number of funding accelerators",
                "type": "int"
            }
        ],
        "id": "VENTURE-CAPITAL",
        "label": "Venture Capital"
    }
]

const scores_categoriesJSON = [
    {
        "color": "#f3c32c",
        "name": "Housing",
        "score_out_of_10": 4.829999999999999
    },
    {
        "color": "#f3d630",
        "name": "Cost of Living",
        "score_out_of_10": 4.798000000000001
    },
    {
        "color": "#f4eb33",
        "name": "Startups",
        "score_out_of_10": 8.204
    },
    {
        "color": "#d2ed31",
        "name": "Venture Capital",
        "score_out_of_10": 5.020000000000001
    },
    {
        "color": "#7adc29",
        "name": "Travel Connectivity",
        "score_out_of_10": 2.8465000000000003
    },
    {
        "color": "#36cc24",
        "name": "Commute",
        "score_out_of_10": 4.872
    },
    {
        "color": "#19ad51",
        "name": "Business Freedom",
        "score_out_of_10": 9.399666666666667
    },
    {
        "color": "#0d6999",
        "name": "Safety",
        "score_out_of_10": 7.1325
    },
    {
        "color": "#051fa5",
        "name": "Healthcare",
        "score_out_of_10": 9.175
    },
    {
        "color": "#150e78",
        "name": "Education",
        "score_out_of_10": 6.2204999999999995
    },
    {
        "color": "#3d14a4",
        "name": "Environmental Quality",
        "score_out_of_10": 7.891499999999999
    },
    {
        "color": "#5c14a1",
        "name": "Economy",
        "score_out_of_10": 6.0695000000000014
    },
    {
        "color": "#88149f",
        "name": "Taxation",
        "score_out_of_10": 4.5885
    },
    {
        "color": "#b9117d",
        "name": "Internet Access",
        "score_out_of_10": 5.896000000000001
    },
    {
        "color": "#d10d54",
        "name": "Leisure & Culture",
        "score_out_of_10": 6.461
    },
    {
        "color": "#e70c26",
        "name": "Tolerance",
        "score_out_of_10": 7.0005
    },
    {
        "color": "#f1351b",
        "name": "Outdoors",
        "score_out_of_10": 6.202999999999999
    }
]