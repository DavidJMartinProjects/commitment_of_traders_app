package com.cot.app.backend.scheduled;

import static com.cot.app.backend.scheduled.ReportDownloader.REPORT_DOWNLOAD_LOCATION;
import static com.cot.app.backend.scheduled.ReportDownloader.REPORT_UNZIPPED_FILENAME;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;

import com.cot.app.backend.db.DbOperation;
import com.cot.app.backend.model.ReportDto;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

/**
 * @author DavidJMartin
 */
@Component
public class ExcelFileUtils {

    private static final String DEFAULT_FIELD_VALUE = "0.0";

    private static final int LONGS_CELLNUM = 18;
    private static final int SHORTS_CELLNUM = 19;
    private static final int INSTRUMENT_CELLNUM = 0;
    private static final int REPORT_DATE_CELLNUM = 2;
    private static final int PERCENT_LONG_CELLNUM = 58;
    private static final int PERCENT_SHORT_CELLNUM = 59;
    private static final int LONG_POSITIONS_CELLNUM = 38;
    private static final int SHORT_POSITIONS_CELLNUM = 39;

    private static final int FIRST_POSITION = 0;

    @Autowired
    private DbOperation<ReportDto> dbOperation;

    public void saveReportToDb() throws IOException {
        List<ReportDto> reportDtos = new ArrayList<>();

        HSSFWorkbook workbook = new HSSFWorkbook(new FileInputStream(new File(REPORT_DOWNLOAD_LOCATION + REPORT_UNZIPPED_FILENAME)));
        HSSFSheet worksheet = workbook.getSheetAt(FIRST_POSITION);

        for (int i = 1; i < worksheet.getPhysicalNumberOfRows(); i++) {
            ReportDto reportDto = new ReportDto();

            Optional<String> optLongPositions = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(LONG_POSITIONS_CELLNUM))){
                optLongPositions = Optional.ofNullable(worksheet.getRow(i).getCell(LONG_POSITIONS_CELLNUM).toString());
            }

            Optional<String> optShortPositions = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(SHORT_POSITIONS_CELLNUM))){
                optShortPositions = Optional.ofNullable(worksheet.getRow(i).getCell(SHORT_POSITIONS_CELLNUM).toString());
            }

            Optional<String> optPercentageShort = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(PERCENT_SHORT_CELLNUM))){
                optPercentageShort = Optional.ofNullable(worksheet.getRow(i).getCell(PERCENT_SHORT_CELLNUM).toString());
            }

            Optional<String> optPercentageLong = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(PERCENT_LONG_CELLNUM))){
                optPercentageLong = Optional.ofNullable(worksheet.getRow(i).getCell(PERCENT_LONG_CELLNUM).toString());
            }
///
            Optional<String> optInstrument = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(INSTRUMENT_CELLNUM))){
                optInstrument = Optional.ofNullable(worksheet.getRow(i).getCell(INSTRUMENT_CELLNUM).toString());
            }

            Optional<String> optReportDate = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(REPORT_DATE_CELLNUM))){
                optReportDate = Optional.ofNullable(worksheet.getRow(i).getCell(REPORT_DATE_CELLNUM).toString());
            }

            Optional<String> optLongs = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(LONGS_CELLNUM))){
                optLongs = Optional.ofNullable(worksheet.getRow(i).getCell(LONGS_CELLNUM).toString());
            }

            Optional<String> optShorts = Optional.empty();
            if(!ObjectUtils.isEmpty(worksheet.getRow(i).getCell(SHORTS_CELLNUM))){
                optShorts = Optional.ofNullable(worksheet.getRow(i).getCell(SHORTS_CELLNUM).toString());
            }

            reportDto.setChangeLong(optLongPositions.orElseGet(() -> DEFAULT_FIELD_VALUE));
            reportDto.setChangeShort(optShortPositions.orElseGet(() -> DEFAULT_FIELD_VALUE));
            reportDto.setPercentageLong(optPercentageLong.orElseGet(() -> DEFAULT_FIELD_VALUE));
            reportDto.setPercentageShort(optPercentageShort.orElseGet(() -> DEFAULT_FIELD_VALUE));

            reportDto.setInstrument(optInstrument.orElseGet(() -> DEFAULT_FIELD_VALUE));
            reportDto.setReportDate(worksheet.getRow(i).getCell(REPORT_DATE_CELLNUM).toString());
            reportDto.setLongPositions(worksheet.getRow(i).getCell(LONGS_CELLNUM).getNumericCellValue());
            reportDto.setShortPositions(worksheet.getRow(i).getCell(SHORTS_CELLNUM).getNumericCellValue());
            reportDto.setNetPositions(reportDto.getLongPositions() - reportDto.getShortPositions());

            reportDtos.add(reportDto);
        }
        dbOperation.save(reportDtos);
    }

}
