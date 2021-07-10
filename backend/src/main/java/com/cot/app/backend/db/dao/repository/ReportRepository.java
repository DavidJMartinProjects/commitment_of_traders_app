package com.cot.app.backend.db.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cot.app.backend.db.dao.entity.ReportEntity;

/**
 * @author davidjmartin
 */
@Repository
public interface ReportRepository extends JpaRepository<ReportEntity, Long> {
    List<ReportEntity> findByInstrument(String instrument);
}
