/*
  Used to for cost of each seat based on a given plan.
*/
const ARTISTS = [
  {
    concerts: [
      { name: "Taylor Swift June Tour", id: "TaylorSwiftJuneTour" },
      { name: "Taylor Swift July Tour", id: "TaylorSwiftJulyTour" }
    ],
    name: "Taylor Swift"
  },
  {
    concerts: [{ name: "Kygo August Tour", id: "KygoAugustTour" }],
    name: "Kygo"
  }
];
/*
  Used to for cost of each seat based on a given plan.
*/
const CONCERTS = {
  TaylorSwiftJuneTour: {
    basic: 2,
    good: 20,
    better: 200,
    best: 2000,
    name: "Taylor Swift June Tour"
  },
  TaylorSwiftJulyTour: {
    basic: 4,
    good: 40,
    better: 400,
    best: 4000,
    name: "Taylor Swift July Tour"
  },

  KygoAugustTour: {
    basic: 10,
    good: 10,
    better: 100,
    best: 1000,
    name: "Kygo August Tour"
  }
};

/*
  Used for plan list values
  Defaults to this
*/
const PLAN_NAMES = {
  basic: "Basic",
  good: "Good",
  better: "Better",
  best: "Best"
};

/*
  GET ARTISTS LOGIC
*/

const callServerForArists = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ARTISTS), 1500);
  });
};

export const getArtists = async () => {
  const getArtists = await callServerForArists();
  return getArtists;
};

/*
  GET TICKET COST LOGIC
*/

const callServerForConcertTicketCosts = (ConcertName) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(CONCERTS[ConcertName]), 1500);
  });
};

export const getConcertTicketCosts = async (ConcertName) => {
  const planCosts = await callServerForConcertTicketCosts(ConcertName);
  return planCosts;
};

/*
  GET PLAN NAMES LOGIC
*/

const callServerForPlanNames = (PLAN_NAMES) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PLAN_NAMES), 2000);
  });
};

export const getPlanNames = async () => {
  const planNames = await callServerForPlanNames(PLAN_NAMES);
  return planNames;
};

/*
  TOTAL COST LOGIC
*/
const callServerForTotal = (planCost, quantity) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(planCost * quantity), 1500);
  });
};

export const getTotalCost = async (ticketCost, quantity) => {
  const totalCost = await callServerForTotal(ticketCost, quantity);
  return totalCost;
};
