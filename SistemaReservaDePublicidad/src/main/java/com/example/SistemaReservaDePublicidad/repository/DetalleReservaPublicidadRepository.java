package com.example.SistemaReservaDePublicidad.repository;

import com.example.SistemaReservaDePublicidad.model.DetalleReservaPublicidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetalleReservaPublicidadRepository extends JpaRepository<DetalleReservaPublicidad,Integer> {

}
