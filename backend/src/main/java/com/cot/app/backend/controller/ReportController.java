package com.cot.app.backend.controller;

import com.cot.app.backend.model.ReportDto;
import com.cot.app.backend.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author DavidJMartin
 */
@RestController
@RequestMapping("/")
@CrossOrigin
public class ReportController {

    private static final String REPORTS_URL = "/reports";

    @Autowired
    private ReportService reportService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public String greeting() {
        return "cot report service is online.";
    }

    @GetMapping(REPORTS_URL)
    @ResponseStatus(HttpStatus.OK)
    public List<ReportDto> getReports(@RequestParam String symbol) {
        return reportService.getReportsByInstrument(symbol);
    }

}
