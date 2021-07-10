package com.cot.app.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author DavidJMartin
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReportDto {

    private String instrument;
    private String reportDate;

    private String changeLong;
    private String changeShort;
    private String percentageLong;
    private String percentageShort;

    private double longPositions;
    private double shortPositions;
    private double netPositions;

    public void setInstrument(String instrument) {
        extractBlacklistedFields(instrument);
    }

    private void extractBlacklistedFields(String instrument) {
        this.instrument = instrument
            .replace(" - CHICAGO MERCANTILE EXCHANGE", "")
            .replace(" - COMMODITY EXCHANGE INC.", "")
            .replace(" - CHICAGO BOARD OF TRADE", "");
    }

}
