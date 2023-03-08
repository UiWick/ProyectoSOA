package com.example.SistemaReservaDePublicidad.service;

import com.example.SistemaReservaDePublicidad.model.DetalleReservaPublicidad;
import org.springframework.http.ResponseEntity;

import java.util.List;
public interface DetalleReservaPublicidadService {
    public DetalleReservaPublicidad saveDetalleReserva(DetalleReservaPublicidad detalleReservaPublicidad);
    public List<DetalleReservaPublicidad> getAllDetalleReservas();
    public ResponseEntity<DetalleReservaPublicidad> getByIdDetalleReserva(Integer id);
    public ResponseEntity<DetalleReservaPublicidad> updateDetalleReserva(Integer id, DetalleReservaPublicidad detalleReservaPublicidad);
}
