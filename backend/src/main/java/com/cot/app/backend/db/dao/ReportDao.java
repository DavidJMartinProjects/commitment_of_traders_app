package com.cot.app.backend.db.dao;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cot.app.backend.db.DbOperation;
import com.cot.app.backend.db.dao.entity.ReportEntity;
import com.cot.app.backend.db.dao.mapper.ReportMapper;
import com.cot.app.backend.db.dao.repository.ReportRepository;
import com.cot.app.backend.model.ReportDto;
import lombok.extern.slf4j.Slf4j;

/**
 * @author davidjmartin
 */
@Slf4j
@Component
public class ReportDao implements DbOperation<ReportDto> {

    @Autowired
    private ReportMapper mapper;

    @Autowired
    private ReportRepository reportRepository;

    @Override
    public List<ReportDto> findAll() {
        log.info("fetching cot reports.");
        return reportRepository.findAll()
            .stream()
            .map(entity -> mapper.toDto(entity, ReportDto.class))
            .collect(Collectors.toList());
    }

    @Override
    public List<ReportDto> findAll(String instrument) {
        log.info("fetching cot reports for instrument: {}.", instrument);
        return reportRepository.findByInstrument(instrument)
            .stream()
            .map(entity -> mapper.toDto(entity, ReportDto.class))
            .collect(Collectors.toList());
    }

    @Override
    public List<ReportDto> save(List<ReportDto> reportDto) {
        log.info("saving {} entities.", reportDto.size());
        List<ReportEntity> reportEntities = mapper.toList(reportDto, ReportEntity.class);
        return mapper.toList(reportRepository.saveAll(reportEntities), ReportDto.class);
    }


}