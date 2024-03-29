package group12.project;

import group12.project.Views.fuelQuoteView;

public class PricingModule {

    public static Double calculateRate(fuelQuoteView fuelQuote, Boolean history) {

        String address = fuelQuote.getAddress();
        String state = address.substring(address.length() - 8, address.length() - 6);
        Double locationFactor = state.equals("TX") ? 0.02 : 0.04;

        Double rateHistoryFactor = history ? 0.01 : 0.00;
        Double gallonsRequestFactor = Double.parseDouble(fuelQuote.getGallons()) > 1000 ? 0.02 : 0.03;
        Double companyProfitFactor = 0.10;

        Double margin = locationFactor - rateHistoryFactor + gallonsRequestFactor + companyProfitFactor;

        Double rate = 1.50 + 1.5 * margin;

        return Math.round(rate * 100.00) / 100.00;
    }

    public static Double calculateTotal(Double rate, String gallons) {
        return rate * Double.parseDouble(gallons);
    }

}
