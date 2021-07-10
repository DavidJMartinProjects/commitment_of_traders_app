package com.cot.app.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cot.app.backend.model.ReportDto;
import com.cot.app.backend.service.ReportService;

/**
 * @author DavidJMartin
 */
@RestController
@RequestMapping(ReportController.REPORTS_URL)
public class ReportController {

    public static final String REPORTS_URL = "/reports";

    @Autowired
    private ReportService reportService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ReportDto> getReports(@RequestParam String instrument) {
        return reportService.getReportsByInstrument(instrument);
    }

}
