package com.cot.app.backend.db;

import java.util.List;

/**
 * details supported db operations.
 *
 * @param <T> the entity type
 *
 * @author davidjmartin
 */
public interface DbOperation<T> {

    /**
     * Save a list of entities.
     *
     * @param entities the list of entities
     *
     * @return the saved entites
     */
    List<T> save(List<T> entities);

    /**
     * Find all entity.
     *
     * @return the list of found entity
     */
    List<T> findAll();

    /**
     * Find by filter.
     *
     * @return the list of found entity
     */
    List<T> findAll(String filter);

}