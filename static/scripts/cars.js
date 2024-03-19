export class Cars {
  constructor() {
    this.listCars = [
      {
        id: 1,
        price: 120000,
        image: "toyota-corolla.jpg",
        brand: "Toyota",
        year: 2018,
        model: "Corolla",
        generation: "XVII",
        enginePower: "120 KM",
        mileage: "50 000 km",
        shortDescription:
          "Solidny sedan klasy kompaktowej, idealny dla rodzin.",
      },
      {
        id: 2,
        price: 250000,
        image: "bmw_5series.jpg",
        brand: "BMW",
        year: 2020,
        model: "5 Series",
        generation: "G30",
        enginePower: "200 KM",
        mileage: "30 000 km",
        shortDescription:
          "Elegancki sedan z potężnym silnikiem, oferujący doskonałą wydajność.",
      },
      {
        id: 3,
        price: 150000,
        image: "volkswagen_golf.jpg",
        brand: "Volkswagen",
        year: 2019,
        model: "Golf",
        generation: "VII",
        enginePower: "110 KM",
        mileage: "40 000 km",
        shortDescription:
          "Popularny hatchback z bogatym wyposażeniem, idealny do jazdy miejskiej.",
      },
      {
        id: 4,
        price: 300000,
        image: "mercedes_eclass.jpg",
        brand: "Mercedes-Benz",
        year: 2021,
        model: "E-Class",
        generation: "W213",
        enginePower: "250 KM",
        mileage: "20 000 km",
        shortDescription:
          "Luksusowy sedan oferujący najnowsze technologie i komfort na najwyższym poziomie.",
      },
      {
        id: 5,
        price: 140000,
        image: "ford_focus.jpg",
        brand: "Ford",
        year: 2017,
        model: "Focus",
        generation: "MK4",
        enginePower: "130 KM",
        mileage: "60 000 km",
        shortDescription:
          "Dynamiczny samochód kompaktowy z rewelacyjną dynamiką jazdy.",
      },
      {
        id: 6,
        price: 200000,
        image: "audi_a4.jpg",
        brand: "Audi",
        year: 2020,
        model: "A4",
        generation: "B9",
        enginePower: "190 KM",
        mileage: "25 000 km",
        shortDescription:
          "Elegancki sedan z sportowymi osiągami i wyrafinowanym wnętrzem.",
      },
      {
        id: 7,
        price: 130000,
        image: "honda_civic.jpg",
        brand: "Honda",
        year: 2019,
        model: "Civic",
        generation: "X",
        enginePower: "150 KM",
        mileage: "35 000 km",
        shortDescription:
          "Dynamiczny i ekonomiczny samochód miejski, idealny dla osób ceniących się na wydajność.",
      },
      {
        id: 8,
        price: 270000,
        image: "volvo_xc90.jpg",
        brand: "Volvo",
        year: 2021,
        model: "XC90",
        generation: "II",
        enginePower: "220 KM",
        mileage: "15 000 km",
        shortDescription:
          "Luksusowy SUV z zaawansowanymi systemami bezpieczeństwa i komfortowym wnętrzem.",
      },
      {
        id: 9,
        price: 160000,
        image: "subaru_outback.jpg",
        brand: "Subaru",
        year: 2020,
        model: "Outback",
        generation: "VI",
        enginePower: "170 KM",
        mileage: "30 000 km",
        shortDescription:
          "Praktyczny crossover z napędem na cztery koła, idealny do jazdy w trudnych warunkach terenowych.",
      },
      {
        id: 10,
        price: 350000,
        image: "tesla_modelS.jpg",
        brand: "Tesla",
        year: 2022,
        model: "Model S",
        generation: "II",
        enginePower: "500 KM",
        mileage: "10 000 km",
        shortDescription:
          "Innowacyjny sedan z napędem elektrycznym, oferujący doskonałe osiągi i długą autonomię.",
      },
      {
        id: 1,
        price: 110000,
        image: "nissan_qashqai.jpg",
        brand: "Nissan",
        year: 2018,
        model: "Qashqai",
        generation: "J11",
        enginePower: "120 KM",
        mileage: "45 000 km",
        shortDescription:
          "Popularny crossover z bogatym wyposażeniem i dynamicznym designem.",
      },
      {
        id: 12,
        price: 100000,
        image: "kia_sportage.jpg",
        brand: "Kia",
        year: 2019,
        model: "Sportage",
        generation: "IV",
        enginePower: "140 KM",
        mileage: "40 000 km",
        shortDescription:
          "Przestronny SUV oferujący wygodną jazdę i atrakcyjny stosunek jakości do ceny.",
      },
      {
        id: 13,
        price: 90000,
        image: "fiat_500.jpg",
        brand: "Fiat",
        year: 2018,
        model: "500",
        generation: "III",
        enginePower: "69 KM",
        mileage: "50 000 km",
        shortDescription:
          "Ikona wśród małych samochodów miejskich, charakteryzująca się stylem i ekonomią.",
      },
      {
        id: 14,
        price: 220000,
        image: "lexus_is.jpg",
        brand: "Lexus",
        year: 2020,
        model: "IS",
        generation: "III",
        enginePower: "240 KM",
        mileage: "20 000 km",
        shortDescription:
          "Luksusowy sedan średniej wielkości z zaawansowaną technologią i wyrafinowanym designem.",
      },
      {
        id: 15,
        price: 85000,
        image: "lancia_delta.jpg",
        brand: "Lancia",
        year: 2019,
        model: "Delta",
        generation: "III",
        enginePower: "170 KM",
        mileage: "15 000 km",
        shortDescription:
          "Kompaktowy hatchback z eleganckim stylem i wysoką jakością wykonania.",
      },
      {
        id: 16,
        price: 75000,
        image: "lancia_thema.jpg",
        brand: "Lancia",
        year: 2018,
        model: "Thema",
        generation: "II",
        enginePower: "190 KM",
        mileage: "25 000 km",
        shortDescription:
          "Przestronna limuzyna z luksusowym wnętrzem i zaawansowanym wyposażeniem.",
      },
      {
        id: 17,
        price: 90000,
        image: "lancia_voyager.jpg",
        brand: "Lancia",
        year: 2020,
        model: "Voyager",
        generation: "IV",
        enginePower: "200 KM",
        mileage: "18 000 km",
        shortDescription:
          "Przestronny van z bogatym wyposażeniem i wysokim komfortem podróżowania.",
      },
      {
        id: 18,
        price: 65000,
        image: "lancia_ypsilon.jpg",
        brand: "Lancia",
        year: 2017,
        model: "Ypsilon",
        generation: "V",
        enginePower: "120 KM",
        mileage: "30 000 km",
        shortDescription:
          "Elegancki hatchback miejski z dynamicznym designem i niskim spalaniem.",
      },
      {
        id: 19,
        price: 82000,
        image: "lancia_thesis.jpg",
        brand: "Lancia",
        year: 2016,
        model: "Thesis",
        generation: "I",
        enginePower: "180 KM",
        mileage: "22 000 km",
        shortDescription:
          "Ekskluzywna limuzyna z wyjątkowym stylem i komfortem jazdy.",
      },
      {
        id: 20,
        price: 78000,
        image: "lancia_musa.jpg",
        brand: "Lancia",
        year: 2015,
        model: "Musa",
        generation: "II",
        enginePower: "140 KM",
        mileage: "28 000 km",
        shortDescription:
          "Kompaktowy MPV z funkcjonalnym wnętrzem i ekonomicznym silnikiem.",
      },
      {
        id: 21,
        price: 92000,
        image: "lancia_flavia.jpg",
        brand: "Lancia",
        year: 2021,
        model: "Flavia",
        generation: "II",
        enginePower: "210 KM",
        mileage: "10 000 km",
        shortDescription:
          "Elegancki kabriolet z wysokim poziomem wyposażenia i sportowym charakterem.",
      },
      {
        id: 22,
        price: 70000,
        image: "lancia_dedra.jpg",
        brand: "Lancia",
        year: 2019,
        model: "Dedra",
        generation: "II",
        enginePower: "160 KM",
        mileage: "26 000 km",
        shortDescription:
          "Klasyczna sedan z solidnymi osiągami i komfortowym wnętrzem.",
      },
      {
        id: 23,
        price: 88000,
        image: "lancia_themav.jpg",
        brand: "Lancia",
        year: 2017,
        model: "Thema",
        generation: "III",
        enginePower: "200 KM",
        mileage: "20 000 km",
        shortDescription:
          "Luksusowa limuzyna z wyjątkowym designem i zaawansowanym wyposażeniem.",
      },
      {
        id: 24,
        price: 75000,
        image: "lancia_phedra.jpg",
        brand: "Lancia",
        year: 2018,
        model: "Phedra",
        generation: "II",
        enginePower: "170 KM",
        mileage: "24 000 km",
        shortDescription:
          "Przestronny van z bogatym wyposażeniem i wysokim komfortem podróżowania.",
      },
    ];
  }

  getAllCars() {
    return this.listCars;
  }
}
