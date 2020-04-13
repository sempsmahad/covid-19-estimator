const covid19ImpactEstimator = (dataInput) => {

    const dataInput = {
        region: {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 4,
            avgDailyIncomePopulation: 0.73
        },
        periodType: "days",
        timeToElapse: 38,
        reportedCases: 2747,
        population: 92931687,
        totalHospitalBeds: 678874
    }

    currentlyInfectedImpact();
    currentlyInfectedSevereImpact();

    impactVirusExponentialGrowth();
    severeImpactVirusExponentialGrowth();

    impactPositiveCasesForHospitalization();
    severeImpactPositiveCasesForHospitalization();

    hospitalBedAvailabilityImpact();
    hospitalBedAvailabilitySevereImpact();

    impactPostiveCasesForIcuCare();
    severeImpactPostiveCasesForIcuCare();

    impactPostiveCasesForVentilators();
    severeImpactPostiveCasesForVentilators();

    impactAvgDailyIncome();
    severeImpactAvgDailyIncome();


    return {
        data: dataInput,
        impact: {},
        severeImpact: {}
    };

};

function currentlyInfectedImpact() {
    impactCurrentlyInfected = (reportedCases * 10);
    return Math.trunc(impactCurrentlyInfected);
}

function currentlyInfectedSevereImpact() {
    severeImpactCurrentlyInfected = (reportedCases * 50);
    return Math.trunc(severeImpactCurrentlyInfected);
}

function impactVirusExponentialGrowth() {
    infectionsByRequestedTimeImpact = (impactCurrentlyInfected * 512);
    return Math.trunc(infectionsByRequestedTimeImpact);
}

function severeImpactVirusExponentialGrowth() {
    infectionsByRequestedTimeSevere = (severeImpactCurrentlyInfected * 512);
    return Math.trunc(infectionsByRequestedTimeSevere);
}

function impactPositiveCasesForHospitalization() {
    severeCasesByRequestedTimeImpact = (0.15 * infectionsByRequestedTimeImpact);
    return Math.trunc(severeCasesByRequestedTimeImpact);
}

function severeImpactPositiveCasesForHospitalization() {
    severeCasesByRequestedTime = (0.15 * infectionsByRequestedTimeSevere);
    return Math.trunc(severeCasesByRequestedTime);
}

function hospitalBedAvailabilityImpact() {
    bedAvailability = (0.35 * totalHospitalBeds);
    hospitalBedsByRequestedTimeImpact = (bedAvailability - severeCasesByRequestedTimeImpact);
    return Math.trunc(hospitalBedsByRequestedTimeImpact);
}

function hospitalBedAvailabilitySevereImpact() {
    bedAvailability = (0.35 * totalHospitalBeds);
    hospitalBedsByRequestedTimeSevere = (bedAvailability - severeCasesByRequestedTime);
    return Math.trunc(hospitalBedsByRequestedTimeSevere);
}

function impactPostiveCasesForIcuCare() {
    casesForICUByRequestedTimeImpact = (0.05 * infectionsByRequestedTimeImpact);
    return Math.trunc(casesForICUByRequestedTimeImpact);
}

function severeImpactPostiveCasesForIcuCare() {
    casesForICUByRequestedTimeSevere = (0.05 * infectionsByRequestedTimeSevere);
    return Math.trunc(casesForICUByRequestedTimeSevere);
}

function impactPostiveCasesForVentilators() {
    casesForVentilatorsByRequestedTimeImpact = (0.02 * infectionsByRequestedTimeImpact);
    return Math.trunc(casesForVentilatorsByRequestedTimeImpact);
}

function severeImpactPostiveCasesForVentilators() {
    casesForVentilatorsByRequestedTimeSevere = (0.02 * infectionsByRequestedTimeSevere);
    return Math.trunc(casesForVentilatorsByRequestedTimeSevere);
}

function impactAvgDailyIncome() {
    dollarsInFlightImpact = ((infectionsByRequestedTimeImpact * 0.65 * 1.5) / 30);
    return Math.trunc(dollarsInFlightImpact);
}

function severeImpactAvgDailyIncome() {
    dollarsInFlightSevere = ((infectionsByRequestedTimeSevere * 0.65 * 1.5) / 30);
    return Math.trunc(dollarsInFlightSevere);
}

export default covid19ImpactEstimator;

